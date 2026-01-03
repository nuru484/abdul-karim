"use client";
import { motion, Variants, Transition } from "framer-motion";
import Link from "next/link";
import { Calendar, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Announcing Our Climate Action Plan for 2024",
    excerpt:
      "A comprehensive strategy to combat climate change while creating millions of green jobs and ensuring energy independence for generations to come.",
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
  {
    id: 4,
    title: "Healthcare for All: Our Commitment to Coverage",
    excerpt:
      "Exploring our plan to ensure every American has access to affordable, quality healthcare without exception.",
    date: "November 28, 2024",
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Infrastructure Week: Building America's Future",
    excerpt:
      "Announcing major infrastructure initiatives that will create jobs and modernize our transportation networks.",
    date: "November 20, 2024",
    category: "Infrastructure",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Supporting Our Veterans: New Initiatives Announced",
    excerpt:
      "Details on our comprehensive plan to support veterans with healthcare, housing, and employment opportunities.",
    date: "November 15, 2024",
    category: "Veterans",
    image:
      "https://images.unsplash.com/photo-1569974507005-6dc61f97fb5c?w=600&auto=format&fit=crop",
  },
];

const categories = [
  "All",
  "Economy",
  "Education",
  "Healthcare",
  "Environment",
  "Infrastructure",
  "Veterans",
];

// Transition typed explicitly
const itemTransition: Transition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
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

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 sm:pb-20 lg:pb-24 bg-linear-to-b from-primary to-primary/95 overflow-hidden">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">
              News & Updates
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Stay Informed
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Get the latest updates on our campaign, policy announcements, and
              events happening across the nation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="relative py-16 sm:py-20 lg:py-24 xl:py-28 bg-linear-to-b from-muted/30 via-muted/50 to-muted/30 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col  lg:items-start lg:flex-row gap-8 lg:gap-12">
            {/* Left Sidebar - Search & Filter */}
            <aside className="lg:w-80 shrink-0">
              <div className="sticky top-24 space-y-6">
                {/* Search Box */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-card rounded-2xl sm:rounded-3xl border border-border/50 p-6 shadow-sm"
                >
                  <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                    Search Articles
                  </h3>
                  <div className="relative">
                    <Search
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                      size={18}
                    />
                    <Input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-11 h-12 rounded-xl border-border/50 focus:border-accent/50 transition-colors"
                    />
                  </div>
                </motion.div>

                {/* Categories Filter */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.1,
                  }}
                  className="bg-card rounded-2xl sm:rounded-3xl border border-border/50 p-6 shadow-sm"
                >
                  <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                    Categories
                  </h3>
                  <div className="flex flex-col gap-2">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={
                          selectedCategory === category ? "default" : "ghost"
                        }
                        onClick={() => setSelectedCategory(category)}
                        className={`justify-start rounded-xl transition-all duration-300 ${
                          selectedCategory === category
                            ? "bg-accent text-accent-foreground hover:bg-accent/90"
                            : "hover:bg-accent/10 hover:text-accent"
                        }`}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>

                  {(searchQuery || selectedCategory !== "All") && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory("All");
                      }}
                      className="w-full mt-4 rounded-xl"
                    >
                      Clear Filters
                    </Button>
                  )}
                </motion.div>

                {/* Results Count */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.2,
                  }}
                  className="bg-card rounded-2xl sm:rounded-3xl border border-border/50 p-6 shadow-sm"
                >
                  <p className="text-sm text-muted-foreground">
                    Showing{" "}
                    <span className="font-semibold text-foreground">
                      {filteredPosts.length}
                    </span>{" "}
                    {filteredPosts.length === 1 ? "article" : "articles"}
                  </p>
                </motion.div>
              </div>
            </aside>

            {/* Main Content - Blog Grid */}
            <div className="flex-1 min-w-0">
              {filteredPosts.length > 0 ? (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
                >
                  {filteredPosts.map((post) => (
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
                                <Calendar
                                  size={14}
                                  className="mr-1.5 shrink-0"
                                />
                                <span>{post.date}</span>
                              </div>
                            </div>

                            <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                              {post.title}
                            </h3>

                            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed line-clamp-3 flex-1">
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
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center py-16 sm:py-20"
                >
                  <div className="bg-card rounded-2xl sm:rounded-3xl border border-border/50 p-12 max-w-md mx-auto shadow-sm">
                    <Search
                      size={48}
                      className="mx-auto mb-4 text-muted-foreground/50"
                    />
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      No Articles Found
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      No articles match your current search criteria.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory("All");
                      }}
                      className="rounded-xl"
                    >
                      Clear All Filters
                    </Button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
