"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Briefcase,
  GraduationCap,
  Heart,
  Building,
  Users,
  Leaf,
  Download,
  CheckCircle,
} from "lucide-react";

const policies = [
  {
    id: "economy",
    icon: Briefcase,
    title: "Economy & Jobs",
    summary:
      "Creating sustainable employment and supporting small businesses for a thriving middle class.",
    color: "bg-blue-500/10 text-blue-600",
    details: [
      "Tax incentives for small businesses creating local jobs",
      "Investment in workforce development and job training programs",
      "Support for innovation and entrepreneurship",
      "Fair trade policies that protect American workers",
      "Living wage initiatives and worker protections",
    ],
    fullDescription:
      "Our economic plan focuses on rebuilding the middle class from the ground up. We believe that when working families thrive, the entire economy benefits. By investing in small businesses, creating pathways to good-paying jobs, and ensuring fair wages, we can build an economy that works for everyone, not just those at the top.",
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Education",
    summary:
      "Investing in quality education from early childhood through higher learning for all citizens.",
    color: "bg-purple-500/10 text-purple-600",
    details: [
      "Universal pre-K access for all families",
      "Increased teacher pay and classroom resources",
      "Affordable higher education and student debt relief",
      "STEM and vocational training expansion",
      "Mental health resources in every school",
    ],
    fullDescription:
      "Education is the foundation of opportunity. Our plan ensures every child has access to quality education from their earliest years through college and beyond. We will invest in our teachers, modernize our schools, and make higher education affordable for all who seek it.",
  },
  {
    id: "healthcare",
    icon: Heart,
    title: "Healthcare",
    summary:
      "Ensuring affordable, accessible healthcare for every family without compromise on quality.",
    color: "bg-red-500/10 text-red-600",
    details: [
      "Lower prescription drug costs through negotiation",
      "Protect and expand coverage for pre-existing conditions",
      "Expand access to mental health services",
      "Support rural healthcare facilities",
      "Medicare improvements for seniors",
    ],
    fullDescription:
      "Healthcare is a right, not a privilege. No family should face bankruptcy because of medical bills, and no one should have to choose between medication and groceries. Our healthcare plan focuses on lowering costs, expanding access, and ensuring quality care for every American.",
  },
  {
    id: "infrastructure",
    icon: Building,
    title: "Infrastructure",
    summary:
      "Modernizing roads, bridges, and digital infrastructure to connect communities nationwide.",
    color: "bg-orange-500/10 text-orange-600",
    details: [
      "Repair and upgrade aging roads and bridges",
      "Expand broadband access to rural communities",
      "Invest in public transportation systems",
      "Modernize airports and ports",
      "Clean water infrastructure for all communities",
    ],
    fullDescription:
      "Strong infrastructure is the backbone of a strong economy. Our plan will create millions of good-paying jobs while rebuilding America's roads, bridges, and digital networks. We will ensure that every community, urban and rural, has the infrastructure needed to compete in the 21st century.",
  },
  {
    id: "youth-women",
    icon: Users,
    title: "Youth & Women",
    summary:
      "Empowering the next generation and ensuring equal opportunities for women in all sectors.",
    color: "bg-pink-500/10 text-pink-600",
    details: [
      "Equal pay legislation and enforcement",
      "Paid family leave for all workers",
      "Youth mentorship and internship programs",
      "Support for women-owned businesses",
      "Childcare affordability initiatives",
    ],
    fullDescription:
      "The future belongs to our youth, and equality for women strengthens our entire society. We will fight for policies that ensure equal pay, provide support for working families, and create pathways for young people to succeed. By investing in our youth and empowering women, we build a stronger, more prosperous nation.",
  },
  {
    id: "environment",
    icon: Leaf,
    title: "Environment",
    summary:
      "Protecting our planet while creating green jobs and ensuring clean air and water for all.",
    color: "bg-green-500/10 text-green-600",
    details: [
      "Transition to clean energy sources",
      "Green job creation and workforce development",
      "Conservation of public lands and waters",
      "Environmental justice for vulnerable communities",
      "Climate resilience infrastructure",
    ],
    fullDescription:
      "We have a responsibility to protect our planet for future generations. Our environmental plan creates millions of clean energy jobs while reducing emissions and protecting our air and water. We will lead the world in the transition to a sustainable economy while ensuring no community is left behind.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Vision() {
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
              Vision & Policies
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 sm:mb-6 leading-tight">
              A Bold Vision for a Brighter Tomorrow
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
              Our comprehensive policy platform addresses the challenges facing
              our nation and charts a course toward prosperity, equality, and
              opportunity for all.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="relative py-16 sm:py-20 lg:py-24 xl:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
              Our Vision
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 sm:mb-8 leading-tight">
              Building Ghana's Future Together
            </h2>
            <p className="font-display text-xl sm:text-2xl lg:text-3xl text-foreground leading-relaxed">
              "We envision a Ghana where every citizen has the opportunity to
              thrive, where our economy delivers prosperity for ordinary
              families, and where the promise of national development reaches{" "}
              <span className="text-accent font-semibold">all</span> Ghanaians,
              regardless of background or region."
            </p>
            <div className="mt-6 sm:mt-8 flex items-center justify-center gap-3 sm:gap-4">
              <div className="w-12 sm:w-16 h-0.5 bg-accent" />
              <span className="text-muted-foreground font-semibold text-sm sm:text-base">
                A. Karim
              </span>
              <div className="w-12 sm:w-16 h-0.5 bg-accent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 xl:py-28 bg-linear-to-b from-muted/30 via-muted/50 to-background overflow-hidden">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
              Our Policies
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Comprehensive Solutions for Real Challenges
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Click on each policy area to learn more about our detailed plans
              and commitments.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-5xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {policies.map((policy) => (
                <motion.div key={policy.id} variants={itemVariants}>
                  <AccordionItem
                    value={policy.id}
                    className="bg-card/95 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-border/50 overflow-hidden data-[state=open]:shadow-xl data-[state=open]:border-accent/30 transition-all duration-300"
                  >
                    <AccordionTrigger className="px-5 sm:px-6 lg:px-8 py-5 sm:py-6 hover:no-underline group">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div
                          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl ${policy.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                        >
                          <policy.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div className="text-left flex-1">
                          <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-semibold text-foreground group-hover:text-accent transition-colors">
                            {policy.title}
                          </h3>
                          <p className="text-muted-foreground text-xs sm:text-sm mt-1 hidden sm:block leading-relaxed">
                            {policy.summary}
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 sm:px-6 lg:px-8 pb-5 sm:pb-6 lg:pb-8">
                      <div className="pt-4 sm:pt-5 border-t border-border/50">
                        <p className="text-muted-foreground text-sm sm:text-base mb-5 sm:mb-6 leading-relaxed">
                          {policy.fullDescription}
                        </p>
                        <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                          Key Initiatives:
                        </h4>
                        <ul className="space-y-3">
                          {policy.details.map((detail, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 sm:gap-3"
                            >
                              <CheckCircle
                                size={18}
                                className="text-accent mt-0.5 shrink-0 sm:w-5 sm:h-5"
                              />
                              <span className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                                {detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </>
  );
}
