"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Vision", href: "/vision" },
  { name: "Blog", href: "/blog" },
  { name: "Media", href: "/media" },
  { name: "Contact", href: "/contact" },
];

const bounceVariants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
};

const sheetVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll detection with threshold
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActiveLink = (href: string) => {
    return pathname === href;
  };

  const navbarBg =
    isScrolled || !isHome
      ? "bg-background/95 backdrop-blur-xl border-b border-border/40 shadow-sm"
      : "bg-primary backdrop-blur-md border-b border-primary-foreground/10";

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${navbarBg}`}
    >
      <nav className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group relative z-10"
          aria-label="Go to homepage"
        >
          <motion.span
            variants={bounceVariants}
            initial="initial"
            animate="animate"
            className={`font-display text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-200 ${
              isScrolled || !isHome
                ? "text-foreground"
                : "text-primary-foreground"
            }`}
          >
            <span
              className={isScrolled || !isHome ? "text-accent" : "text-accent"}
            >
              A.
            </span>{" "}
            Karim
          </motion.span>
        </Link>

        {/* Mobile Menu */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={`transition-colors ${
                isScrolled || !isHome
                  ? "text-foreground hover:bg-muted/80"
                  : "text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open main menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-full sm:w-95 p-0 bg-card">
            <motion.div
              variants={sheetVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col h-full"
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-6 border-b bg-background/50 backdrop-blur">
                <span className="font-display text-xl font-bold">
                  <span className="text-accent">A.</span> Karim
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-full"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Mobile Navigation */}
              <div className="flex-1 overflow-y-auto py-6 px-4">
                <div className="space-y-2">
                  {navLinks.map((link, index) => {
                    const isActive = isActiveLink(link.href);

                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block px-4 py-3 rounded-xl font-medium transition-all ${
                            isActive
                              ? "bg-accent/10 text-accent shadow-lg shadow-accent/20"
                              : "text-foreground hover:bg-muted"
                          }`}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Footer CTA */}
              <div className="p-6 border-t border-border bg-background/50 backdrop-blur">
                <Button
                  variant="accent"
                  size="lg"
                  className="w-full font-medium shadow-sm"
                  asChild
                >
                  <Link href="/donate" onClick={() => setMobileMenuOpen(false)}>
                    Donate
                  </Link>
                </Button>
              </div>
            </motion.div>
          </SheetContent>
        </Sheet>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = isActiveLink(link.href);

            return (
              <Link key={link.name} href={link.href} className="relative group">
                <span
                  className={`block px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? isScrolled || !isHome
                        ? "text-accent"
                        : "text-accent"
                      : `${
                          isScrolled || !isHome
                            ? "text-muted-foreground hover:text-foreground"
                            : "text-primary-foreground/90 hover:text-primary-foreground"
                        }`
                  }`}
                >
                  {link.name}
                </span>

                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="navbar-active"
                    className={`absolute inset-0 rounded-lg -z-10 ${
                      isScrolled || !isHome ? "bg-accent/10" : "bg-accent/20"
                    }`}
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.6,
                    }}
                  />
                )}

                {/* Hover indicator */}
                <span
                  className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10 ${
                    isScrolled || !isHome
                      ? "bg-accent/5"
                      : "bg-primary-foreground/10"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant={isScrolled || !isHome ? "accent" : "hero"}
            size="sm"
            className="font-medium shadow-sm hover:shadow-md transition-shadow"
            asChild
          >
            <Link href="/donate">Donate</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
