"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Vision", href: "/vision" },
  { name: "Blog", href: "/blog" },
  { name: "Media", href: "/media" },
  { name: "Endorsements", href: "/endorsements" },
  { name: "Get Involved", href: "/get-involved" },
  { name: "Donate", href: "/donate" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHome = pathname === "/";

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHome
            ? "bg-card/95 backdrop-blur-md shadow-soft border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div
                className={`font-display text-2xl font-bold transition-colors ${
                  isScrolled || !isHome
                    ? "text-primary"
                    : "text-primary-foreground"
                }`}
              >
                <span className="text-accent">A.</span> Morgan
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "text-accent"
                        : isScrolled || !isHome
                        ? "text-foreground hover:text-accent"
                        : "text-primary-foreground/80 hover:text-primary-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex">
              <Button
                variant={isScrolled || !isHome ? "accent" : "hero"}
                size="sm"
                asChild
              >
                <Link href="/get-involved">Join the Movement</Link>
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className={`lg:hidden p-2 rounded-xl transition-colors ${
                isScrolled || !isHome
                  ? "text-foreground hover:bg-muted"
                  : "text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-0 right-0 h-full w-80 bg-card p-6 pt-24 shadow-soft-xl"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`block px-4 py-3 rounded-xl text-lg font-medium ${
                        pathname === link.href
                          ? "bg-accent/10 text-accent"
                          : "hover:bg-muted"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                <Button variant="accent" size="lg" className="mt-4" asChild>
                  <Link href="/get-involved">Join the Movement</Link>
                </Button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
