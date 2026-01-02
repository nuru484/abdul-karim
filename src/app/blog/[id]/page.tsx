"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Calendar, ArrowLeft, Share2, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "Announcing Our Climate Action Plan for 2024",
    excerpt:
      "A comprehensive strategy to combat climate change while creating millions of green jobs and ensuring energy independence for generations to come.",
    date: "December 15, 2024",
    category: "Environment",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&auto=format&fit=crop",
    content: `
      <p>Today, we are proud to announce our comprehensive Climate Action Plan for 2024 and beyond. This plan represents our commitment to addressing the climate crisis while creating economic opportunity for all Americans.</p>
      
      <h2>Key Pillars of Our Plan</h2>
      
      <p>Our Climate Action Plan is built on four fundamental pillars that will guide our approach to environmental policy:</p>
      
      <h3>1. Clean Energy Transition</h3>
      <p>We will accelerate the transition to 100% clean energy by investing in renewable sources like solar, wind, and hydroelectric power. Our plan includes incentives for households and businesses to adopt clean energy solutions, making sustainable choices accessible and affordable for everyone.</p>
      
      <h3>2. Green Job Creation</h3>
      <p>This plan will create millions of good-paying jobs in clean energy industries. From manufacturing solar panels to building electric vehicle infrastructure, we're committed to ensuring that the clean energy economy provides opportunity for workers across all skill levels and regions.</p>
      
      <h3>3. Environmental Justice</h3>
      <p>Communities that have borne the brunt of environmental pollution deserve special attention. Our plan includes targeted investments in environmental justice communities, ensuring that the benefits of our clean energy transition are shared equitably.</p>
      
      <h3>4. International Leadership</h3>
      <p>Climate change is a global challenge that requires global solutions. We will restore America's leadership in international climate negotiations and work with our allies to hold all nations accountable for their environmental commitments.</p>
      
      <h2>Timeline and Implementation</h2>
      
      <p>Our Climate Action Plan includes specific milestones and accountability measures. In the first 100 days, we will rejoin international climate agreements and begin the process of updating our national emissions standards. Within the first year, we will launch major infrastructure investments in clean energy and begin workforce development programs to prepare Americans for jobs in the green economy.</p>
      
      <p>This is more than just policy—it's our commitment to future generations. Together, we can build a sustainable future while creating prosperity for all Americans.</p>
    `,
  },
  {
    id: 2,
    title: "Town Hall Highlights: Education Reform Discussion",
    excerpt:
      "Key takeaways from our recent town hall where we discussed transforming our education system for the 21st century.",
    date: "December 10, 2024",
    category: "Education",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&auto=format&fit=crop",
    content: `
      <p>Last week, we held a town hall focused entirely on education reform. Hundreds of parents, teachers, students, and community members joined us to discuss how we can transform our education system to meet the challenges of the 21st century.</p>
      
      <h2>What We Heard</h2>
      
      <p>The message from attendees was clear: our education system needs significant reform to prepare students for success in a rapidly changing world. Here are the key themes that emerged:</p>
      
      <h3>Teacher Support</h3>
      <p>Teachers are the backbone of our education system, yet they often lack the resources and support they need. We heard calls for higher teacher pay, smaller class sizes, and more professional development opportunities.</p>
      
      <h3>Equal Access</h3>
      <p>The quality of education should not depend on your zip code. Attendees emphasized the need for equitable funding and resources across all schools, regardless of their location or the income levels of their communities.</p>
      
      <h3>Modern Curriculum</h3>
      <p>Students need skills that prepare them for the jobs of tomorrow. This includes not just STEM education, but also critical thinking, creativity, and social-emotional learning.</p>
      
      <h2>Our Commitments</h2>
      
      <p>Based on what we heard, we are committing to specific education reforms that will transform our schools and prepare every student for success.</p>
    `,
  },
  {
    id: 3,
    title: "Economic Recovery: A Path Forward",
    excerpt:
      "Our detailed plan to strengthen the middle class, support small businesses, and build an economy that works for everyone.",
    date: "December 5, 2024",
    category: "Economy",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop",
    content: `
      <p>Building an economy that works for everyone—not just those at the top—is at the heart of our campaign. Today, we're releasing our comprehensive economic recovery plan that will strengthen the middle class and create opportunity for all Americans.</p>
      
      <h2>Supporting Small Businesses</h2>
      
      <p>Small businesses are the engine of our economy, creating two out of every three new jobs in America. Our plan includes targeted support for small businesses through tax incentives, access to capital, and reduced regulatory burden.</p>
      
      <h2>Investing in Workers</h2>
      
      <p>Every worker deserves a fair wage and the ability to support their family. Our plan includes raising the minimum wage, strengthening worker protections, and expanding access to job training programs.</p>
      
      <h2>Building Infrastructure</h2>
      
      <p>Modern infrastructure is essential for economic growth. Our infrastructure plan will create millions of jobs while improving our roads, bridges, and digital networks.</p>
    `,
  },
];

export default function BlogDetail() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id)) || blogPosts[0];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              href="/blog"
              className="inline-flex items-center text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to News
            </Link>
            <span className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              {post.category}
            </span>
            <h1 className="heading-lg text-primary-foreground mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-primary-foreground/70">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                {post.date}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-background">
        <div className="container-custom -mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="rounded-3xl overflow-hidden shadow-soft-xl">
              <img
                src={post.image}
                alt={post.title}
                className="w-full aspect-21/9 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="prose prose-lg max-w-none"
            >
              <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="[&>p]:text-muted-foreground [&>p]:leading-relaxed [&>p]:mb-6 [&>h2]:font-display [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:text-foreground [&>h2]:mt-10 [&>h2]:mb-4 [&>h3]:font-display [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-foreground [&>h3]:mt-8 [&>h3]:mb-3"
              />
            </motion.article>

            {/* Share */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-border"
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <span className="text-muted-foreground font-medium flex items-center gap-2">
                  <Share2 size={18} />
                  Share this article
                </span>
                <div className="flex gap-3">
                  <Button variant="outline" size="icon" className="rounded-xl">
                    <Facebook size={18} />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-xl">
                    <Twitter size={18} />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
