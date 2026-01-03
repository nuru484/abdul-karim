"use client";

import { motion, Variants, Transition } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Heart,
  Building,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/ui/section-header";

const policies = [
  {
    icon: Briefcase,
    title: "Economy & Jobs",
    description:
      "Creating sustainable employment opportunities and supporting small businesses to build a thriving economy.",
    color: "bg-blue-500/10 text-blue-600",
    hoverColor: "group-hover:bg-blue-500 group-hover:text-white",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Investing in quality education from early childhood through higher learning for all citizens.",
    color: "bg-purple-500/10 text-purple-600",
    hoverColor: "group-hover:bg-purple-500 group-hover:text-white",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description:
      "Ensuring affordable, accessible healthcare for every family without compromise on quality.",
    color: "bg-red-500/10 text-red-600",
    hoverColor: "group-hover:bg-red-500 group-hover:text-white",
  },
  {
    icon: Building,
    title: "Infrastructure",
    description:
      "Modernizing roads, bridges, and digital infrastructure to connect communities nationwide.",
    color: "bg-orange-500/10 text-orange-600",
    hoverColor: "group-hover:bg-orange-500 group-hover:text-white",
  },
];

// Typed transition for TypeScript
const itemTransition: Transition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
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

export default function PoliciesPreview() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 xl:py-28 bg-linear-to-b from-background via-muted/20 to-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <SectionHeader
            label="Our Policies"
            title="A Vision for Progress"
            description="Comprehensive policies designed to address the challenges we face and create opportunities for every citizen."
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12 lg:mb-16"
        >
          {policies.map((policy) => (
            <motion.div
              key={policy.title}
              variants={itemVariants}
              className="group h-full"
            >
              <div className="relative bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full border border-border/50 hover:border-accent/50 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col sm:flex-row gap-4 sm:gap-6 overflow-hidden">
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-linear-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl ${policy.color} ${policy.hoverColor} flex items-center justify-center shrink-0 transition-all duration-500 shadow-sm group-hover:scale-110 group-hover:shadow-md`}
                  >
                    <policy.icon className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-500" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                      {policy.title}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {policy.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={itemTransition} // ✅ Typed transition
          className="text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="group shadow-md hover:shadow-lg transition-all duration-300"
            asChild
          >
            <Link href="/vision" className="flex items-center">
              View All Policies
              <ArrowRight
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                size={18}
              />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
