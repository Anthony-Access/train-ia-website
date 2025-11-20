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


    </motion.header>
  );
}
