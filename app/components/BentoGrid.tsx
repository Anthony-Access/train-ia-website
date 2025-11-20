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
                {icon && <div className="bento-icon">{icon}</div>}
                <h3 className="bento-title">{title}</h3>
                <p className="bento-desc">{description}</p>
            </div>

            <style jsx>{`
        .bento-item {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: border-color 0.3s ease, background-color 0.3s ease;
        }
        
        .bento-item:hover {
          border-color: rgba(255, 255, 255, 0.2);
          background: var(--surface-hover);
        }
        
        .bento-icon {
          margin-bottom: 1.5rem;
          color: var(--primary-light);
        }
        
        .bento-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: var(--foreground);
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
