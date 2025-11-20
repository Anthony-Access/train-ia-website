"use client";

export default function ServicesSection() {
  const services = [
    {
      title: "Audit & Diagnostic",
      description: "Identifiez vos opportunités d'automatisation en 1 semaine. Analyse complète de vos flux et roadmap détaillée.",
      icon: "🔍"
    },
    {
      title: "Implémentation",
      description: "Déploiement de workflows sur mesure et intégration IA. Nous construisons votre système d'exploitation intelligent.",
      icon: "⚡"
    },
    {
      title: "Formation & Autonomie",
      description: "Rendez vos équipes autonomes sur l'IA en 2 jours. Maîtrisez les outils qui changent la donne.",
      icon: "🎓"
    }
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="section-title">Nos Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="glass-panel service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
