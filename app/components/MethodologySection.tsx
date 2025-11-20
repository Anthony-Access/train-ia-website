"use client";

import { motion } from 'framer-motion';
import { Search, Layout, Zap, Users, TrendingUp } from 'lucide-react';

export default function MethodologySection() {
    const steps = [
        {
            icon: <Search size={24} />,
            name: "1. Bilan & Audit",
            desc: "Cartographie complète",
            detail: "Analyse approfondie de vos flux actuels et identification des opportunités d'automatisation."
        },
        {
            icon: <Layout size={24} />,
            name: "2. Architecture",
            desc: "Conception sur mesure",
            detail: "Design des workflows optimaux et sélection des outils adaptés à vos besoins."
        },
        {
            icon: <Zap size={24} />,
            name: "3. Transformation",
            desc: "Implémentation",
            detail: "Développement et mise en place des automatisations intelligentes."
        },
        {
            icon: <Users size={24} />,
            name: "4. Intégration",
            desc: "Formation & adoption",
            detail: "Accompagnement de vos équipes pour une adoption réussie."
        },
        {
            icon: <TrendingUp size={24} />,
            name: "5. Rentabilisation",
            desc: "Mesure du ROI",
            detail: "Suivi des résultats, optimisations continues et maximisation de la valeur."
        }
    ];

    return (
        <section id="methodologie" className="section methodology">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Méthode <span className="text-gradient">B.A.T.I.R.</span></h2>
                    <p className="section-subtitle">
                        Notre processus éprouvé en 5 étapes pour transformer votre entreprise avec l'IA
                    </p>
                </div>

                <div className="steps-grid">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="step-card"
                        >
                            <div className="step-icon">{step.icon}</div>
                            <h3 className="step-name">{step.name}</h3>
                            <p className="step-desc">{step.detail}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
