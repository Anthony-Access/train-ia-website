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
              <Link href="#">Automatisation</Link>
              <Link href="#">Agents IA</Link>
              <Link href="#">Consulting</Link>
              <Link href="#">Formation</Link>
            </div>

            <div className="link-group">
              <h4>Entreprise</h4>
              <Link href="#">À propos</Link>
              <Link href="#">Carrières</Link>
              <Link href="#">Partenaires</Link>
              <Link href="#">Contact</Link>
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
          padding-top: 5rem;
          margin-top: 5rem;
        }
        
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }
        
        .footer-brand {
          max-width: 300px;
        }
        
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          display: block;
          margin-bottom: 1rem;
        }
        
        .footer-desc {
          color: var(--muted);
          line-height: 1.6;
          margin-bottom: 2rem;
          font-size: 0.9rem;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
        }
        
        .social-link {
          color: var(--muted);
          transition: color 0.2s;
        }
        
        .social-link:hover {
          color: var(--primary-light);
        }
        
        .footer-links {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
        
        .link-group h4 {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--foreground);
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .link-group a {
          display: block;
          color: var(--muted);
          margin-bottom: 0.75rem;
          font-size: 0.9rem;
          transition: color 0.2s;
        }
        
        .link-group a:hover {
          color: var(--foreground);
        }
        
        .footer-bottom {
          border-top: 1px solid var(--border);
          padding: 2rem 0;
          text-align: center;
          color: rgba(255, 255, 255, 0.3);
          font-size: 0.85rem;
        }
        
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 2fr;
          }
          
          .footer-links {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </footer>
  );
}
