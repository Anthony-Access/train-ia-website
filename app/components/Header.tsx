"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`header ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="container header-container">
        <Link href="/" className="logo">
          <div className="logo-icon">
            <div className="logo-shape"></div>
          </div>
          <span className="logo-text">Train-IA</span>
        </Link>

        <nav className="desktop-nav">
          <Link href="#solutions" className="nav-link">Solutions</Link>
          <Link href="#methodologie" className="nav-link">Method</Link>
          <Link href="#ressources" className="nav-link">Resources</Link>
          <Link href="#pricing" className="nav-link">Pricing</Link>
        </nav>

        <div className="header-actions">
          <Link href="#login" className="nav-link login-link">Log in</Link>
          <Link href="#contact" className="btn-header">
            Get Started
          </Link>
        </div>

        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 1.5rem 0;
          transition: all 0.3s ease;
        }
        
        .header.scrolled {
          padding: 1rem 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 700;
          font-size: 1.25rem;
          color: white;
        }
        
        .logo-icon {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #9559D1, #ec4899);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .logo-shape {
          width: 16px;
          height: 16px;
          background: white;
          border-radius: 50%;
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
        
        .desktop-nav {
          display: flex;
          gap: 2.5rem;
        }
        
        .nav-link {
          font-size: 0.95rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.7);
          transition: color 0.2s;
        }
        
        .nav-link:hover {
          color: white;
        }
        
        .header-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        
        .login-link {
          display: none;
        }
        
        .btn-header {
          padding: 0.6rem 1.2rem;
          background: white;
          color: black;
          border-radius: var(--radius-full);
          font-weight: 600;
          font-size: 0.9rem;
          transition: transform 0.2s;
        }
        
        .btn-header:hover {
          transform: scale(1.05);
        }
        
        .mobile-toggle {
          display: none;
          color: white;
        }
        
        @media (min-width: 768px) {
          .login-link { display: block; }
        }
        
        @media (max-width: 768px) {
          .desktop-nav, .header-actions { display: none; }
          .mobile-toggle { display: block; }
        }
      `}</style>
    </motion.header>
  );
}
