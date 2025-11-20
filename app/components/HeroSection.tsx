"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <div className="hero-badge">
            <Sparkles size={14} className="badge-icon" />
            <span>AI Automation Platform 2.0</span>
          </div>

          <h1 className="hero-title">
            Create AI Agents <br />
            <span className="text-gradient">in Minutes, Not Months.</span>
          </h1>

          <p className="hero-subtitle">
            No coding required. Train-IA empowers your team to build, deploy, and scale autonomous workflows that drive real business results.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary">
              Get Started for Free
            </button>
            <button className="btn btn-secondary">
              <Play size={16} fill="currentColor" style={{ marginRight: 8 }} />
              Watch Demo
            </button>
          </div>

          <div className="hero-trust">
            <p>Trusted by innovative teams at</p>
            <div className="trust-logos">
              {/* Placeholders for logos */}
              <div className="logo-placeholder">ACME</div>
              <div className="logo-placeholder">Globex</div>
              <div className="logo-placeholder">Soylent</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-visual"
        >
          {/* Product Interface Simulation */}
          <div className="interface-card">
            <div className="interface-header">
              <div className="window-controls">
                <div className="control red"></div>
                <div className="control yellow"></div>
                <div className="control green"></div>
              </div>
              <div className="address-bar">train-ia.com/studio</div>
            </div>

            <div className="interface-body">
              <div className="sidebar">
                <div className="sidebar-item active"></div>
                <div className="sidebar-item"></div>
                <div className="sidebar-item"></div>
              </div>
              <div className="main-area">
                <div className="agent-preview">
                  <div className="agent-avatar">
                    <div className="avatar-pulse"></div>
                  </div>
                  <div className="agent-status">
                    <span className="status-dot"></span>
                    Agent Active
                  </div>
                </div>
                <div className="chat-interface">
                  <div className="message bot">
                    <div className="message-line w-75"></div>
                    <div className="message-line w-50"></div>
                  </div>
                  <div className="message user">
                    <div className="message-line w-60"></div>
                  </div>
                  <div className="input-area">
                    <div className="input-placeholder"></div>
                    <div className="send-btn"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="float-badge badge-1"
            >
              <span>⚡ 10x Faster</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="float-badge badge-2"
            >
              <span>🤖 GPT-4o Integrated</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100dvh;
          display: flex;
          align-items: center;
          padding-top: 120px;
          overflow: hidden;
        }
        
        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(149, 89, 209, 0.1);
          border: 1px solid rgba(149, 89, 209, 0.2);
          border-radius: var(--radius-full);
          color: #d8b4fe;
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
        }
        
        .hero-title {
          font-size: 4rem;
          line-height: 1.1;
          font-weight: 800;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }
        
        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--muted);
          line-height: 1.6;
          margin-bottom: 2.5rem;
          max-width: 540px;
        }
        
        .hero-actions {
          display: flex;
          gap: 1rem;
          margin-bottom: 4rem;
        }
        
        .hero-trust p {
          font-size: 0.875rem;
          color: var(--muted);
          margin-bottom: 1rem;
        }
        
        .trust-logos {
          display: flex;
          gap: 2rem;
          opacity: 0.5;
        }
        
        .logo-placeholder {
          font-weight: 700;
          font-size: 1.2rem;
        }
        
        /* Visual Interface */
        .hero-visual {
          position: relative;
        }
        
        .interface-card {
          background: rgba(20, 20, 25, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          backdrop-filter: blur(20px);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          overflow: hidden;
          position: relative;
        }
        
        .interface-header {
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
        }
        
        .window-controls {
          display: flex;
          gap: 8px;
        }
        
        .control { width: 12px; height: 12px; border-radius: 50%; }
        .red { background: #ff5f56; }
        .yellow { background: #ffbd2e; }
        .green { background: #27c93f; }
        
        .address-bar {
          margin-left: 20px;
          background: rgba(0, 0, 0, 0.3);
          padding: 4px 12px;
          border-radius: 6px;
          font-size: 0.75rem;
          color: var(--muted);
          flex: 1;
          text-align: center;
        }
        
        .interface-body {
          display: flex;
          height: 400px;
        }
        
        .sidebar {
          width: 60px;
          border-right: 1px solid rgba(255, 255, 255, 0.05);
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .sidebar-item {
          width: 100%;
          aspect-ratio: 1;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
        }
        
        .sidebar-item.active {
          background: var(--primary);
        }
        
        .main-area {
          flex: 1;
          padding: 2rem;
          display: flex;
          gap: 2rem;
        }
        
        .agent-preview {
          flex: 1;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        
        .agent-avatar {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #9559D1, #ec4899);
          border-radius: 50%;
          margin-bottom: 1rem;
          position: relative;
        }
        
        .avatar-pulse {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid rgba(149, 89, 209, 0.5);
          animation: ping 2s infinite;
        }
        
        .agent-status {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          color: #4ade80;
          background: rgba(74, 222, 128, 0.1);
          padding: 4px 12px;
          border-radius: 100px;
        }
        
        .status-dot { width: 6px; height: 6px; background: #4ade80; border-radius: 50%; }
        
        .chat-interface {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .message {
          padding: 1rem;
          border-radius: 12px;
          width: 100%;
        }
        
        .bot { background: rgba(255, 255, 255, 0.05); border-bottom-left-radius: 2px; }
        .user { background: rgba(149, 89, 209, 0.2); border-bottom-right-radius: 2px; align-self: flex-end; }
        
        .message-line { height: 8px; background: rgba(255, 255, 255, 0.1); border-radius: 4px; margin-bottom: 6px; }
        .w-75 { width: 75%; } .w-50 { width: 50%; } .w-60 { width: 60%; }
        
        .input-area {
          margin-top: auto;
          height: 40px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          display: flex;
          align-items: center;
          padding: 0 1rem;
          justify-content: space-between;
        }
        
        .input-placeholder { width: 40%; height: 6px; background: rgba(255, 255, 255, 0.1); border-radius: 4px; }
        .send-btn { width: 24px; height: 24px; background: var(--primary); border-radius: 6px; }
        
        .float-badge {
          position: absolute;
          padding: 0.75rem 1.25rem;
          background: rgba(30, 30, 35, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.9rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          z-index: 20;
        }
        
        .badge-1 { top: 20%; right: -20px; }
        .badge-2 { bottom: 20%; left: -20px; }
        
        @keyframes ping {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        
        @media (max-width: 968px) {
          .hero-container { grid-template-columns: 1fr; text-align: center; }
          .hero-actions { justify-content: center; }
          .hero-subtitle { margin: 0 auto 2.5rem; }
          .hero-visual { display: none; }
        }
      `}</style>
    </section>
  );
}
