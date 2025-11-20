"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BentoItemProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
  delay?: number;
  gradient?: string;
}

export function BentoGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid-bento">
      {children}
    </div>
  );
}

export function BentoItem({ title, description, icon, className = "", delay = 0, gradient = "linear-gradient(135deg, #9559D1, #ec4899)" }: BentoItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`glass-panel bento-item ${className}`}
    >
      <div className="bento-content">
        <div className="icon-wrapper" style={{ background: gradient }}>
          {icon}
        </div>
        <h3 className="bento-title">{title}</h3>
        <p className="bento-desc">{description}</p>
      </div>


    </motion.div>
  );
}
