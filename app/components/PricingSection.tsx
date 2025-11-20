"use client";

import { Check } from 'lucide-react';

export default function PricingSection() {
    return (
        <section id="pricing" className="section pricing">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title text-center">Démarrez simplement</h2>
                    <p className="section-subtitle text-center">
                        Choisissez l'accompagnement adapté à votre maturité digitale
                    </p>
                </div>

                <div className="pricing-grid">
                    {/* Card 1: Diagnostic (Featured) */}
                    <div className="pricing-card featured">
                        <div className="card-badge">Recommandé</div>
                        <h3 className="plan-name">Diagnostic B.A.T.I.R.</h3>
                        <div className="plan-price">1490€</div>
                        <p className="plan-desc">Audit complet de vos processus et roadmap d'automatisation.</p>

                        <ul className="plan-features">
                            <li><Check size={18} className="check-icon" /> Audit complet méthode B.A.T.I.R.</li>
                            <li><Check size={18} className="check-icon" /> Architecture des workflows</li>
                            <li><Check size={18} className="check-icon" /> Calcul du ROI potentiel</li>
                            <li><Check size={18} className="check-icon" /> Plan d'implémentation</li>
                        </ul>

                        <a href="#contact" className="btn btn-primary full-width">Réserver l'audit</a>
                    </div>

                    {/* Card 2: Sur Mesure */}
                    <div className="pricing-card">
                        <h3 className="plan-name">Implémentation</h3>
                        <div className="plan-price">Sur devis</div>
                        <p className="plan-desc">Développement et intégration de vos solutions d'IA.</p>

                        <ul className="plan-features">
                            <li><Check size={18} className="check-icon" /> Développement sur mesure</li>
                            <li><Check size={18} className="check-icon" /> Intégration n8n & IA</li>
                            <li><Check size={18} className="check-icon" /> Formation des équipes</li>
                            <li><Check size={18} className="check-icon" /> Support technique</li>
                        </ul>

                        <a href="#contact" className="btn btn-secondary full-width">Discuter du projet</a>
                    </div>

                    {/* Card 3: Free */}
                    <div className="pricing-card">
                        <h3 className="plan-name">Découverte</h3>
                        <div className="plan-price">Gratuit</div>
                        <p className="plan-desc">Échange de 30 min pour évaluer votre potentiel.</p>

                        <ul className="plan-features">
                            <li><Check size={18} className="check-icon" /> Analyse rapide des besoins</li>
                            <li><Check size={18} className="check-icon" /> Démo de cas d'usage</li>
                            <li><Check size={18} className="check-icon" /> Sans engagement</li>
                        </ul>

                        <a href="#contact" className="btn btn-secondary full-width">Prendre RDV</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
