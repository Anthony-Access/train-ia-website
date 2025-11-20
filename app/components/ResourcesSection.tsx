"use client";

import { ArrowRight, FileText, PlayCircle } from "lucide-react";

export default function ResourcesSection() {
    return (
        <section id="ressources" className="section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Ressources & <span className="text-gradient">Insights</span></h2>
                    <p className="section-subtitle">
                        Explorez nos cas clients et nos analyses sur l'avenir de l'automatisation.
                    </p>
                </div>

                <div className="resources-grid">
                    <div className="resource-card glass-panel">
                        <div className="card-tag">Cas Client</div>
                        <h3 className="card-title">Comment une ETI a économisé 120k€/an avec n8n</h3>
                        <p className="card-desc">
                            Automatisation complète du processus de facturation et de relance client.
                        </p>
                        <a href="#" className="card-link">
                            Lire l'étude de cas <ArrowRight size={16} />
                        </a>
                    </div>

                    <div className="resource-card glass-panel">
                        <div className="card-tag">Guide</div>
                        <h3 className="card-title">L'IA Générative en Entreprise : Le Guide 2025</h3>
                        <p className="card-desc">
                            Les stratégies gagnantes pour intégrer les LLMs dans vos workflows.
                        </p>
                        <a href="#" className="card-link">
                            Télécharger le PDF <FileText size={16} />
                        </a>
                    </div>

                    <div className="resource-card glass-panel">
                        <div className="card-tag">Webinar</div>
                        <h3 className="card-title">Masterclass : Construire un Agent IA en 30 min</h3>
                        <p className="card-desc">
                            Replay de notre session live sur la création d'assistants personnalisés.
                        </p>
                        <a href="#" className="card-link">
                            Voir le replay <PlayCircle size={16} />
                        </a>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 4rem;
          flex-wrap: wrap;
          gap: 2rem;
        }
        
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          max-width: 400px;
          line-height: 1.1;
        }
        
        .section-subtitle {
          color: var(--muted);
          max-width: 400px;
          font-size: 1.1rem;
        }
        
        .resources-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .resource-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: transform 0.3s ease;
        }
        
        .resource-card:hover {
          transform: translateY(-5px);
        }
        
        .card-tag {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--primary-light);
          margin-bottom: 1rem;
          font-weight: 600;
        }
        
        .card-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          line-height: 1.4;
        }
        
        .card-desc {
          color: var(--muted);
          font-size: 0.95rem;
          margin-bottom: 2rem;
          flex-grow: 1;
        }
        
        .card-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--foreground);
          font-weight: 500;
          font-size: 0.9rem;
          transition: color 0.2s;
        }
        
        .card-link:hover {
          color: var(--primary-light);
        }
      `}</style>
        </section>
    );
}
