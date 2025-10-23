import { NextResponse } from "next/server";

export const revalidate = 0; // Disable caching for real-time data

export async function GET() {
  try {
    const { Redis } = await import("@upstash/redis");
    
    // Initialize Redis using environment variables
    const redis = Redis.fromEnv();
    
    // Fetch all petition IDs from Redis list
    const petitionIds = await redis.lrange("petitions", 0, -1);
    
    // Fetch each petition's data
    const petitions = await Promise.all(
      petitionIds.map(async (id: string) => {
        const petition = await redis.hgetall(`petition:${id}`);
        return petition ? { id, ...petition } : null;
      })
    );

    // Filter out null values and sort by timestamp (newest first)
    const validPetitions = petitions
      .filter((p) => p !== null)
      .sort((a: any, b: any) => b.timestamp - a.timestamp);

    return NextResponse.json({
      success: true,
      data: validPetitions,
    });
  } catch (error) {
    console.error("Failed to fetch petitions from Redis:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch petitions",
    }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, reason, goatScore, goatRank } = body;

  if (!name || !reason || goatScore === undefined) {
    return NextResponse.json(
      { success: false, error: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    const { Redis } = await import("@upstash/redis");
    
    // Initialize Redis using environment variables
    const redis = Redis.fromEnv();
    
    const petitionId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const timestamp = Date.now();

    // Store petition data
    await redis.hset(`petition:${petitionId}`, {
      name,
      reason,
      goatScore,
      goatRank: goatRank || "Witness",
      timestamp,
    });

    // Add petition ID to list
    await redis.lpush("petitions", petitionId);

    // Update leaderboard (sorted set by points) - use actual goatScore
    await redis.zincrby("leaderboard", goatScore, name);

    // Update user data
    const existingUser = await redis.hgetall(`user:${name}`);
    await redis.hset(`user:${name}`, {
      lastSeen: new Date().toISOString(),
      petitionCount: (existingUser?.petitionCount as number || 0) + 1,
      totalPoints: (existingUser?.totalPoints as number || 0) + goatScore,
    });

    return NextResponse.json({
      success: true,
      data: { id: petitionId },
    });
  } catch (error) {
    console.error("Failed to create petition in Redis:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create petition" },
      { status: 500 }
    );
  }
}

