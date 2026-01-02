"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Heart,
  Leaf,
  Users,
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
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Investing in quality education from early childhood through higher learning for all citizens.",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description:
      "Ensuring affordable, accessible healthcare for every family without compromise on quality.",
    color: "bg-red-500/10 text-red-600",
  },
  {
    icon: Building,
    title: "Infrastructure",
    description:
      "Modernizing roads, bridges, and digital infrastructure to connect communities nationwide.",
    color: "bg-orange-500/10 text-orange-600",
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

export default function PoliciesPreview() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <SectionHeader
          label="Our Policies"
          title="A Vision for Progress"
          description="Comprehensive policies designed to address the challenges we face and create opportunities for every citizen."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-12"
        >
          {policies.map((policy) => (
            <motion.div
              key={policy.title}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-card rounded-3xl p-8 h-full border border-border/50 hover:border-accent/30 hover:shadow-soft-lg transition-all duration-300 flex gap-6">
                <div
                  className={`w-14 h-14 rounded-2xl ${policy.color} flex items-center justify-center shrink-0`}
                >
                  <policy.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {policy.title}
                  </h3>
                  <p className="text-muted-foreground body-md">
                    {policy.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="outline" size="lg" asChild>
            <Link href="/vision">
              View All Policies
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
