import { Hero } from "@/components/hero";
import { SiteNav } from "@/components/site-nav";
import { GoatArguments } from "@/components/goat-arguments";
import { TodayInBronHistory } from "@/components/today-in-bron-history";
import { LakersSchedule } from "@/components/lakers-schedule";
import { GlazerLeaderboard } from "@/components/glazer-leaderboard";
import { PetitionForm } from "@/components/petition-form";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <GoatArguments />
        <TodayInBronHistory />
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <LakersSchedule />
          </div>
        </section>
        <GlazerLeaderboard />
        <PetitionForm />
      </main>
      <SiteFooter />
    </>
  );
}
