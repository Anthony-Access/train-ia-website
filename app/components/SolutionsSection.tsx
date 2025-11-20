"use client";

import { BentoGrid, BentoItem } from "./BentoGrid";
import { Workflow, Bot, GraduationCap, Database, Zap, BarChart3 } from "lucide-react";

export default function SolutionsSection() {
  return (
    <section id="solutions" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Nos Expertises</div>
          <h2 className="section-title">Des solutions conçues pour <span className="text-gradient">l'impact business</span></h2>
          <p className="section-subtitle">
            Nous déployons des architectures robustes qui s'intègrent parfaitement à votre stack existante.
          </p>
        </div>

        <BentoGrid>
          <BentoItem
            title="Orchestration Workflow"
            description="Automatisation de bout en bout avec n8n. Nous connectons vos silos de données pour créer des processus fluides et sans erreur."
            icon={<Workflow size={20} />}
            className="col-span-2"
            delay={0.1}
          />
          <BentoItem
            title="Agents IA Sur Mesure"
            description="Assistants GPT-4 entraînés sur vos données pour le support, la vente ou l'analyse."
            icon={<Bot size={20} />}
            delay={0.2}
          />
          <BentoItem
            title="Formation Équipes"
            description="Programmes intensifs pour rendre vos équipes autonomes sur l'IA et le No-Code."
            icon={<GraduationCap size={20} />}
            delay={0.3}
          />
          <BentoItem
            title="Architecture Data"
            description="Pipelines ETL modernes pour alimenter vos IA en données propres et structurées."
            icon={<Database size={20} />}
            className="col-span-2"
            delay={0.4}
          />
          <BentoItem
            title="Audit de Performance"
            description="Diagnostic complet de vos opérations pour identifier les goulots d'étranglement."
            icon={<Zap size={20} />}
            delay={0.5}
          />
          <BentoItem
            title="Dashboards KPI"
            description="Visualisation temps réel de vos métriques clés pour un pilotage précis."
            icon={<BarChart3 size={20} />}
            delay={0.6}
          />
        </BentoGrid>
      </div>

      <style jsx>{`
        .section-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 5rem;
        }
        
        .section-badge {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          background: rgba(59, 130, 246, 0.1);
          color: var(--primary);
          font-size: 0.8rem;
          font-weight: 600;
          border-radius: var(--radius-full);
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          color: var(--foreground);
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
