"use client";

import Link from "next/link";
import { Menu, Home, Image as ImageIcon, TrendingUp, BarChart3, Crown, Sparkles } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import NextImage from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { href: "/", label: "Home", icon: Home, description: "Main dashboard" },
  { href: "/stats", label: "Stats", icon: BarChart3, description: "LeBron's career stats" },
  { href: "/lefacts", label: "LeFacts", icon: Sparkles, description: "Mind-blowing LeBron facts" },
  { href: "/witnesses", label: "Witnesses", icon: Crown, description: "Hall of fame believers" },
  { href: "/gallery", label: "Gallery", icon: ImageIcon, description: "Photo gallery" },
  { href: "/compare", label: "Compare", icon: TrendingUp, description: "Player comparison" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-cavs-navy border-b border-slate-200 dark:border-slate-800 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <NextImage
            src="/icons/witnesshub favicon.png"
            alt="Witness Hub"
            width={40}
            height={40}
            className="transition-opacity group-hover:opacity-80"
          />
          <span className="font-display text-xl text-cavs-wine dark:text-cavs-gold">
            WITNESS HUB
          </span>
        </Link>

        {/* Theme Toggle and Menu */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 h-10 w-10">
              <Menu className="w-6 h-6 text-cavs-wine dark:text-cavs-gold" />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
          <SheetContent side="right" className="bg-white dark:bg-slate-900">
            <SheetHeader className="text-left pb-4">
              <SheetTitle className="flex items-center gap-2 text-cavs-wine dark:text-cavs-gold font-display text-2xl">
                <NextImage
                  src="/icons/witnesshub favicon.png"
                  alt="Witness Hub"
                  width={28}
                  height={28}
                />
                WITNESS HUB
              </SheetTitle>
            </SheetHeader>

            <Separator className="my-4" />

            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-start gap-3 rounded-lg px-3 py-3 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-cavs-wine dark:hover:text-cavs-gold transition-all group"
                    >
                      <Icon className="w-5 h-5 mt-0.5 text-slate-500 dark:text-slate-400 group-hover:text-cavs-wine dark:group-hover:text-cavs-gold transition-colors" />
                      <div className="flex flex-col">
                        <span className="font-semibold text-base">{link.label}</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">{link.description}</span>
                      </div>
                    </Link>
                  </SheetClose>
                );
              })}
            </nav>

            <Separator className="my-6" />

            <div className="rounded-lg bg-gradient-to-br from-cavs-wine to-cavs-navy p-4">
              <p className="font-display text-lg mb-1 text-white">ALL HAIL</p>
              <p className="text-sm text-white/90">The King. The GOAT. LeBron James.</p>
            </div>
          </SheetContent>
        </Sheet>
        </div>
      </nav>
    </header>
  );
}
