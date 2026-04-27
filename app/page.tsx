'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight, CheckCircle2, Phone, MapPin, Star, Shield,
  Heart, Scissors, Stethoscope, Home, Zap, Users, Award, Clock
} from 'lucide-react'

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal')
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

// All images sourced from Pexels (free, no copyright) — foot care specific
const P = (id: number, w = 800, h = 600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`

const images = {
  // Pexels 6628700  — person having a foot massage
  hero:      P(6628700, 900, 700),
  // Pexels 17056222 — close-up woman doing pedicure
  clinical:  P(17056222, 900, 700),
  // Pexels 8600448  — applying cream/petroleum jelly on foot
  nurseWork: P(8600448, 800, 700),
  // Pexels 4963838  — close-up of woman's feet (pedicured)
  footCare:  P(4963838, 800, 700),
  // Pexels 7755212  — person getting nail file treatment
  wellness:  P(7755212, 800, 700),
  // Pexels 9789204  — nail polish applied to toenails
  nurse1:    P(9789204, 400, 300),
  // Pexels 9486777  — people's feet close-up
  nurse2:    P(9486777, 400, 300),
  // Pexels 1076584  — close-up hands and feet
  clinic:    P(1076584, 900, 600),
  // Pexels 9486783  — people on tiptoe / feet
  avatar1:   P(9486783, 120, 120),
  // Unsplash — healthcare worker examining patient's feet
  footExam:  `https://images.unsplash.com/photo-1746806942505-7215c07810ae?auto=format&fit=crop&w=900&q=85`,
  // Pexels 6628700  — foot massage (reuse for CTA)
  cta:       P(6628700, 1600, 800),
}

const services = [
  { icon: Scissors,    title: 'Medical Pedicures',      desc: 'Clinical-grade nail and skin care in a sterile setting — real results for healthy, pain-free feet.',          color: 'bg-teal-50 text-teal-600',      img: P(17056222, 400, 280) },
  { icon: Shield,      title: 'Fungal Nail Treatment',  desc: 'ToeFX laser therapy and topical protocols to eliminate fungal infections and restore clear, healthy nails.',    color: 'bg-emerald-50 text-emerald-600', img: P(9789204,  400, 280) },
  { icon: Heart,       title: 'Diabetic Foot Care',     desc: 'Specialized assessment for patients with diabetes, circulation issues, or neuropathy — preventing complications.', color: 'bg-rose-50 text-rose-500',       img: P(8600448,  400, 280) },
  { icon: Stethoscope, title: 'Callus & Corn Removal',  desc: 'Sterile reduction of painful calluses and corns using professional-grade instruments — immediate relief.',        color: 'bg-amber-50 text-amber-600',     img: P(4963838,  400, 280) },
  { icon: Zap,         title: 'Ingrown Nail Therapy',   desc: 'Onyfix nail bracing to painlessly correct and prevent ingrown nails without surgery.',                           color: 'bg-violet-50 text-violet-600',   img: P(7755212,  400, 280) },
  { icon: Home,        title: 'In-Home Nursing Visits', desc: 'Full foot care services brought to your door — ideal for seniors, post-surgery patients, or limited mobility.',    color: 'bg-sky-50 text-sky-600',         img: P(6628700,  400, 280) },
]

const stats = [
  { value: '15+',    label: 'Years of Experience' },
  { value: '3,000+', label: 'Patients Served' },
  { value: '100%',   label: 'Licensed Nurses' },
  { value: '5★',     label: 'Patient Rating' },
]

const whyUs = [
  { icon: Award,       title: 'Registered Nurses Only',      desc: 'Every treatment is performed by licensed RNs or LPNs with specialized foot care training — not estheticians.' },
  { icon: Shield,      title: 'Hospital-Grade Sterilization', desc: 'We autoclave all instruments between every patient — the same standard used in hospitals.' },
  { icon: Stethoscope, title: 'No Referral Required',         desc: 'Book directly with us. Most extended health plans cover our services.' },
  { icon: Heart,       title: 'Safe for Complex Conditions',  desc: 'Trained to care for patients with diabetes, poor circulation, arthritis, and other health conditions.' },
]

const steps = [
  { num: '01', title: 'Book Online or Call',      desc: 'Schedule an in-office visit or home visit at a time that works for you.' },
  { num: '02', title: 'Assessment & Care Plan',   desc: 'Your nurse reviews your health history and designs a personalized foot care plan.' },
  { num: '03', title: 'Expert Treatment',         desc: 'Receive professional care with sterile instruments in a comfortable, clinical setting.' },
]

