import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const categories = ["All", "Heroic", "Petty", "Fatherly", "Philanthropic"];

const moments = [
  {
    id: "5",
    title: "The 25 Straight",
    date: "May 31, 2007",
    category: "Heroic",
    description:
      "22-year-old LeBron scores the Cavs' final 25 points to beat the Pistons in Game 5 ECF.",
    imageUrl: "https://content.ksdk.com/photo/2014/07/11/1405096463000-lebron_4228876_ver1.0.jpg",
  },
  {
    id: "3",
    title: "The Decision",
    date: "July 8, 2010",
    category: "Petty",
    description:
      'LeBron announces "I\'m taking my talents to South Beach" on live TV. Cleveland burns jerseys. The villain era begins.',
    imageUrl: "https://i.ytimg.com/vi/Afpgnb_9bA4/hq720.jpg",
  },
  {
    id: "7",
    title: "45 Points Game 6 vs Boston",
    date: "June 9, 2012",
    category: "Heroic",
    description:
      "Facing elimination with the Heat, LeBron delivers a legendary performance.",
    imageUrl: "https://i.ytimg.com/vi/O213Wxv9uT4/maxresdefault.jpg",
  },
  {
    id: "9",
    title: "The Return",
    date: "July 11, 2014",
    category: "Fatherly",
    description:
      'LeBron announces he\'s coming back to Cleveland: "I\'m coming home."',
    imageUrl: "https://i.ytimg.com/vi/pnHq-xsc9A4/maxresdefault.jpg",
  },
  {
    id: "1",
    title: "The Block",
    date: "June 19, 2016",
    category: "Heroic",
    description:
      "The most iconic defensive play in Finals history. LeBron chases down Andre Iguodala and pins his layup attempt against the backboard in Game 7.",
    imageUrl: "https://s3-prod.crainscleveland.com/s3fs-public/The%20Block_i.jpg",
  },
  {
    id: "2",
    title: "Cleveland Wins Championship",
    date: "June 19, 2016",
    category: "Heroic",
    description:
      "LeBron delivers on his promise, bringing Cleveland its first championship in 52 years.",
    imageUrl: "https://sportshub.cbsistatic.com/i/r/2020/10/15/294a04c2-1252-4f11-b082-b73130e4aec0/thumbnail/1200x675/fd6fd6f0e138aab5ce5b3ec069f82d31/lebron-finals-2016.jpg",
  },
  {
    id: "4",
    title: "46 Points vs Boston",
    date: "May 25, 2018",
    category: "Heroic",
    description:
      "LeBron drops 46-11-9 to force a Game 7 against the Celtics in the ECF.",
    imageUrl: "https://i.ytimg.com/vi/OxYXc7UcJ6E/maxresdefault.jpg",
  },
  {
    id: "8",
    title: "JR Smith Moment",
    date: "June 8, 2018",
    category: "Petty",
    description:
      "LeBron drops 51 in Game 1 Finals. JR forgets the score. Cavs lose in OT. Unbearable pain.",
    imageUrl: "https://i.ytimg.com/vi/wRMwVaeduwE/maxresdefault.jpg",
  },
  {
    id: "6",
    title: "I Promise School",
    date: "July 30, 2018",
    category: "Philanthropic",
    description:
      "LeBron opens a public school in Akron for at-risk youth, changing lives forever.",
    imageUrl: "https://i.ytimg.com/vi/IC76WFMZnfo/maxresdefault.jpg",
  },
];

export default function GalleryPage() {
  return (
    <>
      <SiteNav />
      <main className="pt-24 pb-20 px-4 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-display text-7xl md:text-8xl text-cavs-wine mb-4">
              WITNESS GALLERY
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Legendary moments that defined greatness
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
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-cavs-wine to-cavs-navy">
                  <Image
                    src={moment.imageUrl}
                    alt={moment.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <Badge 
                    variant="secondary" 
                    className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm z-10"
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
