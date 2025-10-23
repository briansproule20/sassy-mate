import { NextResponse } from "next/server";

export const revalidate = 0; // Disable caching for real-time data

export async function GET() {
  // Only use Redis in production
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    try {
      const { kv } = await import("@vercel/kv");
      
      // Fetch all petition IDs from Redis list
      const petitionIds = await kv.lrange("petitions", 0, -1);
      
      // Fetch each petition's data
      const petitions = await Promise.all(
        petitionIds.map(async (id) => {
          const petition = await kv.hgetall(`petition:${id}`);
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
    }
  }
  
  // Return empty array for local development
  return NextResponse.json({
    success: true,
    data: [],
    message: "Redis not configured - using client-side storage",
  });
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

  // Only use Redis in production
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    try {
      const { kv } = await import("@vercel/kv");
      
      const petitionId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const timestamp = Date.now();

      // Store petition data
      await kv.hset(`petition:${petitionId}`, {
        name,
        reason,
        goatScore,
        goatRank: goatRank || "Witness",
        timestamp,
      });

      // Add petition ID to list
      await kv.lpush("petitions", petitionId);

      // Update leaderboard (sorted set by points)
      await kv.zincrby("leaderboard", 10, name);

      // Update user data
      const existingUser = await kv.hgetall(`user:${name}`);
      await kv.hset(`user:${name}`, {
        lastSeen: new Date().toISOString(),
        petitionCount: (existingUser?.petitionCount as number || 0) + 1,
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

  // For local development, return success (client will handle localStorage)
  return NextResponse.json({
    success: true,
    data: { id: Date.now().toString() },
    message: "Redis not configured - using client-side storage",
  });
}

