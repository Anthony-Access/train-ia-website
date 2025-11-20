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


    </section>
  );
}
