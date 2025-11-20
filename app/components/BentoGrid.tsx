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

      <style jsx>{`
        .bento-item {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background: rgba(255, 255, 255, 0.03);
          gap: 1rem;
        }
        
        .bento-item:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-bottom: 0.5rem;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
        
        .bento-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.25rem;
        }
        
        .bento-desc {
          font-size: 1rem;
          color: var(--muted);
          line-height: 1.6;
        }

        @media (min-width: 768px) {
          .bento-item {
            padding: 2.5rem;
          }
        }
      `}</style>
    </motion.div>
  );
}
