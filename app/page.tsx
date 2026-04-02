'use client'

import { useState } from 'react'
import FaqAccordion from './components/FaqAccordion'

type Page = 1 | 2 | 3 | 'success'

type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  motivation: string
  situation_actuelle: string
  disponibilite: string
  remuneration: string
  ville: string
  video_link: string
  notes: string
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.85rem 1rem',
  background: '#1a1a2e',
  border: '1px solid #2d2d4e',
  borderRadius: '10px',
  color: 'white',
  fontSize: '0.95rem',
  boxSizing: 'border-box',
  outline: 'none',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  color: '#9ca3af',
  fontSize: '0.85rem',
  marginBottom: '0.5rem',
  fontWeight: 500,
}

const fieldWrap: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0',
}

const comparisonRows = [
  { aspect: 'Formation', evo: '34 modules structurés', autre: 'Manuel PDF ou rien' },
  { aspect: 'Leads', evo: 'Fournis par IA', autre: 'À trouver seul' },
  { aspect: 'Assureurs', evo: '14+ partenaires', autre: '1 à 3 options' },
  { aspect: 'Outils', evo: 'CRM + IA dédiés', autre: 'Tableur Excel' },
  { aspect: 'Revenus potentiels', evo: '80 000$ — 200 000$+', autre: 'Plafonné' },
  { aspect: 'Support', evo: 'Mentorat dédié actif', autre: 'Autodidacte' },
]

