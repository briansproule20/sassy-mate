import { NextResponse } from "next/server";

export const revalidate = 0; // Disable caching for real-time data

export async function GET() {
  // Only use Redis in production
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    try {
      const { kv } = await import("@vercel/kv");
      
      // Fetch all leaders from Redis sorted set
      const leaders = await kv.zrange("leaderboard", 0, -1, {
        rev: true,
        withScores: true,
      });

      // Transform the data
      const leaderData = [];
      for (let i = 0; i < leaders.length; i += 2) {
        const name = leaders[i] as string;
        const points = leaders[i + 1] as number;
        
        // Get additional user data
        const userData = await kv.hgetall(`user:${name}`);
        
        leaderData.push({
          id: name,
          name,
          points,
          lastSeen: userData?.lastSeen || new Date().toISOString(),
          petitionCount: userData?.petitionCount || 0,
        });
      }

      return NextResponse.json({
        success: true,
        data: leaderData,
      });
    } catch (error) {
      console.error("Failed to fetch leaderboard from Redis:", error);
    }
  }
  
  // Return empty array for local development
  return NextResponse.json({
    success: true,
    data: [],
    message: "Redis not configured - using client-side storage",
  });
}

