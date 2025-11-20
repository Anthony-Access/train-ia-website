"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="header-wrapper"
    >
      <div className={`header-pill ${scrolled ? 'scrolled' : ''}`}>
        <Link href="/" className="logo">
          <div className="logo-icon"></div>
          Train-IA
        </Link>

        <nav className="nav">
          <Link href="#solutions" className="nav-link">Solutions</Link>
          <Link href="#methodologie" className="nav-link">Method</Link>
          <Link href="#ressources" className="nav-link">Resources</Link>
        </nav>

        <Link href="#contact" className="cta-link">
          Talk to Expert
        </Link>
      </div>

      <style jsx>{`
        .header-wrapper {
          position: fixed;
          top: 2rem;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          z-index: 100;
          padding: 0 1rem;
        }
        
        .header-pill {
          display: flex;
          align-items: center;
          gap: 3rem;
          padding: 0.75rem 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 100px;
          transition: all 0.3s ease;
        }
        
        .header-pill.scrolled {
          background: rgba(0, 2, 18, 0.8);
          border-color: rgba(255, 255, 255, 0.15);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          font-size: 0.95rem;
          letter-spacing: -0.02em;
        }
        
        .logo-icon {
          width: 16px;
          height: 16px;
          background: white;
          border-radius: 4px;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }
        
        .nav {
          display: flex;
          gap: 2rem;
        }
        
        .nav-link {
          font-size: 0.85rem;
          color: var(--muted);
          transition: color 0.2s;
        }
        
        .nav-link:hover {
          color: white;
        }
        
        .cta-link {
          font-size: 0.85rem;
          font-weight: 500;
          color: white;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 100px;
          transition: background 0.2s;
        }
        
        .cta-link:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        
        @media (max-width: 768px) {
          .nav { display: none; }
          .header-pill { gap: 1rem; width: 100%; justify-content: space-between; }
        }
      `}</style>
    </motion.header>
  );
}
