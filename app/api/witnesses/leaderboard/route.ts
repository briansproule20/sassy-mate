import { NextResponse } from "next/server";
import { getSortedLeaderboard } from "@/lib/storage";

export const revalidate = 0; // Disable caching for real-time data

export async function GET() {
  try {
    const leaderboard = await getSortedLeaderboard();
    
    // Transform the data to match expected format
    const leaderData = leaderboard.map((entry, index) => ({
      id: entry.name,
      name: entry.name,
      points: entry.points,
      lastSeen: new Date().toISOString(),
      petitionCount: Math.floor(entry.points / 10), // Estimate based on points
      rank: index + 1,
    }));

    return NextResponse.json({
      success: true,
      data: leaderData,
    });
  } catch (error) {
    console.error("Failed to fetch leaderboard:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch leaderboard",
    }, { status: 500 });
  }
}

