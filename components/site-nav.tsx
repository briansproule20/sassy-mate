"use client";

import Link from "next/link";
import { Menu, Home, Image as ImageIcon, TrendingUp, BarChart3, Crown } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import NextImage from "next/image";

const navLinks = [
  { href: "/", label: "Home", icon: Home, description: "Main dashboard" },
  { href: "/stats", label: "Stats", icon: BarChart3, description: "LeBron's career stats" },
  { href: "/witnesses", label: "Witnesses", icon: Crown, description: "Hall of fame believers" },
  { href: "/gallery", label: "Gallery", icon: ImageIcon, description: "Photo gallery" },
  { href: "/compare", label: "Compare", icon: TrendingUp, description: "Player comparison" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-sm">
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
          <span className="font-display text-xl text-cavs-wine">
            WITNESS HUB
          </span>
        </Link>

        {/* Hamburger Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors hover:bg-slate-100 h-10 w-10">
            <Menu className="w-6 h-6 text-cavs-wine" />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader className="text-left pb-4">
              <SheetTitle className="flex items-center gap-2 text-cavs-wine font-display text-2xl">
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
                      className="flex items-start gap-3 rounded-lg px-3 py-3 text-slate-700 hover:bg-slate-100 hover:text-cavs-wine transition-all group"
                    >
                      <Icon className="w-5 h-5 mt-0.5 text-slate-500 group-hover:text-cavs-wine transition-colors" />
                      <div className="flex flex-col">
                        <span className="font-semibold text-base">{link.label}</span>
                        <span className="text-xs text-slate-500">{link.description}</span>
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
      </nav>
    </header>
  );
}
