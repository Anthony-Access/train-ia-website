"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Train IA</h3>
            <p>
              Nous aidons les entreprises à se transformer grâce à l'intelligence artificielle.
              Optimisez vos processus et augmentez votre productivité.
            </p>
          </div>

          <div className="footer-links">
            <h4>Solutions</h4>
            <Link href="/#methodologie">Méthode B.A.T.I.R.</Link>
            <Link href="/#services">Audit & Diagnostic</Link>
            <Link href="/#services">Implémentation</Link>
            <Link href="/#services">Formation</Link>
          </div>

          <div className="footer-links">
            <h4>Entreprise</h4>
            <Link href="/#about">À propos</Link>
            <Link href="/#pricing">Tarifs</Link>
            <Link href="/#faq">FAQ</Link>
            <Link href="mailto:anthony@train-ia.fr">Contact</Link>
          </div>
        </div>

        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', textAlign: 'center', color: 'var(--muted)', fontSize: '0.875rem' }}>
          © {new Date().getFullYear()} Train IA. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
