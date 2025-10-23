"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Trophy, Target, Activity } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SiteNav } from "@/components/site-nav";

interface CareerStats {
  games_played: number;
  pts: string;
  reb: string;
  ast: string;
  stl: string;
  blk: string;
  min: string;
  fg_pct: string;
  fg3_pct: string;
  ft_pct: string;
  total_pts: string;
  total_reb: string;
  total_ast: string;
}

interface SeasonStats {
  season: number;
  games_played: number;
  pts: number;
  reb: number;
  ast: number;
  stl: number;
  blk: number;
  min: string;
  fg_pct: number;
  fg3_pct: number;
  ft_pct: number;
}

export default function StatsPage() {
  const [careerStats, setCareerStats] = useState<CareerStats | null>(null);
  const [seasonStats, setSeasonStats] = useState<SeasonStats[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const careerRes = await fetch("/api/players/lebron/career");
        const careerData = await careerRes.json();

        if (careerData.success) {
          setCareerStats(careerData.data.career);
          setSeasonStats(careerData.data.seasons);
        }
      } catch (error) {
        console.error("Failed to fetch stats:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  if (loading) {
    return (
      <>
        <SiteNav />
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-cavs-navy flex items-center justify-center pt-16">
          <div className="text-center">
            <Activity className="w-12 h-12 text-cavs-wine dark:text-cavs-gold animate-pulse mx-auto mb-4" />
            <p className="text-slate-600 dark:text-slate-300 font-display text-xl">Loading The King's Stats...</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SiteNav />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-cavs-navy pt-20 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-6xl md:text-7xl text-cavs-wine dark:text-cavs-gold mb-4">
            THE KING'S STATS
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            All-time career statistics and recent performance from the greatest to ever play the game
          </p>
        </motion.div>

        {/* Career Highlights */}
        {careerStats && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-gradient-to-br from-cavs-wine to-cavs-navy border-0 text-white">
              <CardHeader className="pb-3">
                <Trophy className="w-8 h-8 mb-2 text-cavs-gold" />
                <CardTitle className="text-3xl font-display">{careerStats.total_pts}</CardTitle>
                <CardDescription className="text-white/80">Career Points</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-cavs-gold/20 hover:border-cavs-gold/40 transition-colors bg-white dark:bg-slate-900">
              <CardHeader className="pb-3">
                <Target className="w-8 h-8 mb-2 text-cavs-wine dark:text-cavs-gold" />
                <CardTitle className="text-3xl font-display text-cavs-wine dark:text-cavs-gold">{careerStats.pts}</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400">PPG Average</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-cavs-gold/20 hover:border-cavs-gold/40 transition-colors bg-white dark:bg-slate-900">
              <CardHeader className="pb-3">
                <TrendingUp className="w-8 h-8 mb-2 text-cavs-wine dark:text-cavs-gold" />
                <CardTitle className="text-3xl font-display text-cavs-wine dark:text-cavs-gold">{careerStats.ast}</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400">APG Average</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-cavs-gold/20 hover:border-cavs-gold/40 transition-colors bg-white dark:bg-slate-900">
              <CardHeader className="pb-3">
                <Activity className="w-8 h-8 mb-2 text-cavs-wine dark:text-cavs-gold" />
                <CardTitle className="text-3xl font-display text-cavs-wine dark:text-cavs-gold">{careerStats.reb}</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400">RPG Average</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        )}

        {/* Tabs for different views */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Tabs defaultValue="career" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="career">Career</TabsTrigger>
              <TabsTrigger value="seasons">By Season</TabsTrigger>
            </TabsList>

            {/* Career Stats Tab */}
            <TabsContent value="career">
              {careerStats && (
                <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                  <CardHeader>
                    <CardTitle className="font-display text-3xl text-cavs-wine dark:text-cavs-gold">Career Averages</CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-400">
                      {careerStats.games_played} games played over 22 seasons
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="text-center p-4 rounded-lg bg-slate-50 dark:bg-slate-800">
                        <div className="text-3xl font-display text-cavs-wine dark:text-cavs-gold mb-1">{careerStats.pts}</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Points</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-slate-50 dark:bg-slate-800">
                        <div className="text-3xl font-display text-cavs-wine dark:text-cavs-gold mb-1">{careerStats.reb}</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Rebounds</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-slate-50 dark:bg-slate-800">
                        <div className="text-3xl font-display text-cavs-wine dark:text-cavs-gold mb-1">{careerStats.ast}</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Assists</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-slate-50 dark:bg-slate-800">
                        <div className="text-3xl font-display text-cavs-wine dark:text-cavs-gold mb-1">{careerStats.min}</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Minutes</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-slate-50 dark:bg-slate-800">
                        <div className="text-3xl font-display text-cavs-wine dark:text-cavs-gold mb-1">{careerStats.fg_pct}%</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">FG%</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-slate-50 dark:bg-slate-800">
                        <div className="text-3xl font-display text-cavs-wine dark:text-cavs-gold mb-1">{careerStats.fg3_pct}%</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">3P%</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-slate-50 dark:bg-slate-800">
                        <div className="text-3xl font-display text-cavs-wine dark:text-cavs-gold mb-1">{careerStats.ft_pct}%</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">FT%</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-slate-50 dark:bg-slate-800">
                        <div className="text-3xl font-display text-cavs-wine dark:text-cavs-gold mb-1">{careerStats.stl}</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Steals</div>
                      </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                      <h3 className="font-display text-2xl text-cavs-wine dark:text-cavs-gold mb-6">Career Totals</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-6 rounded-lg bg-gradient-to-br from-cavs-wine/10 to-cavs-navy/10 dark:from-cavs-gold/10 dark:to-cavs-wine/10">
                          <div className="text-4xl font-display text-cavs-wine dark:text-cavs-gold mb-2">{careerStats.total_pts}</div>
                          <div className="text-sm text-slate-600 dark:text-slate-400 font-semibold">Total Points</div>
                        </div>
                        <div className="text-center p-6 rounded-lg bg-gradient-to-br from-cavs-wine/10 to-cavs-navy/10 dark:from-cavs-gold/10 dark:to-cavs-wine/10">
                          <div className="text-4xl font-display text-cavs-wine dark:text-cavs-gold mb-2">{careerStats.total_reb}</div>
                          <div className="text-sm text-slate-600 dark:text-slate-400 font-semibold">Total Rebounds</div>
                        </div>
                        <div className="text-center p-6 rounded-lg bg-gradient-to-br from-cavs-wine/10 to-cavs-navy/10 dark:from-cavs-gold/10 dark:to-cavs-wine/10">
                          <div className="text-4xl font-display text-cavs-wine dark:text-cavs-gold mb-2">{careerStats.total_ast}</div>
                          <div className="text-sm text-slate-600 dark:text-slate-400 font-semibold">Total Assists</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Seasons Tab */}
            <TabsContent value="seasons">
              <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                <CardHeader>
                  <CardTitle className="font-display text-3xl text-cavs-wine dark:text-cavs-gold">Season by Season</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">Career progression across all NBA seasons</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {seasonStats.map((season) => (
                      <div
                        key={season.season}
                        className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-cavs-wine/30 dark:hover:border-cavs-gold/30 transition-colors bg-white dark:bg-slate-800"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="font-display text-xl text-cavs-wine dark:text-cavs-gold">{season.season}-{(season.season + 1).toString().slice(-2)}</div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">{season.games_played} games</div>
                        </div>
                        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 text-center text-sm">
                          <div>
                            <div className="font-semibold text-cavs-navy dark:text-white">{season.pts.toFixed(1)}</div>
                            <div className="text-slate-600 dark:text-slate-400">PPG</div>
                          </div>
                          <div>
                            <div className="font-semibold text-cavs-navy dark:text-white">{season.reb.toFixed(1)}</div>
                            <div className="text-slate-600 dark:text-slate-400">RPG</div>
                          </div>
                          <div>
                            <div className="font-semibold text-cavs-navy dark:text-white">{season.ast.toFixed(1)}</div>
                            <div className="text-slate-600 dark:text-slate-400">APG</div>
                          </div>
                          <div>
                            <div className="font-semibold text-cavs-navy dark:text-white">{(season.fg_pct * 100).toFixed(1)}%</div>
                            <div className="text-slate-600 dark:text-slate-400">FG%</div>
                          </div>
                          <div>
                            <div className="font-semibold text-cavs-navy dark:text-white">{(season.fg3_pct * 100).toFixed(1)}%</div>
                            <div className="text-slate-600 dark:text-slate-400">3P%</div>
                          </div>
                          <div>
                            <div className="font-semibold text-cavs-navy dark:text-white">{season.min}</div>
                            <div className="text-slate-600 dark:text-slate-400">MPG</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
        </div>
      </div>
    </>
  );
}
