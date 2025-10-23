"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import confetti from "canvas-confetti";

export function PetitionForm() {
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");
  const [goatScore, setGoatScore] = useState(50);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !reason) return;

    const petitionData = {
      id: Date.now().toString(),
      name,
      reason,
      goatScore,
      goatRank: getLabel(),
      timestamp: Date.now(),
    };

    // Store in localStorage (for local dev and backup)
    const petitions = JSON.parse(localStorage.getItem("petitions") || "[]");
    petitions.push(petitionData);
    localStorage.setItem("petitions", JSON.stringify(petitions));

    // Add to leaderboard in localStorage
    const leaders = JSON.parse(localStorage.getItem("leaders") || "[]");
    const existing = leaders.find((l: any) => l.name === name);
    if (existing) {
      existing.points += 10;
      existing.lastSeen = new Date().toISOString();
    } else {
      leaders.push({
        id: Date.now().toString(),
        name,
        points: 10,
        lastSeen: new Date().toISOString(),
      });
    }
    localStorage.setItem("leaders", JSON.stringify(leaders));

    // Submit to Redis API (production only)
    try {
      await fetch("/api/witnesses/petitions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: petitionData.name,
          reason: petitionData.reason,
          goatScore: petitionData.goatScore,
          goatRank: petitionData.goatRank,
        }),
      });

      // Submit vote to poll API
      await fetch("/api/poll/goat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ score: goatScore }),
      });
    } catch (error) {
      console.error("Failed to submit to API:", error);
      // Continue anyway - localStorage is the backup
    }

    // Confetti if high score
    if (goatScore > 92) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#6F263D", "#FFB81C", "#041E42"],
      });
    }

    setSubmitted(true);
    setName("");
    setReason("");
    setGoatScore(50);

    setTimeout(() => setSubmitted(false), 3000);
  };

  const getLabel = () => {
    if (goatScore < 30) return "Needs More Evidence";
    if (goatScore < 50) return "Getting There";
    if (goatScore < 70) return "Solid Case";
    if (goatScore < 90) return "Strong Believer";
    if (goatScore < 93) return "True Witness";
    return "CERTIFIED WITNESS 👑";
  };

  return (
    <section id="petition" className="py-20 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-4xl sm:text-5xl text-center mb-4 text-cavs-wine dark:text-cavs-gold">
          SIGN THE PETITION
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-300 mb-8 sm:mb-12">
          Add your voice to the Witness Protection Program
        </p>

        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl text-slate-900 dark:text-white">Declare Your Allegiance</CardTitle>
            <CardDescription className="text-slate-600 dark:text-slate-400">
              Share why LeBron is the GOAT and rate his greatness
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-200"
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                  className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="reason"
                  className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-200"
                >
                  Why LeBron is the GOAT
                </label>
                <Textarea
                  id="reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Share your testimony..."
                  rows={4}
                  required
                  className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3 text-slate-700 dark:text-slate-200">
                  GOAT-o-meter: Rate LeBron's Greatness
                </label>
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-lg p-6 space-y-4">
                  <div className="text-center">
                    <div className="text-5xl sm:text-6xl font-display text-cavs-wine dark:text-cavs-gold mb-1">
                      {goatScore}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-300 font-semibold">{getLabel()}</div>
                  </div>

                  <Slider
                    min={0}
                    max={100}
                    value={goatScore}
                    onValueChange={(value) => setGoatScore(value)}
                    className="w-full"
                  />

                  <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span>Not the GOAT</span>
                    <span>ABSOLUTE GOAT</span>
                  </div>

                  {goatScore > 92 && (
                    <div className="text-center text-sm text-cavs-wine dark:text-cavs-gold font-semibold animate-pulse">
                      Welcome to the Witness Protection Program! 👑
                    </div>
                  )}
                </div>
              </div>

              <Button type="submit" className="w-full" size="lg">
                {submitted ? "Signed! 👑" : "Sign the Petition"}
              </Button>

              {submitted && (
                <p className="text-center text-sm text-cavs-wine dark:text-cavs-gold font-semibold">
                  Petition signed! +{goatScore} Glaze Points
                </p>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
