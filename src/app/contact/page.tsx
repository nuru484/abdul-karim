"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    description: "Mon-Fri, 9am-5pm EST",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@amorgan.com",
    description: "We'll respond within 24 hours",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "123 Democracy Avenue",
    description: "Capital City, CC 10001",
  },
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
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

export default function Contact() {
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
              Contact Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 sm:mb-6 leading-tight">
              Get in Touch
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              We'd love to hear from you. Reach out with questions, feedback, or
              to get involved in the campaign.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 xl:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
          >
            {contactInfo.map((item) => (
              <motion.div
                key={item.label}
                variants={itemVariants}
                className="bg-card/95 backdrop-blur-sm p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-border/50 hover:shadow-xl transition-all duration-300 hover:border-accent/30 text-center group"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 sm:mb-5 group-hover:bg-accent/20 transition-colors">
                  <item.icon size={24} className="text-accent sm:w-7 sm:h-7" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2">
                  {item.label}
                </h3>
                <p className="text-foreground font-medium text-base sm:text-lg mb-1">
                  {item.value}
                </p>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
