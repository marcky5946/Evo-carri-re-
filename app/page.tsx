import FaqAccordion from './components/FaqAccordion'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* ── NAVBAR ── */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur border-b border-zinc-800/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-amber-400 font-bold text-2xl tracking-tight">EVO LIFE</span>
          <a
            href="#postuler"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
          >
            Postuler
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#0f0f1a] to-[#0a0a0a] px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 border border-amber-400/30 bg-amber-400/10 text-amber-400 rounded-full px-4 py-1 text-sm font-medium">
            🔥 Recrutement actif — Montréal, Québec
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Construis une carrière à{' '}
            <span className="text-blue-400">6 chiffres</span> dans les services
            financiers
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Formation d&apos;élite · Système IA · Revenus illimités
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#postuler"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Je postule maintenant
            </a>
            <a
              href="#solution"
              className="border border-zinc-600 hover:border-zinc-400 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-zinc-900 border-y border-zinc-800 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-amber-400 text-4xl font-bold">34</p>
              <p className="text-zinc-400 mt-1">Modules de formation</p>
            </div>
            <div>
              <p className="text-amber-400 text-4xl font-bold">100%</p>
              <p className="text-zinc-400 mt-1">Commission — revenus illimités</p>
            </div>
            <div>
              <p className="text-amber-400 text-4xl font-bold">24/7</p>
              <p className="text-zinc-400 mt-1">Support IA disponible</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLÈME ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            Pourquoi la plupart échouent
          </h2>
          <p className="text-zinc-400 text-center mb-12 max-w-xl mx-auto">
            3 obstacles récurrents qui bloquent les conseillers financiers avant même de démarrer.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-900 border border-red-900/50 rounded-2xl p-8 space-y-4">
              <span className="text-3xl">❌</span>
              <h3 className="text-white font-bold text-lg">Pas de formation structurée</h3>
              <p className="text-zinc-400">
                La plupart des recruteurs te laissent te débrouiller seul avec un manuel PDF. Sans
                système, tu brûles tes contacts et tu abandonnes en 3 mois.
              </p>
            </div>
            <div className="bg-zinc-900 border border-red-900/50 rounded-2xl p-8 space-y-4">
              <span className="text-3xl">❌</span>
              <h3 className="text-white font-bold text-lg">Aucun outil moderne</h3>
              <p className="text-zinc-400">
                Sans CRM ni IA pour qualifier les prospects, tu perds des heures sur des
                conversations qui ne mènent nulle part.
              </p>
            </div>
            <div className="bg-zinc-900 border border-red-900/50 rounded-2xl p-8 space-y-4">
              <span className="text-3xl">❌</span>
              <h3 className="text-white font-bold text-lg">Revenu imprévisible</h3>
              <p className="text-zinc-400">
                Sans processus de vente clair et reproductible, les revenus restent instables et
                il est impossible de planifier sa croissance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOLUTION ── */}
      <section id="solution" className="py-20 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            EVO LIFE a résolu les 3 obstacles
          </h2>
          <p className="text-zinc-400 text-center mb-12 max-w-xl mx-auto">
            Un système complet, éprouvé, conçu pour te mener du départ à la liberté financière.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-900 border border-blue-800/50 hover:border-blue-600/50 transition-colors rounded-2xl p-8 space-y-4">
              <span className="text-3xl">🎓</span>
              <h3 className="text-white font-bold text-lg">Formation Élite</h3>
              <p className="text-zinc-400">
                34 modules structurés, accessibles en ligne, avec coaching live. Tu passes de zéro
                à conseiller certifié en 4 à 8 semaines.
              </p>
            </div>
            <div className="bg-zinc-900 border border-blue-800/50 hover:border-blue-600/50 transition-colors rounded-2xl p-8 space-y-4">
              <span className="text-3xl">🤖</span>
              <h3 className="text-white font-bold text-lg">Système IA</h3>
              <p className="text-zinc-400">
                Notre IA propriétaire qualifie tes prospects, prépare tes rencontres et optimise
                ton suivi — 24h/24, 7j/7. Tu te concentres sur les clients, l&apos;IA fait le reste.
              </p>
            </div>
            <div className="bg-zinc-900 border border-blue-800/50 hover:border-blue-600/50 transition-colors rounded-2xl p-8 space-y-4">
              <span className="text-3xl">💰</span>
              <h3 className="text-white font-bold text-lg">Revenus Illimités</h3>
              <p className="text-zinc-400">
                100% commission avec un processus de vente clair et reproductible. Nos meilleurs
                conseillers atteignent 6 chiffres dès leur première année complète.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESSUS ── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            4 étapes vers ta liberté financière
          </h2>
          <p className="text-zinc-400 text-center mb-16 max-w-xl mx-auto">
            Un chemin clair, du premier contact jusqu&apos;aux revenus à 6 chiffres.
          </p>
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-0.5 bg-zinc-700" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { num: '1', icon: '📋', title: 'Entrevue', desc: 'Appel exploratoire de 30 minutes pour évaluer le fit.' },
                { num: '2', icon: '🎓', title: 'Formation', desc: '34 modules en ligne avec coaching live hebdomadaire.' },
                { num: '3', icon: '🚀', title: 'Lancement', desc: 'Tes premiers clients avec le support de ton mentor.' },
                { num: '4', icon: '💰', title: 'Liberté', desc: 'Revenus à 6 chiffres et carrière à long terme.' },
              ].map((step) => (
                <div key={step.num} className="flex flex-col items-center text-center space-y-3">
                  <div className="relative z-10 w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
                    {step.num}
                  </div>
                  <span className="text-3xl">{step.icon}</span>
                  <h3 className="text-white font-bold text-lg">{step.title}</h3>
                  <p className="text-zinc-400 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROFIL ── */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Est-ce que c&apos;est fait pour toi?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-emerald-900/20 border border-emerald-800/30 rounded-2xl p-8">
              <h3 className="text-emerald-400 font-bold text-xl mb-6">✅ Pour toi si...</h3>
              <ul className="space-y-3">
                {[
                  'Tu veux construire des revenus sans plafond',
                  "Tu es prêt à investir en toi-même et te former sérieusement",
                  'Tu aimes aider les gens à atteindre leurs objectifs financiers',
                  'Tu veux la flexibilité de travailler à ton propre rythme',
                  "Tu es motivé par les résultats, pas par l'heure",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-300">
                    <span className="text-emerald-400 mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-900/20 border border-red-800/30 rounded-2xl p-8">
              <h3 className="text-red-400 font-bold text-xl mb-6">❌ Pas pour toi si...</h3>
              <ul className="space-y-3">
                {[
                  'Tu cherches un salaire fixe garanti dès le départ',
                  "Tu n'es pas prêt à suivre une formation et à appliquer le système",
                  'Tu veux un emploi 9-to-5 sans responsabilité de tes résultats',
                  'Tu n\'as pas la motivation de prendre en charge ton développement',
                  'Tu cherches du succès rapide sans effort ni discipline',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-300">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Questions fréquentes
          </h2>
          <FaqAccordion />
        </div>
      </section>

      {/* ── FORMULAIRE ── */}
      <section id="postuler" className="py-20 px-6 bg-zinc-950 border-t border-blue-800/40">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prêt à changer ta trajectoire?
            </h2>
            <p className="text-zinc-400 text-lg">
              30 minutes · Entrevue exploratoire · Aucun engagement
            </p>
          </div>
          <form action="/api/apply" method="POST" className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="firstName" className="block text-sm text-zinc-400 mb-2">
                  Prénom *
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500"
                  placeholder="Alex"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm text-zinc-400 mb-2">
                  Nom *
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500"
                  placeholder="Tremblay"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="email" className="block text-sm text-zinc-400 mb-2">
                  Courriel *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500"
                  placeholder="alex@exemple.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm text-zinc-400 mb-2">
                  Téléphone *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500"
                  placeholder="514-000-0000"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="city" className="block text-sm text-zinc-400 mb-2">
                  Ville *
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  required
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500"
                  placeholder="Montréal"
                />
              </div>
              <div>
                <label htmlFor="experience" className="block text-sm text-zinc-400 mb-2">
                  Expérience en vente
                </label>
                <select
                  id="experience"
                  name="experience"
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="">Sélectionne...</option>
                  <option value="aucune">Aucune</option>
                  <option value="moins-1-an">Moins d&apos;un an</option>
                  <option value="1-3-ans">1 à 3 ans</option>
                  <option value="3-ans-plus">3 ans et plus</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="source" className="block text-sm text-zinc-400 mb-2">
                Comment as-tu entendu parler d&apos;EVO LIFE?
              </label>
              <select
                id="source"
                name="source"
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              >
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
              <label htmlFor="message" className="block text-sm text-zinc-400 mb-2">
                Pourquoi EVO LIFE? (optionnel)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 resize-none"
                placeholder="Dis-nous ce qui t'attire dans cette opportunité..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl text-lg transition-colors"
            >
              Soumettre ma candidature →
            </button>
            <p className="text-zinc-500 text-sm text-center">
              Aucun engagement. On te répond dans les 24h ouvrables.
            </p>
          </form>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="bg-blue-700 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ta carrière à 6 chiffres commence par une conversation
        </h2>
        <a
          href="#postuler"
          className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl text-lg hover:bg-zinc-100 transition-colors"
        >
          Postuler maintenant
        </a>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-amber-400 font-bold text-xl">EVO LIFE</span>
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} EVO LIFE. Tous droits réservés. Montréal, Québec.
          </p>
        </div>
      </footer>
    </main>
  )
}
