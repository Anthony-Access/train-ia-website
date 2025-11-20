"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero section">
      <div className="container">
        <div className="hero-grid">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-content"
          >
            <div className="badge">
              <span className="badge-dot"></span>
              Partenaire Stratégique IA & Automatisation
            </div>

            <h1 className="hero-title">
              Transformez vos opérations en <br />
              <span className="text-gradient">Avantage Concurrentiel</span>
            </h1>

            <p className="hero-subtitle">
              Nous concevons des écosystèmes digitaux autonomes qui permettent aux entreprises de scaler sans friction. Expertise n8n, Make et IA Générative.
            </p>

            <div className="hero-actions">
              <button className="btn btn-primary">
                Réserver un audit stratégique
                <ArrowRight size={18} />
              </button>
              <button className="btn btn-secondary">
                Voir nos cas clients
              </button>
            </div>

            <div className="hero-trust">
              <p className="trust-label">Ils nous font confiance :</p>
              <div className="trust-logos">
                {/* Placeholders for client logos */}
                <span className="trust-logo">Microsoft</span>
                <span className="trust-logo">Qonto</span>
                <span className="trust-logo">Alan</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-visual"
          >
            <div className="glass-panel visual-card">
              <div className="card-header">
                <div className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
              </div>
              <div className="card-body">
                <div className="workflow-step">
                  <div className="step-icon n8n">⚡</div>
                  <div className="step-content">
                    <div className="step-title">New Lead Detected</div>
                    <div className="step-desc">Webhook Trigger</div>
                  </div>
                </div>
                <div className="workflow-line"></div>
                <div className="workflow-step">
                  <div className="step-icon ai">🤖</div>
                  <div className="step-content">
                    <div className="step-title">AI Qualification</div>
                    <div className="step-desc">GPT-4 Analysis</div>
                  </div>
                </div>
                <div className="workflow-line"></div>
                <div className="workflow-step">
                  <div className="step-icon crm">📊</div>
                  <div className="step-content">
                    <div className="step-title">Update CRM</div>
                    <div className="step-desc">HubSpot Sync</div>
                  </div>
                  <div className="status-badge">
                    <CheckCircle2 size={14} /> Success
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="hero-glow"></div>

      <style jsx>{`
        .hero {
          min-height: 90vh;
          display: flex;
          align-items: center;
          padding-top: 120px;
        }
        
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(124, 58, 237, 0.1);
          border: 1px solid rgba(124, 58, 237, 0.2);
          border-radius: var(--radius-full);
          color: var(--primary-light);
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
        }
        
        .badge-dot {
          width: 6px;
          height: 6px;
          background: var(--primary-light);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--primary-light);
        }
        
        .hero-title {
          font-size: 3.5rem;
          line-height: 1.1;
          font-weight: 800;
          margin-bottom: 1.5rem;
          letter-spacing: -0.03em;
        }
        
        .hero-subtitle {
          font-size: 1.125rem;
          color: var(--muted);
          margin-bottom: 2.5rem;
          max-width: 540px;
          line-height: 1.6;
        }
        
        .hero-actions {
          display: flex;
          gap: 1rem;
          margin-bottom: 4rem;
        }
        
        .hero-trust {
          border-top: 1px solid var(--border);
          padding-top: 2rem;
        }
        
        .trust-label {
          font-size: 0.875rem;
          color: var(--muted);
          margin-bottom: 1rem;
        }
        
        .trust-logos {
          display: flex;
          gap: 2rem;
          opacity: 0.5;
          font-weight: 600;
          font-size: 1.25rem;
        }
        
        /* Visual Animation */
        .visual-card {
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }
        
        .card-header {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }
        
        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        .red { background: #ef4444; }
        .yellow { background: #eab308; }
        .green { background: #22c55e; }
        
        .workflow-step {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: var(--radius-sm);
          position: relative;
        }
        
        .step-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          font-size: 1.25rem;
        }
        
        .n8n { background: rgba(234, 179, 8, 0.2); }
        .ai { background: rgba(139, 92, 246, 0.2); }
        .crm { background: rgba(14, 165, 233, 0.2); }
        
        .step-title {
          font-weight: 600;
          font-size: 0.9rem;
        }
        
        .step-desc {
          font-size: 0.75rem;
          color: var(--muted);
        }
        
        .workflow-line {
          height: 20px;
          width: 2px;
          background: var(--border);
          margin-left: 30px;
        }
        
        .status-badge {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          color: #22c55e;
          background: rgba(34, 197, 94, 0.1);
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-full);
        }
        
        .hero-glow {
          position: absolute;
          top: 0;
          right: 0;
          width: 50vw;
          height: 50vw;
          background: radial-gradient(circle at center, rgba(124, 58, 237, 0.1) 0%, transparent 70%);
          pointer-events: none;
          z-index: -1;
        }
        
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .hero-subtitle {
            margin-left: auto;
            margin-right: auto;
          }
          
          .hero-actions {
            justify-content: center;
          }
          
          .trust-logos {
            justify-content: center;
          }
          
          .hero-visual {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
