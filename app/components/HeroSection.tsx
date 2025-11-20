"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
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
              Démarrer maintenant
            </a>
            <a href="#methodologie" className="btn btn-secondary">
              Découvrir la méthode
            </a>
          </div>

          <div className="hero-trust">
            <div className="trust-stats">
              <div className="stat-item">
                <span className="stat-value">15+</span>
                <span className="stat-label">Clients accompagnés</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-value">10h+</span>
                <span className="stat-label">Économisées/semaine</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-value">100%</span>
                <span className="stat-label">Satisfaction client</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
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
              <div className="sidebar">
                <div className="sidebar-item active"></div>
                <div className="sidebar-item"></div>
                <div className="sidebar-item"></div>
              </div>
              <div className="main-area">
                <div className="chat-interface">
                  <div className="message bot w-75">
                    <div className="message-line w-60"></div>
                    <div className="message-line w-50"></div>
                  </div>
                  <div className="message user w-50">
                    <div className="message-line w-75"></div>
                  </div>
                  <div className="message bot w-60">
                    <div className="message-line w-75"></div>
                    <div className="message-line w-50"></div>
                  </div>
                  <div className="input-area">
                    <div className="input-placeholder"></div>
                    <div className="send-btn"></div>
                  </div>
                </div>
                <div className="agent-preview">
                  <div className="agent-avatar">
                    <div className="avatar-pulse"></div>
                  </div>
                  <div className="agent-status">
                    <div className="status-dot"></div>
                    Agent Actif
                  </div>
                </div>
              </div>
            </div>

            <div className="float-badge badge-1">
              🚀 ROI en 45 jours
            </div>
            <div className="float-badge badge-2">
              ⚡ -10h de travail/semaine
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
