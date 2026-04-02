'use client'

import { useState } from 'react'

const faqs = [
  {
    question: "Faut-il avoir de l'expérience en finance pour postuler?",
    answer:
      "Non, aucune expérience préalable en finance n'est requise. Notre programme de formation de 34 modules couvre tout ce dont tu as besoin, de zéro. Ce qui compte, c'est ta motivation et ton envie de bâtir une carrière sérieuse.",
  },
  {
    question: 'Comment fonctionne la rémunération?',
    answer:
      "La rémunération est 100% à la commission. Cela signifie que ton revenu est directement lié à tes résultats. Nos conseillers performants atteignent régulièrement des revenus à 6 chiffres. Tu es entrepreneur de ta propre carrière — sans plafond.",
  },
  {
    question: 'Combien de temps dure la formation?',
    answer:
      "La formation initiale de 34 modules peut être complétée en 4 à 8 semaines selon ton rythme. Le contenu est accessible en ligne, ce qui te permet d'apprendre à ton propre rythme tout en étant encadré par notre équipe.",
  },
  {
    question: "Est-ce que le système IA est vraiment inclus?",
    answer:
      "Oui. EVO LIFE a développé un système d'intelligence artificielle propriétaire qui t'aide à identifier des prospects, préparer tes rencontres clients et optimiser ton suivi. C'est un avantage compétitif majeur disponible dès ton premier jour.",
  },
  {
    question: 'Où se déroule le travail — en présentiel ou à distance?',
    answer:
      "Le modèle est hybride. Tu peux travailler depuis n'importe où au Québec. Les rencontres clients peuvent se faire en personne ou en visioconférence. Nous avons des équipes actives à Montréal, Québec, Laval et en région.",
  },
]

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={index}
            style={{
              border: '1px solid #27272a',
              borderRadius: '12px',
              overflow: 'hidden',
            }}
          >
            <button
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.25rem 1.5rem',
                textAlign: 'left',
                background: '#111111',
                border: 'none',
                cursor: 'pointer',
              }}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span style={{ color: 'white', fontWeight: 500, paddingRight: '1rem' }}>
                {faq.question}
              </span>
              <span
                style={{
                  color: '#f59e0b',
                  fontSize: '1.25rem',
                  flexShrink: 0,
                  transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s',
                  display: 'inline-block',
                }}
              >
                +
              </span>
            </button>
            {isOpen && (
              <div
                style={{
                  padding: '1.25rem 1.5rem',
                  background: '#0a0a0a',
                  color: '#9ca3af',
                  lineHeight: 1.7,
                }}
              >
                {faq.answer}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
