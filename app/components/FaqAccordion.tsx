'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'Faut-il avoir de l\'expérience en finance pour postuler?',
    answer:
      'Non, aucune expérience préalable en finance n\'est requise. Notre programme de formation de 34 modules couvre tout ce dont tu as besoin, de zéro. Ce qui compte, c\'est ta motivation et ton envie de bâtir une carrière sérieuse.',
  },
  {
    question: 'Comment fonctionne la rémunération?',
    answer:
      'La rémunération est 100% à la commission. Cela signifie que ton revenu est directement lié à tes résultats. Nos conseillers performants atteignent régulièrement des revenus à 6 chiffres. Tu es entrepreneur de ta propre carrière — sans plafond.',
  },
  {
    question: 'Combien de temps dure la formation?',
    answer:
      'La formation initiale de 34 modules peut être complétée en 4 à 8 semaines selon ton rythme. Le contenu est accessible en ligne, ce qui te permet d\'apprendre à ton propre rythme tout en étant encadré par notre équipe.',
  },
  {
    question: 'Est-ce que le système IA est vraiment inclus?',
    answer:
      'Oui. EVO LIFE a développé un système d\'intelligence artificielle propriétaire qui t\'aide à identifier des prospects, préparer tes rencontres clients et optimiser ton suivi. C\'est un avantage compétitif majeur disponible dès ton premier jour.',
  },
  {
    question: 'Où se déroule le travail — en présentiel ou à distance?',
    answer:
      'Le modèle est hybride. Tu peux travailler depuis n\'importe où au Québec. Les rencontres clients peuvent se faire en personne ou en visioconférence. Nous avons des équipes actives à Montréal, Québec, Laval et en région.',
  },
]

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={index}
            className="border border-zinc-800 rounded-xl overflow-hidden"
          >
            <button
              className="w-full flex items-center justify-between px-6 py-5 text-left bg-zinc-900 hover:bg-zinc-800 transition-colors"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="text-white font-medium pr-4">{faq.question}</span>
              <span
                className={`text-amber-400 text-xl flex-shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-45' : ''
                }`}
              >
                +
              </span>
            </button>
            {isOpen && (
              <div className="px-6 py-5 bg-zinc-950 text-zinc-400 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
