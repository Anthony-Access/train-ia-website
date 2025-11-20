"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BentoItemProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
  delay?: number;
}

export function BentoGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid-bento">
      {children}
    </div>
  );
}

export function BentoItem({ title, description, icon, className = "", delay = 0 }: BentoItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`glass-panel bento-item ${className}`}
    >
      <div className="bento-content">
        <div className="bento-header">
          {icon && <div className="bento-icon">{icon}</div>}
          <h3 className="bento-title">{title}</h3>
        </div>
        <p className="bento-desc">{description}</p>
      </div>

      <style jsx>{`
        .bento-item {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: all 0.3s ease;
          background: rgba(30, 41, 59, 0.4); /* Lighter base */
          border: 1px solid rgba(148, 163, 184, 0.1);
        }
        
        .bento-item:hover {
          border-color: var(--primary);
          background: rgba(30, 41, 59, 0.6);
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        
        .bento-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        
        .bento-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(59, 130, 246, 0.1);
          color: var(--primary-light);
          border-radius: 8px;
        }
        
        .bento-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--foreground);
          line-height: 1.3;
        }
        
        .bento-desc {
          font-size: 0.95rem;
          color: var(--muted);
          line-height: 1.6;
        }
      `}</style>
    </motion.div>
  );
}
