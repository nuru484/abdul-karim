"use client";
import { motion } from "framer-motion";
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
    featured: true,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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

  const featuredPost = blogPosts.find((post) => post.featured);

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
              News & Updates
            </span>
            <h1 className="heading-xl text-primary-foreground mb-6">
              Stay Informed
            </h1>
            <p className="body-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Get the latest updates on our campaign, policy announcements, and
              events happening across the nation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link href={`/blog/${featuredPost.id}`} className="group block">
                <div className="grid lg:grid-cols-2 gap-8 bg-card rounded-3xl overflow-hidden border border-border/50 hover:shadow-soft-xl transition-all duration-300">
                  <div className="aspect-16/10 lg:aspect-auto overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 w-fit">
                      Featured
                    </span>
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                      {featuredPost.category}
                    </span>
                    <h2 className="heading-md text-foreground mt-2 mb-4 group-hover:text-accent transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground body-md mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar size={14} className="mr-2" />
                      {featuredPost.date}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Search and Filter */}
      <section className="py-8 bg-background border-b border-border/50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-80">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                size={18}
              />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-11 h-12 rounded-xl"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "accent" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts
              .filter((p) => !p.featured)
              .map((post) => (
                <motion.article
                  key={post.id}
                  variants={itemVariants}
                  className="group"
                >
                  <Link href={`/blog/${post.id}`} className="block h-full">
                    <div className="bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-accent/30 hover:shadow-soft-lg transition-all duration-300 h-full flex flex-col">
                      <div className="aspect-16/10 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-1">
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
                        <p className="text-muted-foreground body-md line-clamp-3 flex-1">
                          {post.excerpt}
                        </p>
                        <div className="mt-4 flex items-center text-accent font-medium">
                          Read More
                          <ArrowRight
                            size={16}
                            className="ml-2 group-hover:translate-x-1 transition-transform"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
          </motion.div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No articles found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
