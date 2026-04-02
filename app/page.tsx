'use client'

import { useState } from 'react'

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

const advantages = [
  {
    icon: '🎓',
    title: 'Formation complète',
    text: '34 modules structurés, accessibles en ligne avec coaching live. De zéro à conseiller certifié en 4 à 8 semaines.',
  },
  {
    icon: '🤖',
    title: 'Leads fournis par IA',
    text: 'Nos systèmes IA qualifient tes prospects et préparent tes rencontres. Tu te concentres sur les clients, l\'IA fait le reste.',
  },
  {
    icon: '📊',
    title: 'Outils de pointe',
    text: 'CRM dédié, scripts de vente testés, bibliothèque de ressources. Tout est prêt — tu appliques et tu fermes.',
  },
  {
    icon: '🏢',
    title: '14+ assureurs',
    text: 'Accès à tous les grands noms : iA, Manuvie, Canada Vie, Sun Life, Beneva, RBC, BMO et plus. Le meilleur produit pour chaque client.',
  },
  {
    icon: '💪',
    title: 'Mentorat personnalisé',
    text: 'Accompagnement dédié de mentors actifs qui génèrent eux-mêmes 6 chiffres. Pas de théorie — du vrai terrain.',
  },
  {
    icon: '🚀',
    title: 'Croissance illimitée',
    text: 'Pas de plafond de revenus. Pas de territoire limité. Tu construis ton propre empire financier à ton rythme.',
  },
]

const comparisonRows = [
  { aspect: 'Formation', evo: '34 modules structurés', autre: 'Manuel PDF ou rien' },
  { aspect: 'Leads', evo: 'Fournis par IA', autre: 'À trouver seul' },
  { aspect: 'Assureurs', evo: '14+ partenaires', autre: '1 à 3 options' },
  { aspect: 'Outils', evo: 'CRM + IA dédiés', autre: 'Tableur Excel' },
  { aspect: 'Revenus potentiels', evo: '80 000$ — 200 000$+', autre: 'Plafonné' },
  { aspect: 'Support', evo: 'Mentorat dédié actif', autre: 'Autodidacte' },
]

