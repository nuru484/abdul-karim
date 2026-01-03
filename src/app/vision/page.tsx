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
      <section className="pt-32 pb-20 bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              Vision & Policies
            </span>
            <h1 className="heading-xl text-primary-foreground mb-6">
              A Bold Vision for a Brighter Tomorrow
            </h1>
            <p className="body-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10">
              Our comprehensive policy platform addresses the challenges facing
              our nation and charts a course toward prosperity, equality, and
              opportunity for all.
            </p>
            <Button variant="hero" size="lg">
              <Download className="mr-2" size={18} />
              Download Full Manifesto
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="heading-lg text-foreground mb-8">Our Vision</h2>
            <p className="font-display text-2xl sm:text-3xl text-foreground leading-relaxed">
              "We envision an America where every citizen has the opportunity to
              succeed, where our economy works for working families, and where
              the promise of the American dream is within reach for{" "}
              <span className="text-accent">all</span>, not just the privileged
              few."
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="w-16 h-0.5 bg-accent" />
              <span className="text-muted-foreground font-semibold">
                A. Morgan
              </span>
              <div className="w-16 h-0.5 bg-accent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Our Policies
            </span>
            <h2 className="heading-lg text-foreground mb-4">
              Comprehensive Solutions for Real Challenges
            </h2>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Click on each policy area to learn more about our detailed plans
              and commitments.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {policies.map((policy) => (
                <motion.div key={policy.id} variants={itemVariants}>
                  <AccordionItem
                    value={policy.id}
                    className="bg-card rounded-2xl border border-border/50 overflow-hidden data-[state=open]:shadow-soft-lg transition-shadow"
                  >
                    <AccordionTrigger className="px-6 py-6 hover:no-underline group">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl ${policy.color} flex items-center justify-center`}
                        >
                          <policy.icon size={24} />
                        </div>
                        <div className="text-left">
                          <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                            {policy.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mt-1 hidden sm:block">
                            {policy.summary}
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="pt-4 border-t border-border/50">
                        <p className="text-muted-foreground mb-6">
                          {policy.fullDescription}
                        </p>
                        <h4 className="font-semibold text-foreground mb-4">
                          Key Initiatives:
                        </h4>
                        <ul className="space-y-3">
                          {policy.details.map((detail, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <CheckCircle
                                size={18}
                                className="text-accent mt-0.5 shrink-0"
                              />
                              <span className="text-muted-foreground">
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
