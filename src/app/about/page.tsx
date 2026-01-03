"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Heart,
  Users,
} from "lucide-react";

const timeline = [
  {
    year: "1995",
    title: "Community Organizer",
    description:
      "Began career as a community organizer in underserved neighborhoods, advocating for affordable housing and youth programs.",
    icon: Users,
  },
  {
    year: "2002",
    title: "State Representative",
    description:
      "Elected to State House of Representatives, championing education reform and small business support.",
    icon: BookOpen,
  },
  {
    year: "2008",
    title: "State Senator",
    description:
      "Won election to State Senate, becoming the youngest senator in state history and leading healthcare initiatives.",
    icon: Heart,
  },
  {
    year: "2012",
    title: "U.S. Senator",
    description:
      "Elected to U.S. Senate, focusing on economic policy, job creation, and infrastructure development.",
    icon: Briefcase,
  },
  {
    year: "2020",
    title: "Senate Majority Leader",
    description:
      "Appointed Senate Majority Leader, successfully passing landmark bipartisan legislation.",
    icon: Award,
  },
  {
    year: "2024",
    title: "Presidential Campaign",
    description:
      "Launched presidential campaign with a vision to unite the nation and create opportunity for all.",
    icon: GraduationCap,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 sm:pb-20 lg:pb-24 bg-linear-to-b from-primary via-primary to-primary/95 overflow-hidden">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 sm:mb-6">
              About A. Morgan
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 sm:mb-6 leading-tight">
              A Leader Driven by Purpose
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              A lifetime of service, a vision for the future, and an unwavering
              commitment to the American people.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 xl:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:sticky lg:top-32"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl h-96 sm:h-112 lg:h-128">
                  <Image
                    src="/hero-portrait.jpg"
                    alt="Abubakari Abdul-Karim - Political Leader"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/30 via-primary/5 to-transparent" />
                </div>

                <div className="absolute inset-0 bg-linear-to-t from-primary/30 via-primary/5 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
                Biography
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
                A Story of Service
              </h2>
              <div className="space-y-4 sm:space-y-5 text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed">
                <p>
                  Born in a small town to immigrant parents who came to this
                  country with nothing but hope and determination, A. Morgan
                  learned early the values of hard work, perseverance, and
                  community.
                </p>
                <p>
                  After graduating with honors from State University, Morgan
                  chose a path of public service over lucrative private sector
                  opportunities. Starting as a community organizer in
                  underserved neighborhoods, they witnessed firsthand the
                  challenges facing working families.
                </p>
                <p>
                  This experience sparked a lifelong commitment to creating
                  policies that expand opportunity and ensure that the American
                  dream remains within reach for everyone, regardless of their
                  background or circumstances.
                </p>
                <p>
                  Over 25 years in public service, Morgan has built a reputation
                  as a consensus builder and problem solver. Whether working
                  across the aisle to pass landmark legislation or standing firm
                  on principles of justice and equality, Morgan has demonstrated
                  the kind of principled leadership our nation needs.
                </p>
                <p>
                  A devoted parent of two and married to their college
                  sweetheart, Morgan understands the concerns of everyday
                  families. This personal connection informs every policy
                  decision and drives the commitment to building a better future
                  for the next generation.
                </p>
              </div>

              {/* Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-6 sm:mt-8 lg:mt-10 p-6 sm:p-8 bg-muted/50 rounded-xl sm:rounded-2xl border-l-4 border-accent shadow-lg"
              >
                <p className="font-display text-lg sm:text-xl text-foreground italic mb-3 sm:mb-4 leading-relaxed">
                  "Public service is not about personal ambition—it's about the
                  privilege of serving something greater than ourselves. Every
                  decision I make is guided by one simple question: Will this
                  make life better for the people who need it most?"
                </p>
                <p className="text-accent font-semibold text-sm sm:text-base">
                  — A. Karim
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 xl:py-28 bg-linear-to-b from-muted/30 via-muted/50 to-background overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <span className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
              Political Journey
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              A Lifetime of Service
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto"
          >
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                variants={itemVariants}
                className="relative pl-8 sm:pl-10 pb-10 sm:pb-12 last:pb-0"
              >
                {/* Timeline Line */}
                {index !== timeline.length - 1 && (
                  <div className="absolute left-4 sm:left-5 top-12 w-0.5 h-full bg-border" />
                )}

                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent flex items-center justify-center shadow-lg">
                  <item.icon
                    size={18}
                    className="text-accent-foreground sm:w-5 sm:h-5"
                  />
                </div>

                <div className="ml-4 sm:ml-6 bg-card/95 backdrop-blur-sm p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-border/50 hover:shadow-xl transition-all duration-300 hover:border-accent/30">
                  <span className="text-accent font-bold text-base sm:text-lg">
                    {item.year}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground mt-1 mb-2 sm:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
