"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPreview() {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-4/3">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop"
                alt="A. Morgan speaking at a community event"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent" />
            </div>

            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 lg:right-8 bg-card p-6 rounded-2xl shadow-soft-xl max-w-xs border border-border/50"
            >
              <p className="font-display text-lg text-foreground italic">
                "The measure of our success is the opportunity we create for
                others."
              </p>
              <p className="mt-3 text-sm text-muted-foreground font-semibold">
                — A. Morgan
              </p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              About the Candidate
            </span>
            <h2 className="heading-lg text-foreground mb-6">
              A Leader Forged by Experience
            </h2>
            <div className="space-y-4 text-muted-foreground body-md">
              <p>
                With over 25 years of dedicated public service, A. Morgan has
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
                As the child of immigrant parents who built their American dream
                through hard work and determination, Morgan understands the
                values that make our nation great.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-6">
              <div>
                <div className="font-display text-3xl font-bold text-accent">
                  12
                </div>
                <div className="text-sm text-muted-foreground">
                  Years in Senate
                </div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-accent">
                  47
                </div>
                <div className="text-sm text-muted-foreground">
                  Bills Passed
                </div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-accent">
                  8
                </div>
                <div className="text-sm text-muted-foreground">
                  Awards Received
                </div>
              </div>
            </div>

            <Button className="mt-8" variant="default" size="lg" asChild>
              <Link href="/about">
                Read Full Biography
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
