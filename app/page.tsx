'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence, type Variants } from 'framer-motion'

// ─── Animation variants ──────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.0, 0.0, 0.2, 1] } },
}

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

// ─── Deterministic particle positions (avoids SSR hydration mismatch) ────────

const PARTICLES: Array<{ left: string; top: string; delay: string; duration: string }> = [
  { left: '5%', top: '10%', delay: '0s', duration: '4s' },
  { left: '15%', top: '75%', delay: '0.5s', duration: '5s' },
  { left: '25%', top: '30%', delay: '1s', duration: '3.5s' },
  { left: '35%', top: '85%', delay: '1.5s', duration: '4.5s' },
  { left: '45%', top: '15%', delay: '0.3s', duration: '6s' },
  { left: '55%', top: '55%', delay: '2s', duration: '4s' },
  { left: '65%', top: '25%', delay: '0.8s', duration: '5.5s' },
  { left: '75%', top: '70%', delay: '1.2s', duration: '3s' },
  { left: '85%', top: '40%', delay: '2.5s', duration: '4.5s' },
  { left: '92%', top: '80%', delay: '0.6s', duration: '5s' },
  { left: '8%', top: '50%', delay: '1.8s', duration: '4s' },
  { left: '20%', top: '90%', delay: '0.9s', duration: '3.5s' },
  { left: '40%', top: '45%', delay: '2.2s', duration: '5s' },
  { left: '60%', top: '5%', delay: '1.4s', duration: '6s' },
  { left: '70%', top: '95%', delay: '0.2s', duration: '4.5s' },
  { left: '80%', top: '20%', delay: '3s', duration: '3.5s' },
  { left: '90%', top: '60%', delay: '1.6s', duration: '4s' },
  { left: '30%', top: '65%', delay: '0.4s', duration: '5.5s' },
  { left: '50%', top: '35%', delay: '2.8s', duration: '3s' },
  { left: '12%', top: '42%', delay: '1.1s', duration: '4.5s' },
]

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5">
      <span className="text-xl font-extrabold text-gradient-gold tracking-wide">
        EVO LIFE
      </span>
      <motion.a
        href="#apply"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-5 py-2 bg-[#1d4ed8] hover:bg-[#1d4ed8]/80 text-white text-sm font-semibold rounded-lg transition-colors"
      >
        Postuler
      </motion.a>
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 overflow-hidden bg-[#0a0a0a]">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#1d4ed8]/10 blur-[140px]" />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="particle"
            style={
              {
                left: p.left,
                top: p.top,
                '--particle-delay': p.delay,
                '--particle-duration': p.duration,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/5 border border-white/10 rounded-full text-sm text-white/80"
        >
          <span>🔥</span>
          <span>Recrutement actif — Montréal, Québec</span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
        >
          Construis une carrière à{' '}
          <span className="text-gradient-gold">6 chiffres</span>{' '}
          dans les services financiers
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto"
        >
          Formation d&apos;élite · Système IA · Revenus illimités · Équipe EVO LIFE
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#apply"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[#1d4ed8] hover:bg-[#1d4ed8]/90 text-white font-bold text-lg rounded-xl transition-colors shadow-lg shadow-[#1d4ed8]/25"
          >
            Je postule maintenant
          </motion.a>
          <motion.a
            href="#solution"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-white/20 hover:border-white/40 text-white font-bold text-lg rounded-xl transition-colors"
          >
            En savoir plus
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Animated counter ─────────────────────────────────────────────────────────

function AnimatedCounter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    const duration = 2000
    const startTime = performance.now()

    const update = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(update)
    }

    requestAnimationFrame(update)
  }, [isInView, end])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

// ─── Stats ────────────────────────────────────────────────────────────────────

const STATS: Array<{ end: number; suffix: string; label: string }> = [
  { end: 34, suffix: '', label: 'Modules de formation' },
  { end: 100, suffix: '%', label: 'Commission sur vos ventes' },
  { end: 24, suffix: '/7', label: 'Support IA inclus' },
]

function StatsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 bg-[#111111] border-y border-[#f59e0b]/10">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="text-center p-8 border border-[#f59e0b]/20 rounded-2xl bg-[#0a0a0a]/50"
            >
              <div className="text-5xl md:text-6xl font-extrabold text-gradient-gold mb-3">
                <AnimatedCounter end={stat.end} suffix={stat.suffix} />
              </div>
              <p className="text-white/60 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── Problem ──────────────────────────────────────────────────────────────────

const PROBLEMS: string[] = [
  'Zéro formation réelle — On te lâche dans le vide',
  'Aucun système pour trouver des clients — Tu pars de zéro',
  'Pas de support — Tu es seul face aux objections',
]

function ProblemSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 bg-[#0a0a0a] px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-3xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Pourquoi la plupart{' '}
          <span className="text-red-400">échouent</span>{' '}
          dans les services financiers
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {PROBLEMS.map((problem) => (
            <motion.div
              key={problem}
              variants={fadeUp}
              className="p-6 bg-[#111111] border border-red-500/20 rounded-2xl flex gap-4 items-start"
            >
              <span className="text-2xl flex-shrink-0">❌</span>
              <p className="text-white/70 text-base leading-relaxed">{problem}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── Solution ─────────────────────────────────────────────────────────────────

interface SolutionItem {
  icon: string
  title: string
  description: string
}

const SOLUTIONS: SolutionItem[] = [
  {
    icon: '🎓',
    title: 'Formation Élite',
    description: '34 modules, experts du terrain, de la prospection au closing',
  },
  {
    icon: '🤖',
    title: 'Système IA',
    description: 'Prospects automatisés, suivis intelligents, tu te concentres sur closer',
  },
  {
    icon: '💰',
    title: 'Revenus Illimités',
    description: "Commissions directes + override d'équipe. Pas de plafond.",
  },
]

function SolutionSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="solution" ref={ref} className="py-24 bg-[#111111] px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-3xl md:text-5xl font-bold text-white text-center mb-16"
        >
          EVO LIFE a résolu les{' '}
          <span className="text-gradient-blue">3 obstacles</span>
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {SOLUTIONS.map((solution) => (
            <motion.div
              key={solution.title}
              variants={fadeUp}
              className="p-8 bg-[#0a0a0a] border border-[#1d4ed8]/30 rounded-2xl hover:border-[#1d4ed8]/60 transition-colors"
            >
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
              <p className="text-white/60 leading-relaxed">{solution.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── Process ──────────────────────────────────────────────────────────────────

interface Step {
  icon: string
  title: string
  desc: string
  step: number
}

const STEPS: Step[] = [
  { icon: '📋', title: 'Entrevue exploratoire', desc: '30 min', step: 1 },
  { icon: '🎓', title: 'Formation intensive', desc: '34 modules', step: 2 },
  { icon: '🚀', title: 'Premiers clients et revenus', desc: 'Semaines 2-4', step: 3 },
  { icon: '💰', title: 'Scale et liberté financière', desc: '6 chiffres+', step: 4 },
]

function ProcessSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 bg-[#0a0a0a] px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-3xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Ton parcours vers la{' '}
          <span className="text-gradient-gold">liberté financière</span>
        </motion.h2>

        {/* Desktop */}
        <div className="hidden md:block relative">
          <div className="absolute top-12 left-[12.5%] right-[12.5%] h-px bg-white/5">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
              style={{ transformOrigin: 'left' }}
              className="absolute inset-0 bg-gradient-to-r from-[#1d4ed8] to-[#f59e0b]"
            />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-4 gap-4"
          >
            {STEPS.map((s) => (
              <motion.div
                key={s.step}
                variants={fadeUp}
                className="flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 flex items-center justify-center bg-[#111111] border-2 border-[#1d4ed8]/40 rounded-full mb-4 text-3xl relative z-10">
                  {s.icon}
                </div>
                <div className="w-6 h-6 rounded-full bg-[#f59e0b] mb-3 text-xs font-bold text-black flex items-center justify-center">
                  {s.step}
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{s.title}</h3>
                <p className="text-white/40 text-xs">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile */}
        <div className="md:hidden space-y-0">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.step}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ delay: i * 0.15 }}
              className="flex gap-4 pb-8 last:pb-0"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-[#111111] border-2 border-[#1d4ed8]/40 rounded-full text-xl flex-shrink-0">
                  {s.icon}
                </div>
                {i < STEPS.length - 1 && (
                  <div className="w-px flex-1 bg-[#1d4ed8]/20 mt-2" />
                )}
              </div>
              <div className="pt-2">
                <div className="text-xs text-[#f59e0b] font-bold mb-1 tracking-wider">
                  ÉTAPE {s.step}
                </div>
                <h3 className="text-white font-semibold mb-1">{s.title}</h3>
                <p className="text-white/40 text-sm">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Profile ──────────────────────────────────────────────────────────────────

const FOR_YOU: string[] = [
  'Tu veux des revenus sans plafond',
  'Tu es ambitieux et orienté résultats',
  'Tu veux apprendre et te former',
  'Tu es basé au Québec',
  'Tu aimes aider les gens',
]

const NOT_FOR_YOU: string[] = [
  'Tu cherches un salaire fixe garanti',
  'Tu veux travailler sans effort',
  'Tu as peur du téléphone',
  'Tu cherches un emploi 9 à 5',
  'Tu veux des résultats sans investissement',
]

function ProfileSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 bg-[#111111] px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-3xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Le profil <span className="text-gradient-gold">EVO LIFE</span>
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <motion.div
            variants={fadeUp}
            className="p-8 bg-[#0a0a0a] border border-green-500/20 rounded-2xl"
          >
            <h3 className="text-xl font-bold text-green-400 mb-6">✅ Pour toi si...</h3>
            <ul className="space-y-3">
              {FOR_YOU.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/70">
                  <span className="text-green-400 flex-shrink-0 mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="p-8 bg-[#0a0a0a] border border-red-500/20 rounded-2xl"
          >
            <h3 className="text-xl font-bold text-red-400 mb-6">❌ Pas pour toi si...</h3>
            <ul className="space-y-3">
              {NOT_FOR_YOU.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/70">
                  <span className="text-red-400 flex-shrink-0 mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Form ─────────────────────────────────────────────────────────────────────

interface ApplicationFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  city: string
  experience: string
  source: string
  message: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  city?: string
  experience?: string
  source?: string
}

interface ApiResponse {
  success: boolean
  message?: string
  error?: string
}

const EMPTY_FORM: ApplicationFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  city: '',
  experience: '',
  source: '',
  message: '',
}

function fieldClass(hasError?: boolean): string {
  return `w-full px-4 py-3 bg-[#0a0a0a] border ${
    hasError ? 'border-red-500' : 'border-white/10'
  } rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#1d4ed8] transition-colors`
}

function FormSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const [form, setForm] = useState<ApplicationFormData>(EMPTY_FORM)
  const [errors, setErrors] = useState<FormErrors>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [serverError, setServerError] = useState('')

  function validate(): boolean {
    const next: FormErrors = {}
    if (!form.firstName.trim()) next.firstName = 'Prénom requis'
    if (!form.lastName.trim()) next.lastName = 'Nom requis'
    if (!form.email.trim()) next.email = 'Email requis'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Email invalide'
    if (!form.phone.trim()) next.phone = 'Téléphone requis'
    if (!form.city) next.city = 'Ville requise'
    if (!form.experience) next.experience = 'Expérience requise'
    if (!form.source) next.source = 'Source requise'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    const field = name as keyof FormErrors
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    setServerError('')
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = (await res.json()) as ApiResponse
      if (data.success) {
        setSuccess(true)
      } else {
        setServerError(data.error ?? 'Une erreur est survenue')
      }
    } catch {
      setServerError('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="apply" ref={ref} className="py-24 bg-[#0f0f0f] border-t-2 border-[#1d4ed8] px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Prêt à changer ta{' '}
            <span className="text-gradient-gold">trajectoire?</span>
          </h2>
          <p className="text-white/50">
            Entrevue exploratoire gratuite · 30 minutes · Aucun engagement
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            {success ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center p-12 bg-[#111111] border border-green-500/30 rounded-2xl"
              >
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-white mb-2">Candidature reçue!</h3>
                <p className="text-white/60">Nous vous contacterons dans 24-48h.</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-5 p-8 bg-[#111111] border border-white/5 rounded-2xl"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <input
                      name="firstName"
                      placeholder="Prénom *"
                      value={form.firstName}
                      onChange={handleChange}
                      className={fieldClass(!!errors.firstName)}
                    />
                    {errors.firstName && (
                      <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <input
                      name="lastName"
                      placeholder="Nom *"
                      value={form.lastName}
                      onChange={handleChange}
                      className={fieldClass(!!errors.lastName)}
                    />
                    {errors.lastName && (
                      <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={form.email}
                    onChange={handleChange}
                    className={fieldClass(!!errors.email)}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Téléphone *"
                    value={form.phone}
                    onChange={handleChange}
                    className={fieldClass(!!errors.phone)}
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <select
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    className={fieldClass(!!errors.city)}
                  >
                    <option value="" disabled>
                      Ville/Région *
                    </option>
                    {['Montréal', 'Laval', 'Québec', 'Longueuil', 'Sherbrooke', 'Autre'].map(
                      (c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      )
                    )}
                  </select>
                  {errors.city && (
                    <p className="text-red-400 text-xs mt-1">{errors.city}</p>
                  )}
                </div>

                <div>
                  <select
                    name="experience"
                    value={form.experience}
                    onChange={handleChange}
                    className={fieldClass(!!errors.experience)}
                  >
                    <option value="" disabled>
                      Expérience en vente *
                    </option>
                    {['Aucune', '1-2 ans', '3-5 ans', '5+ ans'].map((e) => (
                      <option key={e} value={e}>
                        {e}
                      </option>
                    ))}
                  </select>
                  {errors.experience && (
                    <p className="text-red-400 text-xs mt-1">{errors.experience}</p>
                  )}
                </div>

                <div>
                  <select
                    name="source"
                    value={form.source}
                    onChange={handleChange}
                    className={fieldClass(!!errors.source)}
                  >
                    <option value="" disabled>
                      Comment vous avez entendu parler de nous *
                    </option>
                    {['LinkedIn', 'Instagram', 'Facebook', 'Référence', 'Autre'].map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.source && (
                    <p className="text-red-400 text-xs mt-1">{errors.source}</p>
                  )}
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Message (optionnel)"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className={`${fieldClass()} resize-none`}
                  />
                </div>

                {serverError && (
                  <p className="text-red-400 text-sm text-center">{serverError}</p>
                )}

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-[#1d4ed8] hover:bg-[#1d4ed8]/90 disabled:opacity-50 text-white font-bold text-lg rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    'Envoyer ma candidature →'
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

interface FaqItem {
  q: string
  a: string
}

const FAQS: FaqItem[] = [
  {
    q: "Ai-je besoin d'expérience en finance?",
    a: "Non. Notre formation de 34 modules te forme de zéro. Des centaines de conseillers ont démarré sans aucune expérience préalable.",
  },
  {
    q: 'Combien puis-je gagner?',
    a: "Débutant: 30-60K$/an. Expérimenté: 100K$+. Pas de plafond — tes revenus sont directement liés à tes efforts.",
  },
  {
    q: 'Est-ce du MLM?',
    a: "Non. Structure directe. Tu es payé sur tes ventes personnelles uniquement. Pas de recrutement obligatoire, pas de frais cachés.",
  },
  {
    q: 'Combien de temps avant les premières commissions?',
    a: "2-4 semaines avec notre formation accélérée. Tu seras opérationnel rapidement grâce à notre système IA.",
  },
  {
    q: 'Est-ce que je travaille seul?',
    a: "Non. Équipe, mentors, et système IA 24/7 à ta disposition. Tu ne seras jamais laissé sans support.",
  },
]

function FAQSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-24 bg-[#111111] px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-3xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Questions <span className="text-gradient-blue">fréquentes</span>
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-4"
        >
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="border border-white/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left text-white font-semibold hover:bg-white/5 transition-colors cursor-pointer"
              >
                <span>{faq.q}</span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-[#f59e0b] flex-shrink-0 ml-4 text-xs"
                >
                  ▼
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-white/60 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── Footer CTA ───────────────────────────────────────────────────────────────

function FooterCTA() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 bg-[#1d4ed8] px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-3xl md:text-5xl font-bold text-white mb-8"
        >
          Ta prochaine étape commence maintenant.
        </motion.h2>

        <motion.a
          href="#apply"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-10 py-5 bg-white text-[#1d4ed8] font-bold text-xl rounded-xl hover:bg-white/90 transition-colors shadow-2xl"
        >
          Postuler maintenant
        </motion.a>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="py-8 bg-[#0a0a0a] border-t border-white/5 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <span className="text-gradient-gold font-bold text-lg">EVO LIFE</span>
          <p className="text-white/30 text-sm mt-1">
            © 2026 EVO LIFE | GESTION GRDT INC | Montréal, Québec
          </p>
        </div>
        <div className="flex gap-6 text-sm text-white/40">
          <a href="#" className="hover:text-white/70 transition-colors">
            Confidentialité
          </a>
          <a href="#" className="hover:text-white/70 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      <ProfileSection />
      <FormSection />
      <FAQSection />
      <FooterCTA />
      <Footer />
    </main>
  )
}
