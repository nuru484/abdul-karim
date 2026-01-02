"use client";
import { motion } from "framer-motion";
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ValuesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <SectionHeader
          label="Our Core Values"
          title="Principles That Guide Our Vision"
          description="These fundamental values form the foundation of our campaign and will guide every policy decision we make."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-card rounded-3xl p-8 h-full border border-border/50 hover:border-accent/30 hover:shadow-soft-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <value.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground body-md">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
