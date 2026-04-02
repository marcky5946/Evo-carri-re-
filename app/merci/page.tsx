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

      {/* SUCCESS MESSAGE */}
      <section style={{ padding: '5rem 1.5rem 3rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        {/* Check icon */}
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: '#16a34a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 2rem',
        }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem' }}>
          Candidature reçue!
        </h1>
        <p style={{ color: '#9ca3af', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto' }}>
          On a bien reçu ta candidature. Voici la suite.
        </p>
      </section>

      {/* PROCHAINES ETAPES */}
      <section style={{ padding: '2rem 1.5rem 4rem', maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.6rem', fontWeight: 800, marginBottom: '2.5rem' }}>
          Prochaines étapes
        </h2>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>

          {/* Card 1 */}
          <div style={{
            flex: '1 1 220px',
            maxWidth: '260px',
            background: '#111',
            border: '1px solid #1a1a2e',
            borderRadius: '14px',
            padding: '2rem 1.5rem',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>📅</div>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: '#2563eb', marginBottom: '0.5rem' }}>24-48h</div>
            <p style={{ color: '#9ca3af', fontSize: '0.9rem', margin: 0 }}>
              On examine ta candidature et on te recontacte
            </p>
          </div>

          {/* Card 2 */}
          <div style={{
            flex: '1 1 220px',
            maxWidth: '260px',
            background: '#111',
            border: '1px solid #1a1a2e',
            borderRadius: '14px',
            padding: '2rem 1.5rem',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>📞</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#2563eb', marginBottom: '0.5rem' }}>Appel de 15 min</div>
            <p style={{ color: '#9ca3af', fontSize: '0.9rem', margin: 0 }}>
              Si ton profil est retenu, on planifie un appel exploratoire
            </p>
          </div>

          {/* Card 3 */}
          <div style={{
            flex: '1 1 220px',
            maxWidth: '260px',
            background: '#111',
            border: '1px solid #1a1a2e',
            borderRadius: '14px',
            padding: '2rem 1.5rem',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🚀</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#2563eb', marginBottom: '0.5rem' }}>Onboarding</div>
            <p style={{ color: '#9ca3af', fontSize: '0.9rem', margin: 0 }}>
              Si c&apos;est un bon fit, tu commences ta formation immédiatement
            </p>
          </div>

        </div>
      </section>

      {/* VIDEO SECTION */}
      <section style={{ padding: '2rem 1.5rem 4rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '1rem' }}>
          En attendant, regarde cette vidéo
        </h2>
        <p style={{ color: '#9ca3af', fontSize: '1rem', marginBottom: '2rem', maxWidth: '560px', margin: '0 auto 2rem' }}>
          Découvre comment notre système aide nos conseillers à générer plus de 10 000 dollars par mois
        </p>

        {/* Video placeholder */}
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '700px',
          margin: '0 auto 1.5rem',
          aspectRatio: '16/9',
          background: '#111',
          border: '2px solid #2563eb',
          borderRadius: '14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}>
          {/* Play button */}
          <div style={{
            width: '72px',
            height: '72px',
            borderRadius: '50%',
            background: 'rgba(37,99,235,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        <p style={{ color: '#6b7280', fontSize: '0.9rem', maxWidth: '560px', margin: '0 auto' }}>
          Cette vidéo explique exactement comment fonctionne notre système et pourquoi nos conseillers performent.
        </p>
      </section>

      {/* STATS */}
      <section style={{ padding: '2rem 1.5rem 4rem', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>

          <div style={{
            flex: '1 1 200px',
            maxWidth: '240px',
            background: '#111',
            border: '1px solid #1a1a2e',
            borderRadius: '14px',
            padding: '2rem 1.5rem',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: '#2563eb', marginBottom: '0.5rem' }}>5K-15K$</div>
            <div style={{ color: '#9ca3af', fontSize: '0.85rem' }}>Revenus moyens après 3 mois</div>
          </div>

          <div style={{
            flex: '1 1 200px',
            maxWidth: '240px',
            background: '#111',
            border: '1px solid #1a1a2e',
            borderRadius: '14px',
            padding: '2rem 1.5rem',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: '#2563eb', marginBottom: '0.5rem' }}>Leads IA</div>
            <div style={{ color: '#9ca3af', fontSize: '0.85rem' }}>Prospects qualifiés livrés chaque semaine</div>
          </div>

          <div style={{
            flex: '1 1 200px',
            maxWidth: '240px',
            background: '#111',
            border: '1px solid #1a1a2e',
            borderRadius: '14px',
            padding: '2rem 1.5rem',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: '#2563eb', marginBottom: '0.5rem' }}>6 mois</div>
            <div style={{ color: '#9ca3af', fontSize: '0.85rem' }}>Pour bâtir ta propre équipe</div>
          </div>

        </div>
      </section>

      {/* INSTAGRAM CTA */}
      <section style={{ padding: '2rem 1.5rem 4rem', textAlign: 'center' }}>
        <a
          href="https://www.instagram.com/evolife.finance"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
            color: 'white',
            padding: '1rem 2.5rem',
            borderRadius: '10px',
            fontWeight: 700,
            fontSize: '1.05rem',
            textDecoration: 'none',
            letterSpacing: '0.02em',
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
          Suis-nous sur Instagram en attendant
        </a>
      </section>

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
