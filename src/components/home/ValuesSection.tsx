"use client";

import { motion, Variants, Transition } from "framer-motion";
import { Shield, Users, Lightbulb, Heart } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Unwavering commitment to honesty, transparency, and ethical leadership in every decision.",
  },
  {
    icon: Users,
    title: "Unity",
    description:
      "Bringing people together across all backgrounds to work toward common goals and shared prosperity.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Embracing new ideas and solutions to address the challenges of today and tomorrow.",
  },
  {
    icon: Heart,
    title: "Compassion",
    description:
      "Putting people first with policies that uplift the vulnerable and strengthen communities.",
  },
];

// Transition typed explicitly to satisfy TS
const itemTransition: Transition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number], // cubic bezier
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: itemTransition,
  },
};

export default function ValuesSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 xl:py-28 bg-linear-to-b from-background to-muted/20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <SectionHeader
            label="Our Core Values"
            title="Principles That Guide Our Vision"
            description="These fundamental values form the foundation of our campaign and will guide every policy decision we make."
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              className="group h-full"
            >
              <div className="relative bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full border border-border/50 hover:border-accent/50 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-linear-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-accent/10 flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-500 shadow-sm">
                    <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent group-hover:text-accent-foreground transition-colors duration-500" />
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-accent transition-colors duration-300">
                    {value.title}
                  </h3>

                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
