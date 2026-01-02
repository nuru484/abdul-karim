"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-portrait.jpg";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/95 to-primary/80" />

      {/* Content */}
      <div className="container-custom relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
            >
              For a Stronger Tomorrow
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="heading-xl text-primary-foreground mb-6"
            >
              Leadership That <span className="text-accent">Unites</span> and{" "}
              <span className="text-accent">Inspires</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="body-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto lg:mx-0"
            >
              Together, we can build a nation where every citizen has the
              opportunity to thrive. Join our movement for progress, unity, and
              a brighter future.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" size="lg" asChild>
                <Link href="/get-involved">
                  Join the Movement
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link href="/vision">
                  <Play className="mr-2" size={18} />
                  Read the Vision
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-12 pt-8 border-t border-primary-foreground/10"
            >
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center lg:text-left">
                  <div className="font-display text-3xl lg:text-4xl font-bold text-accent">
                    25+
                  </div>
                  <div className="text-sm text-primary-foreground/60">
                    Years of Service
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="font-display text-3xl lg:text-4xl font-bold text-accent">
                    1M+
                  </div>
                  <div className="text-sm text-primary-foreground/60">
                    Supporters
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="font-display text-3xl lg:text-4xl font-bold text-accent">
                    50
                  </div>
                  <div className="text-sm text-primary-foreground/60">
                    States Visited
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-3/4">
                <Image
                  src={heroImage}
                  alt="A. Morgan - Political Leader"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-accent/30 rounded-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-primary-foreground/50">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-current rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
