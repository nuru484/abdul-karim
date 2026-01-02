import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-12 lg:mb-16",
        align === "center" && "text-center max-w-3xl mx-auto",
        className
      )}
    >
      {label && (
        <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
          {label}
        </span>
      )}
      <h2 className="heading-lg text-foreground mb-4">{title}</h2>
      {description && (
        <p className="body-lg text-muted-foreground text-balance">
          {description}
        </p>
      )}
    </motion.div>
  );
}
