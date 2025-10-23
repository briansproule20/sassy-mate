import { NextResponse } from "next/server";
import { getPetitions } from "@/lib/storage";

export const revalidate = 0; // Disable caching for real-time data

export async function GET() {
  try {
    const petitions = await getPetitions();
    
    return NextResponse.json({
      success: true,
      data: petitions,
    });
  } catch (error) {
    console.error("Failed to fetch petitions:", error);
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
    const { addPetition, updateLeaderboardPoints } = await import("@/lib/storage");
    
    const petition = await addPetition({
      name,
      reason,
      goatScore,
      goatRank: goatRank || "Witness",
    });

    if (petition) {
      // Update leaderboard points
      await updateLeaderboardPoints(name, 10);
      
      return NextResponse.json({
        success: true,
        data: { id: petition.id },
      });
    } else {
      return NextResponse.json(
        { success: false, error: "Failed to create petition" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Failed to create petition:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create petition" },
      { status: 500 }
    );
  }
}

