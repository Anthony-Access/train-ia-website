"use client";

import { BentoGrid, BentoItem } from "./BentoGrid";
import { Workflow, Bot, GraduationCap, Database, Zap, BarChart3 } from "lucide-react";

export default function SolutionsSection() {
  return (
    <section id="solutions" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Everything you need to <br /><span className="text-gradient">Automate & Scale</span></h2>
          <p className="section-subtitle">
            A complete suite of tools to transform your operations. From simple workflows to complex autonomous agents.
          </p>
        </div>

        <BentoGrid>
          <BentoItem
            title="Workflow Automation"
            description="Connect your favorite apps and automate repetitive tasks with n8n. No more manual data entry."
            icon={<Workflow size={24} />}
            className="col-span-2"
            delay={0.1}
            gradient="linear-gradient(135deg, #3b82f6, #8b5cf6)"
          />
          <BentoItem
            title="AI Agents"
            description="Deploy intelligent assistants that work 24/7 to handle customer support and sales."
            icon={<Bot size={24} />}
            delay={0.2}
            gradient="linear-gradient(135deg, #ec4899, #f43f5e)"
          />
          <BentoItem
            title="Team Training"
            description="Empower your workforce with the skills to leverage AI tools effectively."
            icon={<GraduationCap size={24} />}
            delay={0.3}
            gradient="linear-gradient(135deg, #10b981, #3b82f6)"
          />
          <BentoItem
            title="Data Pipeline"
            description="Build robust data infrastructure to feed your AI models with clean, structured data."
            icon={<Database size={24} />}
            className="col-span-2"
            delay={0.4}
            gradient="linear-gradient(135deg, #f59e0b, #ef4444)"
          />
          <BentoItem
            title="Fast Audit"
            description="Get a comprehensive analysis of your current processes in less than 48 hours."
            icon={<Zap size={24} />}
            className="col-span-2"
            delay={0.5}
            gradient="linear-gradient(135deg, #8b5cf6, #d946ef)"
          />
          <BentoItem
            title="Analytics"
            description="Track the ROI of your automations with real-time dashboards."
            icon={<BarChart3 size={24} />}
            delay={0.6}
            gradient="linear-gradient(135deg, #06b6d4, #3b82f6)"
          />
        </BentoGrid>
      </div>

      <style jsx>{`
        .section-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 5rem;
        }
        
        .section-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          color: white;
        }
        
        .section-subtitle {
          color: var(--muted);
          font-size: 1.125rem;
          line-height: 1.6;
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
