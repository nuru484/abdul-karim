"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function CTASection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      "You've been added to our newsletter. Thank you for your support!"
    );

    setEmail("");
  };

  return (
    <section className="section-padding bg-primary relative overflow-hidden">
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

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
          >
            Join the Movement
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-lg text-primary-foreground mb-6"
          >
            Be Part of the Change
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="body-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto"
          >
            Stay updated with the latest news, events, and ways to get involved.
            Together, we can make a difference.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8"
          >
            <div className="relative flex-1">
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                size={18}
              />
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pl-11 h-14 rounded-2xl bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent"
              />
            </div>
            <Button type="submit" variant="hero" size="lg">
              Subscribe
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero-outline" size="lg" asChild>
              <Link href="/get-involved">Volunteer Today</Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link href="/get-involved">Make a Donation</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
