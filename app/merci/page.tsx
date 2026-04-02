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
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span style={{ fontSize: '1.3rem', fontWeight: 900 }}>
          <span style={{ color: 'white' }}>EVO</span>
          <span style={{ color: '#2563eb' }}>LIFE</span>
        </span>
        <span style={{ color: '#10b981', fontSize: '0.8rem', fontWeight: 600 }}>✓ Candidature reçue</span>
      </nav>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1.5rem 1rem 3rem' }}>

        {/* VIDEO - FIRST THING */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <p style={{ color: '#9ca3af', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
            Regarde cette vidéo avant ton appel ↓
          </p>
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
        </div>

        {/* PROCHAINES ETAPES - compact */}
        <div style={{
          background: '#0f0f0f',
          border: '1px solid #1e1e2e',
          borderRadius: '12px',
          padding: '1.25rem',
          marginBottom: '1.5rem',
        }}>
          <p style={{ color: '#9ca3af', fontSize: '0.8rem', fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Prochaines étapes
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ color: '#2563eb', fontWeight: 900, fontSize: '0.85rem', minWidth: '20px' }}>01</span>
              <span style={{ color: '#d1d5db', fontSize: '0.9rem' }}>On examine ta candidature <span style={{ color: '#6b7280' }}>(24-48h)</span></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ color: '#2563eb', fontWeight: 900, fontSize: '0.85rem', minWidth: '20px' }}>02</span>
              <span style={{ color: '#d1d5db', fontSize: '0.9rem' }}>Appel exploratoire de 15 min</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ color: '#2563eb', fontWeight: 900, fontSize: '0.85rem', minWidth: '20px' }}>03</span>
              <span style={{ color: '#d1d5db', fontSize: '0.9rem' }}>Tu commences ta formation</span>
            </div>
          </div>
        </div>

        {/* STATS - one line */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap',
          marginBottom: '1.5rem',
          padding: '1rem',
          background: '#0f0f0f',
          border: '1px solid #1e1e2e',
          borderRadius: '12px',
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#2563eb', fontWeight: 900, fontSize: '1.1rem' }}>5K-15K$/mois</div>
            <div style={{ color: '#52525b', fontSize: '0.75rem' }}>Revenus moyens</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#2563eb', fontWeight: 900, fontSize: '1.1rem' }}>Leads IA</div>
            <div style={{ color: '#52525b', fontSize: '0.75rem' }}>Chaque semaine</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#2563eb', fontWeight: 900, fontSize: '1.1rem' }}>6 mois</div>
            <div style={{ color: '#52525b', fontSize: '0.75rem' }}>Pour ton équipe</div>
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
