import { NextResponse } from "next/server";

export const revalidate = 0;

export async function POST() {
  try {
    const { Redis } = await import("@upstash/redis");
    
    // Initialize Redis using environment variables
    const redis = Redis.fromEnv();
    
    // Delete the leaderboard
    await redis.del("leaderboard");
    
    // Get all petition IDs
    const petitionIds = await redis.lrange("petitions", 0, -1);
    
    // Delete all petitions
    for (const id of petitionIds) {
      await redis.del(`petition:${id}`);
    }
    
    // Clear petition list
    await redis.del("petitions");
    
    // Get all user keys and delete them
    const userKeys = await redis.keys("user:*");
    for (const key of userKeys) {
      await redis.del(key);
    }

    return NextResponse.json({
      success: true,
      message: "All data reset successfully",
    });
  } catch (error) {
    console.error("Failed to reset data:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to reset data",
    }, { status: 500 });
  }
}

