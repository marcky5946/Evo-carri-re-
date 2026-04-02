"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import {
  BookOpen,
  Bot,
  TrendingUp,
  AlertTriangle,
  Users,
  Zap,
  ChevronDown,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Play,
  Phone,
  Mail,
  MapPin,
  Star,
} from "lucide-react";

// ─── Utility ────────────────────────────────────────────────────────────────

function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}

// ─── Animated counter ────────────────────────────────────────────────────────

function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 2000, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) {
      motionValue.set(target);
    }
  }, [inView, motionValue, target]);

  useEffect(() => {
    return spring.on("change", (v) => setDisplay(Math.round(v)));
  }, [spring]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

// ─── Fade-in section wrapper ──────────────────────────────────────────────────

function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 30 : 0,
      x: direction === "left" ? -30 : direction === "right" ? 30 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Geometric background particles ──────────────────────────────────────────

function GeometricBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, #1d4ed8 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #f59e0b 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
      {/* Floating geometric shapes */}
      {[
        { size: 6, x: "10%", y: "20%", delay: 0 },
        { size: 4, x: "85%", y: "15%", delay: 1.5 },
        { size: 8, x: "70%", y: "60%", delay: 2.5 },
        { size: 5, x: "20%", y: "70%", delay: 1 },
        { size: 3, x: "50%", y: "85%", delay: 3.5 },
        { size: 7, x: "90%", y: "45%", delay: 2 },
      ].map((shape, i) => (
        <motion.div
          key={i}
          className="absolute border border-amber-400/20 rotate-45"
          style={{
            width: shape.size * 8,
            height: shape.size * 8,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            y: [-10, 10, -10],
            rotate: [45, 90, 45],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 6 + shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-amber-400 rounded-sm flex items-center justify-center">
            <span className="text-black font-black text-xs">EL</span>
          </div>
          <span className="font-black text-xl tracking-tight">
            EVO{" "}
            <span className="text-gradient-gold">LIFE</span>
          </span>
        </div>

        {/* CTA */}
        <a
          href="#apply"
          className="hidden sm:flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
        >
          Postuler maintenant
          <ArrowRight size={14} />
        </a>

        {/* Mobile CTA */}
        <a
          href="#apply"
          className="sm:hidden bg-amber-400 text-black font-bold text-sm px-4 py-2 rounded-full"
        >
          Postuler
        </a>
      </div>
    </motion.nav>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-[#0a0a0a]">
      <GeometricBackground />

      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 border border-amber-400/30 bg-amber-400/5 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">
            Recrutement Québec 2026
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6"
        >
          Construis une carrière
          <br />
          <span className="text-gradient-gold">à 6 chiffres</span>
          <br />
          dans les services financiers
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Formation d&apos;élite. Système IA. Revenus illimités.
          <br className="hidden sm:block" />
          Rejoins l&apos;équipe{" "}
          <span className="text-amber-400 font-semibold">EVO LIFE</span> au
          Québec.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#apply"
            className="group flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-black font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-amber-400/20"
          >
            Je veux en savoir plus
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>

          <button className="flex items-center gap-3 border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-medium text-base px-8 py-4 rounded-full transition-all duration-200 hover:bg-white/5">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Play size={12} fill="currentColor" />
            </div>
            Regarder la vidéo
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-20 flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-xs uppercase tracking-widest">
            Découvrir
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={18} className="text-white/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Stats ────────────────────────────────────────────────────────────────────

function StatsSection() {
  const stats = [
    { value: 34, suffix: "", label: "Modules de formation", prefix: "" },
    { value: 100, suffix: "%", label: "Commission", prefix: "" },
    { value: 24, suffix: "/7", label: "Support IA", prefix: "" },
  ];

  return (
    <section className="py-16 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-3 gap-4 sm:gap-8">
          {stats.map((stat, i) => (
            <FadeIn key={i} delay={i * 0.1} className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl font-black text-gradient-gold mb-2">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                />
              </div>
              <div className="text-white/50 text-xs sm:text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Problem ──────────────────────────────────────────────────────────────────

function ProblemSection() {
  const problems = [
    {
      icon: <BookOpen size={24} className="text-red-400" />,
      title: "Pas de formation sérieuse",
      desc: "La plupart des cabinets te lancent sur le terrain sans préparation. Tu échoues, tu blâmes les prospects — alors que c'est le système qui est brisé.",
    },
    {
      icon: <Users size={24} className="text-red-400" />,
      title: "Pas de système pour trouver des clients",
      desc: "Sans pipeline solide, tu passes 80% de ton temps à chercher des prospects au lieu de closer. C'est épuisant et non scalable.",
    },
    {
      icon: <AlertTriangle size={24} className="text-red-400" />,
      title: "Pas de support réel",
      desc: "Tu te retrouves seul face aux objections, aux doutes, aux questions complexes. Pas de mentor accessible, pas de système de réponse rapide.",
    },
  ];

  return (
    <section className="py-24 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
            Le problème
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
            Pourquoi la plupart
            <br />
            <span className="text-white/40">échouent dans les services financiers</span>
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -4, borderColor: "rgba(239,68,68,0.3)" }}
                className="bg-[#111] border border-white/8 rounded-2xl p-7 h-full transition-colors duration-300"
                style={{ border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="w-12 h-12 rounded-xl bg-red-400/10 flex items-center justify-center mb-5">
                  {p.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Solution ─────────────────────────────────────────────────────────────────

function SolutionSection() {
  const solutions = [
    {
      icon: <BookOpen size={28} className="text-amber-400" />,
      emoji: "🎓",
      title: "Formation Elite",
      tag: "34 modules",
      desc: "Un programme complet créé par des experts du terrain. Tu maîtrises le produit, le pitch, la vente — avant même ton premier appel client.",
      highlight: "Certification reconnue incluse",
    },
    {
      icon: <Bot size={28} className="text-blue-400" />,
      emoji: "🤖",
      title: "Système IA",
      tag: "24/7 automatisé",
      desc: "Notre IA génère tes prospects qualifiés, automatise tes suivis, et analyse tes performances. Tu te concentres sur ce que tu fais de mieux : closer.",
      highlight: "Prospection automatisée",
    },
    {
      icon: <TrendingUp size={28} className="text-green-400" />,
      emoji: "💰",
      title: "Revenus Illimités",
      tag: "Commission + override",
      desc: "Pas de plafond. Tes revenus reflètent exactement tes efforts. Plus tu construis ton équipe, plus tu crées du levier et du revenu passif.",
      highlight: "50K–150K$/an en moyenne",
    },
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, #1d4ed8 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
            La solution
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            EVO LIFE a résolu
            <br />
            <span className="text-gradient-gold">les 3 obstacles</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Chaque problème a été anticipé et éliminé du système.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                className="relative bg-gradient-to-b from-[#161616] to-[#111] border rounded-2xl p-8 h-full overflow-hidden group"
                style={{ border: "1px solid rgba(255,255,255,0.07)" }}
              >
                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{
                    background:
                      i === 0
                        ? "radial-gradient(circle at 50% 0%, rgba(245,158,11,0.08) 0%, transparent 60%)"
                        : i === 1
                        ? "radial-gradient(circle at 50% 0%, rgba(59,130,246,0.08) 0%, transparent 60%)"
                        : "radial-gradient(circle at 50% 0%, rgba(34,197,94,0.08) 0%, transparent 60%)",
                  }}
                />

                <div className="relative">
                  {/* Tag */}
                  <span
                    className={cn(
                      "inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-5",
                      i === 0
                        ? "bg-amber-400/10 text-amber-400"
                        : i === 1
                        ? "bg-blue-500/10 text-blue-400"
                        : "bg-green-500/10 text-green-400"
                    )}
                  >
                    {s.tag}
                  </span>

                  <div className="text-4xl mb-4">{s.emoji}</div>
                  <h3 className="text-2xl font-black text-white mb-3">
                    {s.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-5">
                    {s.desc}
                  </p>

                  {/* Highlight */}
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-amber-400" />
                    <span className="text-amber-400/80 text-xs font-semibold">
                      {s.highlight}
                    </span>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Process ──────────────────────────────────────────────────────────────────

function ProcessSection() {
  const steps = [
    {
      number: "01",
      emoji: "📋",
      title: "Entrevue",
      desc: "On évalue si c'est un bon fit — pour toi et pour nous. 30 minutes, sans pression, sans engagement.",
      color: "text-blue-400",
      border: "border-blue-400/20",
    },
    {
      number: "02",
      emoji: "🎓",
      title: "Formation",
      desc: "34 modules intensifs. Tu apprends le produit, le pitch, la psychologie de vente et le système EVO LIFE.",
      color: "text-amber-400",
      border: "border-amber-400/20",
    },
    {
      number: "03",
      emoji: "🚀",
      title: "Lancement",
      desc: "Premiers clients, premières commissions. L'IA prend en charge la prospection pendant que tu te concentres sur les entrevues.",
      color: "text-green-400",
      border: "border-green-400/20",
    },
    {
      number: "04",
      emoji: "💰",
      title: "Scale",
      desc: "Tu construis ton équipe, tu crées du levier. Tes revenus d'override s'ajoutent à tes commissions directes.",
      color: "text-purple-400",
      border: "border-purple-400/20",
    },
  ];

  return (
    <section className="py-24 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
            Le parcours
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
            Ton chemin vers
            <br />
            <span className="text-gradient-blue">6 chiffres</span>
          </h2>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className={cn(
                    "relative bg-[#111] border rounded-2xl p-6 text-center",
                    step.border
                  )}
                >
                  {/* Number badge */}
                  <div
                    className={cn(
                      "inline-flex items-center justify-center w-10 h-10 rounded-full border text-xs font-black mb-4",
                      step.border,
                      step.color
                    )}
                  >
                    {step.number}
                  </div>

                  <div className="text-3xl mb-3">{step.emoji}</div>
                  <h3 className={cn("text-lg font-bold mb-2", step.color)}>
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Profile fit ──────────────────────────────────────────────────────────────

function ProfileSection() {
  const fits = [
    "Ambitieux et orienté résultats",
    "Prêt à apprendre et à te former",
    "Tu veux des revenus illimités",
    "Tu es basé au Québec",
  ];
  const notFits = [
    "Tu cherches un salaire fixe garanti",
    "Tu veux travailler sans effort",
    "Tu as peur du téléphone",
    "Tu n'aimes pas aider les gens",
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
            Profil recherché
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
            Le profil{" "}
            <span className="text-gradient-gold">EVO LIFE</span>
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Good fit */}
          <FadeIn direction="left">
            <div className="bg-gradient-to-b from-green-950/30 to-[#111] border border-green-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                  <CheckCircle2 size={20} className="text-green-400" />
                </div>
                <h3 className="font-bold text-green-400 text-lg">
                  Tu es fait pour EVO LIFE si...
                </h3>
              </div>
              <ul className="space-y-3">
                {fits.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    className="flex items-center gap-3 text-white/80"
                  >
                    <CheckCircle2 size={16} className="text-green-400 shrink-0" />
                    <span className="text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Not fit */}
          <FadeIn direction="right">
            <div className="bg-gradient-to-b from-red-950/20 to-[#111] border border-red-500/15 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                  <XCircle size={20} className="text-red-400" />
                </div>
                <h3 className="font-bold text-red-400 text-lg">
                  Ce n&apos;est pas pour toi si...
                </h3>
              </div>
              <ul className="space-y-3">
                {notFits.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    className="flex items-center gap-3 text-white/50"
                  >
                    <XCircle size={16} className="text-red-400/60 shrink-0" />
                    <span className="text-sm line-through decoration-red-500/30">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Apply Form ───────────────────────────────────────────────────────────────

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  region: string;
  currentRole: string;
  source: string;
  message: string;
};

function ApplySection() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    region: "",
    currentRole: "",
    source: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json() as { error?: string };
        throw new Error(data.error ?? "Erreur serveur");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Une erreur est survenue.");
    }
  };

  const inputCls =
    "w-full bg-[#161616] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/20 transition-all duration-200";

  return (
    <section id="apply" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn className="text-center mb-12">
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
            Candidature
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            Prêt à changer ta vie?
            <br />
            <span className="text-gradient-gold">Postule maintenant.</span>
          </h2>
          <p className="text-white/50 text-lg">
            Entrevue exploratoire gratuite — 30 minutes.{" "}
            <span className="text-amber-400/70">Aucun engagement.</span>
          </p>
        </FadeIn>

        {status === "success" ? (
          <FadeIn>
            <div className="bg-green-950/30 border border-green-500/30 rounded-2xl p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={32} className="text-green-400" />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">
                Candidature reçue!
              </h3>
              <p className="text-white/60 text-lg">
                Merci{" "}
                <span className="text-amber-400 font-semibold">
                  {formData.firstName}
                </span>
                ! Nous vous contacterons dans{" "}
                <span className="text-white font-semibold">24–48h</span>.
              </p>
              <div className="mt-6 flex items-center justify-center gap-2 text-white/40 text-sm">
                <Mail size={14} />
                <span>Vérifiez aussi vos courriels indésirables</span>
              </div>
            </div>
          </FadeIn>
        ) : (
          <FadeIn>
            <form
              onSubmit={handleSubmit}
              className="bg-[#111] border border-white/6 rounded-2xl p-8 space-y-5"
            >
              {/* Name row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/60 text-xs font-medium uppercase tracking-wide mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Marck"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-xs font-medium uppercase tracking-wide mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Tremblay"
                    className={inputCls}
                  />
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/60 text-xs font-medium uppercase tracking-wide mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ton@email.com"
                      className={inputCls}
                    />
                    <Mail
                      size={14}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white/60 text-xs font-medium uppercase tracking-wide mb-2">
                    Téléphone *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="514-555-0000"
                      className={inputCls}
                    />
                    <Phone
                      size={14}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20"
                    />
                  </div>
                </div>
              </div>

              {/* Region */}
              <div>
                <label className="block text-white/60 text-xs font-medium uppercase tracking-wide mb-2">
                  Ville / Région au Québec *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="region"
                    required
                    value={formData.region}
                    onChange={handleChange}
                    placeholder="Montréal, Québec, Laval..."
                    className={inputCls}
                  />
                  <MapPin
                    size={14}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20"
                  />
                </div>
              </div>

              {/* Current role */}
              <div>
                <label className="block text-white/60 text-xs font-medium uppercase tracking-wide mb-2">
                  Poste actuel / Expérience
                </label>
                <input
                  type="text"
                  name="currentRole"
                  value={formData.currentRole}
                  onChange={handleChange}
                  placeholder="Ex: Représentant des ventes, étudiant en finance..."
                  className={inputCls}
                />
              </div>

              {/* Source */}
              <div>
                <label className="block text-white/60 text-xs font-medium uppercase tracking-wide mb-2">
                  Comment avez-vous entendu parler de nous?
                </label>
                <select
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  className={cn(inputCls, "appearance-none cursor-pointer")}
                >
                  <option value="" disabled>
                    Sélectionner...
                  </option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="instagram">Instagram</option>
                  <option value="facebook">Facebook</option>
                  <option value="reference">Référence d&apos;un ami</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-white/60 text-xs font-medium uppercase tracking-wide mb-2">
                  Message (optionnel)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Parle-nous de toi, de tes objectifs..."
                  className={cn(inputCls, "resize-none")}
                />
              </div>

              {/* Error */}
              {status === "error" && (
                <div className="bg-red-950/40 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm">
                  {errorMsg}
                </div>
              )}

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-amber-400 hover:bg-amber-300 disabled:opacity-60 disabled:cursor-not-allowed text-black font-bold text-base py-4 rounded-xl transition-colors duration-200 flex items-center justify-center gap-3"
              >
                {status === "loading" ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                    />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer ma candidature
                    <ArrowRight size={18} />
                  </>
                )}
              </motion.button>

              <p className="text-center text-white/30 text-xs">
                Aucun engagement. Entrevue gratuite de 30 minutes.
              </p>
            </form>
          </FadeIn>
        )}
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "Ai-je besoin d'expérience en finance?",
    a: "Aucune expérience n'est requise. Notre programme de 34 modules te forme de A à Z — produits, vente, réglementation, et mindset. Des dizaines de conseillers sans background financier ont réussi avec notre système.",
  },
  {
    q: "Combien puis-je gagner?",
    a: "Un conseiller débutant génère entre 30 000$ et 60 000$ la première année. Avec de l'expérience et une équipe, 100 000$+ est réaliste. Les revenus sont directement liés à tes efforts — pas de plafond artificiel.",
  },
  {
    q: "Est-ce que c'est du MLM?",
    a: "Non. EVO LIFE est un cabinet de services financiers régulé. Tu es rémunéré sur tes propres ventes (commission directe) et sur la production de ton équipe (override). Pas de frais d'entrée, pas de stock à acheter, pas de pyramide.",
  },
  {
    q: "Combien de temps pour les premières commissions?",
    a: "La plupart de nos conseillers reçoivent leurs premières commissions entre 2 et 4 semaines après le début de la formation. Notre système IA accélère la prospection dès le départ.",
  },
  {
    q: "Est-ce que je travaille seul?",
    a: "Jamais. Tu bénéficies d'un mentor dédié, de sessions de groupe hebdomadaires, et de notre IA support disponible 24/7 pour répondre à tes questions techniques, gérer tes suivis et optimiser ton pipeline.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <FadeIn delay={index * 0.08}>
      <motion.div
        className="border border-white/8 rounded-2xl overflow-hidden"
        animate={{ borderColor: open ? "rgba(245,158,11,0.25)" : "rgba(255,255,255,0.06)" }}
        transition={{ duration: 0.2 }}
      >
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between p-6 text-left hover:bg-white/2 transition-colors"
        >
          <span className="font-semibold text-white pr-4">{faq.q}</span>
          <motion.div
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="shrink-0"
          >
            <div className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center">
              <span className="text-amber-400 text-lg leading-none font-light">+</span>
            </div>
          </motion.div>
        </button>

        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <p className="px-6 pb-6 text-white/55 text-sm leading-relaxed">
            {faq.a}
          </p>
        </motion.div>
      </motion.div>
    </FadeIn>
  );
}

function FAQSection() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn className="text-center mb-14">
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
            Questions fréquentes
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
            FAQ
          </h2>
        </FadeIn>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer CTA ───────────────────────────────────────────────────────────────

function FooterCTA() {
  return (
    <section className="py-24 bg-[#0d0d0d] border-t border-white/5 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, #f59e0b 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className="text-amber-400 fill-amber-400"
              />
            ))}
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight mb-5">
            Ta prochaine étape
            <br />
            <span className="text-gradient-gold">commence ici.</span>
          </h2>
          <p className="text-white/50 text-xl mb-10 max-w-xl mx-auto leading-relaxed">
            Rejoins les conseillers EVO LIFE qui construisent leur liberté
            financière au Québec.
          </p>

          <a
            href="#apply"
            className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-black font-black text-lg px-10 py-5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-2xl shadow-amber-400/20"
          >
            Postuler maintenant
            <ArrowRight size={20} />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-amber-400 rounded-sm flex items-center justify-center">
            <span className="text-black font-black text-[9px]">EL</span>
          </div>
          <span className="font-black text-sm">
            EVO <span className="text-amber-400">LIFE</span>
          </span>
        </div>

        <p className="text-white/30 text-xs text-center">
          © 2026 EVO LIFE | GESTION GRDT INC | Montréal, Québec
        </p>

        <div className="flex items-center gap-4">
          <a
            href="mailto:info@evolife.ca"
            className="text-white/30 hover:text-amber-400 transition-colors"
          >
            <Mail size={16} />
          </a>
          <a
            href="tel:+15145550000"
            className="text-white/30 hover:text-amber-400 transition-colors"
          >
            <Phone size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <ProblemSection />
        <SolutionSection />
        <ProcessSection />
        <ProfileSection />
        <ApplySection />
        <FAQSection />
        <FooterCTA />
      </main>
      <Footer />
    </>
  );
}
