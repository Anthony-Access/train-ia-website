"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="beam beam-1"></div>
        <div className="beam beam-2"></div>
      </div>

      <div className="container hero-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="hero-content"
        >
          <div className="hero-badge">
            <span>v2.0 Now Available</span>
          </div>

          <h1 className="hero-title">
            Building the <br />
            <span className="text-gradient">Intelligent Enterprise</span>
          </h1>

          <p className="hero-subtitle">
            We architect autonomous digital ecosystems.
            Seamlessly integrate AI agents, automate complex workflows, and scale without friction.
          </p>

          <div className="hero-actions">
            <button className="btn btn-glow">
              Start Transformation
            </button>
            <button className="btn btn-primary">
              View Case Studies <ArrowRight size={16} style={{ marginLeft: 6 }} />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="hero-visual"
        >
          <div className="visual-glass">
            <div className="visual-header">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
            <div className="visual-grid">
              {/* Abstract Grid Visualization */}
              <div className="grid-line vertical"></div>
              <div className="grid-line horizontal"></div>
              <div className="node center-node">
                <div className="node-core"></div>
                <div className="node-ring"></div>
              </div>
              <div className="node satellite-1"></div>
              <div className="node satellite-2"></div>
              <div className="connection c1"></div>
              <div className="connection c2"></div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding-top: 120px;
        }
        
        .hero-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          z-index: 10;
        }
        
        .hero-badge {
          margin-bottom: 2rem;
          padding: 4px 12px;
          border-radius: 100px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 0.75rem;
          color: var(--muted);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        
        .hero-title {
          font-size: 5rem;
          line-height: 1.05;
          font-weight: 700;
          letter-spacing: -0.04em;
          margin-bottom: 2rem;
          background: linear-gradient(to bottom, #fff, #888);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--muted);
          max-width: 600px;
          line-height: 1.6;
          margin-bottom: 3rem;
        }
        
        .hero-actions {
          display: flex;
          gap: 1rem;
          margin-bottom: 6rem;
        }
        
        /* Visual */
        .hero-visual {
          width: 100%;
          max-width: 900px;
          height: 400px;
          position: relative;
        }
        
        .visual-glass {
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px 24px 0 0;
          backdrop-filter: blur(20px);
          position: relative;
          overflow: hidden;
          box-shadow: 0 -20px 50px rgba(0, 0, 0, 0.5);
        }
        
        .visual-header {
          padding: 1.5rem;
          display: flex;
          gap: 8px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .dot { width: 10px; height: 10px; border-radius: 50%; opacity: 0.5; }
        .red { background: #ff5f56; }
        .yellow { background: #ffbd2e; }
        .green { background: #27c93f; }
        
        .visual-grid {
          position: relative;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .node {
          position: absolute;
          border-radius: 50%;
          background: white;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
        }
        
        .center-node {
          width: 20px;
          height: 20px;
          z-index: 10;
        }
        
        .node-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100px;
          height: 100px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          animation: pulse 4s infinite;
        }
        
        .satellite-1 { width: 8px; height: 8px; top: 30%; left: 30%; opacity: 0.5; }
        .satellite-2 { width: 8px; height: 8px; bottom: 30%; right: 30%; opacity: 0.5; }
        
        .connection {
          position: absolute;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          height: 1px;
          width: 200px;
        }
        
        .c1 { transform: rotate(45deg); }
        .c2 { transform: rotate(-45deg); }
        
        /* Background Beams */
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          pointer-events: none;
        }
        
        .beam {
          position: absolute;
          top: -100px;
          width: 100px;
          height: 1000px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent);
          filter: blur(50px);
          transform: rotate(-15deg);
        }
        
        .beam-1 { left: 20%; animation: float 10s infinite alternate; }
        .beam-2 { right: 20%; animation: float 15s infinite alternate-reverse; }
        
        @keyframes pulse {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.5; }
          100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
        }
        
        @keyframes float {
          0% { transform: rotate(-15deg) translateY(0); }
          100% { transform: rotate(-15deg) translateY(50px); }
        }
        
        @media (max-width: 768px) {
          .hero-title { font-size: 3rem; }
          .hero-actions { flex-direction: column; }
        }
      `}</style>
    </section>
  );
}
