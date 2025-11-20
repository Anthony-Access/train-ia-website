"use client";

import { BentoGrid, BentoItem } from "./BentoGrid";
import { Workflow, Bot, GraduationCap, Database, Zap, BarChart3 } from "lucide-react";

export default function SolutionsSection() {
  return (
    <section id="solutions" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Engineered for <br /><span className="text-gradient">Scale & Velocity</span></h2>
          <p className="section-subtitle">
            Our solutions are built on a foundation of modern engineering principles, designed to integrate seamlessly with your existing infrastructure.
          </p>
        </div>

        <BentoGrid>
          <BentoItem
            title="Workflow Orchestration"
            description="End-to-end automation using n8n. We connect data silos to create fluid, error-free processes."
            icon={<Workflow size={20} />}
            className="col-span-2"
            delay={0.1}
          />
          <BentoItem
            title="Custom AI Agents"
            description="GPT-4 assistants trained on your proprietary data for support, sales, or analysis."
            icon={<Bot size={20} />}
            delay={0.2}
          />
          <BentoItem
            title="Team Enablement"
            description="Intensive programs to make your teams autonomous in AI and No-Code technologies."
            icon={<GraduationCap size={20} />}
            delay={0.3}
          />
          <BentoItem
            title="Data Architecture"
            description="Modern ETL pipelines to fuel your AI with clean, structured, and reliable data."
            icon={<Database size={20} />}
            className="col-span-2"
            delay={0.4}
          />
          <BentoItem
            title="Performance Audit"
            description="Comprehensive diagnostic of your operations to identify bottlenecks and opportunities."
            icon={<Zap size={20} />}
            delay={0.5}
          />
          <BentoItem
            title="Real-time Analytics"
            description="Live visualization of your key metrics for precise, data-driven piloting."
            icon={<BarChart3 size={20} />}
            delay={0.6}
          />
        </BentoGrid>
      </div>

      <style jsx>{`
        .section-header {
          margin-bottom: 5rem;
        }
        
        .section-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: white;
        }
        
        .section-subtitle {
          color: var(--muted);
          font-size: 1.25rem;
          line-height: 1.6;
          max-width: 600px;
        }
        
        /* Custom grid spans for bento effect */
        :global(.col-span-2) {
          grid-column: span 1;
        }
        
        @media (min-width: 768px) {
          :global(.col-span-2) {
            grid-column: span 2;
          }
        }
      `}</style>
    </section>
  );
}
