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
              <Link href="/#methodologie">Méthode B.A.T.I.R.</Link>
              <Link href="/#services">Audit & Diagnostic</Link>
              <Link href="/#services">Implémentation</Link>
              <Link href="/#services">Formation</Link>
            </div>

            <div className="link-group">
              <h4>Entreprise</h4>
              <Link href="/#about">À propos</Link>
              <Link href="/#pricing">Tarifs</Link>
              <Link href="/#faq">FAQ</Link>
              <Link href="mailto:anthony@train-ia.fr">Contact</Link>
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


    </footer >
  );
}
