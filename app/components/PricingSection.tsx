"use client";

import { Check, Star } from 'lucide-react';

export default function PricingSection() {
    return (
        <section id="pricing" className="section pricing">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Démarrez simplement</h2>
                    <p className="section-subtitle">
                        Choisissez l'accompagnement adapté à votre maturité digitale
                    </p>
                </div>

                <div className="pricing-grid">
                    {/* Card 1: Diagnostic (Featured) */}
                    <div className="glass-panel pricing-card featured">
                        <div className="card-badge">
                            <Star size={14} fill="currentColor" /> Recommandé pour démarrer
                        </div>
                        <h3 className="plan-name">Diagnostic B.A.T.I.R.</h3>
                        <div className="plan-price">1490€</div>
                        <p className="plan-desc">Investment sérieux. Audit complet de vos processus.</p>

                        <ul className="plan-features">
                            <li><Check size={16} className="check-icon" /> Audit complet méthode B.A.T.I.R.</li>
                            <li><Check size={16} className="check-icon" /> Architecture des automatisations</li>
                            <li><Check size={16} className="check-icon" /> Identification des gains potentiels</li>
                            <li><Check size={16} className="check-icon" /> Estimation des bénéfices attendus</li>
                            <li><Check size={16} className="check-icon" /> Plan d'implémentation détaillé</li>
                        </ul>

                        <a href="#contact" className="btn btn-primary full-width">Réserver l'audit</a>
                    </div>

                    {/* Card 2: Sur Mesure */}
                    <div className="glass-panel pricing-card">
                        <h3 className="plan-name">Implémentation sur mesure</h3>
                        <div className="plan-price">Sur devis</div>
                        <p className="plan-desc">Selon la complexité du projet</p>

                        <ul className="plan-features">
                            <li><Check size={16} className="check-icon" /> Implémentation post-diagnostic</li>
                            <li><Check size={16} className="check-icon" /> Automatisations ciblées</li>
                            <li><Check size={16} className="check-icon" /> Formation équipes (optionnel)</li>
                            <li><Check size={16} className="check-icon" /> Support & ajustements</li>
                        </ul>

                        <a href="#contact" className="btn btn-secondary full-width">Discuter du projet</a>
                    </div>

                    {/* Card 3: Free */}
                    <div className="glass-panel pricing-card">
                        <h3 className="plan-name">Sans engagement</h3>
                        <div className="plan-price">Gratuit</div>
                        <p className="plan-desc">Diagnostic de 30 min pour évaluer votre potentiel</p>

                        <ul className="plan-features">
                            <li><Check size={16} className="check-icon" /> Accompagnement dédié</li>
                            <li><Check size={16} className="check-icon" /> Suivi personnalisé</li>
                            <li><Check size={16} className="check-icon" /> Méthode éprouvée</li>
                        </ul>

                        <a href="#contact" className="btn btn-secondary full-width">Prendre RDV</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
