'use client'

export default function Merci() {
  return (
    <main style={{ background: '#0a0a0a', color: 'white', fontFamily: 'inherit', margin: 0, padding: 0, minHeight: '100vh' }}>

      {/* NAVBAR */}
      <nav style={{
        background: 'rgba(10,10,10,0.97)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #1a1a2e',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
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
      </nav>

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '2.5rem 1.5rem 4rem' }}>

        {/* SUCCESS BANNER - compact */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
          background: 'rgba(16,185,129,0.1)',
          border: '1px solid rgba(16,185,129,0.3)',
          borderRadius: '12px',
          padding: '0.75rem 1.25rem',
          maxWidth: '500px',
          margin: '0 auto 2rem',
          flexWrap: 'wrap',
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
            <circle cx="12" cy="12" r="10" fill="#10b981" opacity="0.2" />
            <path d="M7 13l3.5 3.5L17 8" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ color: '#10b981', fontWeight: 700, fontSize: '0.9rem' }}>Candidature reçue!</span>
          <span style={{ color: '#6b7280', fontSize: '0.85rem' }}>On te recontacte dans 24-48h.</span>
        </div>

        {/* VIDEO SECTION - MAIN FOCUS */}
        <section style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2.2rem)', fontWeight: 900, marginBottom: '0.5rem', color: 'white' }}>
            Regarde cette vidéo avant ton appel
          </h2>
          <p style={{ color: '#71717a', fontSize: '0.95rem', marginBottom: '1.5rem', maxWidth: '580px', margin: '0 auto 1.5rem' }}>
            Découvre comment notre système génère plus de 10 000$/mois pour nos conseillers
          </p>

          {/* Video placeholder */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '800px',
            margin: '0 auto 1rem',
            aspectRatio: '16/9',
            background: '#111',
            border: '2px solid #2563eb',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 0 40px rgba(37,99,235,0.2)',
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'rgba(37,99,235,0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 30px rgba(37,99,235,0.5)',
            }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          <p style={{ color: '#52525b', fontSize: '0.85rem', marginTop: '0.5rem' }}>
            La vidéo explique notre système en détail
          </p>
        </section>

        {/* PROCHAINES ETAPES - compact */}
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ textAlign: 'center', fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', color: '#9ca3af' }}>
            Et ensuite?
          </h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>

            <div style={{
              flex: '1 1 180px',
              maxWidth: '240px',
              background: '#0f0f0f',
              border: '1px solid #1e1e2e',
              borderRadius: '12px',
              padding: '1.5rem',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#2563eb', marginBottom: '0.4rem' }}>24-48h</div>
              <p style={{ color: '#71717a', fontSize: '0.85rem', margin: 0 }}>
                On examine ta candidature
              </p>
            </div>

            <div style={{
              flex: '1 1 180px',
              maxWidth: '240px',
              background: '#0f0f0f',
              border: '1px solid #1e1e2e',
              borderRadius: '12px',
              padding: '1.5rem',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#2563eb', marginBottom: '0.4rem' }}>Appel 15 min</div>
              <p style={{ color: '#71717a', fontSize: '0.85rem', margin: 0 }}>
                Entrevue exploratoire
              </p>
            </div>

            <div style={{
              flex: '1 1 180px',
              maxWidth: '240px',
              background: '#0f0f0f',
              border: '1px solid #1e1e2e',
              borderRadius: '12px',
              padding: '1.5rem',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#2563eb', marginBottom: '0.4rem' }}>Onboarding</div>
              <p style={{ color: '#71717a', fontSize: '0.85rem', margin: 0 }}>
                Tu commences ta formation
              </p>
            </div>

          </div>
        </section>

        {/* STATS */}
        <section style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex',
            gap: '2rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            background: '#0f0f0f',
            border: '1px solid #1e1e2e',
            borderRadius: '12px',
            padding: '1rem 2rem',
          }}>
            <span style={{ color: '#52525b', fontSize: '0.85rem' }}>
              <span style={{ color: '#9ca3af', fontWeight: 700 }}>5K-15K$/mois</span>
            </span>
            <span style={{ color: '#1e1e2e' }}>|</span>
            <span style={{ color: '#52525b', fontSize: '0.85rem' }}>
              <span style={{ color: '#9ca3af', fontWeight: 700 }}>Leads IA</span> chaque semaine
            </span>
            <span style={{ color: '#1e1e2e' }}>|</span>
            <span style={{ color: '#52525b', fontSize: '0.85rem' }}>
              Équipe en <span style={{ color: '#9ca3af', fontWeight: 700 }}>6 mois</span>
            </span>
          </div>
        </section>

        {/* INSTAGRAM CTA */}
        <section style={{ textAlign: 'center' }}>
          <a
            href="https://www.instagram.com/evolife.finance"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#52525b',
              fontSize: '0.85rem',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#52525b">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Suis-nous sur Instagram
          </a>
        </section>

      </div>

      {/* FOOTER */}
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
