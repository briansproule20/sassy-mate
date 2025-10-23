"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Activity, Clock } from "lucide-react";
import { motion } from "framer-motion";

interface Game {
  id: number;
  date: string;
  datetime: string;
  opponent: string;
  opponent_abbr: string;
  is_home: boolean;
  status: string;
}

interface ScheduleData {
  nextGame: Game | null;
  lebronStatus: string;
}

export function LakersSchedule() {
  const [scheduleData, setScheduleData] = useState<ScheduleData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSchedule() {
      try {
        const res = await fetch("/api/teams/lakers/upcoming");
        const data = await res.json();
        if (data.success) {
          setScheduleData(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch Lakers schedule:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchSchedule();
  }, []);

  if (loading) {
    return (
      <Card className="bg-gradient-to-br from-purple-600 via-purple-700 to-yellow-500">
        <CardContent className="py-12 flex items-center justify-center">
          <Activity className="w-8 h-8 text-white animate-pulse" />
        </CardContent>
      </Card>
    );
  }

  const game = scheduleData?.nextGame;
  const lebronStatus = scheduleData?.lebronStatus || "Status Unknown";

  return (
    <Card className="bg-gradient-to-br from-purple-600 via-purple-700 to-yellow-500 text-white border-0 overflow-hidden relative">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10 grain" />
      
      <CardHeader className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <CardTitle className="font-display text-3xl text-white">NEXT LEBRON GAME</CardTitle>
            <CardDescription className="text-purple-100 mt-1">
              Lakers Schedule
            </CardDescription>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/30">
          <Activity className="w-4 h-4 text-yellow-300" />
          <span className="text-sm font-medium">LeBron Status:</span>
          <span className="text-sm font-bold text-yellow-300">{lebronStatus}</span>
        </div>
      </CardHeader>

      <CardContent className="relative z-10">
        {!game ? (
          <div className="text-center py-12 text-purple-100">
            <Calendar className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p className="text-lg">No upcoming games scheduled</p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20"
          >
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="text-center bg-white/20 rounded-lg px-3 py-2 sm:px-4 sm:py-3 min-w-[70px] sm:min-w-[80px]">
                <div className="text-3xl sm:text-4xl font-display text-yellow-300">
                  {new Date(game.datetime).toLocaleDateString('en-US', { day: 'numeric' })}
                </div>
                <div className="text-xs sm:text-sm text-purple-200 uppercase font-semibold mt-1">
                  {new Date(game.datetime).toLocaleDateString('en-US', { month: 'short' })}
                </div>
                <div className="text-xs text-purple-300 mt-0.5">
                  {new Date(game.datetime).toLocaleDateString('en-US', { year: 'numeric' })}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 sm:gap-3 mb-1">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 flex-shrink-0" />
                  <span className="font-display text-2xl sm:text-3xl text-white">
                    {game.is_home ? "vs" : "@"}
                  </span>
                  <span className="font-display text-2xl sm:text-3xl text-white">
                    {game.opponent_abbr}
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-purple-200 ml-6 sm:ml-8 mb-2">
                  {game.opponent}
                </div>
                <div className="flex items-center gap-2 ml-6 sm:ml-8">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-purple-200 font-medium">
                    {new Date(game.datetime).toLocaleString('en-US', { 
                      hour: 'numeric', 
                      minute: '2-digit',
                      timeZoneName: 'short'
                    })}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
}

