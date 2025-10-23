import { Crown } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-cavs-navy text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <Crown className="w-8 h-8 text-cavs-gold" />
          <p className="text-sm opacity-80">
            Not affiliated with the NBA, Cleveland Cavaliers, or LeBron James.
          </p>
          <p className="text-sm opacity-80">
            All hail Cleveland. Built with love by a true Witness.
          </p>
          <p className="text-xs opacity-60 mt-4">
            &copy; {new Date().getFullYear()} Witness Hub. For entertainment
            purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