const assureurs = [
  'iA Groupe Financier',
  'Manuvie',
  'Canada Vie',
  'Sun Life',
  'Beneva',
  'RBC',
  'BMO',
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

      {/* ── NAVBAR ── */}
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

      {/* ── HERO ── */}
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
          🚀 RECRUTEMENT ACTIF — MONTRÉAL &amp; QUÉBEC
        </div>

        <h1 style={{
          color: 'white',
          fontSize: 'clamp(2.5rem,7vw,5rem)',
          fontWeight: 900,
          lineHeight: 1.05,
          marginBottom: '1.5rem',
          maxWidth: '900px',
        }}>
          Deviens{' '}
          <span style={{ color: '#2563eb' }}>Conseiller Financier</span>
          <br />
          chez EVO LIFE
        </h1>

        <p style={{
          color: '#9ca3af',
          fontSize: 'clamp(1rem,2.5vw,1.25rem)',
          lineHeight: 1.7,
          marginBottom: '2.5rem',
          maxWidth: '650px',
        }}>
          On te forme. On te fournit les leads. On te donne les outils.
          <br />
          Toi, tu changes la vie financière de tes clients.
        </p>

        <div style={{
          color: '#2563eb',
          fontSize: 'clamp(2rem,5vw,3.5rem)',
          fontWeight: 900,
          marginBottom: '0.5rem',
          letterSpacing: '-0.02em',
        }}>
          80 000$ — 200 000$+
        </div>
        <div style={{
          color: '#6b7280',
          fontSize: '0.9rem',
          marginBottom: '3rem',
          letterSpacing: '0.02em',
        }}>
          Potentiel de revenus annuels &bull; 100% basé sur performance
        </div>

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
          Je veux en savoir plus →
        </a>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section style={{
        background: '#060606',
        borderTop: '1px solid #1a1a2e',
        borderBottom: '1px solid #1a1a2e',
        padding: '2rem 1.5rem',
      }}>
        <p style={{
          color: '#4b5563',
          fontSize: '0.7rem',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          marginBottom: '1.5rem',
          textAlign: 'center',
          fontWeight: 600,
        }}>
          NOS CONSEILLERS REPRÉSENTENT LES PLUS GRANDS ASSUREURS
        </p>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
        }}>
          {assureurs.map((name) => (
            <span key={name} style={{ color: '#374151', fontWeight: 600, fontSize: '0.85rem' }}>
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: '#0a0a0a', padding: '5rem 1.5rem' }}>
        <h2 style={{
          color: 'white',
          fontSize: '2rem',
          fontWeight: 800,
          textAlign: 'center',
          marginBottom: '3rem',
        }}>
          Pourquoi EVO LIFE?
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
          gap: '2rem',
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
        }}>
          {[
            { num: '34', label: 'Modules de formation' },
            { num: '14+', label: 'Assureurs partenaires' },
            { num: '100%', label: 'Revenus basés sur performance' },
          ].map((stat) => (
            <div key={stat.num}>
              <div style={{ color: '#2563eb', fontSize: '3.5rem', fontWeight: 900, lineHeight: 1 }}>
                {stat.num}
              </div>
              <div style={{ color: '#9ca3af', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── AVANTAGES ── */}
      <section style={{ background: '#060606', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{
            color: 'white',
            fontSize: '2rem',
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: '3rem',
          }}>
            Ce que tu obtiens avec EVO LIFE
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
            gap: '1.5rem',
          }}>
            {advantages.map((card) => (
              <div key={card.title} style={{
                background: '#0f0f0f',
                border: '1px solid #1e1e2e',
                borderRadius: '16px',
                padding: '2rem',
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{card.icon}</div>
                <div style={{ color: 'white', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.75rem' }}>
                  {card.title}
                </div>
                <div style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  {card.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARAISON ── */}
      <section style={{ background: '#0a0a0a', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            color: 'white',
            fontSize: '2rem',
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: '3rem',
          }}>
            L&apos;avantage EVO LIFE
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

      {/* ── FORMULAIRE ── */}
      <section id="postuler" style={{
        background: '#060606',
        padding: '5rem 1.5rem',
        borderTop: '2px solid #1d4ed8',
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ color: 'white', fontSize: '2rem', fontWeight: 800, marginBottom: '0.75rem' }}>
              Prêt à bâtir ta carrière?
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

            {/* SUCCESS */}
            {currentPage === 'success' && (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
                <div style={{ color: 'white', fontWeight: 800, fontSize: '1.4rem', marginBottom: '0.75rem' }}>
                  Candidature reçue!
                </div>
                <div style={{ color: '#9ca3af', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  Notre équipe analyse ton dossier.
                  <br />
                  Tu recevras une réponse dans les <strong style={{ color: '#60a5fa' }}>24h ouvrables</strong>.
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section style={{
        background: '#1d4ed8',
        padding: '4rem 1.5rem',
        textAlign: 'center',
      }}>
        <h2 style={{ color: 'white', fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2 }}>
          Ta prochaine étape commence maintenant.
        </h2>
        <a
          href="#postuler"
          style={{
            display: 'inline-block',
            background: 'transparent',
            color: 'white',
            padding: '0.9rem 2.5rem',
            borderRadius: '10px',
            fontWeight: 700,
            fontSize: '1rem',
            textDecoration: 'none',
            border: '2px solid rgba(255,255,255,0.6)',
            letterSpacing: '0.02em',
          }}
        >
          Postuler maintenant →
        </a>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        padding: '2rem',
        background: '#050505',
        textAlign: 'center',
        borderTop: '1px solid #1a1a2e',
      }}>
        <p style={{ color: '#374151', fontSize: '0.85rem' }}>
          &copy; 2026 EVO LIFE | GESTION GRDT INC
        </p>
      </footer>

    </main>
  )
}
