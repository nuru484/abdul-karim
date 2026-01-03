"use client";

import { motion, Variants, Transition } from "framer-motion";
import Link from "next/link";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Typed transitions
const itemTransition: Transition = {
  duration: 0.5,
  ease: "easeOut",
};

const springTransition: Transition = {
  duration: 1,
  delay: 0.2,
  type: "spring",
  stiffness: 50,
};

// Typed animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: itemTransition,
  },
};

const heroImageVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: springTransition,
  },
};

const floatingCardVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.8 },
  },
};

export default function HeroSection() {
  return (
    <section className="w-full relative min-h-[90vh] flex items-center overflow-hidden bg-background">
      {/* --- Enhanced Background Elements --- */}

      {/* 1. Animated Gradient Mesh Background */}
      <div className="absolute inset-0 bg-linear-to-br from-navy/3 via-background to-accent/3" />

      {/* 2. Grid Pattern with Radial Fade */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[32px_32px] mask-[radial-gradient(ellipse_80%_60%_at_50%_40%,#000_40%,transparent_100%)] pointer-events-none" />

      {/* 3. Diagonal Stripes Pattern (Subtle) */}
      <div className="absolute inset-0 opacity-[0.02] bg-[repeating-linear-gradient(45deg,transparent,transparent_35px,#000_35px,#000_70px)] pointer-events-none" />

      {/* 5. Dot Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#80808008_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

      {/* 6. Top Spotlight Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[40%] bg-gradient-radial from-accent/8 via-transparent to-transparent blur-3xl pointer-events-none" />

      {/* --- Content Container --- */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left"
            >
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]"
              >
                Leadership That <br className="hidden lg:block" />
                <span className="text-primary">Unites</span> and{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-amber-dark">
                  Inspires
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                Together, we can build a nation where every citizen has the
                opportunity to thrive. Join our movement for progress, unity,
                and a brighter future.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                {/* Watch Vision Button */}
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 h-12 border-primary/20 text-primary hover:bg-primary/5 hover:text-primary transition-transform hover:-translate-y-0.5"
                  asChild
                >
                  <Link href="/vision">
                    <Play className="mr-2 fill-current" size={16} />
                    Watch Our Vision
                  </Link>
                </Button>
              </motion.div>

              {/* Stats - Simplified without icons */}
              <motion.div
                variants={itemVariants}
                className="mt-12 pt-8 border-t border-border/60"
              >
                <div className="grid grid-cols-3 gap-6">
                  <StatItem number="15+" label="Years Service" />
                  <StatItem number="1M+" label="Supporters" />
                  <StatItem number="13" label="Regions" />
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Hero Image */}
            <motion.div
              variants={heroImageVariants}
              initial="hidden"
              animate="visible"
              className="relative hidden lg:block"
            >
              <div className="relative z-10">
                {/* Image Container with organic shape or cleaner border radius */}
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-navy/20 aspect-[3.5/4] border border-white/50">
                  <Image
                    src="/hero-portrait.jpg"
                    alt="Abubakari Abdul-Karim"
                    fill
                    priority
                    className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                  />

                  {/* Overlay Gradient at bottom for text readability if needed, or style */}
                  <div className="absolute inset-0 bg-linear-to-t from-navy/40 to-transparent opacity-60" />
                </div>

                {/* Floating Card Element */}
                <motion.div
                  variants={floatingCardVariants}
                  initial="hidden"
                  animate="visible"
                  className="absolute -bottom-8 -left-8 bg-card p-4 rounded-2xl shadow-xl border border-border/50 flex items-center gap-4 max-w-xs"
                >
                  <div className="bg-accent/15 p-3 rounded-full text-accent">
                    <span className="font-bold text-xl">&quot;</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground italic">
                      The future belongs to those who build it together.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Decorative behind image */}
              <div className="absolute top-10 -right-10 w-full h-full border-2 border-accent/20 rounded-[2rem] -z-10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper Component for Stats - Simplified without icons
function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex flex-col items-center lg:items-start group cursor-default">
      <div className="text-3xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
        {number}
      </div>
      <div className="text-sm font-medium text-muted-foreground">{label}</div>
    </div>
  );
}