export default function Home() {
  const [currentPage, setCurrentPage] = useState<Page>(1)
  const [loading, setLoading] = useState(false)
  const [videoHovered, setVideoHovered] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    motivation: '',
    situation_actuelle: '',
    disponibilite: '',
    remuneration: '',
    ville: '',
    video_link: '',
    notes: '',
  })

  function update(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit() {
    setLoading(true)
    try {
      await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
    } catch {
      // silent — still show success
    } finally {
      setLoading(false)
      setCurrentPage('success')
    }
  }

  return (
    <main style={{ background: '#0a0a0a', color: 'white', fontFamily: 'inherit', margin: 0, padding: 0 }}>

      {/* ── 1. NAVBAR ── */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        background: 'rgba(10,10,10,0.97)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #1a1a2e',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        boxSizing: 'border-box',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
          <span style={{ fontSize: '1.5rem', fontWeight: 900, lineHeight: 1 }}>
            <span style={{ color: 'white' }}>EVO</span>
            <span style={{ color: '#2563eb' }}>LIFE</span>
          </span>
          <span style={{ color: '#52525b', fontSize: '0.65rem', letterSpacing: '0.08em', fontWeight: 500 }}>
            AMF · Québec
          </span>
        </div>
        <a
          href="#postuler"
          style={{
            background: '#2563eb',
            color: 'white',
            padding: '0.6rem 1.5rem',
            borderRadius: '8px',
            fontWeight: 700,
            fontSize: '0.95rem',
            textDecoration: 'none',
            letterSpacing: '0.02em',
          }}
        >
          Postuler
        </a>
      </nav>

      {/* ── 2. HERO ── */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '8rem 1.5rem 5rem',
        background: '#0a0a0a',
      }}>
        <div style={{
          display: 'inline-block',
          background: 'rgba(37,99,235,0.1)',
          border: '1px solid rgba(37,99,235,0.3)',
          color: '#60a5fa',
          padding: '0.5rem 1.5rem',
          borderRadius: '50px',
          fontSize: '0.85rem',
          fontWeight: 600,
          marginBottom: '2rem',
          letterSpacing: '0.04em',
        }}>
          🚀 RECRUTEMENT EN COURS — PLACES LIMITÉES
        </div>

        <h1 style={{
          color: 'white',
          fontSize: 'clamp(2rem,6vw,4rem)',
          fontWeight: 900,
          lineHeight: 1.08,
          marginBottom: '1.5rem',
          maxWidth: '900px',
        }}>
          On te donne le système.{' '}
          <span style={{ color: '#2563eb' }}>Tu génères 10 000$/mois+</span>
          {' '}en services financiers.
        </h1>

        <p style={{
          color: '#9ca3af',
          fontSize: 'clamp(1rem,2.5vw,1.2rem)',
          lineHeight: 1.7,
          marginBottom: '2.5rem',
          maxWidth: '620px',
        }}>
          Formation complète. Leads fournis. Outils IA. T&apos;as qu&apos;à closer.
        </p>

        {/* VIDEO PLACEHOLDER */}
        <div
          onMouseEnter={() => setVideoHovered(true)}
          onMouseLeave={() => setVideoHovered(false)}
          style={{
            maxWidth: '700px',
            width: '100%',
            margin: '0 auto 3rem',
            aspectRatio: '16/9',
            background: '#111111',
            border: `1px solid ${videoHovered ? '#2563eb' : '#1e1e2e'}`,
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            position: 'relative',
            transition: 'border-color 0.3s',
          }}
        >
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: '#2563eb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 30px rgba(37,99,235,0.4)',
          }}>
            <span style={{ color: 'white', fontSize: '1.8rem', lineHeight: 1, paddingLeft: '4px' }}>▶</span>
          </div>
        </div>

        <a
          href="#postuler"
          style={{
            display: 'inline-block',
            background: '#2563eb',
            color: 'white',
            padding: '1rem 3rem',
            borderRadius: '12px',
            fontWeight: 700,
            fontSize: '1.1rem',
            textDecoration: 'none',
            boxShadow: '0 4px 20px rgba(37,99,235,0.3)',
            letterSpacing: '0.01em',
          }}
        >
          Voir si je suis admissible →
        </a>
      </section>

      {/* ── 3. TU TE DEMANDES SUREMENT ── */}
      <section style={{ background: '#060606', padding: '6rem 1.5rem', borderTop: '1px solid #1a1a2e' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            color: 'white',
            fontSize: 'clamp(1.75rem,4vw,2.5rem)',
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: '3rem',
          }}>
            Tu te demandes sûrement...
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
            gap: '1.5rem',
          }}>
            {[
              {
                question: 'Est-ce que je suis capable?',
                answer: "Oui. 90% de nos conseillers n'avaient aucune expérience en finance. Notre formation te prend par la main.",
              },
              {
                question: "C'est quoi mon quotidien?",
                answer: 'Tu reçois des leads, tu fais des appels, tu présentes des solutions financières. Simple et structuré.',
              },
              {
                question: "C'est quoi le catch?",
                answer: "Rien. 100% performance. Pas de frais cachés. Si tu ne vends pas, tu ne gagnes pas. Si tu vends, pas de plafond.",
              },
            ].map((item) => (
              <div key={item.question} style={{
                background: '#0f0f0f',
                border: '1px solid #2563eb',
                borderRadius: '16px',
                padding: '2rem',
              }}>
                <div style={{ color: 'white', fontWeight: 700, fontSize: '1rem', marginBottom: '1rem' }}>
                  {item.question}
                </div>
                <div style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA between 3-4 ── */}
      <div style={{ textAlign: 'center', padding: '2rem 1.5rem', background: '#060606' }}>
        <a
          href="#postuler"
          style={{
            display: 'inline-block',
            background: '#2563eb',
            color: 'white',
            padding: '1rem 3rem',
            borderRadius: '12px',
            fontWeight: 700,
            fontSize: '1.05rem',
            textDecoration: 'none',
            boxShadow: '0 4px 20px rgba(37,99,235,0.3)',
            letterSpacing: '0.01em',
          }}
        >
          Commencer le processus →
        </a>
      </div>

      {/* ── 4. COMMENT CA FONCTIONNE ── */}
      <section style={{ background: '#0a0a0a', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <h2 style={{ color: 'white', fontSize: 'clamp(1.75rem,4vw,2.5rem)', fontWeight: 800, marginBottom: '0.75rem' }}>
              Un système clé en main. Pas de bullshit.
            </h2>
            <p style={{ color: '#6b7280', fontSize: '1.05rem' }}>
              Tu ne pars pas de zéro. Tout est déjà en place.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
            gap: '1.5rem',
            marginTop: '3rem',
          }}>
            {[
              {
                num: '01',
                title: 'FORMATION',
                text: 'Tu complètes nos 34 modules. En quelques semaines, tu maîtrises le produit, le pitch et la vente.',
              },
              {
                num: '02',
                title: 'LEADS',
                text: 'Notre système IA génère des prospects qualifiés pour toi. Tu ne perds pas ton temps en prospection froide.',
              },
              {
                num: '03',
                title: 'CLOSING',
                text: 'Tu prends les appels, tu présentes la solution, tu fermes. Scripts et objections fournis.',
              },
              {
                num: '04',
                title: 'REVENUS',
                text: 'Commission directe sur chaque vente. Pas de plafond. Plus tu performes, plus tu gagnes.',
              },
            ].map((step) => (
              <div key={step.num} style={{
                background: '#0f0f0f',
                border: '1px solid #1e1e2e',
                borderRadius: '16px',
                padding: '2rem',
              }}>
                <div style={{ color: '#2563eb', fontWeight: 900, fontSize: '2rem', marginBottom: '0.75rem', lineHeight: 1 }}>
                  {step.num}
                </div>
                <div style={{ color: '#60a5fa', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
                  {step.title}
                </div>
                <div style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  {step.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA between 4-5 ── */}
      <div style={{ textAlign: 'center', padding: '3rem 1.5rem', background: '#0a0a0a' }}>
        <a
          href="#postuler"
          style={{
            display: 'inline-block',
            background: '#2563eb',
            color: 'white',
            padding: '1rem 3rem',
            borderRadius: '12px',
            fontWeight: 700,
            fontSize: '1.05rem',
            textDecoration: 'none',
            boxShadow: '0 4px 20px rgba(37,99,235,0.3)',
            letterSpacing: '0.01em',
          }}
        >
          Commencer le processus →
        </a>
      </div>

      {/* ── 5. FILTRE ── */}
      <section style={{ background: '#060606', padding: '6rem 1.5rem', borderTop: '1px solid #1a1a2e' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: 'white', fontSize: 'clamp(1.75rem,4vw,2.5rem)', fontWeight: 800, marginBottom: '0.75rem' }}>
              Attends. Ce n&apos;est PAS pour tout le monde.
            </h2>
            <p style={{ color: '#6b7280', fontSize: '1rem' }}>
              On préfère être honnêtes maintenant plutôt que perdre ton temps.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '2rem' }}>
            {/* NOT FOR */}
            <div style={{
              background: '#0f0f0f',
              border: '1px solid #3f1010',
              borderRadius: '16px',
              padding: '2rem',
            }}>
              <div style={{ color: '#f87171', fontWeight: 700, fontSize: '1rem', marginBottom: '1.5rem' }}>
                ✗ &nbsp;Pas pour toi si...
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {[
                  'Tu cherches un revenu garanti sans effort',
                  "Tu n'es pas prêt à apprendre et te former",
                  'Tu veux un 9 à 5 confortable sans stress',
                  "Tu n'es pas à l'aise de parler aux gens",
                  'Tu veux des résultats sans mettre le travail',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span style={{ color: '#f87171', flexShrink: 0, marginTop: '2px' }}>✗</span>
                    <span style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FOR */}
            <div style={{
              background: '#0f0f0f',
              border: '1px solid #14532d',
              borderRadius: '16px',
              padding: '2rem',
            }}>
              <div style={{ color: '#4ade80', fontWeight: 700, fontSize: '1rem', marginBottom: '1.5rem' }}>
                ✓ &nbsp;Par contre, si...
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {[
                  'Tu veux un revenu sans plafond basé sur tes efforts',
                  'Tu es prêt à apprendre un nouveau métier',
                  'Tu veux un système qui travaille pour toi',
                  'Tu aimes aider les gens',
                  'Tu es prêt à te dépasser',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span style={{ color: '#4ade80', flexShrink: 0, marginTop: '2px' }}>✓</span>
                    <span style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{
                marginTop: '1.5rem',
                padding: '1rem',
                background: 'rgba(37,99,235,0.1)',
                border: '1px solid rgba(37,99,235,0.3)',
                borderRadius: '10px',
                color: '#60a5fa',
                fontWeight: 600,
                fontSize: '0.9rem',
                textAlign: 'center',
              }}>
                Alors tu es probablement fait pour EVO LIFE.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA between 5-6 ── */}
      <div style={{ textAlign: 'center', padding: '3rem 1.5rem', background: '#060606' }}>
        <a
          href="#postuler"
          style={{
            display: 'inline-block',
            background: '#2563eb',
            color: 'white',
            padding: '1rem 3rem',
            borderRadius: '12px',
            fontWeight: 700,
            fontSize: '1.05rem',
            textDecoration: 'none',
            boxShadow: '0 4px 20px rgba(37,99,235,0.3)',
            letterSpacing: '0.01em',
          }}
        >
          Postuler maintenant →
        </a>
      </div>

      {/* ── 6. PARCOURS DE CHARLES ── */}
      <section style={{ background: '#060606', padding: '6rem 1.5rem', borderTop: '1px solid #1a1a2e' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            color: 'white',
            fontSize: 'clamp(1.75rem,4vw,2.25rem)',
            fontWeight: 800,
            marginBottom: '3rem',
          }}>
            De zéro à conseiller performant
          </h2>

          {/* Avatar */}
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: '#2563eb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
            fontSize: '1.5rem',
            fontWeight: 800,
            color: 'white',
          }}>
            CF
          </div>

          <blockquote style={{
            background: '#0f0f0f',
            border: '1px solid #1e1e2e',
            borderRadius: '16px',
            padding: '2rem',
            marginBottom: '1.5rem',
            textAlign: 'left',
          }}>
            <p style={{ color: '#d1d5db', fontSize: '1rem', lineHeight: 1.8, fontStyle: 'italic', margin: 0 }}>
              &ldquo;Quand j&apos;ai rejoint EVO LIFE, j&apos;avais aucune expérience en finance. Avec la formation et le
              système de leads, j&apos;ai closé mes premières ventes en moins de 3 semaines. Aujourd&apos;hui je gère
              ma propre équipe.&rdquo;
            </p>
          </blockquote>

          <div style={{ color: 'white', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.25rem' }}>
            Charles F.
          </div>
          <div style={{ color: '#6b7280', fontSize: '0.85rem', marginBottom: '2rem' }}>
            Conseiller EVO LIFE
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
          }}>
            {[
              { val: '3 semaines', label: 'premières ventes' },
              { val: '34 modules', label: 'complétés' },
              { val: 'Équipe', label: 'en construction' },
            ].map((s) => (
              <div key={s.val} style={{ textAlign: 'center' }}>
                <div style={{ color: '#2563eb', fontWeight: 800, fontSize: '1.1rem' }}>{s.val}</div>
                <div style={{ color: '#6b7280', fontSize: '0.8rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA between 6-7 ── */}
      <div style={{ textAlign: 'center', padding: '3rem 1.5rem', background: '#060606' }}>
        <a
          href="#postuler"
          style={{
            display: 'inline-block',
            background: '#2563eb',
            color: 'white',
            padding: '1rem 3rem',
            borderRadius: '12px',
            fontWeight: 700,
            fontSize: '1.05rem',
            textDecoration: 'none',
            boxShadow: '0 4px 20px rgba(37,99,235,0.3)',
            letterSpacing: '0.01em',
          }}
        >
          Postuler maintenant →
        </a>
      </div>

      {/* ── 7. COMPARAISON ── */}
      <section style={{ background: '#0a0a0a', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            color: 'white',
            fontSize: 'clamp(1.75rem,4vw,2.5rem)',
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: '3rem',
          }}>
            EVO LIFE vs Cabinet traditionnel
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              background: '#0f0f0f',
              borderRadius: '12px',
              overflow: 'hidden',
            }}>
              <thead>
                <tr style={{ background: '#111827' }}>
                  <th style={{ color: '#9ca3af', padding: '1rem', textAlign: 'left', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                    Critère
                  </th>
                  <th style={{ color: '#60a5fa', padding: '1rem', textAlign: 'left', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                    EVO LIFE
                  </th>
                  <th style={{ color: '#9ca3af', padding: '1rem', textAlign: 'left', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                    Cabinet traditionnel
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.aspect} style={{ borderBottom: i < comparisonRows.length - 1 ? '1px solid #1e1e2e' : 'none' }}>
                    <td style={{ padding: '1rem', color: '#6b7280', fontSize: '0.9rem', fontWeight: 500 }}>
                      {row.aspect}
                    </td>
                    <td style={{ padding: '1rem', color: '#60a5fa', fontSize: '0.9rem', fontWeight: 600 }}>
                      {row.evo}
                    </td>
                    <td style={{ padding: '1rem', color: '#4b5563', fontSize: '0.9rem' }}>
                      {row.autre}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CTA between 7-8 ── */}
      <div style={{ textAlign: 'center', padding: '3rem 1.5rem', background: '#0a0a0a' }}>
        <a
          href="#postuler"
          style={{
            display: 'inline-block',
            background: '#2563eb',
            color: 'white',
            padding: '1rem 3rem',
            borderRadius: '12px',
            fontWeight: 700,
            fontSize: '1.05rem',
            textDecoration: 'none',
            boxShadow: '0 4px 20px rgba(37,99,235,0.3)',
            letterSpacing: '0.01em',
          }}
        >
          Postuler maintenant →
        </a>
      </div>

      {/* ── 8. FORMULAIRE ── */}
      <section id="postuler" style={{
        background: '#0a0a0a',
        padding: '6rem 1.5rem',
        borderTop: '2px solid #1d4ed8',
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ color: 'white', fontSize: 'clamp(1.75rem,4vw,2.25rem)', fontWeight: 800, marginBottom: '0.75rem' }}>
              Voir si je suis admissible
            </h2>
            <p style={{ color: '#6b7280', fontSize: '1rem' }}>
              3 minutes · Entrevue exploratoire · Aucun engagement
            </p>
          </div>

          <div style={{
            background: '#0f0f0f',
            border: '1px solid #1e1e2e',
            borderRadius: '16px',
            padding: '2.5rem',
          }}>

            {/* STEPPER */}
            {currentPage !== 'success' && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0',
                marginBottom: '2rem',
              }}>
                {([1, 2, 3] as const).map((step, idx) => (
                  <div key={step} style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: currentPage === step ? '#2563eb' : (typeof currentPage === 'number' && currentPage > step ? '#1d4ed8' : '#1a1a2e'),
                      border: currentPage === step ? '2px solid #3b82f6' : '2px solid #2d2d4e',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: currentPage === step ? 'white' : '#4b5563',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                    }}>
                      {step}
                    </div>
                    {idx < 2 && (
                      <div style={{
                        width: '60px',
                        height: '2px',
                        background: typeof currentPage === 'number' && currentPage > step ? '#2563eb' : '#1e1e2e',
                      }} />
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* PAGE 1 */}
            {currentPage === 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={fieldWrap}>
                    <label style={labelStyle}>Prénom *</label>
                    <input
                      type="text"
                      required
                      placeholder="Alex"
                      value={formData.firstName}
                      onChange={(e) => update('firstName', e.target.value)}
                      style={inputStyle}
                    />
                  </div>
                  <div style={fieldWrap}>
                    <label style={labelStyle}>Nom *</label>
                    <input
                      type="text"
                      required
                      placeholder="Tremblay"
                      value={formData.lastName}
                      onChange={(e) => update('lastName', e.target.value)}
                      style={inputStyle}
                    />
                  </div>
                </div>
                <div style={fieldWrap}>
                  <label style={labelStyle}>Courriel *</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@exemple.com"
                    value={formData.email}
                    onChange={(e) => update('email', e.target.value)}
                    style={inputStyle}
                  />
                </div>
                <div style={fieldWrap}>
                  <label style={labelStyle}>Téléphone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="514-000-0000"
                    value={formData.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    style={inputStyle}
                  />
                </div>
                <button
                  onClick={() => setCurrentPage(2)}
                  disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone}
                  style={{
                    width: '100%',
                    background: '#2563eb',
                    color: 'white',
                    padding: '0.9rem',
                    borderRadius: '10px',
                    fontWeight: 700,
                    fontSize: '1rem',
                    border: 'none',
                    cursor: 'pointer',
                    marginTop: '0.5rem',
                    opacity: (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) ? 0.5 : 1,
                  }}
                >
                  Continuer →
                </button>
              </div>
            )}

            {/* PAGE 2 */}
            {currentPage === 2 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={fieldWrap}>
                  <label style={labelStyle}>Qu&apos;est-ce qui t&apos;attire chez EVO LIFE? *</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Dis-nous pourquoi cette opportunité t'intéresse..."
                    value={formData.motivation}
                    onChange={(e) => update('motivation', e.target.value)}
                    style={{ ...inputStyle, resize: 'none' }}
                  />
                </div>
                <div style={fieldWrap}>
                  <label style={labelStyle}>Situation actuelle</label>
                  <input
                    type="text"
                    placeholder="Ex : vendeur B2B, conseiller bancaire, étudiant..."
                    value={formData.situation_actuelle}
                    onChange={(e) => update('situation_actuelle', e.target.value)}
                    style={inputStyle}
                  />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={fieldWrap}>
                    <label style={labelStyle}>Disponibilité</label>
                    <select
                      value={formData.disponibilite}
                      onChange={(e) => update('disponibilite', e.target.value)}
                      style={inputStyle}
                    >
                      <option value="">Sélectionne...</option>
                      <option value="temps-plein">Temps plein</option>
                      <option value="temps-partiel">Temps partiel</option>
                      <option value="transition">En transition</option>
                    </select>
                  </div>
                  <div style={fieldWrap}>
                    <label style={labelStyle}>Objectif de revenus</label>
                    <select
                      value={formData.remuneration}
                      onChange={(e) => update('remuneration', e.target.value)}
                      style={inputStyle}
                    >
                      <option value="">Sélectionne...</option>
                      <option value="50k-80k">50 000$ – 80 000$</option>
                      <option value="80k-120k">80 000$ – 120 000$</option>
                      <option value="120k-plus">120 000$+</option>
                    </select>
                  </div>
                </div>
                <div style={fieldWrap}>
                  <label style={labelStyle}>Ville *</label>
                  <input
                    type="text"
                    required
                    placeholder="Montréal"
                    value={formData.ville}
                    onChange={(e) => update('ville', e.target.value)}
                    style={inputStyle}
                  />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '0.5rem' }}>
                  <button
                    onClick={() => setCurrentPage(1)}
                    style={{
                      background: 'transparent',
                      color: '#9ca3af',
                      padding: '0.9rem',
                      borderRadius: '10px',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      border: '1px solid #2d2d4e',
                      cursor: 'pointer',
                    }}
                  >
                    ← Retour
                  </button>
                  <button
                    onClick={() => setCurrentPage(3)}
                    disabled={!formData.motivation || !formData.ville}
                    style={{
                      background: '#2563eb',
                      color: 'white',
                      padding: '0.9rem',
                      borderRadius: '10px',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      border: 'none',
                      cursor: 'pointer',
                      opacity: (!formData.motivation || !formData.ville) ? 0.5 : 1,
                    }}
                  >
                    Continuer →
                  </button>
                </div>
              </div>
            )}

            {/* PAGE 3 */}
            {currentPage === 3 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{
                  background: 'rgba(37,99,235,0.06)',
                  border: '1px solid rgba(37,99,235,0.2)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🎬</div>
                  <div style={{ color: 'white', fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                    Enregistre une vidéo de 2 minutes
                  </div>
                  <div style={{ color: '#6b7280', fontSize: '0.85rem', lineHeight: 1.6 }}>
                    Présente-toi, parle de ta motivation, et dis-nous pourquoi tu es le bon fit pour EVO LIFE.
                    Dépose-la sur YouTube, Google Drive ou Loom (non-listé).
                  </div>
                </div>
                <div style={fieldWrap}>
                  <label style={labelStyle}>Lien de ta vidéo *</label>
                  <input
                    type="url"
                    required
                    placeholder="https://youtu.be/..."
                    value={formData.video_link}
                    onChange={(e) => update('video_link', e.target.value)}
                    style={inputStyle}
                  />
                </div>
                <div style={fieldWrap}>
                  <label style={labelStyle}>Notes additionnelles (optionnel)</label>
                  <textarea
                    rows={3}
                    placeholder="Tout ce que tu voudrais qu'on sache..."
                    value={formData.notes}
                    onChange={(e) => update('notes', e.target.value)}
                    style={{ ...inputStyle, resize: 'none' }}
                  />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '0.5rem' }}>
                  <button
                    onClick={() => setCurrentPage(2)}
                    style={{
                      background: 'transparent',
                      color: '#9ca3af',
                      padding: '0.9rem',
                      borderRadius: '10px',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      border: '1px solid #2d2d4e',
                      cursor: 'pointer',
                    }}
                  >
                    ← Retour
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={loading || !formData.video_link}
                    style={{
                      background: '#2563eb',
                      color: 'white',
                      padding: '0.9rem',
                      borderRadius: '10px',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      border: 'none',
                      cursor: 'pointer',
                      opacity: (loading || !formData.video_link) ? 0.5 : 1,
                    }}
                  >
                    {loading ? 'Envoi...' : 'Soumettre 🚀'}
                  </button>
                </div>
              </div>
            )}

            {/* SUCCESS PAGE */}
            {currentPage === 'success' && (
              <div style={{ textAlign: 'center' }}>
                {/* Animated check */}
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'rgba(37,99,235,0.15)',
                  border: '3px solid #2563eb',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  fontSize: '2.5rem',
                  animation: 'pulse 1.5s ease-in-out',
                }}>
                  ✓
                </div>
                <style>{`@keyframes pulse { 0%{transform:scale(0.5);opacity:0} 60%{transform:scale(1.1)} 100%{transform:scale(1);opacity:1} }`}</style>

                <h3 style={{ color: 'white', fontWeight: 800, fontSize: '1.6rem', marginBottom: '0.5rem' }}>
                  Candidature reçue!
                </h3>
                <p style={{ color: '#6b7280', fontSize: '0.95rem', marginBottom: '2.5rem' }}>
                  Voici ce qui se passe maintenant :
                </p>

                {/* 3 steps */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem', textAlign: 'left' }}>
                  {[
                    { num: '1', title: 'Évaluation', text: 'On examine ta candidature dans les 24–48h.' },
                    { num: '2', title: 'Appel exploratoire', text: 'Si ton profil est retenu, on te contacte pour un appel de 15 minutes.' },
                    { num: '3', title: 'Onboarding', text: "Si c'est un bon fit, tu commences ta formation immédiatement." },
                  ].map((step) => (
                    <div key={step.num} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      background: 'rgba(37,99,235,0.06)',
                      border: '1px solid rgba(37,99,235,0.15)',
                      borderRadius: '12px',
                      padding: '1rem 1.25rem',
                    }}>
                      <div style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: '#2563eb',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 700,
                        fontSize: '0.8rem',
                        flexShrink: 0,
                      }}>
                        {step.num}
                      </div>
                      <div>
                        <div style={{ color: 'white', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.25rem' }}>{step.title}</div>
                        <div style={{ color: '#9ca3af', fontSize: '0.85rem', lineHeight: 1.5 }}>{step.text}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* En attendant */}
                <div style={{
                  borderTop: '1px solid #1e1e2e',
                  paddingTop: '2rem',
                  textAlign: 'left',
                }}>
                  <p style={{ color: '#6b7280', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem', fontWeight: 600 }}>
                    EN ATTENDANT
                  </p>
                  <p style={{ color: 'white', fontWeight: 700, fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                    Voici comment notre système aide nos conseillers à générer plus de 10 000$/mois
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {[
                      { title: 'Revenus moyens', text: 'Nos conseillers actifs génèrent entre 5K et 15K$/mois après 3 mois.' },
                      { title: 'Système IA', text: 'Tu ne prospectes pas. Notre IA te fournit des leads qualifiés chaque semaine.' },
                      { title: 'Croissance', text: 'En 6 mois, tu peux bâtir ta propre équipe et toucher des overrides.' },
                    ].map((card) => (
                      <div key={card.title} style={{
                        background: '#111111',
                        border: '1px solid #1e1e2e',
                        borderRadius: '10px',
                        padding: '1rem 1.25rem',
                      }}>
                        <div style={{ color: '#60a5fa', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>{card.title}</div>
                        <div style={{ color: '#9ca3af', fontSize: '0.85rem', lineHeight: 1.5 }}>{card.text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* ── 9. FAQ ── */}
      <section style={{ background: '#060606', padding: '6rem 1.5rem', borderTop: '1px solid #1a1a2e' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{
            color: 'white',
            fontSize: 'clamp(1.75rem,4vw,2.25rem)',
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: '3rem',
          }}>
            Questions fréquentes
          </h2>
          <FaqAccordion />
        </div>
      </section>

      {/* ── 10. FOOTER CTA ── */}
      <section style={{
        background: '#1d4ed8',
        padding: '5rem 1.5rem',
        textAlign: 'center',
      }}>
        <h2 style={{ color: 'white', fontSize: 'clamp(1.75rem,4vw,2.25rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2 }}>
          Ta prochaine étape commence maintenant.
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', marginBottom: '2rem' }}>
          Places limitées — Recrutement en cours
        </p>
        <a
          href="#postuler"
          style={{
            display: 'inline-block',
            background: 'white',
            color: '#1d4ed8',
            padding: '1rem 2.5rem',
            borderRadius: '10px',
            fontWeight: 800,
            fontSize: '1rem',
            textDecoration: 'none',
            letterSpacing: '0.02em',
          }}
        >
          Rejoindre EVO LIFE →
        </a>
      </section>

      {/* ── 11. FOOTER ── */}
      <footer style={{
        padding: '2rem',
        background: '#050505',
        textAlign: 'center',
        borderTop: '1px solid #1a1a2e',
      }}>
        <p style={{ color: '#374151', fontSize: '0.85rem' }}>
          &copy; 2026 EVO LIFE
        </p>
      </footer>

    </main>
  )
}
