"use client";

export default function HeroSection() {
    return (
        <section className="hero">
            <div className="container hero-content">
                <h1 className="hero-title">
                    Propulsez votre entreprise avec <br />
                    <span className="text-gradient">l'IA et l'Automatisation</span>
                </h1>

                <p className="hero-subtitle">
                    Experts en n8n et IA Générative. Nous transformons vos processus manuels en systèmes autonomes performants.
                </p>

                <div className="hero-actions">
                    <a href="#services" className="btn btn-primary">
                        Découvrir nos offres
                    </a>
                    <a href="#contact" className="btn btn-outline">
                        Parler à un expert
                    </a>
                </div>
            </div>

            <div className="hero-background">
                <div className="glow glow-1"></div>
                <div className="glow glow-2"></div>
            </div>

            <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 80px; /* Header height */
          overflow: hidden;
        }
        
        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 800px;
        }
        
        .hero-title {
          font-size: 4rem;
          line-height: 1.1;
          font-weight: 800;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }
        
        .hero-subtitle {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 2.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }
        
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
        }
        
        .glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.3;
        }
        
        .glow-1 {
          top: -10%;
          left: -10%;
          width: 50vw;
          height: 50vw;
          background: var(--primary);
        }
        
        .glow-2 {
          bottom: -10%;
          right: -10%;
          width: 50vw;
          height: 50vw;
          background: var(--secondary);
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
        }
      `}</style>
        </section>
    );
}
