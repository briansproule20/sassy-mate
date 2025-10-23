import { NextResponse } from "next/server";

export const revalidate = 0; // Disable caching for real-time data

export async function GET() {
  try {
    const { Redis } = await import("@upstash/redis");
    
    // Initialize Redis using environment variables
    const redis = Redis.fromEnv();
    
    // Fetch all leaders from Redis sorted set
    const leaders = await redis.zrevrange("leaderboard", 0, -1, "WITHSCORES");

    // Transform the data
    const leaderData = [];
    for (let i = 0; i < leaders.length; i += 2) {
      const name = leaders[i] as string;
      const points = parseInt(leaders[i + 1] as string);
      
      // Get additional user data
      const userData = await redis.hgetall(`user:${name}`);
      
      leaderData.push({
        id: name,
        name,
        points,
        lastSeen: userData?.lastSeen || new Date().toISOString(),
        petitionCount: userData?.petitionCount || 0,
        rank: Math.floor(i / 2) + 1,
      });
    }

    return NextResponse.json({
      success: true,
      data: leaderData,
    });
  } catch (error) {
    console.error("Failed to fetch leaderboard from Redis:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch leaderboard",
    }, { status: 500 });
  }
}

