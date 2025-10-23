"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SiteNav } from "@/components/site-nav";
import { Crown, Trophy, MessageSquare, TrendingUp } from "lucide-react";
import { getInitials, formatDate } from "@/lib/utils";

interface Leader {
  id: string;
  name: string;
  points: number;
  lastSeen: string;
  petitionCount?: number;
}

interface Petition {
  id: string;
  name: string;
  reason: string;
  goatScore: number;
  goatRank: string;
  timestamp: number;
}

export default function WitnessesPage() {
  const [leaders, setLeaders] = useState<Leader[]>([]);
  const [petitions, setPetitions] = useState<Petition[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Try to fetch from API first (production with Redis)
        const leaderRes = await fetch("/api/witnesses/leaderboard");
        const leaderData = await leaderRes.json();
        
        const petitionRes = await fetch("/api/witnesses/petitions");
        const petitionData = await petitionRes.json();

        // If Redis data is available, use it
        if (leaderData.success && leaderData.data.length > 0) {
          setLeaders(leaderData.data);
        } else {
          // Fallback to localStorage for local development
          const storedLeaders = localStorage.getItem("leaders");
          if (storedLeaders) {
            const parsed = JSON.parse(storedLeaders);
            const sorted = parsed.sort((a: Leader, b: Leader) => b.points - a.points);
            setLeaders(sorted);
          }
        }
        
        if (petitionData.success && petitionData.data.length > 0) {
          setPetitions(petitionData.data);
        } else {
          // Fallback to localStorage for local development
          const storedPetitions = localStorage.getItem("petitions");
          if (storedPetitions) {
            const parsed = JSON.parse(storedPetitions);
            const sorted = parsed.sort((a: Petition, b: Petition) => b.timestamp - a.timestamp);
            setPetitions(sorted);
          }
        }
      } catch (error) {
        console.error("Failed to fetch witness data:", error);
        
        // Fallback to localStorage
        try {
          const storedLeaders = localStorage.getItem("leaders");
          const storedPetitions = localStorage.getItem("petitions");
          
          if (storedLeaders) {
            const parsed = JSON.parse(storedLeaders);
            const sorted = parsed.sort((a: Leader, b: Leader) => b.points - a.points);
            setLeaders(sorted);
          }
          
          if (storedPetitions) {
            const parsed = JSON.parse(storedPetitions);
            const sorted = parsed.sort((a: Petition, b: Petition) => b.timestamp - a.timestamp);
            setPetitions(sorted);
          }
        } catch (localError) {
          console.error("Failed to load from localStorage:", localError);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <>
        <SiteNav />
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-cavs-navy flex items-center justify-center pt-16">
          <div className="text-center">
            <Crown className="w-12 h-12 text-cavs-wine dark:text-cavs-gold animate-pulse mx-auto mb-4" />
            <p className="text-slate-600 dark:text-slate-300 font-display text-xl">Loading Witnesses...</p>
          </div>
        </div>
      </>
    );
  }

  const topThree = leaders.slice(0, 3);
  const restOfLeaders = leaders.slice(3);

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
              THE WITNESSES
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Hall of fame for the most dedicated LeBron believers
            </p>
          </motion.div>

          {/* Stats Overview */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-gradient-to-br from-cavs-wine to-cavs-navy border-0 text-white">
              <CardHeader className="pb-3">
                <Trophy className="w-8 h-8 mb-2 text-cavs-gold" />
                <CardTitle className="text-3xl font-display">{leaders.length}</CardTitle>
                <CardDescription className="text-white/80">Total Witnesses</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-cavs-gold/20 hover:border-cavs-gold/40 transition-colors bg-white dark:bg-slate-900">
              <CardHeader className="pb-3">
                <MessageSquare className="w-8 h-8 mb-2 text-cavs-wine dark:text-cavs-gold" />
                <CardTitle className="text-3xl font-display text-cavs-wine dark:text-cavs-gold">{petitions.length}</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400">Petitions Signed</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-cavs-gold/20 hover:border-cavs-gold/40 transition-colors bg-white dark:bg-slate-900">
              <CardHeader className="pb-3">
                <TrendingUp className="w-8 h-8 mb-2 text-cavs-wine dark:text-cavs-gold" />
                <CardTitle className="text-3xl font-display text-cavs-wine dark:text-cavs-gold">
                  {leaders.length > 0 ? leaders[0]?.points : 0}
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400">Highest Score</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Tabs defaultValue="leaderboard" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
                <TabsTrigger value="petitions">Petitions</TabsTrigger>
              </TabsList>

              {/* Leaderboard Tab */}
              <TabsContent value="leaderboard">
                {/* Top 3 Podium */}
                {topThree.length > 0 && (
                  <div className="mb-8">
                    <h3 className="font-display text-2xl text-cavs-wine dark:text-cavs-gold text-center mb-6">
                      TOP 3 WITNESSES
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                      {topThree.map((leader, index) => (
                        <motion.div
                          key={leader.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                          <Card className={index === 0 ? "bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 border-yellow-300 dark:border-yellow-700" : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"}>
                            <CardHeader className="text-center">
                              <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-cavs-wine text-cavs-gold flex items-center justify-center font-bold text-2xl">
                                {getInitials(leader.name)}
                              </div>
                              <div className="text-4xl mb-2">
                                {index === 0 && "👑"}
                                {index === 1 && "🥈"}
                                {index === 2 && "🥉"}
                              </div>
                              <CardTitle className="text-xl text-slate-900 dark:text-white">{leader.name}</CardTitle>
                              <div className="text-3xl font-display text-cavs-wine dark:text-cavs-gold mt-2">
                                {leader.points} pts
                              </div>
                              <CardDescription className="mt-1 text-slate-600 dark:text-slate-400">
                                {leader.petitionCount || 0} petitions signed
                              </CardDescription>
                            </CardHeader>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Rest of Leaderboard */}
                <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-cavs-wine dark:text-cavs-gold">All Witnesses</CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-400">Ranked by glaze points</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {leaders.length === 0 ? (
                      <p className="text-center text-slate-500 dark:text-slate-400 py-8">
                        No witnesses yet. Be the first to sign the petition!
                      </p>
                    ) : (
                      <div className="space-y-3">
                        {leaders.map((leader, index) => (
                          <div
                            key={leader.id}
                            className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                          >
                            <div className="flex-shrink-0 w-10 text-center font-bold text-slate-400 dark:text-slate-500">
                              #{index + 1}
                            </div>

                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cavs-wine text-cavs-gold flex items-center justify-center font-bold">
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
              </TabsContent>

              {/* Petitions Tab */}
              <TabsContent value="petitions">
                <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-cavs-wine dark:text-cavs-gold">All Petitions</CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-400">Testimonies from true believers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {petitions.length === 0 ? (
                      <p className="text-center text-slate-500 dark:text-slate-400 py-8">
                        No petitions yet. Be the first to declare your allegiance!
                      </p>
                    ) : (
                      <div className="space-y-4">
                        {petitions.map((petition) => (
                          <div
                            key={petition.id}
                            className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-cavs-wine/30 dark:hover:border-cavs-gold/30 transition-colors bg-white dark:bg-slate-800"
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-cavs-wine text-cavs-gold flex items-center justify-center font-bold text-sm">
                                  {getInitials(petition.name)}
                                </div>
                                <div>
                                  <div className="font-semibold text-slate-900 dark:text-white">{petition.name}</div>
                                  <div className="text-xs text-slate-500 dark:text-slate-400">
                                    {new Date(petition.timestamp).toLocaleDateString()}
                                  </div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-display text-cavs-wine dark:text-cavs-gold">{petition.goatScore}</div>
                                <div className="text-xs text-slate-600 dark:text-slate-400 font-semibold">{petition.goatRank}</div>
                              </div>
                            </div>
                            <p className="text-slate-700 dark:text-slate-200 leading-relaxed">{petition.reason}</p>
                          </div>
                        ))}
                      </div>
                    )}
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

