"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero section">
      <div className="container">
        <div className="hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-content"
          >
            <div className="badge-container">
              <span className="badge">
                <span className="badge-indicator"></span>
                Agence d'Automatisation Certifiée
              </span>
            </div>

            <h1 className="hero-title">
              L'Excellence Opérationnelle par <span className="text-gradient">l'IA & l'Automatisation</span>
            </h1>

            <p className="hero-subtitle">
              Nous transformons les entreprises ambitieuses en machines de guerre digitales.
              Éliminez le travail manuel, décuplez votre productivité et sécurisez votre croissance.
            </p>

            <div className="hero-actions">
              <button className="btn btn-primary">
                Réserver un audit stratégique
                <ArrowRight size={18} />
              </button>
              <button className="btn btn-secondary">
                <Play size={16} style={{ marginRight: '8px' }} fill="currentColor" />
                Voir la démo (2min)
              </button>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-value">50+</span>
                <span className="stat-label">Entreprises accompagnées</span>
              </div>
              <div className="stat-separator"></div>
              <div className="stat-item">
                <span className="stat-value">10k+</span>
                <span className="stat-label">Heures économisées/an</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-visual"
          >
            {/* Abstract Representation of Order from Chaos */}
            <div className="visual-container">
              <div className="glass-panel main-card">
                <div className="card-header">
                  <div className="header-dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>
                  <div className="header-title">Pipeline_Ventes_Automatisé</div>
                </div>

                <div className="pipeline-visual">
                  <div className="pipeline-node start">
                    <div className="node-icon">⚡</div>
                    <div className="node-label">Lead Entrant</div>
                  </div>
                  <div className="pipeline-connector active"></div>
                  <div className="pipeline-node process">
                    <div className="node-icon">🤖</div>
                    <div className="node-label">Enrichissement IA</div>
                    <div className="node-status">En cours...</div>
                  </div>
                  <div className="pipeline-connector"></div>
                  <div className="pipeline-node end">
                    <div className="node-icon">✅</div>
                    <div className="node-label">CRM Mis à jour</div>
                  </div>
                </div>

                <div className="card-footer">
                  <div className="metric-badge">
                    <CheckCircle2 size={14} /> Taux de succès : 99.9%
                  </div>
                </div>
              </div>

              {/* Floating Elements for Depth */}
              <div className="floating-card card-1">
                <div className="float-icon">📊</div>
                <div className="float-text">ROI +300%</div>
              </div>
              <div className="floating-card card-2">
                <div className="float-icon">🚀</div>
                <div className="float-text">Zéro Latence</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 90vh;
          display: flex;
          align-items: center;
          padding-top: 100px;
        }
        
        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 5rem;
          align-items: center;
        }
        
        .badge-container {
          margin-bottom: 1.5rem;
        }
        
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: var(--radius-full);
          color: var(--primary-light);
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.02em;
        }
        
        .badge-indicator {
          width: 8px;
          height: 8px;
          background: var(--primary);
          border-radius: 50%;
          box-shadow: 0 0 8px var(--primary);
        }
        
        .hero-title {
          font-size: 3.75rem;
          line-height: 1.1;
          font-weight: 800;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
          color: var(--foreground);
        }
        
        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--muted);
          margin-bottom: 2.5rem;
          max-width: 600px;
          line-height: 1.6;
        }
        
        .hero-actions {
          display: flex;
          gap: 1rem;
          margin-bottom: 4rem;
        }
        
        .hero-stats {
          display: flex;
          align-items: center;
          gap: 2rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border);
        }
        
        .stat-item {
          display: flex;
          flex-direction: column;
        }
        
        .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--foreground);
        }
        
        .stat-label {
          font-size: 0.875rem;
          color: var(--muted);
        }
        
        .stat-separator {
          width: 1px;
          height: 40px;
          background: var(--border);
        }
        
        /* Visual Container */
        .visual-container {
          position: relative;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .main-card {
          width: 100%;
          padding: 2rem;
          background: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9));
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          z-index: 10;
        }
        
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .header-dots {
          display: flex;
          gap: 6px;
        }
        
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
        }
        
        .header-title {
          font-family: monospace;
          font-size: 0.8rem;
          color: var(--muted);
        }
        
        .pipeline-visual {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .pipeline-node {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: var(--radius-sm);
          border: 1px solid transparent;
        }
        
        .pipeline-node.process {
          background: rgba(59, 130, 246, 0.1);
          border-color: rgba(59, 130, 246, 0.2);
        }
        
        .node-icon {
          font-size: 1.2rem;
        }
        
        .node-label {
          font-weight: 500;
          font-size: 0.9rem;
        }
        
        .node-status {
          margin-left: auto;
          font-size: 0.75rem;
          color: var(--primary-light);
          animation: pulse 2s infinite;
        }
        
        .pipeline-connector {
          height: 20px;
          width: 2px;
          background: var(--border);
          margin-left: 1.5rem;
        }
        
        .pipeline-connector.active {
          background: linear-gradient(to bottom, var(--primary), var(--border));
        }
        
        .card-footer {
          margin-top: 2rem;
          display: flex;
          justify-content: flex-end;
        }
        
        .metric-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: #22c55e;
          background: rgba(34, 197, 94, 0.1);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
        }
        
        .floating-card {
          position: absolute;
          padding: 0.75rem 1.25rem;
          background: var(--surface);
          backdrop-filter: blur(12px);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          z-index: 20;
        }
        
        .card-1 {
          top: -20px;
          right: -20px;
          animation: float 6s ease-in-out infinite;
        }
        
        .card-2 {
          bottom: -20px;
          left: -20px;
          animation: float 6s ease-in-out infinite 2s;
        }
        
        .float-icon {
          font-size: 1.2rem;
        }
        
        .float-text {
          font-weight: 600;
          font-size: 0.9rem;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-actions {
            flex-direction: column;
          }
          
          .hero-stats {
            justify-content: center;
          }
          
          .visual-container {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
