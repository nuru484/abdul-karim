"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full relative min-h-screen flex items-center bg-primary">
      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-center lg:text-left px-4 sm:px-0"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
              >
                Leadership That <span className="text-accent">Unites</span> and{" "}
                <span className="text-accent">Inspires</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg sm:text-xl text-primary-foreground/80 mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                Together, we can build a nation where every citizen has the
                opportunity to thrive. Join our movement for progress, unity,
                and a brighter future.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
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
                className="mt-10 sm:mt-12 pt-8 border-t border-primary-foreground/10"
              >
                <div className="grid grid-cols-3 gap-4 sm:gap-8">
                  <div className="text-center lg:text-left">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-1">
                      15+
                    </div>
                    <div className="text-xs sm:text-sm text-primary-foreground/60">
                      Years of Service
                    </div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-1">
                      1M+
                    </div>
                    <div className="text-xs sm:text-sm text-primary-foreground/60">
                      Supporters
                    </div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-1">
                      13
                    </div>
                    <div className="text-xs sm:text-sm text-primary-foreground/60">
                      Regions Visited
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
                    src="/hero-portrait.jpg"
                    alt="A. Morgan - Political Leader"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent rounded-2xl -z-10 opacity-80" />
                <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-accent/30 rounded-2xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
