import { NextResponse } from "next/server";

// In-memory storage (would use DB in production)
const votes: number[] = [];

export async function GET() {
  const average = votes.length > 0
    ? votes.reduce((a, b) => a + b, 0) / votes.length
    : 0;

  return NextResponse.json({
    success: true,
    data: {
      total_votes: votes.length,
      average_score: average,
    },
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { score } = body;

    if (typeof score !== "number" || score < 0 || score > 100) {
      return NextResponse.json(
        { success: false, error: "Invalid score" },
        { status: 400 }
      );
    }

    votes.push(score);

    const average =
      votes.reduce((a, b) => a + b, 0) / votes.length;

    return NextResponse.json({
      success: true,
      data: {
        total_votes: votes.length,
        average_score: average,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to record vote" },
      { status: 500 }
    );
  }
}
