"use client";

import { motion } from 'framer-motion';
import { Search, Layout, Zap, Users, TrendingUp } from 'lucide-react';

export default function MethodologySection() {
    const steps = [
        {
            letter: "B",
            name: "Bilan & Audit",
            icon: <Search size={24} />,
            desc: "Cartographie complète",
            detail: "Analyse approfondie de vos flux actuels et identification des opportunités d'automatisation"
        },
        {
            letter: "A",
            name: "Architecture",
            icon: <Layout size={24} />,
            desc: "Conception sur mesure",
            detail: "Design des workflows optimaux et sélection des outils adaptés à vos besoins"
        },
        {
            letter: "T",
            name: "Transformation",
            icon: <Zap size={24} />,
            desc: "Implémentation",
            detail: "Développement et mise en place des automatisations intelligentes"
        },
        {
            letter: "I",
            name: "Intégration",
            icon: <Users size={24} />,
            desc: "Formation & adoption",
            detail: "Accompagnement de vos équipes pour une adoption réussie"
        },
        {
            letter: "R",
            name: "Rentabilisation",
            icon: <TrendingUp size={24} />,
            desc: "Mesure du ROI",
            detail: "Suivi des résultats, optimisations continues et maximisation de la valeur"
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

                <div className="steps-grid relative">
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent -z-10 hidden md:block" />
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel step-card"
                        >
                            <div className="step-header">
                                <span className="step-number">{index + 1}</span>
                                <span className="step-letter">{step.letter}</span>
                            </div>
                            <div className="step-icon">{step.icon}</div>
                            <h3 className="step-name">{step.name}</h3>
                            <div className="step-divider"></div>
                            <h4 className="step-desc">{step.desc}</h4>
                            <p className="step-detail">{step.detail}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="methodology-cta">
                    <div className="glass-panel cta-panel">
                        <h3>Appliquons la méthode B.A.T.I.R. à votre entreprise</h3>
                        <p>Chaque entreprise est unique. Découvrons ensemble comment structurer votre transformation avec un diagnostic personnalisé.</p>
                        <a href="#contact" className="btn btn-primary">Démarrer mon diagnostic B.A.T.I.R.</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
