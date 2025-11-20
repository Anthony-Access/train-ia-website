"use client";

import { BentoGrid, BentoItem } from "./BentoGrid";
import { Workflow, Bot, GraduationCap, Database, Zap, BarChart3 } from "lucide-react";

export default function SolutionsSection() {
    return (
        <section id="solutions" className="section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Nos Solutions <span className="text-gradient">Stratégiques</span></h2>
                    <p className="section-subtitle">
                        Une approche holistique pour transformer votre entreprise en machine de guerre digitale.
                    </p>
                </div>

                <BentoGrid>
                    <BentoItem
                        title="Automatisation Workflow"
                        description="Orchestration complexe avec n8n et Make. Connectez vos outils (CRM, ERP, Marketing) pour supprimer les tâches manuelles."
                        icon={<Workflow size={24} />}
                        className="col-span-2"
                        delay={0.1}
                    />
                    <BentoItem
                        title="Agents IA Autonomes"
                        description="Déploiement d'assistants GPT-4 personnalisés pour le support client, l'analyse de données ou la génération de contenu."
                        icon={<Bot size={24} />}
                        delay={0.2}
                    />
                    <BentoItem
                        title="Formation & Coaching"
                        description="Montée en compétence de vos équipes sur l'IA Générative et le No-Code. Devenez autonomes."
                        icon={<GraduationCap size={24} />}
                        delay={0.3}
                    />
                    <BentoItem
                        title="Data Engineering"
                        description="Pipelines de données robustes pour alimenter vos IA et tableaux de bord."
                        icon={<Database size={24} />}
                        className="col-span-2"
                        delay={0.4}
                    />
                    <BentoItem
                        title="Audit Flash"
                        description="Analyse rapide de vos processus pour identifier les gisements de productivité immédiats."
                        icon={<Zap size={24} />}
                        delay={0.5}
                    />
                    <BentoItem
                        title="Reporting Automatisé"
                        description="Dashboards temps réel mis à jour automatiquement."
                        icon={<BarChart3 size={24} />}
                        delay={0.6}
                    />
                </BentoGrid>
            </div>

            <style jsx>{`
        .section-header {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 4rem;
        }
        
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        
        .section-subtitle {
          color: var(--muted);
          font-size: 1.1rem;
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
