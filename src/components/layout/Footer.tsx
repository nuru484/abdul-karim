"use client";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Brand */}
          <Link href="/" className="inline-block">
            <span className="font-display text-2xl font-bold">
              <span className="text-accent">A.</span> Karim
            </span>
          </Link>

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <p className="text-center text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Abubakari Abdul Karim. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
