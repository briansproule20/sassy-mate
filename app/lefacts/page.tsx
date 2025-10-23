"use client";

import { useState } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, TrendingUp, Trophy, Heart, Zap, Crown } from "lucide-react";

const categories = [
  { id: "all", label: "All Facts", icon: Sparkles },
  { id: "records", label: "Records", icon: Trophy },
  { id: "career", label: "Career", icon: TrendingUp },
  { id: "impact", label: "Impact", icon: Heart },
  { id: "insane", label: "Insane Stats", icon: Zap },
];

const facts = [
  {
    id: 1,
    category: "records",
    fact: "LeBron is the all-time leading scorer in NBA history with over 40,000 points.",
    icon: "👑",
  },
  {
    id: 2,
    category: "career",
    fact: "Only player in NBA history with 40,000+ points, 10,000+ rebounds, and 10,000+ assists.",
    icon: "🎯",
  },
  {
    id: 3,
    category: "insane",
    fact: "LeBron has played 21 seasons and counting - longer than most NBA careers combined.",
    icon: "⏰",
  },
  {
    id: 4,
    category: "records",
    fact: "Most playoff points in NBA history - over 8,000 and still counting.",
    icon: "🏆",
  },
  {
    id: 5,
    category: "career",
    fact: "20 All-Star selections - tied for most in NBA history.",
    icon: "⭐",
  },
  {
    id: 6,
    category: "impact",
    fact: "Opened the I Promise School in Akron, providing education and support to at-risk youth.",
    icon: "📚",
  },
  {
    id: 7,
    category: "insane",
    fact: "At age 38, still averaging 25+ points, 7+ rebounds, and 7+ assists per game.",
    icon: "🔥",
  },
  {
    id: 8,
    category: "career",
    fact: "10 NBA Finals appearances - 8 consecutive from 2011-2018.",
    icon: "🎖️",
  },
  {
    id: 9,
    category: "records",
    fact: "First player to win Finals MVP with three different franchises.",
    icon: "🥇",
  },
  {
    id: 10,
    category: "impact",
    fact: "Led the 'More Than a Vote' campaign, helping combat voter suppression.",
    icon: "🗳️",
  },
  {
    id: 11,
    category: "insane",
    fact: "Scored 25+ points in over 1,200 games - most in NBA history.",
    icon: "💯",
  },
  {
    id: 12,
    category: "career",
    fact: "4x NBA Champion, 4x NBA MVP, 4x Finals MVP - the complete package.",
    icon: "💍",
  },
  {
    id: 13,
    category: "records",
    fact: "Most consecutive double-digit scoring games in NBA history (1,140+).",
    icon: "📊",
  },
  {
    id: 14,
    category: "impact",
    fact: "Guaranteed full college tuition for every I Promise School graduate.",
    icon: "🎓",
  },
  {
    id: 15,
    category: "insane",
    fact: "Has averaged a near triple-double multiple seasons while in his mid-30s.",
    icon: "🎰",
  },
  {
    id: 16,
    category: "career",
    fact: "19 All-NBA selections - most in NBA history.",
    icon: "🏅",
  },
  {
    id: 17,
    category: "records",
    fact: "Only player to lead all five statistical categories in a Finals series (2016).",
    icon: "📈",
  },
  {
    id: 18,
    category: "impact",
    fact: "Built multiple community centers and programs in Akron, Ohio.",
    icon: "🏘️",
  },
  {
    id: 19,
    category: "insane",
    fact: "Still dunking on players half his age in Year 21 of his career.",
    icon: "🚀",
  },
  {
    id: 20,
    category: "career",
    fact: "3x Olympic Gold Medalist representing Team USA.",
    icon: "🥇",
  },
  {
    id: 21,
    category: "records",
    fact: "Youngest player to reach 10,000, 20,000, 30,000, and 40,000 career points.",
    icon: "⚡",
  },
  {
    id: 22,
    category: "impact",
    fact: "First active NBA player to become a billionaire.",
    icon: "💰",
  },
  {
    id: 23,
    category: "insane",
    fact: "Averaged 27/7/7 over his entire career - video game numbers.",
    icon: "🎮",
  },
  {
    id: 24,
    category: "career",
    fact: "Beat a 73-win Warriors team after being down 3-1 in the 2016 Finals.",
    icon: "🐐",
  },
  {
    id: 25,
    category: "records",
    fact: "Most points scored in NBA All-Star Games history.",
    icon: "🌟",
  },
  {
    id: 26,
    category: "impact",
    fact: "SpringHill Entertainment produces films and shows, changing Hollywood.",
    icon: "🎬",
  },
  {
    id: 27,
    category: "insane",
    fact: "Played all 82 games at age 33 - peak physical conditioning.",
    icon: "💪",
  },
  {
    id: 28,
    category: "career",
    fact: "Rookie of the Year (2004) - dominated from day one.",
    icon: "🌅",
  },
  {
    id: 29,
    category: "records",
    fact: "Most All-NBA First Team selections in NBA history (13).",
    icon: "1️⃣",
  },
  {
    id: 30,
    category: "impact",
    fact: "Pioneered player empowerment in the NBA, changing the league forever.",
    icon: "✊",
  },
  {
    id: 31,
    category: "insane",
    fact: "Has averaged 25+ PPG for 19 consecutive seasons.",
    icon: "🔢",
  },
  {
    id: 32,
    category: "career",
    fact: "117 career triple-doubles - 6th most in NBA history.",
    icon: "3️⃣",
  },
  {
    id: 33,
    category: "records",
    fact: "Most career wins in NBA history (regular season + playoffs combined).",
    icon: "✅",
  },
  {
    id: 34,
    category: "impact",
    fact: "Donated millions to Boys & Girls Clubs and youth programs.",
    icon: "❤️",
  },
  {
    id: 35,
    category: "insane",
    fact: "Scored 10+ points in 1,200+ consecutive games - unmatched consistency.",
    icon: "♾️",
  },
  {
    id: 36,
    category: "career",
    fact: "Played in 266 playoff games - most in NBA history.",
    icon: "🗓️",
  },
];

