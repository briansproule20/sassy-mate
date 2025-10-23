"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Crown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top_left,theme(colors.cavs.wine),#2b0f19_40%,#000)] grain">
      <motion.div
        className="absolute top-20 right-20 text-cavs-gold opacity-20"
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
        className="absolute top-40 left-20 text-cavs-wine opacity-20"
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
          className="text-xl md:text-2xl text-cavs-navy mb-12 max-w-2xl mx-auto"
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
          <Button size="lg" onClick={() => document.getElementById("goat")?.scrollIntoView({ behavior: "smooth" })}>
            Make Your Case
          </Button>
          <Button size="lg" variant="outline" onClick={() => document.getElementById("petition")?.scrollIntoView({ behavior: "smooth" })}>
            Sign the Petition
          </Button>
          <Button size="lg" variant="outline">
            Open Gallery
          </Button>
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
