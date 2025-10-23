"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const tabs = [
  {
    id: "longevity",
    label: "Longevity",
    content: "21 seasons and counting. From high school phenom to oldest player scoring 40+. The man is literally aging backwards.",
    stats: ["40,000+ points", "21 All-Star", "19 All-NBA"],
  },
  {
    id: "versatility",
    label: "Versatility",
    content: "Can guard 1-5. Can play 1-5. Can pass like Magic, score like Jordan, defend like Pippen. The ultimate Swiss Army knife.",
    stats: ["6'9\" Point Forward", "Top 10 assists all-time", "All-Defense 6x"],
  },
  {
    id: "playmaking",
    label: "Playmaking",
    content: "LeBron makes everyone better. His teams consistently overperform. His IQ is off the charts. He's a floor general and a head coach.",
    stats: ["10,000+ assists", "Triple-doubles", "Court vision"],
  },
  {
    id: "impact",
    label: "Impact",
    content: "Brought Cleveland its first championship in 52 years. Beat a 73-win team. Changed teams' fortunes instantly. Cultural icon.",
    stats: ["3-1 comeback", "4 rings", "4 MVPs"],
  },
  {
    id: "clutch",
    label: "Clutch Gene",
    content: "Game 7 vs Warriors. Block on Iguodala. Game 6 vs Celtics. The man shows up when it matters most. 'He's not clutch' - biggest lie ever told.",
    stats: ["Game 7 dominance", "Playoff record 40+ games", "Finals performances"],
  },
  {
    id: "leadership",
    label: "Leadership",
    content: "Built the I Promise School. Spoke up for social justice. Changed the game on and off the court. More than an athlete - a generational leader.",
    stats: ["Community impact", "Player empowerment", "Cultural influence"],
  },
];

export function GoatArguments() {
  const [activeTab, setActiveTab] = useState("longevity");

  const activeContent = tabs.find((t) => t.id === activeTab);

  return (
    <section id="goat" className="py-20 px-4 bg-white dark:bg-cavs-navy">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-5xl text-center mb-4 text-cavs-wine dark:text-cavs-gold">
          WHY LEBRON IS THE GOAT
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-300 mb-12">
          Let's break it down, category by category
        </p>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "outline"}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </Button>
          ))}
        </div>

        <Card className="min-h-[280px] bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="text-cavs-wine dark:text-cavs-gold text-2xl">
              {activeContent?.label}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col h-full">
            <p className="text-lg mb-6 leading-relaxed text-slate-700 dark:text-slate-200">{activeContent?.content}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {activeContent?.stats.map((stat, i) => (
                <Badge key={i} variant="secondary" className="text-sm">
                  {stat}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
