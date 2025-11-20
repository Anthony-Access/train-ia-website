"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent, ReactNode } from "react";

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
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`bento-card group ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="spotlight"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.1),
              transparent 80%
            )
          `,
        }}
      />

      <div className="bento-content">
        <div className="bento-header">
          {icon && <div className="bento-icon">{icon}</div>}
          <h3 className="bento-title">{title}</h3>
        </div>
        <p className="bento-desc">{description}</p>
      </div>

      <style jsx>{`
        .bento-card {
          position: relative;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-md);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: border-color 0.3s;
        }
        
        .bento-card:hover {
          border-color: rgba(255, 255, 255, 0.15);
        }
        
        .spotlight {
          pointer-events: none;
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.3s;
        }
        
        .bento-card:hover .spotlight {
          opacity: 1;
        }
        
        .bento-content {
          position: relative;
          z-index: 10;
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
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          color: white;
        }
        
        .bento-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: white;
          letter-spacing: -0.01em;
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
