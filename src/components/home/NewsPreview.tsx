"use client";
import { motion } from "framer-motion";
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

export default function NewsPreview() {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-custom">
        <SectionHeader
          label="Latest News"
          title="Stay Informed"
          description="Get the latest updates on our campaign, policy announcements, and events happening across the nation."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="group"
            >
              <Link href={`/blog/${post.id}`} className="block">
                <div className="bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-accent/30 hover:shadow-soft-lg transition-all duration-300">
                  <div className="aspect-16/10 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                        {post.category}
                      </span>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar size={14} className="mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground body-md line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="outline" size="lg" asChild>
            <Link href="/blog">
              Read More News
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
