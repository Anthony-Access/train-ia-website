"use client";

import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo">
              Train<span className="text-gradient">-IA</span>
            </Link>
            <p className="footer-desc">
              Partenaire de croissance pour les entreprises ambitieuses.
              Automatisation, IA et Excellence Opérationnelle.
            </p>
            <div className="social-links">
              <a href="#" className="social-link"><Linkedin size={20} /></a>
              <a href="#" className="social-link"><Twitter size={20} /></a>
              <a href="#" className="social-link"><Github size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Solutions</h4>
              <Link href="/#solutions">Automatisation</Link>
              <Link href="/#solutions">Agents IA</Link>
              <Link href="/#services">Consulting</Link>
              <Link href="/#services">Formation</Link>
            </div>

            <div className="link-group">
              <h4>Entreprise</h4>
              <Link href="/#about">À propos</Link>
              <Link href="#">Carrières</Link>
              <Link href="#">Partenaires</Link>
              <Link href="mailto:contact@train-ia.com">Contact</Link>
            </div>

            <div className="link-group">
              <h4>Légal</h4>
              <Link href="#">Mentions Légales</Link>
              <Link href="#">Confidentialité</Link>
              <Link href="#">CGV</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Train-IA. Tous droits réservés.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #010101;
          border-top: 1px solid var(--border);
          padding-top: 6rem;
          margin-top: 6rem;
        }
        
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 5rem;
          margin-bottom: 5rem;
        }
        
        .footer-brand {
          max-width: 300px;
        }
        
        .logo {
          font-size: 1.75rem;
          font-weight: 700;
          display: block;
          margin-bottom: 1.25rem;
        }
        
        .footer-desc {
          color: var(--muted);
          line-height: 1.7;
          margin-bottom: 2.5rem;
          font-size: 0.95rem;
        }
        
        .social-links {
          display: flex;
          gap: 1.25rem;
        }
        
        .social-link {
          color: var(--muted);
          transition: color 0.2s;
          padding: 0.5rem;
          border-radius: 50%;
          background: rgba(255,255,255,0.03);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .social-link:hover {
          color: var(--primary-light);
          background: rgba(255,255,255,0.08);
        }
        
        .footer-links {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
        }
        
        .link-group h4 {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--foreground);
          margin-bottom: 1.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .link-group a {
          display: block;
          color: var(--muted);
          margin-bottom: 1rem;
          font-size: 0.95rem;
          transition: all 0.2s;
        }
        
        .link-group a:hover {
          color: var(--foreground);
          transform: translateX(2px);
        }
        
        .footer-bottom {
          border-top: 1px solid var(--border);
          padding: 2.5rem 0;
          text-align: center;
          color: rgba(255, 255, 255, 0.3);
          font-size: 0.85rem;
        }
        
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 2fr;
            gap: 8rem;
          }
          
          .footer-links {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </footer >
  );
}
