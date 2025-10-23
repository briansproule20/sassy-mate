"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getInitials, formatDate } from "@/lib/utils";
import type { Leader } from "@/lib/types";

export function GlazerLeaderboard() {
  const [leaders, setLeaders] = useState<Leader[]>([]);

  useEffect(() => {
    async function fetchLeaders() {
      try {
        // Try to fetch from API first (production with Redis)
        const res = await fetch("/api/witnesses/leaderboard");
        const data = await res.json();
        
        if (data.success && data.data.length > 0) {
          setLeaders(data.data.slice(0, 10));
        } else {
          // Fallback to localStorage for local development
          const stored = localStorage.getItem("leaders");
          if (stored) {
            const parsed = JSON.parse(stored);
            const sorted = parsed.sort((a: Leader, b: Leader) => b.points - a.points);
            setLeaders(sorted.slice(0, 10));
          }
        }
      } catch (error) {
        console.error("Failed to fetch leaderboard:", error);
        // Fallback to localStorage
        const stored = localStorage.getItem("leaders");
        if (stored) {
          const parsed = JSON.parse(stored);
          const sorted = parsed.sort((a: Leader, b: Leader) => b.points - a.points);
          setLeaders(sorted.slice(0, 10));
        }
      }
    }

    fetchLeaders();
  }, []);

  return (
    <section className="py-20 px-4 bg-white dark:bg-cavs-navy">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-5xl text-center mb-4 text-cavs-wine dark:text-cavs-gold">
          GLAZER LEADERBOARD
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-300 mb-12">
          Top Witnesses ranked by glaze points
        </p>

        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-white">Hall of Glaze</CardTitle>
          </CardHeader>
          <CardContent>
            {leaders.length === 0 ? (
              <p className="text-center text-slate-500 dark:text-slate-400 py-8">
                No glazers yet. Be the first to sign the petition!
              </p>
            ) : (
              <div className="space-y-4">
                {leaders.map((leader, index) => (
                  <div
                    key={leader.id}
                    className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cavs-wine dark:bg-cavs-gold text-cavs-gold dark:text-cavs-navy flex items-center justify-center font-bold">
                      {getInitials(leader.name)}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-slate-900 dark:text-white truncate">
                        {leader.name}
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Last seen: {formatDate(leader.lastSeen)}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Badge variant="default" className="text-base px-3 py-1">
                        {leader.points} pts
                      </Badge>
                      {index === 0 && <span className="text-2xl">👑</span>}
                      {index === 1 && <span className="text-2xl">🥈</span>}
                      {index === 2 && <span className="text-2xl">🥉</span>}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-6">
          Earn points by signing petitions, sharing, and engaging with content
        </p>
      </div>
    </section>
  );
}
