"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
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
      <section className="pt-32 pb-20 bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              About A. Morgan
            </span>
            <h1 className="heading-xl text-primary-foreground mb-6">
              A Leader Driven by Purpose
            </h1>
            <p className="body-lg text-primary-foreground/80 max-w-2xl mx-auto">
              A lifetime of service, a vision for the future, and an unwavering
              commitment to the American people.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-32"
            >
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop"
                  alt="A. Morgan Portrait"
                  className="w-full aspect-3/4 object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/30 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-lg text-foreground mb-6">
                Full Biography
              </h2>
              <div className="space-y-6 text-muted-foreground body-md">
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
              <div className="mt-10 p-8 bg-muted/50 rounded-3xl border-l-4 border-accent">
                <p className="font-display text-xl text-foreground italic mb-4">
                  "Public service is not about personal ambition—it's about the
                  privilege of serving something greater than ourselves. Every
                  decision I make is guided by one simple question: Will this
                  make life better for the people who need it most?"
                </p>
                <p className="text-accent font-semibold">— A. Morgan</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Political Journey
            </span>
            <h2 className="heading-lg text-foreground">
              A Lifetime of Service
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                variants={itemVariants}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Timeline Line */}
                {index !== timeline.length - 1 && (
                  <div className="absolute left-3.75 top-12 w-0.5 h-full bg-border" />
                )}

                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                  <item.icon size={16} className="text-accent-foreground" />
                </div>

                <div className="ml-6 bg-card p-6 rounded-2xl border border-border/50 hover:shadow-soft transition-shadow">
                  <span className="text-accent font-bold text-lg">
                    {item.year}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-foreground mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="heading-md text-foreground mb-6 flex items-center gap-3">
                <GraduationCap className="text-accent" />
                Education
              </h3>
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-2xl border border-border/50">
                  <h4 className="font-semibold text-foreground">J.D., Law</h4>
                  <p className="text-muted-foreground">
                    Harvard Law School, 1992
                  </p>
                </div>
                <div className="bg-card p-6 rounded-2xl border border-border/50">
                  <h4 className="font-semibold text-foreground">
                    B.A., Political Science
                  </h4>
                  <p className="text-muted-foreground">
                    State University, 1989
                  </p>
                  <p className="text-sm text-accent mt-1">Summa Cum Laude</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="heading-md text-foreground mb-6 flex items-center gap-3">
                <Award className="text-accent" />
                Awards & Recognition
              </h3>
              <div className="space-y-4">
                {[
                  "TIME 100 Most Influential Leaders",
                  "Champion of Justice Award",
                  "Environmental Leadership Medal",
                  "Small Business Advocate of the Year",
                  "Veterans Affairs Excellence Award",
                ].map((award) => (
                  <div
                    key={award}
                    className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border/50"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-foreground">{award}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg text-primary-foreground mb-6">
              Ready to Learn More?
            </h2>
            <p className="body-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Discover the comprehensive policies and vision that will guide our
              nation forward.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link href="/vision">
                Explore Our Vision
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
