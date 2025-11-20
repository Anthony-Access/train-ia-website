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
