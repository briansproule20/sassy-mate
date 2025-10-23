"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import bronHistory from "@/lib/bron-history.json";

const getCategoryColor = (category: string) => {
  switch (category) {
    case "game":
      return "bg-cavs-wine text-white";
    case "milestone":
      return "bg-cavs-gold text-cavs-navy";
    case "moment":
      return "bg-cavs-navy text-white";
    case "funny":
      return "bg-slate-100 text-slate-700";
    default:
      return "bg-slate-200 text-slate-700";
  }
};

const getCategoryLabel = (category: string) => {
  switch (category) {
    case "game":
      return "Game Performance";
    case "milestone":
      return "Milestone";
    case "moment":
      return "Special Moment";
    case "funny":
      return "Off Court";
    default:
      return "Event";
  }
};

export function TodayInBronHistory() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const dateKey = `${month}-${day}`;

  const todayEvent = bronHistory[dateKey as keyof typeof bronHistory];

  if (!todayEvent) {
    return null;
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-display text-4xl md:text-5xl text-cavs-wine mb-2">
            TODAY IN BRON HISTORY
          </h2>
          <p className="text-slate-600 text-lg">
            {today.toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <Card className="border-2 border-cavs-wine/20 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <CardHeader className="pb-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className={getCategoryColor(todayEvent.category)}>
                    {getCategoryLabel(todayEvent.category)}
                  </Badge>
                  <Badge variant="outline" className="font-bold">
                    {todayEvent.year}
                  </Badge>
                </div>
                <CardTitle className="text-2xl md:text-3xl text-cavs-navy leading-tight">
                  {todayEvent.event}
                </CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="font-semibold">On this day in</span>
              <span className="font-bold text-cavs-wine">{todayEvent.year}</span>
              <span>LeBron made history</span>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-slate-500 mt-6">
          365 days of greatness. Check back tomorrow for another legendary moment.
        </p>
      </div>
    </section>
  );
}

