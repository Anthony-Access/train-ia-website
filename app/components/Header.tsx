"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <Link href="/" className="logo">
          Train<span className="text-gradient">-IA</span>
        </Link>

        <nav className="nav desktop-nav">
          <Link href="#solutions" className="nav-link">Solutions</Link>
          <Link href="#methodologie" className="nav-link">Méthodologie</Link>
          <Link href="#ressources" className="nav-link">Ressources</Link>
          <Link href="#about" className="nav-link">À propos</Link>
        </nav>

        <div className="header-actions">
          <Link href="#contact" className="btn btn-primary">
            Réserver un audit
          </Link>
          <button
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav">
            <Link href="#solutions" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Solutions</Link>
            <Link href="#methodologie" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Méthodologie</Link>
            <Link href="#ressources" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Ressources</Link>
            <Link href="#about" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>À propos</Link>
          </nav>
        </div>
      )}

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
          background: rgba(2, 0, 4, 0.8);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
        }
        
        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.05em;
          z-index: 101;
        }
        
        .nav {
          display: flex;
          gap: 2.5rem;
        }
        
        .nav-link {
          font-size: 0.95rem;
          color: var(--muted);
          transition: color 0.2s;
          font-weight: 500;
        }
        
        .nav-link:hover {
          color: var(--foreground);
        }
        
        .header-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          z-index: 101;
        }
        
        .mobile-toggle {
          display: none;
          color: var(--foreground);
        }
        
        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--background);
          padding-top: 6rem;
          z-index: 99;
        }
        
        .mobile-nav {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }
        
        .mobile-link {
          font-size: 1.5rem;
          font-weight: 600;
        }
        
        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
          
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}
