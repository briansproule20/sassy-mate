import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import Image from "next/image";

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
    imageUrl: "https://static01.nyt.com/images/2012/06/09/sports/nba/nba-superJumbo.jpg",
  },
  {
    id: "9",
    title: "The Return",
    date: "July 11, 2014",
    category: "Fatherly",
    description:
      'LeBron announces he\'s coming back to Cleveland: "I\'m coming home."',
    imageUrl: "https://www.si.com/.image/c_fill,w_1200,ar_16:9,f_auto,q_auto,g_auto/MTY4MjU2MjkwMDU5NTI4MDkz/lebron-james-cleveland-cavaliers-return.jpg",
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
    imageUrl: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iMcwnUGNG47U/v1/-1x-1.webp",
  },
  {
    id: "8",
    title: "JR Smith Moment",
    date: "June 8, 2018",
    category: "Petty",
    description:
      "LeBron drops 51 in Game 1 Finals. JR forgets the score. Cavs lose in OT. Unbearable pain.",
    imageUrl: "https://i.ytimg.com/vi/Cj_4DupKfuk/hq720.jpg",
  },
  {
    id: "6",
    title: "I Promise School",
    date: "July 30, 2018",
    category: "Philanthropic",
    description:
      "LeBron opens a public school in Akron for at-risk youth, changing lives forever.",
    imageUrl: "https://www.the74million.org/wp-content/uploads/2023/08/Lebron-James-I-promise-school-akron.jpg",
  },
  {
    id: "10",
    title: "Lakers Championship",
    date: "October 11, 2020",
    category: "Heroic",
    description:
      "LeBron wins his 4th championship and 4th Finals MVP, leading the Lakers to victory in the NBA Bubble.",
    imageUrl: "https://images2.minutemediacdn.com/image/upload/c_crop,w_6276,h_3530,x_0,y_0/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/ImagnImages/mmsport/all_lakers/01jnwgdck920kydga4n0.jpg",
  },
  {
    id: "11",
    title: "All-Time Scoring King",
    date: "February 7, 2023",
    category: "Heroic",
    description:
      "LeBron passes Kareem Abdul-Jabbar to become the NBA's all-time leading scorer with 38,388 points.",
    imageUrl: "https://cdn-wp.thesportsrush.com/2021/10/faeeadb8-untitled-design-22.jpg",
  },
  {
    id: "12",
    title: "Playing With Bronny",
    date: "October 22, 2024",
    category: "Fatherly",
    description:
      "LeBron and his son Bronny make history as the first father-son duo to play together in an NBA game.",
    imageUrl: "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2024-10/241023-lebron-bronny-james-mb-1134-e4d4ac.jpg",
  },
];

export default function GalleryPage() {
  return (
    <>
      <SiteNav />
      <main className="pt-24 pb-20 px-4 min-h-screen bg-white dark:bg-cavs-navy">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-display text-7xl md:text-8xl text-cavs-wine dark:text-cavs-gold mb-4">
              WITNESS GALLERY
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
              Legendary moments that defined greatness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {moments.map((moment) => (
              <div
                key={moment.id}
                className="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg hover:border-cavs-wine/20 dark:hover:border-cavs-gold/20 transition-all duration-300 overflow-hidden flex flex-col h-full"
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
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-semibold text-xl text-cavs-wine dark:text-cavs-gold mb-2 group-hover:text-cavs-navy dark:group-hover:text-cavs-gold transition-colors">
                    {moment.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{moment.date}</p>
                  <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed flex-grow">
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
