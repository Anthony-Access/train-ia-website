"use client";

export default function AboutSection() {
    return (
        <section id="about" className="section about">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <h2 className="section-title">Pourquoi choisir <span className="text-gradient">Train-IA</span> ?</h2>
                        <p>
                            Nous ne nous contentons pas d'installer des outils. Nous transformons votre façon de travailler.
                            Notre expertise combinée en automatisation (n8n, Make) et en Intelligence Artificielle nous permet
                            de créer des solutions sur mesure qui s'adaptent parfaitement à vos besoins.
                        </p>
                        <p>
                            Que vous soyez une PME cherchant à gagner du temps ou une grande entreprise souhaitant innover,
                            nous avons l'expertise pour vous accompagner.
                        </p>
                    </div>

                    <div className="about-stats">
                        <div className="stat-card glass-card">
                            <span className="stat-number text-gradient">50+</span>
                            <span className="stat-label">Projets Automatisés</span>
                        </div>
                        <div className="stat-card glass-card">
                            <span className="stat-number text-gradient">100%</span>
                            <span className="stat-label">Satisfaction Client</span>
                        </div>
                        <div className="stat-card glass-card">
                            <span className="stat-number text-gradient">24/7</span>
                            <span className="stat-label">Support Réactif</span>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }
        
        .about-text p {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.8;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }
        
        .about-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        
        .stat-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 2rem;
        }
        
        .stat-card:first-child {
          grid-column: span 2;
        }
        
        .stat-number {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
        }
        
        .stat-label {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    );
}
