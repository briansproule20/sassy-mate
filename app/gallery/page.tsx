import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const categories = ["All", "Heroic", "Petty", "Fatherly", "Philanthropic"];

const moments = [
  {
    id: "1",
    title: "The Block",
    date: "June 19, 2016",
    category: "Heroic",
    description:
      "The most iconic defensive play in Finals history. LeBron chases down Andre Iguodala and pins his layup attempt against the backboard in Game 7.",
  },
  {
    id: "2",
    title: "Cleveland Wins Championship",
    date: "June 19, 2016",
    category: "Heroic",
    description:
      "LeBron delivers on his promise, bringing Cleveland its first championship in 52 years.",
  },
  {
    id: "3",
    title: "46 Points vs Boston",
    date: "May 25, 2018",
    category: "Heroic",
    description:
      "LeBron drops 46-11-9 to force a Game 7 against the Celtics in the ECF.",
  },
  {
    id: "4",
    title: "The 25 Straight",
    date: "May 31, 2007",
    category: "Heroic",
    description:
      "22-year-old LeBron scores the Cavs' final 25 points to beat the Pistons in Game 5 ECF.",
  },
  {
    id: "5",
    title: "I Promise School",
    date: "July 30, 2018",
    category: "Philanthropic",
    description:
      "LeBron opens a public school in Akron for at-risk youth, changing lives forever.",
  },
  {
    id: "6",
    title: "45 Points Game 6 vs Boston",
    date: "June 9, 2012",
    category: "Heroic",
    description:
      "Facing elimination with the Heat, LeBron delivers a legendary performance.",
  },
  {
    id: "7",
    title: "JR Smith Moment",
    date: "June 8, 2018",
    category: "Petty",
    description:
      "LeBron drops 51 in Game 1 Finals. JR forgets the score. Cavs lose in OT. Unbearable pain.",
  },
  {
    id: "8",
    title: "The Return",
    date: "July 11, 2014",
    category: "Fatherly",
    description:
      'LeBron announces he\'s coming back to Cleveland: "I\'m coming home."',
  },
];

export default function GalleryPage() {
  return (
    <>
      <SiteNav />
      <main className="pt-24 pb-20 px-4 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <Link href="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="text-center mb-12">
            <h1 className="font-display text-6xl text-cavs-wine mb-4">
              THE WITNESS HALL
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              A gallery of legendary moments
            </p>

            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <Button key={cat} variant={cat === "All" ? "default" : "outline"} size="sm">
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {moments.map((moment) => (
              <div
                key={moment.id}
                className="break-inside-avoid bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-cavs-wine to-cavs-navy flex items-center justify-center">
                  <div className="text-cavs-gold text-4xl font-display">
                    {moment.title.slice(0, 3)}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-lg text-cavs-wine">
                      {moment.title}
                    </h3>
                    <Badge variant="secondary" className="shrink-0">
                      {moment.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-500 mb-2">{moment.date}</p>
                  <p className="text-sm text-slate-700">{moment.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
