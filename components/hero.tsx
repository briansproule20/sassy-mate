"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Crown } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top_left,theme(colors.cavs.wine),#2b0f19_40%,#000)] dark:bg-[radial-gradient(ellipse_at_top_left,theme(colors.cavs.navy),#0A2952_40%,#000)] grain">
      <motion.div
        className="absolute top-20 right-20 text-cavs-gold dark:text-cavs-wine opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Crown size={120} />
      </motion.div>

      <motion.div
        className="absolute top-40 left-20 text-cavs-gold dark:text-cavs-wine opacity-20"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <Crown size={100} />
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.h1
          className="font-display text-7xl md:text-9xl font-bold text-cavs-gold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          THE WITNESS HUB
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-cavs-navy dark:text-white mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your ultimate Cleveland Cavaliers and LeBron James shrine. Because
          greatness demands recognition.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button size="lg" className="text-lg px-8 py-6" onClick={() => document.getElementById("petition")?.scrollIntoView({ behavior: "smooth" })}>
            Become a Witness
          </Button>
          <Link href="/witnesses">
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-2 bg-cavs-wine dark:bg-stone-700 text-white border-cavs-wine dark:border-stone-700 hover:bg-cavs-wine/90 dark:hover:bg-stone-600"
            >
              Enter the Hall of Glaze
            </Button>
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-cavs-gold/50 text-sm">Scroll to explore</div>
      </motion.div>
    </section>
  );
}
