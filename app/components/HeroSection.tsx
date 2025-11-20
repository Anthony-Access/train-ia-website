"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hero-content"
        >
          <div className="hero-badge">
            <span className="pulse-dot"></span>
            Nouvelle méthode d'accompagnement
          </div>

          <h1 className="hero-title">
            Transformez votre entreprise avec <span className="text-gradient">l'IA et l'automatisation</span>
          </h1>

          <p className="hero-subtitle">
            Vos processus vous font perdre du temps et de l'argent. Notre méthode structurée combine refonte organisationnelle, automatisation et IA pour éliminer les tâches répétitives.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Démarrer maintenant <ArrowRight size={18} />
            </a>
            <a href="#methodologie" className="btn btn-secondary">
              <Play size={18} fill="currentColor" /> Découvrir la méthode
            </a>
          </div>

          <div className="hero-trust">
            <div className="trust-stats">
              <div className="stat-item">
                <span className="stat-value">15+</span>
                <span className="stat-label">Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">10h+</span>
                <span className="stat-label">Gain/semaine</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">100%</span>
                <span className="stat-label">Satisfaction</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hero-visual"
        >
          <div className="interface-card">
            <div className="interface-header">
              <div className="window-controls">
                <div className="control red"></div>
                <div className="control yellow"></div>
                <div className="control green"></div>
              </div>
              <div className="address-bar">train-ia.com/dashboard</div>
            </div>
            <div className="interface-body">
              {/* Abstract Dashboard UI */}
              <div style={{ display: 'flex', gap: '1rem', height: '100%' }}>
                <div style={{ width: '60px', background: '#374151', borderRadius: '8px' }}></div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ height: '100px', background: '#374151', borderRadius: '8px' }}></div>
                  <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div style={{ background: '#374151', borderRadius: '8px' }}></div>
                    <div style={{ background: '#374151', borderRadius: '8px' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