export default function LeFactsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredFacts =
    activeCategory === "all"
      ? facts
      : facts.filter((fact) => fact.category === activeCategory);

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find((c) => c.id === categoryId);
    return category?.icon || Sparkles;
  };

  return (
    <>
      <SiteNav />
      <main className="pt-24 pb-20 px-4 min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Crown className="w-12 h-12 text-cavs-gold" />
            </div>
            <h1 className="font-display text-7xl md:text-8xl text-cavs-wine mb-4">
              LEFACTS
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Mind-blowing facts about the King
            </p>

            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <Button
                    key={cat.id}
                    variant={activeCategory === cat.id ? "default" : "outline"}
                    onClick={() => setActiveCategory(cat.id)}
                    className="gap-2"
                  >
                    <Icon className="w-4 h-4" />
                    {cat.label}
                  </Button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFacts.map((fact, index) => {
              const CategoryIcon = getCategoryIcon(fact.category);
              return (
                <Card
                  key={fact.id}
                  className="group hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 hover:border-cavs-wine/30 bg-white"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform">
                        {fact.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge
                            variant="secondary"
                            className="text-xs capitalize flex items-center gap-1"
                          >
                            <CategoryIcon className="w-3 h-3" />
                            {fact.category}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            #{index + 1}
                          </Badge>
                        </div>
                        <p className="text-slate-700 leading-relaxed text-sm">
                          {fact.fact}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredFacts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">
                No facts found in this category.
              </p>
            </div>
          )}

          <div className="mt-16 text-center">
            <div className="inline-block p-6 bg-gradient-to-r from-cavs-wine to-cavs-navy rounded-2xl shadow-xl">
              <p className="text-white text-lg font-semibold mb-2">
                {facts.length} facts and counting
              </p>
              <p className="text-cavs-gold text-sm">
                Because one page isn't enough for the GOAT
              </p>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