const testimonials = [
  { name: 'Margaret T.', role: 'Diabetic patient, 68', text: 'As a diabetic, I was nervous about foot care. The nurses were thorough, gentle, and explained everything. My feet have never felt better.', stars: 5, avatar: P(17056222, 120, 120) },
  { name: 'David K.',    role: 'Home visit patient',    text: "The home visit service is incredible. My elderly mother can't travel easily, and they came to us fully equipped. Professional and caring.",    stars: 5, avatar: P(6628700,  120, 120) },
  { name: 'Sandra L.',   role: 'Regular patient',        text: "I've had painful calluses for years. One appointment and the difference was night and day. The nurse-level care is so reassuring.",           stars: 5, avatar: P(8600448,  120, 120) },
]

export default function HomePage() {
  useReveal()

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image src={images.hero} alt="Professional foot massage treatment" fill className="object-cover opacity-20 mix-blend-luminosity" sizes="100vw" priority />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/></pattern></defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 pt-20 pb-16 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <div className="badge mb-6 !text-teal-100 !bg-teal-700/60 !border-teal-500/50">
              <Award className="w-3.5 h-3.5" />
              Licensed Registered Nurses · Vancouver, BC
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Walk Better.<br />
              <span className="text-teal-300">Live Better.</span>
            </h1>

            <p className="text-lg text-teal-100 leading-relaxed mb-8 max-w-lg">
              Expert medical foot care delivered by registered nurses using hospital-grade sterilization. No referral needed — results from the very first visit.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link href="/contact" className="btn-primary bg-white !text-teal-700 hover:!bg-teal-50 shadow-xl">
                Book an Appointment <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services" className="btn-outline !border-white/50 !text-white hover:!bg-white/10 hover:!text-white">
                View Services
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-teal-200">
              {['No referral required', 'Extended health coverage', '24hr cancellation policy'].map(t => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />{t}
                </span>
              ))}
            </div>
          </div>

          {/* Hero image card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Main photo */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                <Image
                  src={images.clinical}
                  alt="Close-up of professional pedicure treatment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 400px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 via-transparent to-transparent" />
              </div>

              {/* Floating price card */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4 flex gap-4">
                <div className="text-center px-3">
                  <div className="text-2xl font-extrabold text-teal-600">$75</div>
                  <div className="text-slate-500 text-xs">In-Office</div>
                </div>
                <div className="w-px bg-slate-100" />
                <div className="text-center px-3">
                  <div className="text-2xl font-extrabold text-teal-600">$100</div>
                  <div className="text-slate-500 text-xs">Home Visit</div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-teal-600 text-white rounded-2xl shadow-lg px-4 py-2 text-sm font-semibold flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 fill-current text-yellow-300" />
                5.0 Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="bg-slate-800">
        <div className="max-w-6xl mx-auto px-5 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="text-3xl font-extrabold text-teal-400">{s.value}</div>
              <div className="text-slate-400 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14 reveal">
            <div className="badge mb-4 mx-auto"><Scissors className="w-3.5 h-3.5" /> Our Services</div>
            <h2 className="section-heading">Comprehensive Foot Care</h2>
            <p className="section-subheading mx-auto">
              From routine nail care to advanced fungal treatments — all performed by registered nurses with clinical precision.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <div key={i} className="card overflow-hidden reveal group hover:-translate-y-1 transition-transform duration-300" style={{ transitionDelay: `${i * 0.08}s` }}>
                  {/* Service image */}
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={s.img}
                      alt={s.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className={`absolute bottom-3 left-3 w-9 h-9 rounded-lg ${s.color} flex items-center justify-center backdrop-blur-sm`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-slate-800 mb-2">{s.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-10 reveal">
            <Link href="/services" className="btn-outline">
              See All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left: real image */}
            <div className="relative reveal">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
                <Image
                  src={images.clinic}
                  alt="Close-up hands and feet during foot care treatment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 to-transparent" />
              </div>
              {/* Floating credential badge */}
              <div className="absolute -bottom-6 -right-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 max-w-[220px]">
                <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-slate-800 text-xs leading-tight">Hospital-Grade</div>
                  <div className="text-teal-600 text-xs">Autoclave Sterilization</div>
                </div>
              </div>
            </div>

            {/* Right: text */}
            <div className="reveal">
              <div className="badge mb-4"><Award className="w-3.5 h-3.5" /> Why Choose Us</div>
              <h2 className="section-heading mb-4">
                Nurse-led care.<br />
                <span className="text-teal-600">Hospital standards.</span>
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                Unlike beauty salons or spas, Nirvana Foot Care is staffed exclusively by licensed nurses who meet the standards of the Lower Mainland Foot Care Nurses Association — clinical training, strict hygiene protocols, and the ability to safely treat complex medical conditions.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {whyUs.map((w, i) => {
                  const Icon = w.icon
                  return (
                    <div key={i} className="flex gap-3 items-start p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 text-sm mb-1">{w.title}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">{w.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 bg-teal-50">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-14 reveal">
            <h2 className="section-heading">How It Works</h2>
            <p className="section-subheading mx-auto">Three simple steps to healthier, happier feet.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center reveal" style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className="w-20 h-20 rounded-full bg-teal-600 text-white flex flex-col items-center justify-center shadow-lg mb-5">
                  <span className="text-xs font-bold text-teal-200 leading-none">{s.num}</span>
                  <span className="text-lg font-black leading-none mt-0.5">{i + 1}</span>
                </div>
                <h3 className="font-bold text-slate-800 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <Link href="/contact" className="btn-primary">
              Book Your Appointment <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Conditions ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <div className="badge mb-4"><Heart className="w-3.5 h-3.5" /> Conditions We Treat</div>
              <h2 className="section-heading mb-4">Safe Care for Every Patient</h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                Our nursing background allows us to safely care for patients with complex medical conditions that other foot care providers can&apos;t handle.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {['Diabetes', 'Poor Circulation', 'Arthritis', 'Neuropathy', 'Bunions', 'Hammertoes',
                  'Fungal Nails', 'Ingrown Nails', 'Plantar Warts', 'Corns & Calluses',
                  'Dry/Cracked Heels', 'Thickened Nails'].map(c => (
                  <div key={c} className="flex items-center gap-2 text-sm text-slate-600 py-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0" />{c}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative reveal">
              <div className="relative rounded-3xl overflow-hidden aspect-square shadow-xl">
                <Image
                  src={images.footExam}
                  alt="Healthcare nurse examining and treating a patient's feet"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-lg flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-semibold text-slate-700">Accepting new patients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14 reveal">
            <div className="badge mb-4 mx-auto !text-teal-300 !bg-teal-900/50 !border-teal-700">
              <Star className="w-3.5 h-3.5 fill-current" /> Patient Reviews
            </div>
            <h2 className="section-heading !text-white">What Our Patients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-slate-700/50 border border-slate-600 rounded-2xl p-6 reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-teal-500">
                    <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="48px" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{t.name}</div>
                    <div className="text-slate-400 text-xs">{t.role}</div>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="py-20 bg-teal-50">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <div className="reveal">
            <h2 className="section-heading mb-4">Transparent, Simple Pricing</h2>
            <p className="section-subheading mx-auto mb-10">
              No hidden fees. Extended health plan reimbursement may apply.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              {
                title: 'In-Office Visit', price: '$75',
                desc: 'Full medical pedicure at our West Broadway clinic.',
                features: ['Nail trimming & thinning', 'Callus & corn care', 'Fungal assessment', 'Health history review'],
                cta: 'Book In-Office', primary: false,
                // nail polish applied to toenails
                img: images.nurse1,
              },
              {
                title: 'Home Visit', price: '$100',
                desc: 'We bring the full clinic experience to your home.',
                features: ['All in-office services', 'Travel to your home', 'Flexible scheduling', 'Ideal for seniors'],
                cta: 'Book Home Visit', primary: true,
                // feet close-up
                img: images.nurse2,
              },
            ].map((p, i) => (
              <div key={i} className={`reveal card p-7 text-left relative ${p.primary ? 'ring-2 ring-teal-500' : ''}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                {p.primary && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                    Popular
                  </div>
                )}
                {/* Price card image */}
                <div className="relative h-32 rounded-xl overflow-hidden mb-5">
                  <Image src={p.img} alt={p.title} fill className="object-cover" sizes="300px" />
                  <div className="absolute inset-0 bg-teal-900/40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-3xl font-extrabold text-white drop-shadow-lg">{p.price}</div>
                  </div>
                </div>
                <h3 className="font-bold text-slate-800 text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-slate-500 mb-4">{p.desc}</p>
                <ul className="space-y-2 mb-6">
                  {p.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />{f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={p.primary ? 'btn-primary w-full justify-center' : 'btn-outline w-full justify-center'}>
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={images.cta} alt="Foot massage spa treatment" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-teal-800/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-5 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for healthier feet?</h2>
          <p className="text-teal-100 text-lg mb-8 max-w-xl mx-auto">
            Call us or book online today. In-office and home visits available — no referral needed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary !bg-white !text-teal-700 hover:!bg-teal-50 shadow-xl">
              Book an Appointment <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:6042677463" className="btn-outline !border-white/60 !text-white hover:!bg-white/10">
              <Phone className="w-4 h-4" /> (604) 267-7463
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
