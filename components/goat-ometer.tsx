"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import confetti from "canvas-confetti";

export function GoatOMeter() {
  const [score, setScore] = useState(50);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = async (value: number) => {
    setScore(value);

    if (value > 92 && !hasVoted) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#6F263D", "#FFB81C", "#041E42"],
      });
      setHasVoted(true);
    }

    // Submit vote to API
    try {
      await fetch("/api/poll/goat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ score: value }),
      });
    } catch (error) {
      console.error("Failed to submit vote:", error);
    }
  };

  const getLabel = () => {
    if (score < 30) return "Needs More Evidence";
    if (score < 50) return "Getting There";
    if (score < 70) return "Solid Case";
    if (score < 90) return "Strong Believer";
    if (score < 93) return "True Witness";
    return "CERTIFIED WITNESS 👑";
  };

  return (
    <Card className="bg-gradient-to-br from-slate-50 to-slate-100">
      <CardHeader>
        <CardTitle className="text-cavs-wine text-center">
          GOAT-O-METER
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="text-center">
            <div className="text-6xl font-display text-cavs-wine mb-2">
              {score}
            </div>
            <div className="text-sm text-slate-600">{getLabel()}</div>
          </div>

          <Slider
            min={0}
            max={100}
            value={score}
            onValueChange={handleVote}
            className="w-full"
          />

          <div className="flex justify-between text-xs text-slate-500">
            <span>Not the GOAT</span>
            <span>ABSOLUTE GOAT</span>
          </div>

          {score > 92 && (
            <div className="text-center text-sm text-cavs-wine font-semibold animate-pulse">
              Welcome to the Witness Protection Program
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
