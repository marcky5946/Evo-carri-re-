'use client'

export default function Merci() {
  return (
    <main style={{ background: '#0a0a0a', color: 'white', fontFamily: 'inherit', margin: 0, padding: 0, minHeight: '100vh' }}>

      {/* NAVBAR */}
      <nav style={{
        background: 'rgba(10,10,10,0.97)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #1a1a2e',
        padding: '0.75rem 1.5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <span style={{ fontSize: '1.3rem', fontWeight: 900 }}>
          <span style={{ color: 'white' }}>EVO</span>
          <span style={{ color: '#2563eb' }}>LIFE</span>
        </span>
      </nav>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem 3rem' }}>

        {/* FÉLICITATIONS */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🎉</div>
          <h1 style={{ fontSize: 'clamp(1.5rem,4vw,2rem)', fontWeight: 900, marginBottom: '0.5rem', color: 'white' }}>
            Félicitations!
          </h1>
          <p style={{ color: '#9ca3af', fontSize: '0.95rem' }}>
            Prochaine étape: regarde cette vidéo ↓
          </p>
        </div>

        {/* VIDEO */}
        <div style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16/9',
          background: '#111',
          border: '2px solid #2563eb',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 0 30px rgba(37,99,235,0.15)',
          marginBottom: '2rem',
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: '#2563eb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px rgba(37,99,235,0.4)',
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* PROCESSUS */}
        <div style={{
          background: '#0f0f0f',
          border: '1px solid #1e1e2e',
          borderRadius: '12px',
          padding: '1.5rem',
          marginBottom: '1.5rem',
        }}>
          <p style={{ color: 'white', fontSize: '1rem', fontWeight: 700, marginBottom: '1rem' }}>
            Le processus
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <span style={{ color: '#2563eb', fontWeight: 900, fontSize: '0.85rem', minWidth: '24px' }}>01</span>
              <div>
                <span style={{ color: 'white', fontWeight: 600, fontSize: '0.9rem' }}>On examine ta candidature</span>
                <span style={{ color: '#6b7280', fontSize: '0.85rem' }}> — 24 à 48h</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <span style={{ color: '#2563eb', fontWeight: 900, fontSize: '0.85rem', minWidth: '24px' }}>02</span>
              <div>
                <span style={{ color: 'white', fontWeight: 600, fontSize: '0.9rem' }}>Si retenu, entrevue exploratoire</span>
                <span style={{ color: '#6b7280', fontSize: '0.85rem' }}> — appel de 15 min</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <span style={{ color: '#2563eb', fontWeight: 900, fontSize: '0.85rem', minWidth: '24px' }}>03</span>
              <div>
                <span style={{ color: 'white', fontWeight: 600, fontSize: '0.9rem' }}>Si c&apos;est un fit, onboarding</span>
                <span style={{ color: '#6b7280', fontSize: '0.85rem' }}> — tu commences ta formation</span>
              </div>
            </div>
          </div>
        </div>

        {/* INSTAGRAM */}
        <div style={{ textAlign: 'center' }}>
          <a
            href="https://www.instagram.com/evolife.finance"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#52525b',
              fontSize: '0.85rem',
              textDecoration: 'none',
            }}
          >
            📸 Suis-nous sur Instagram en attendant
          </a>
        </div>

      </div>

      {/* FOOTER */}
      <footer style={{
        padding: '1.5rem',
        background: '#050505',
        textAlign: 'center',
        borderTop: '1px solid #1a1a2e',
      }}>
        <p style={{ color: '#374151', fontSize: '0.8rem', margin: 0 }}>© 2026 EVO LIFE</p>
      </footer>

    </main>
  )
}
