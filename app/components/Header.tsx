"use client";

import Link from 'next/link';

export default function Header() {
    return (
        <header className="header">
            <div className="container header-content">
                <Link href="/" className="logo">
                    Train<span className="text-gradient">-IA</span>
                </Link>

                <nav className="nav">
                    <Link href="#services" className="nav-link">Services</Link>
                    <Link href="#about" className="nav-link">À propos</Link>
                    <Link href="#contact" className="nav-link">Contact</Link>
                </nav>

                <Link href="#contact" className="btn btn-primary">
                    Prendre RDV
                </Link>
            </div>

            <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(3, 0, 20, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding: 1rem 0;
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
        }
        
        .nav {
          display: flex;
          gap: 2rem;
        }
        
        .nav-link {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
          transition: color 0.2s;
        }
        
        .nav-link:hover {
          color: white;
        }
        
        @media (max-width: 768px) {
          .nav {
            display: none;
          }
        }
      `}</style>
        </header>
    );
}
