"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("We'll respond as soon as possible.");
  };

  return (
    <>
      <section className="pt-32 pb-20 bg-primary">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              Contact
            </span>
            <h1 className="heading-xl text-primary-foreground mb-6">
              Get in Touch
            </h1>
            <p className="body-lg text-primary-foreground/80 max-w-2xl mx-auto">
              We'd love to hear from you. Reach out with questions or feedback.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-md mb-8">Contact Information</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-muted-foreground">
                      123 Democracy Avenue
                      <br />
                      Capital City, CC 10001
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">contact@amorgan.com</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                {[Facebook, Twitter, Instagram].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
              <div className="mt-8 rounded-2xl overflow-hidden h-64 bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Map Placeholder</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 lg:p-12 rounded-3xl border border-border/50"
            >
              <h2 className="heading-md mb-8">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name"
                    required
                    className="h-12 rounded-xl"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="h-12 rounded-xl"
                  />
                </div>
                <Input
                  placeholder="Subject"
                  required
                  className="h-12 rounded-xl"
                />
                <Textarea
                  placeholder="Your Message..."
                  rows={5}
                  required
                  className="rounded-xl"
                />
                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="w-full"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
