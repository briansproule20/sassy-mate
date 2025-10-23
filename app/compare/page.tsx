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
      <main className="pt-24 pb-20 px-4 min-h-screen bg-white dark:bg-cavs-navy">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-display text-7xl md:text-8xl text-cavs-wine dark:text-cavs-gold mb-4">
              THE GOAT DEBATE
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
              LeBron James vs. Michael Jordan
            </p>
            <Badge variant="destructive" className="text-sm">
              Cleveland bias detected
            </Badge>
          </div>

          {loading ? (
            <div className="text-center py-20">
              <Activity className="w-12 h-12 text-cavs-wine dark:text-cavs-gold animate-pulse mx-auto mb-4" />
              <p className="text-slate-600 dark:text-slate-300 font-display text-xl">Loading live stats...</p>
            </div>
          ) : (
            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900 dark:text-white">Career Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-200 dark:border-slate-700">
                        <th className="py-3 px-2 sm:px-4 text-left text-sm text-slate-900 dark:text-white">Category</th>
                        <th className="py-3 px-2 sm:px-4 text-center bg-cavs-wine/5 dark:bg-cavs-gold/5 text-sm text-slate-900 dark:text-white">
                          LeBron
                        </th>
                        <th className="py-3 px-2 sm:px-4 text-center text-sm text-slate-900 dark:text-white">Jordan</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b border-slate-200 dark:border-slate-700">
                        <td className="py-2 sm:py-3 px-2 sm:px-4 font-medium text-xs sm:text-sm text-cavs-navy dark:text-slate-300">Championships</td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center bg-cavs-wine/5 dark:bg-cavs-gold/5 font-semibold text-cavs-navy dark:text-white">
                          4
                        </td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center font-semibold text-cavs-navy dark:text-white">6</td>
                      </tr>
                      <tr className="border-b border-slate-200 dark:border-slate-700">
                        <td className="py-2 sm:py-3 px-2 sm:px-4 font-medium text-xs sm:text-sm text-cavs-navy dark:text-slate-300">Finals MVPs</td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center bg-cavs-wine/5 dark:bg-cavs-gold/5 font-semibold text-cavs-navy dark:text-white">
                          4
                        </td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center font-semibold text-cavs-navy dark:text-white">6</td>
                      </tr>
                      <tr className="border-b border-slate-200 dark:border-slate-700">
                        <td className="py-2 sm:py-3 px-2 sm:px-4 font-medium text-xs sm:text-sm text-cavs-navy dark:text-slate-300">Regular Season MVPs</td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center bg-cavs-wine/5 dark:bg-cavs-gold/5 font-semibold text-cavs-navy dark:text-white">
                          4
                        </td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center font-semibold text-cavs-navy dark:text-white">5</td>
                      </tr>
                      <tr className="border-b border-slate-200 dark:border-slate-700">
                        <td className="py-2 sm:py-3 px-2 sm:px-4 font-medium text-xs sm:text-sm text-cavs-navy dark:text-slate-300">Total Career Points</td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center bg-cavs-wine/5 dark:bg-cavs-gold/5 font-semibold text-cavs-wine dark:text-cavs-gold">
                          {lebronStats?.total_pts ? Number(lebronStats.total_pts).toLocaleString() : "40,474"}
                        </td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center font-semibold text-cavs-navy dark:text-white">
                          32,292
                        </td>
                      </tr>
                      <tr className="border-b border-slate-200 dark:border-slate-700">
                        <td className="py-2 sm:py-3 px-2 sm:px-4 font-medium text-xs sm:text-sm text-cavs-navy dark:text-slate-300">Total Assists</td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center bg-cavs-wine/5 dark:bg-cavs-gold/5 font-semibold text-cavs-wine dark:text-cavs-gold">
                          {lebronStats?.total_ast ? Number(lebronStats.total_ast).toLocaleString() : "11,009"}
                        </td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center font-semibold text-cavs-navy dark:text-white">
                          5,633
                        </td>
                      </tr>
                      <tr className="border-b border-slate-200 dark:border-slate-700">
                        <td className="py-2 sm:py-3 px-2 sm:px-4 font-medium text-xs sm:text-sm text-cavs-navy dark:text-slate-300">Total Rebounds</td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center bg-cavs-wine/5 dark:bg-cavs-gold/5 font-semibold text-cavs-wine dark:text-cavs-gold">
                          {lebronStats?.total_reb ? Number(lebronStats.total_reb).toLocaleString() : "11,185"}
                        </td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center font-semibold text-cavs-navy dark:text-white">
                          6,672
                        </td>
                      </tr>
                      <tr className="border-b border-slate-200 dark:border-slate-700">
                        <td className="py-2 sm:py-3 px-2 sm:px-4 font-medium text-xs sm:text-sm text-cavs-navy dark:text-slate-300">PPG Career Average</td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center bg-cavs-wine/5 dark:bg-cavs-gold/5 font-semibold text-cavs-wine dark:text-cavs-gold">
                          {lebronStats?.pts || "27.2"}
                        </td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center font-semibold text-cavs-navy dark:text-white">
                          30.1
                        </td>
                      </tr>
                      <tr className="border-b border-slate-200 dark:border-slate-700">
                        <td className="py-2 sm:py-3 px-2 sm:px-4 font-medium text-xs sm:text-sm text-cavs-navy dark:text-slate-300">RPG Career Average</td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center bg-cavs-wine/5 dark:bg-cavs-gold/5 font-semibold text-cavs-wine dark:text-cavs-gold">
                          {lebronStats?.reb || "7.5"}
                        </td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center font-semibold text-cavs-navy dark:text-white">
                          6.2
                        </td>
                      </tr>
                      <tr className="border-b border-slate-200 dark:border-slate-700">
                        <td className="py-2 sm:py-3 px-2 sm:px-4 font-medium text-xs sm:text-sm text-cavs-navy dark:text-slate-300">APG Career Average</td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center bg-cavs-wine/5 dark:bg-cavs-gold/5 font-semibold text-cavs-wine dark:text-cavs-gold">
                          {lebronStats?.ast || "7.4"}
                        </td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center font-semibold text-cavs-navy dark:text-white">
                          5.3
                        </td>
                      </tr>
                      <tr className="border-b border-slate-200 dark:border-slate-700">
                        <td className="py-2 sm:py-3 px-2 sm:px-4 font-medium text-xs sm:text-sm text-cavs-navy dark:text-slate-300">All-NBA Selections</td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center bg-cavs-wine/5 dark:bg-cavs-gold/5 font-semibold text-cavs-wine dark:text-cavs-gold">
                          20
                        </td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center font-semibold text-cavs-navy dark:text-white">11</td>
                      </tr>
                      <tr className="border-b border-slate-200 dark:border-slate-700">
                        <td className="py-2 sm:py-3 px-2 sm:px-4 font-medium text-xs sm:text-sm text-cavs-navy dark:text-slate-300">All-Star Selections</td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center bg-cavs-wine/5 dark:bg-cavs-gold/5 font-semibold text-cavs-wine dark:text-cavs-gold">
                          20
                        </td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center font-semibold text-cavs-navy dark:text-white">14</td>
                      </tr>
                      <tr className="border-b border-slate-200 dark:border-slate-700">
                        <td className="py-2 sm:py-3 px-2 sm:px-4 font-medium text-xs sm:text-sm text-cavs-navy dark:text-slate-300">All-Defense Selections</td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center bg-cavs-wine/5 dark:bg-cavs-gold/5 font-semibold text-cavs-navy dark:text-white">
                          6
                        </td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center font-semibold text-green-700 dark:text-green-400">
                          9
                        </td>
                      </tr>
                      <tr className="border-b border-slate-200 dark:border-slate-700">
                        <td className="py-2 sm:py-3 px-2 sm:px-4 font-medium text-xs sm:text-sm text-cavs-navy dark:text-slate-300">Seasons Played</td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center bg-cavs-wine/5 dark:bg-cavs-gold/5 font-semibold text-cavs-wine dark:text-cavs-gold">
                          22
                        </td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center font-semibold text-cavs-navy dark:text-white">15</td>
                      </tr>
                      <tr className="border-b border-slate-200 dark:border-slate-700">
                        <td className="py-2 sm:py-3 px-2 sm:px-4 font-medium text-xs sm:text-sm text-cavs-navy dark:text-slate-300">Finals Appearances</td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center bg-cavs-wine/5 dark:bg-cavs-gold/5 font-semibold text-cavs-wine dark:text-cavs-gold">
                          10
                        </td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center font-semibold text-cavs-navy dark:text-white">6</td>
                      </tr>
                      <tr>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 font-medium text-xs sm:text-sm text-cavs-navy dark:text-slate-300">
                          Beat a 73-win team down 3-1
                        </td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center bg-cavs-wine/5 dark:bg-cavs-gold/5 font-semibold text-cavs-wine dark:text-cavs-gold">
                          Yes 👑
                        </td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center font-semibold text-cavs-navy dark:text-white">No</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-display text-cavs-wine dark:text-cavs-gold mb-4">
              The Verdict
            </h3>
            <p className="text-lg text-slate-700 dark:text-slate-200 max-w-3xl mx-auto">
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
