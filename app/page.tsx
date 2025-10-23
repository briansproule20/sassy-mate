import { Hero } from "@/components/hero";
import { SiteNav } from "@/components/site-nav";
import { GoatArguments } from "@/components/goat-arguments";
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
