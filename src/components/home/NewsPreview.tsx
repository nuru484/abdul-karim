"use client";
import { motion, Variants, Transition } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/ui/section-header";

const blogPosts = [
  {
    id: 1,
    title: "Announcing Our Climate Action Plan for 2024",
    excerpt:
      "A comprehensive strategy to combat climate change while creating millions of green jobs and ensuring energy independence.",
    date: "December 15, 2024",
    category: "Environment",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Town Hall Highlights: Education Reform Discussion",
    excerpt:
      "Key takeaways from our recent town hall where we discussed transforming our education system for the 21st century.",
    date: "December 10, 2024",
    category: "Education",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Economic Recovery: A Path Forward",
    excerpt:
      "Our detailed plan to strengthen the middle class, support small businesses, and build an economy that works for everyone.",
    date: "December 5, 2024",
    category: "Economy",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop",
  },
];

// Transition typed explicitly to satisfy TS
const itemTransition: Transition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number], // cubic bezier
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: itemTransition,
  },
};

export default function NewsPreview() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 xl:py-28 bg-linear-to-b from-muted/30 via-muted/50 to-muted/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <SectionHeader
            label="Latest News"
            title="Stay Informed"
            description="Get the latest updates on our campaign, policy announcements, and events happening across the nation."
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12 lg:mb-16"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="group h-full"
            >
              <Link href={`/blog/${post.id}`} className="block h-full">
                <div className="relative bg-card rounded-2xl sm:rounded-3xl overflow-hidden border border-border/50 hover:border-accent/50 shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-linear-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

                  {/* Image */}
                  <div className="relative aspect-16/10 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <div className="relative z-20 p-5 sm:p-6 flex-1 flex flex-col">
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-accent bg-accent/10 rounded-full uppercase tracking-wider">
                        {post.category}
                      </span>
                      <div className="flex items-center text-muted-foreground text-xs sm:text-sm">
                        <Calendar size={14} className="mr-1.5 shrink-0" />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed line-clamp-2 flex-1">
                      {post.excerpt}
                    </p>

                    {/* Read more indicator */}
                    <div className="mt-4 flex items-center text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1">
                      <span>Read more</span>
                      <ArrowRight size={16} className="ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="group shadow-md hover:shadow-lg transition-all duration-300"
            asChild
          >
            <Link href="/blog" className="flex items-center">
              Read More News
              <ArrowRight
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                size={18}
              />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
