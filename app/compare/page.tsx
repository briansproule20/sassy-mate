"use client";

import { useEffect, useState } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity } from "lucide-react";

interface CareerStats {
  total_pts: string;
  total_reb: string;
  total_ast: string;
  pts: string;
  reb: string;
  ast: string;
  games_played: number;
}

export default function ComparePage() {
  const [lebronStats, setLebronStats] = useState<CareerStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("/api/players/lebron/career");
        const data = await res.json();
        if (data.success) {
          setLebronStats(data.data.career);
        }
      } catch (error) {
        console.error("Failed to fetch LeBron stats:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  const lebronPoints = lebronStats?.total_pts || "40,000+";
  const lebronAssists = lebronStats?.total_ast || "10,000+";
  const lebronRebounds = lebronStats?.total_reb || "10,000+";

  return (
    <>
      <SiteNav />
      <main className="pt-24 pb-20 px-4 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-display text-7xl md:text-8xl text-cavs-wine mb-4">
              THE GOAT DEBATE
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              LeBron James vs. Michael Jordan
            </p>
            <Badge variant="destructive" className="text-sm">
              Cleveland bias detected
            </Badge>
          </div>

          {loading ? (
            <div className="text-center py-20">
              <Activity className="w-12 h-12 text-cavs-wine animate-pulse mx-auto mb-4" />
              <p className="text-slate-600 font-display text-xl">Loading live stats...</p>
            </div>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Career Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="py-3 px-4 text-left">Category</th>
                        <th className="py-3 px-4 text-center bg-cavs-wine/5">
                          LeBron James
                        </th>
                        <th className="py-3 px-4 text-center">Michael Jordan</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Championships</td>
                        <td className="py-3 px-4 text-center bg-cavs-wine/5 font-semibold">
                          4
                        </td>
                        <td className="py-3 px-4 text-center font-semibold">6</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Finals MVPs</td>
                        <td className="py-3 px-4 text-center bg-cavs-wine/5 font-semibold">
                          4
                        </td>
                        <td className="py-3 px-4 text-center font-semibold">6</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Regular Season MVPs</td>
                        <td className="py-3 px-4 text-center bg-cavs-wine/5 font-semibold">
                          4
                        </td>
                        <td className="py-3 px-4 text-center font-semibold">5</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Total Career Points</td>
                        <td className="py-3 px-4 text-center bg-cavs-wine/5 font-semibold text-cavs-wine">
                          {lebronPoints.toLocaleString()}
                        </td>
                        <td className="py-3 px-4 text-center font-semibold">
                          32,292
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Total Assists</td>
                        <td className="py-3 px-4 text-center bg-cavs-wine/5 font-semibold text-cavs-wine">
                          {lebronAssists.toLocaleString()}
                        </td>
                        <td className="py-3 px-4 text-center font-semibold">
                          5,633
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Total Rebounds</td>
                        <td className="py-3 px-4 text-center bg-cavs-wine/5 font-semibold text-cavs-wine">
                          {lebronRebounds.toLocaleString()}
                        </td>
                        <td className="py-3 px-4 text-center font-semibold">
                          6,672
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">PPG Career Average</td>
                        <td className="py-3 px-4 text-center bg-cavs-wine/5 font-semibold text-cavs-wine">
                          {lebronStats?.pts || "27.2"}
                        </td>
                        <td className="py-3 px-4 text-center font-semibold">
                          30.1
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">RPG Career Average</td>
                        <td className="py-3 px-4 text-center bg-cavs-wine/5 font-semibold text-cavs-wine">
                          {lebronStats?.reb || "7.5"}
                        </td>
                        <td className="py-3 px-4 text-center font-semibold">
                          6.2
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">APG Career Average</td>
                        <td className="py-3 px-4 text-center bg-cavs-wine/5 font-semibold text-cavs-wine">
                          {lebronStats?.ast || "7.4"}
                        </td>
                        <td className="py-3 px-4 text-center font-semibold">
                          5.3
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">All-NBA Selections</td>
                        <td className="py-3 px-4 text-center bg-cavs-wine/5 font-semibold text-cavs-wine">
                          20
                        </td>
                        <td className="py-3 px-4 text-center font-semibold">11</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">All-Star Selections</td>
                        <td className="py-3 px-4 text-center bg-cavs-wine/5 font-semibold text-cavs-wine">
                          20
                        </td>
                        <td className="py-3 px-4 text-center font-semibold">14</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">All-Defense Selections</td>
                        <td className="py-3 px-4 text-center bg-cavs-wine/5 font-semibold">
                          6
                        </td>
                        <td className="py-3 px-4 text-center font-semibold text-green-700">
                          9
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Seasons Played</td>
                        <td className="py-3 px-4 text-center bg-cavs-wine/5 font-semibold text-cavs-wine">
                          22
                        </td>
                        <td className="py-3 px-4 text-center font-semibold">15</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Finals Appearances</td>
                        <td className="py-3 px-4 text-center bg-cavs-wine/5 font-semibold text-cavs-wine">
                          10
                        </td>
                        <td className="py-3 px-4 text-center font-semibold">6</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">
                          Beat a 73-win team down 3-1
                        </td>
                        <td className="py-3 px-4 text-center bg-cavs-wine/5 font-semibold text-cavs-wine">
                          Yes 👑
                        </td>
                        <td className="py-3 px-4 text-center font-semibold">No</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-display text-cavs-wine mb-4">
              The Verdict
            </h3>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Jordan has the rings. LeBron has the longevity, the versatility,
              and the all-around dominance. Both are legends. But only one
              brought Cleveland a championship after 52 years of heartbreak.
              That's why we're here.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
