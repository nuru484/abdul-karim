"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AboutPreview() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 xl:py-28 bg-linear-to-b from-muted/30 via-muted/50 to-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
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

            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 lg:right-8 bg-card/95 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-2xl max-w-70 sm:max-w-xs border border-border/50"
            >
              <p className="font-display text-base sm:text-lg text-foreground italic leading-relaxed">
                "The measure of our success is the opportunity we create for
                others."
              </p>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-muted-foreground font-semibold">
                — A. Karim
              </p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
              About A. Karim
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              A Leader Forged by Experience
            </h2>
            <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed">
              <p>
                With over 15 years of dedicated public service, A. Karim has
                been a steadfast advocate for working families, educational
                reform, and sustainable economic growth.
              </p>
              <p>
                From serving as a community organizer to leading statewide
                initiatives, Morgan has built a reputation for bringing people
                together to solve complex problems with practical, bipartisan
                solutions.
              </p>
              <p>
                As the child of immigrant parents who built their Ghanaian dream
                through hard work and determination, Karim understands the
                values that make our nation great.
              </p>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-wrap gap-6 sm:gap-8 lg:gap-10">
              <div className="group">
                <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-accent transition-transform duration-300 group-hover:scale-110">
                  12
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium mt-1">
                  Years in Senate
                </div>
              </div>
              <div className="group">
                <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-accent transition-transform duration-300 group-hover:scale-110">
                  47
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium mt-1">
                  Bills Passed
                </div>
              </div>
              <div className="group">
                <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-accent transition-transform duration-300 group-hover:scale-110">
                  8
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium mt-1">
                  Awards Received
                </div>
              </div>
            </div>

            <Button
              className="mt-6 sm:mt-8 group shadow-lg hover:shadow-xl transition-all duration-300"
              variant="default"
              size="lg"
              asChild
            >
              <Link href="/about" className="flex items-center">
                Read Full Biography
                <ArrowRight
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  size={18}
                />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
