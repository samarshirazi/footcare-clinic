'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Award, CheckCircle2, Heart, Shield, Users, BookOpen, Phone } from 'lucide-react'

// Pexels foot-care specific images (free, no copyright)
const P = (id: number, w = 400, h = 300) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`
const UNSPLASH = 'https://images.unsplash.com'

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

const team = [
  {
    name: 'Jennifer Marlowe, RN',
    role: 'Lead Foot Care Nurse',
    years: '14 years',
    bio: 'Jennifer holds an RN designation and has completed advanced foot care education through the Lower Mainland Foot Care Nurses Association. She specializes in diabetic foot management and fungal nail treatment.',
    specialties: ['Diabetic Foot Care', 'Fungal Nail (ToeFX)', 'ABPI Circulatory Testing'],
    initial: 'J',
    color: 'bg-teal-600',
    img: P(17056222, 400, 300), // close-up pedicure treatment
  },
  {
    name: 'Patricia Soh, LPN',
    role: 'Foot Care Nurse',
    years: '8 years',
    bio: 'Patricia is a Licensed Practical Nurse with specialized training in ingrown nail correction and wart removal. She is certified in Onyfix nail bracing and Swift microwave therapy.',
    specialties: ['Onyfix Nail Bracing', 'Swift Wart Removal', 'Callus & Corn Care'],
    initial: 'P',
    color: 'bg-emerald-600',
    img: P(7755212, 400, 300), // nail file treatment
  },
  {
    name: 'Grace Okafor, RN',
    role: 'Community Foot Care Nurse',
    years: '6 years',
    bio: 'Grace leads our in-home nursing visit program, specializing in care for seniors and patients with mobility challenges. She has extensive experience in long-term care settings.',
    specialties: ['In-Home Nursing Visits', 'Senior Foot Care', 'Long-Term Care'],
    initial: 'G',
    color: 'bg-violet-600',
    img: P(6628700, 400, 300), // foot massage treatment
  },
]

const values = [
  {
    icon: Shield,
    title: 'Clinical Safety First',
    desc: 'Every instrument is autoclaved to hospital standards before each use. We never cut corners on sterilization — your safety is non-negotiable.',
  },
  {
    icon: Heart,
    title: 'Compassionate Care',
    desc: 'Many of our patients live with chronic conditions that require patience and empathy. We take the time to listen, explain, and treat every patient with dignity.',
  },
  {
    icon: BookOpen,
    title: 'Continuing Education',
    desc: 'Our nurses stay current with the latest foot care techniques, technology, and evidence-based practices through ongoing training and professional development.',
  },
  {
    icon: Award,
    title: 'Professional Standards',
    desc: 'All practitioners are registered with their respective nursing colleges and meet the standards set by the Lower Mainland Foot Care Nurses Association.',
  },
]

const credentials = [
  'Registered Nurses (RN) — BC College of Nurses and Midwives',
  'Licensed Practical Nurses (LPN) — BC College of Nurses and Midwives',
  'Certified in Advanced Foot Care Nursing',
  'Lower Mainland Foot Care Nurses Association members',
  'ToeFX Certified Practitioners',
  'Onyfix Certified Applicators',
  'Swift Therapy Certified Providers',
  'ABPI Circulatory Testing Trained',
]

export default function AboutPage() {
  useReveal()

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-teal-800 to-teal-700 pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={`https://images.pexels.com/photos/4963838/pexels-photo-4963838.jpeg?auto=compress&cs=tinysrgb&w=1600`}
            alt="Close-up of professionally treated feet"
            fill
            className="object-cover opacity-20 mix-blend-luminosity"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots2" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="3" cy="3" r="1.5" fill="white"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots2)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-5 text-center">
          <div className="badge mb-5 mx-auto !text-teal-100 !bg-teal-700/60 !border-teal-500/50">
            <Users className="w-3.5 h-3.5" /> Our Team
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
            About StepRight Foot Care
          </h1>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto leading-relaxed">
            We believe everyone deserves professional, clinical-level foot care delivered with compassion. Our team of registered nurses has been caring for Vancouver feet since 2010.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal">
            <div className="badge mb-4">
              <Heart className="w-3.5 h-3.5" /> Our Story
            </div>
            <h2 className="section-heading mb-5">
              Founded by nurses,<br />
              <span className="text-teal-600">for every patient.</span>
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                StepRight Foot Care was founded in 2010 by a group of registered nurses who saw a gap in the community: patients with diabetes, circulation problems, and mobility challenges were struggling to access safe, professional foot care. Salon pedicures posed real health risks, and seeing a podiatrist for routine nail and skin maintenance felt like overkill.
              </p>
              <p>
                Our founders believed that nursing foot care — performed by licensed nurses to clinical standards — was the answer. They established a clinic on West Broadway that combined hospital-grade sterilization with the warmth and accessibility of a community health practice.
              </p>
              <p>
                Today, we serve thousands of patients across Greater Vancouver, both in our clinic and through our in-home nursing visit program. We continue to invest in the latest technology — from ToeFX fungal treatment to Swift wart removal — to give our patients the most effective options available.
              </p>
            </div>
          </div>

          {/* Story image + stats */}
          <div className="space-y-4 reveal">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
              <Image
                src={`https://images.pexels.com/photos/9789204/pexels-photo-9789204.jpeg?auto=compress&cs=tinysrgb&w=900`}
                alt="Nurse applying nail care treatment to patient's toenails"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-teal-900/30 to-transparent" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow">
                <div className="text-teal-700 font-bold text-sm">Established 2010</div>
                <div className="text-slate-500 text-xs">West Broadway, Vancouver</div>
              </div>
            </div>
          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { val: '2010', label: 'Year Founded', color: 'bg-teal-600' },
              { val: '3,000+', label: 'Patients Served', color: 'bg-emerald-600' },
              { val: '15+', label: 'Years of Experience', color: 'bg-violet-600' },
              { val: '100%', label: 'RN/LPN Staffed', color: 'bg-amber-600' },
            ].map((s, i) => (
              <div key={i} className={`${s.color} rounded-2xl p-6 text-white`}>
                <div className="text-3xl font-extrabold mb-1">{s.val}</div>
                <div className="text-white/80 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14 reveal">
            <div className="badge mb-4 mx-auto">
              <Users className="w-3.5 h-3.5" /> Meet the Team
            </div>
            <h2 className="section-heading">Your Care Team</h2>
            <p className="section-subheading mx-auto">
              Every member of our team is a licensed nurse with specialized foot care training. You&apos;re always in safe, qualified hands.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {team.map((m, i) => (
              <div
                key={i}
                className="card overflow-hidden reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Team member photo */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6">
                <div className={`w-16 h-16 rounded-2xl ${m.color} text-white text-2xl font-bold items-center justify-center mb-5 hidden`}>
                  {m.initial}
                </div>
                <h3 className="font-bold text-slate-800 text-base">{m.name}</h3>
                <div className="text-teal-600 text-sm font-medium mb-1">{m.role}</div>
                <div className="text-slate-400 text-xs mb-4">{m.years} experience</div>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{m.bio}</p>
                <div className="space-y-1.5">
                  {m.specialties.map(sp => (
                    <div key={sp} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                      {sp}
                    </div>
                  ))}
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14 reveal">
            <h2 className="section-heading">Our Values</h2>
            <p className="section-subheading mx-auto">The principles that guide every appointment, every treatment, every interaction.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <div key={i} className="card p-6 reveal text-center" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-800 mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-teal-50">
        <div className="max-w-4xl mx-auto px-5">
          <div className="text-center mb-12 reveal">
            <div className="badge mb-4 mx-auto">
              <Award className="w-3.5 h-3.5" /> Credentials & Certifications
            </div>
            <h2 className="section-heading">Fully Qualified & Certified</h2>
            <p className="section-subheading mx-auto">
              Our practitioners maintain active registration with the BC College of Nurses and Midwives and hold additional certifications in advanced foot care techniques.
            </p>
          </div>

          <div className="card p-8 reveal">
            <div className="grid sm:grid-cols-2 gap-3">
              {credentials.map((c, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
                  {c}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 p-5 bg-white border border-teal-100 rounded-2xl reveal">
            <p className="text-sm text-slate-600 text-center leading-relaxed">
              <span className="font-semibold text-teal-700">Lower Mainland Foot Care Nurses Association</span> — All our nurses meet the professional standards, ethical code, and best practice guidelines set by this association. We are committed to the advancement of nursing foot care in British Columbia.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-3xl mx-auto px-5 text-center reveal">
          <h2 className="text-3xl font-bold text-white mb-4">Come meet our team</h2>
          <p className="text-slate-400 mb-8">Book an appointment at our West Broadway clinic or arrange an in-home nursing visit.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Book an Appointment <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:6042677463" className="btn-outline !border-slate-600 !text-slate-300 hover:!border-teal-500 hover:!text-teal-400">
              <Phone className="w-4 h-4" /> (604) 267-7463
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
