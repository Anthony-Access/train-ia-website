"use client";

export default function ServicesSection() {
    const services = [
        {
            title: "Automatisation n8n",
            description: "Connectez vos applications et automatisez vos tâches répétitives. Gagnez du temps et réduisez les erreurs.",
            icon: "⚡"
        },
        {
            title: "Formation IA Générative",
            description: "Maîtrisez ChatGPT, Midjourney et les LLMs pour booster votre créativité et votre productivité.",
            icon: "🤖"
        },
        {
            title: "Consulting Sur Mesure",
            description: "Audit de vos processus et stratégie d'implémentation de l'IA adaptée à votre métier.",
            icon: "🎯"
        }
    ];

    return (
        <section id="services" className="section services">
            <div className="container">
                <h2 className="section-title">Nos Services</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="glass-card service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .section-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 3rem;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .service-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          height: 100%;
        }
        
        .service-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          background: var(--gradient-main);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .service-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        
        .service-description {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }
      `}</style>
        </section>
    );
}
