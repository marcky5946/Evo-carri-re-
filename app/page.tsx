'use client'

import { useState, FormEvent } from 'react'
import FaqAccordion from './components/FaqAccordion'

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.9rem 1rem',
  background: '#1a1a2e',
  border: '1px solid #2d2d4e',
  borderRadius: '10px',
  color: 'white',
  fontSize: '1rem',
  boxSizing: 'border-box',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  color: '#9ca3af',
  fontSize: '0.875rem',
  marginBottom: '0.5rem',
}

export default function Home() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    try {
      await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      setSubmitted(true)
    } catch {
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main style={{ background: '#0a0a0a', color: 'white', fontFamily: 'inherit', margin: 0, padding: 0 }}>

      {/* ── NAVBAR ── */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        background: 'rgba(10,10,10,0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #1e1e2e',
        padding: '1rem 1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        boxSizing: 'border-box',
      }}>
        <span style={{ color: '#f59e0b', fontWeight: 900, fontSize: '1.4rem' }}>EVO LIFE</span>
        <a
          href="#postuler"
          style={{
            background: '#1d4ed8',
            color: 'white',
            padding: '0.6rem 1.5rem',
            borderRadius: '8px',
            border: 'none',
            fontWeight: 700,
            cursor: 'pointer',
            textDecoration: 'none',
            fontSize: '0.95rem',
          }}
        >
          Postuler
        </a>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '8rem 1.5rem 4rem',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #0f0f1a 50%, #0a0a0a 100%)',
      }}>
        <div style={{ display: 'inline-block', background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)', color: '#f59e0b', padding: '0.4rem 1.2rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.5rem' }}>
          🔥 Recrutement actif — Montréal, Québec
        </div>
        <h1 style={{ color: 'white', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
          Construis une carrière à{' '}
          <span style={{ color: '#60a5fa' }}>6 chiffres</span>{' '}
          dans les services financiers
        </h1>
        <p style={{ color: '#9ca3af', fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: '600px' }}>
          Formation d&apos;élite · Système IA · Revenus illimités
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="#postuler"
            style={{ background: '#1d4ed8', color: 'white', padding: '1rem 2rem', borderRadius: '10px', fontWeight: 700, fontSize: '1rem', border: 'none', cursor: 'pointer', textDecoration: 'none' }}
          >
            Je postule maintenant
          </a>
          <a
            href="#solution"
            style={{ background: 'transparent', color: 'white', padding: '1rem 2rem', borderRadius: '10px', fontWeight: 700, fontSize: '1rem', border: '1px solid #374151', cursor: 'pointer', textDecoration: 'none' }}
          >
            En savoir plus
          </a>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: '#111111', borderTop: '1px solid #1e1e2e', borderBottom: '1px solid #1e1e2e', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2rem', textAlign: 'center' }}>
          <div>
            <div style={{ color: '#f59e0b', fontSize: '3rem', fontWeight: 900 }}>34</div>
            <div style={{ color: '#9ca3af', fontSize: '0.9rem', marginTop: '0.25rem' }}>Modules de formation</div>
          </div>
          <div>
            <div style={{ color: '#f59e0b', fontSize: '3rem', fontWeight: 900 }}>100%</div>
            <div style={{ color: '#9ca3af', fontSize: '0.9rem', marginTop: '0.25rem' }}>Commission — revenus illimités</div>
          </div>
          <div>
            <div style={{ color: '#f59e0b', fontSize: '3rem', fontWeight: 900 }}>24/7</div>
            <div style={{ color: '#9ca3af', fontSize: '0.9rem', marginTop: '0.25rem' }}>Support IA disponible</div>
          </div>
        </div>
      </section>

      {/* ── PROBLÈME ── */}
      <section style={{ padding: '5rem 1.5rem', background: '#0a0a0a' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ color: 'white', fontSize: '2rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem' }}>
            Pourquoi la plupart échouent
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.5rem' }}>
            {[
              { title: 'Pas de formation structurée', text: "La plupart des recruteurs te laissent te débrouiller seul avec un manuel PDF. Sans système, tu brûles tes contacts et tu abandonnes en 3 mois." },
              { title: 'Aucun outil moderne', text: "Sans CRM ni IA pour qualifier les prospects, tu perds des heures sur des conversations qui ne mènent nulle part." },
              { title: 'Revenu imprévisible', text: "Sans processus de vente clair et reproductible, les revenus restent instables et il est impossible de planifier sa croissance." },
            ].map((card, i) => (
              <div key={i} style={{ background: '#111111', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '16px', padding: '2rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>❌</div>
                <div style={{ color: 'white', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.75rem' }}>{card.title}</div>
                <div style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: 1.6 }}>{card.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTION ── */}
      <section id="solution" style={{ padding: '5rem 1.5rem', background: '#0a0505' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ color: 'white', fontSize: '2rem', fontWeight: 800, textAlign: 'center', marginBottom: '1rem' }}>
            EVO LIFE a résolu les 3 obstacles
          </h2>
          <p style={{ color: '#9ca3af', textAlign: 'center', marginBottom: '3rem', maxWidth: '500px', margin: '0 auto 3rem' }}>
            Un système complet, éprouvé, conçu pour te mener du départ à la liberté financière.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.5rem' }}>
            {[
              { icon: '🎓', title: 'Formation Élite', text: "34 modules structurés, accessibles en ligne, avec coaching live. Tu passes de zéro à conseiller certifié en 4 à 8 semaines." },
              { icon: '🤖', title: 'Système IA', text: "Notre IA propriétaire qualifie tes prospects, prépare tes rencontres et optimise ton suivi — 24h/24, 7j/7. Tu te concentres sur les clients, l'IA fait le reste." },
              { icon: '💰', title: 'Revenus Illimités', text: "100% commission avec un processus de vente clair et reproductible. Nos meilleurs conseillers atteignent 6 chiffres dès leur première année complète." },
            ].map((card, i) => (
              <div key={i} style={{ border: '1px solid rgba(29,78,216,0.3)', borderRadius: '16px', padding: '2rem', background: '#0f0f1a' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{card.icon}</div>
                <div style={{ color: 'white', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.75rem' }}>{card.title}</div>
                <div style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: 1.6 }}>{card.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESSUS ── */}
      <section style={{ padding: '5rem 1.5rem', background: '#0a0a0a' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ color: 'white', fontSize: '2rem', fontWeight: 800, textAlign: 'center', marginBottom: '1rem' }}>
            Ton parcours vers la liberté financière
          </h2>
          <p style={{ color: '#9ca3af', textAlign: 'center', marginBottom: '3rem' }}>
            Un chemin clair, du premier contact jusqu&apos;aux revenus à 6 chiffres.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '600px', margin: '0 auto' }}>
            {[
              { num: '1', title: 'Entrevue', desc: 'Appel exploratoire de 30 minutes pour évaluer le fit.' },
              { num: '2', title: 'Formation', desc: '34 modules en ligne avec coaching live hebdomadaire.' },
              { num: '3', title: 'Lancement', desc: 'Tes premiers clients avec le support de ton mentor.' },
              { num: '4', title: 'Liberté', desc: 'Revenus à 6 chiffres et carrière à long terme.' },
            ].map((step) => (
              <div key={step.num} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#1d4ed8', color: 'white', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.1rem' }}>
                  {step.num}
                </div>
                <div>
                  <div style={{ color: 'white', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.25rem' }}>{step.title}</div>
                  <div style={{ color: '#9ca3af', fontSize: '0.9rem' }}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROFIL ── */}
      <section style={{ padding: '5rem 1.5rem', background: '#050a0a' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ color: 'white', fontSize: '2rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem' }}>
            Le profil EVO LIFE
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '2rem' }}>
            <div style={{ background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.2)', padding: '2rem', borderRadius: '16px' }}>
              <div style={{ color: '#10b981', fontWeight: 700, fontSize: '1.1rem', marginBottom: '1.5rem' }}>✅ Pour toi si...</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'Tu veux construire des revenus sans plafond',
                  "Tu es prêt à investir en toi-même et te former sérieusement",
                  'Tu aimes aider les gens à atteindre leurs objectifs financiers',
                  'Tu veux la flexibilité de travailler à ton propre rythme',
                  "Tu es motivé par les résultats, pas par l'heure",
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#d1d5db', fontSize: '0.95rem' }}>
                    <span style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }}>✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.2)', padding: '2rem', borderRadius: '16px' }}>
              <div style={{ color: '#ef4444', fontWeight: 700, fontSize: '1.1rem', marginBottom: '1.5rem' }}>❌ Pas pour toi si...</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'Tu cherches un salaire fixe garanti dès le départ',
                  "Tu n'es pas prêt à suivre une formation et à appliquer le système",
                  'Tu veux un emploi 9-to-5 sans responsabilité de tes résultats',
                  "Tu n'as pas la motivation de prendre en charge ton développement",
                  'Tu cherches du succès rapide sans effort ni discipline',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#d1d5db', fontSize: '0.95rem' }}>
                    <span style={{ color: '#ef4444', flexShrink: 0, marginTop: '2px' }}>✗</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FORMULAIRE ── */}
      <section id="postuler" style={{ padding: '5rem 1.5rem', background: '#0f0f1a', borderTop: '2px solid #1d4ed8' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ color: 'white', fontSize: '2rem', fontWeight: 800, marginBottom: '0.75rem' }}>
              Prêt à changer ta trajectoire?
            </h2>
            <p style={{ color: '#9ca3af', fontSize: '1.05rem' }}>
              30 minutes · Entrevue exploratoire · Aucun engagement
            </p>
          </div>

          {submitted ? (
            <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '16px', padding: '2.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
              <div style={{ color: 'white', fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.5rem' }}>Candidature reçue!</div>
              <div style={{ color: '#9ca3af' }}>On te répond dans les 24h ouvrables.</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1rem' }}>
                <div>
                  <label htmlFor="firstName" style={labelStyle}>Prénom *</label>
                  <input id="firstName" name="firstName" type="text" required placeholder="Alex" style={inputStyle} />
                </div>
                <div>
                  <label htmlFor="lastName" style={labelStyle}>Nom *</label>
                  <input id="lastName" name="lastName" type="text" required placeholder="Tremblay" style={inputStyle} />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1rem' }}>
                <div>
                  <label htmlFor="email" style={labelStyle}>Courriel *</label>
                  <input id="email" name="email" type="email" required placeholder="alex@exemple.com" style={inputStyle} />
                </div>
                <div>
                  <label htmlFor="phone" style={labelStyle}>Téléphone *</label>
                  <input id="phone" name="phone" type="tel" required placeholder="514-000-0000" style={inputStyle} />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1rem' }}>
                <div>
                  <label htmlFor="city" style={labelStyle}>Ville *</label>
                  <input id="city" name="city" type="text" required placeholder="Montréal" style={inputStyle} />
                </div>
                <div>
                  <label htmlFor="experience" style={labelStyle}>Expérience en vente</label>
                  <select id="experience" name="experience" style={inputStyle}>
                    <option value="">Sélectionne...</option>
                    <option value="aucune">Aucune</option>
                    <option value="moins-1-an">Moins d&apos;un an</option>
                    <option value="1-3-ans">1 à 3 ans</option>
                    <option value="3-ans-plus">3 ans et plus</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="source" style={labelStyle}>Comment as-tu entendu parler d&apos;EVO LIFE?</label>
                <select id="source" name="source" style={inputStyle}>
                  <option value="">Sélectionne...</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="instagram">Instagram</option>
                  <option value="facebook">Facebook</option>
                  <option value="referral">Référence d&apos;un ami</option>
                  <option value="google">Google</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" style={labelStyle}>Pourquoi EVO LIFE? (optionnel)</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Dis-nous ce qui t'attire dans cette opportunité..."
                  style={{ ...inputStyle, resize: 'none' }}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                style={{ background: '#1d4ed8', color: 'white', padding: '1rem', borderRadius: '10px', fontWeight: 700, fontSize: '1rem', border: 'none', cursor: 'pointer', width: '100%', opacity: loading ? 0.7 : 1 }}
              >
                {loading ? 'Envoi en cours...' : 'Soumettre ma candidature →'}
              </button>
              <p style={{ color: '#6b7280', fontSize: '0.875rem', textAlign: 'center' }}>
                Aucun engagement. On te répond dans les 24h ouvrables.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '5rem 1.5rem', background: '#0a0a0a' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ color: 'white', fontSize: '2rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem' }}>
            Questions fréquentes
          </h2>
          <FaqAccordion />
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section style={{ padding: '4rem 1.5rem', background: '#1d4ed8', textAlign: 'center' }}>
        <h2 style={{ color: 'white', fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem' }}>
          Ta carrière à 6 chiffres commence par une conversation
        </h2>
        <a
          href="#postuler"
          style={{ display: 'inline-block', background: 'white', color: '#1d4ed8', fontWeight: 700, padding: '1rem 2.5rem', borderRadius: '12px', fontSize: '1.05rem', textDecoration: 'none' }}
        >
          Postuler maintenant
        </a>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: '2rem 1.5rem', background: '#050505', textAlign: 'center', borderTop: '1px solid #1e1e2e' }}>
        <p style={{ color: '#52525b', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} EVO LIFE. Tous droits réservés. Montréal, Québec.
        </p>
      </footer>

    </main>
  )
}
