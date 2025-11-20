"use client";

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQSection() {
    const faqs = [
        {
            question: "Comment savoir si mon entreprise est prête pour l'automatisation IA ?",
            answer: "Si vous avez des tâches répétitives, de la saisie de données manuelle, ou des processus qui prennent trop de temps, vous êtes prêt. Notre diagnostic permet d'identifier précisément ces opportunités."
        },
        {
            question: "Quelle est la différence entre un diagnostic et une implémentation ?",
            answer: "Le diagnostic est l'étape d'analyse et de planification (la carte). L'implémentation est la construction effective des automatisations (le voyage). Le diagnostic sécurise votre investissement en validant la faisabilité et le ROI avant de développer."
        },
        {
            question: "Combien de temps prend une implémentation typique ?",
            answer: "Cela dépend de la complexité. Une automatisation simple peut prendre 2-3 jours, tandis qu'une transformation complète de département peut prendre 3-4 semaines. Nous travaillons en cycles courts pour livrer de la valeur rapidement."
        },
        {
            question: "Mes équipes devront-elles apprendre à utiliser des outils complexes ?",
            answer: "Non. Notre but est de simplifier leur travail. Les automatisations tournent en arrière-plan. Si une interaction est nécessaire, nous créons des interfaces simples ou utilisons les outils qu'ils connaissent déjà (Slack, Teams, Email)."
        },
        {
            question: "Travaillez-vous avec des entreprises de toutes tailles ?",
            answer: "Oui, de la TPE ambitieuse au grand groupe. Les principes d'efficacité sont les mêmes, seule l'échelle change."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="section faq">
            <div className="container">
                <h2 className="section-title text-center">Questions fréquentes</h2>

                <div className="faq-grid">
                    {faqs.map((faq, index) => (
                        <div key={index} className="glass-panel faq-item" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                <div className="faq-icon">
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </div>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="faq-answer"
                                    >
                                        <p>{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
