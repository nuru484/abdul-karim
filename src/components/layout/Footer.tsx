"use client";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const quickLinks = [
  { name: "About", href: "/about" },
  { name: "Vision & Policies", href: "/vision" },
  { name: "Blog", href: "/blog" },
  { name: "Media Gallery", href: "/media" },
];

const getInvolvedLinks = [
  { name: "Volunteer", href: "/get-involved" },
  { name: "Donate", href: "/get-involved" },
  { name: "Newsletter", href: "/get-involved" },
  { name: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-display text-2xl font-bold">
                <span className="text-accent">A.</span> Morgan
              </span>
            </Link>
            <p className="text-primary-foreground/70 mb-6 body-md">
              Building a future of progress, opportunity, and unity for all
              citizens.
            </p>
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

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">
              Get Involved
            </h4>
            <ul className="space-y-3">
              {getInvolvedLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-1 shrink-0" />
                <span className="text-primary-foreground/70">
                  123 Democracy Avenue
                  <br />
                  Capital City, CC 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <span className="text-primary-foreground/70">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                <span className="text-primary-foreground/70">
                  contact@amorgan.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Campaign Slogan Bar */}
      <div className="bg-accent py-4">
        <div className="container-custom text-center">
          <p className="font-display text-lg font-semibold text-accent-foreground">
            "Together, We Rise. Together, We Lead."
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© 2024 A. Morgan Campaign. All rights reserved.</p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="hover:text-primary-foreground transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="hover:text-primary-foreground transition-colors"
              >
                Disclaimer
              </Link>
            </div>
          </div>
          <p className="text-center text-xs text-primary-foreground/40 mt-4">
            Paid for by A. Morgan for President Committee. Not authorized by any
            candidate or candidate's committee.
          </p>
        </div>
      </div>
    </footer>
  );
}
