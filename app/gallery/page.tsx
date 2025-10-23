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
    imageUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop",
  },
  {
    id: "2",
    title: "Cleveland Wins Championship",
    date: "June 19, 2016",
    category: "Heroic",
    description:
      "LeBron delivers on his promise, bringing Cleveland its first championship in 52 years.",
    imageUrl: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800&h=600&fit=crop",
  },
  {
    id: "3",
    title: "46 Points vs Boston",
    date: "May 25, 2018",
    category: "Heroic",
    description:
      "LeBron drops 46-11-9 to force a Game 7 against the Celtics in the ECF.",
    imageUrl: "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?w=800&h=600&fit=crop",
  },
  {
    id: "4",
    title: "The 25 Straight",
    date: "May 31, 2007",
    category: "Heroic",
    description:
      "22-year-old LeBron scores the Cavs' final 25 points to beat the Pistons in Game 5 ECF.",
    imageUrl: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=800&h=600&fit=crop",
  },
  {
    id: "5",
    title: "I Promise School",
    date: "July 30, 2018",
    category: "Philanthropic",
    description:
      "LeBron opens a public school in Akron for at-risk youth, changing lives forever.",
    imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop",
  },
  {
    id: "6",
    title: "45 Points Game 6 vs Boston",
    date: "June 9, 2012",
    category: "Heroic",
    description:
      "Facing elimination with the Heat, LeBron delivers a legendary performance.",
    imageUrl: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&h=600&fit=crop",
  },
  {
    id: "7",
    title: "JR Smith Moment",
    date: "June 8, 2018",
    category: "Petty",
    description:
      "LeBron drops 51 in Game 1 Finals. JR forgets the score. Cavs lose in OT. Unbearable pain.",
    imageUrl: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?w=800&h=600&fit=crop",
  },
  {
    id: "8",
    title: "The Return",
    date: "July 11, 2014",
    category: "Fatherly",
    description:
      'LeBron announces he\'s coming back to Cleveland: "I\'m coming home."',
    imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=600&fit=crop",
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {moments.map((moment) => (
              <div
                key={moment.id}
                className="group bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-cavs-wine/20 transition-all duration-300 overflow-hidden flex flex-col h-full"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={moment.imageUrl}
                    alt={moment.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <Badge 
                    variant="secondary" 
                    className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm"
                  >
                    {moment.category}
                  </Badge>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-semibold text-xl text-cavs-wine mb-2 group-hover:text-cavs-navy transition-colors">
                    {moment.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-3">{moment.date}</p>
                  <p className="text-sm text-slate-700 leading-relaxed flex-grow">
                    {moment.description}
                  </p>
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
