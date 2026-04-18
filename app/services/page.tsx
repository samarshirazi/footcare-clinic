'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight, CheckCircle2, Scissors, Shield, Heart,
  Stethoscope, Zap, Home, Droplets, Activity, Star, Phone
} from 'lucide-react'

// All foot-care specific images from Pexels (free, no copyright)
const P = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800&h=350&fit=crop`

const serviceImages: Record<string, string> = {
  'medical-pedicure': P(17056222), // close-up woman doing pedicure
  'fungal-nail':      P(9789204),  // nail polish on toenails
  'ingrown-nail':     P(7755212),  // person getting nail file treatment
  'callus-corn':      P(4963838),  // close-up woman's feet (pedicured)
  'diabetic':         P(8600448),  // applying cream/care to foot
  'wart-removal':     P(1076584),  // close-up hands and feet
  'dry-heel':         P(8600448),  // foot cream treatment
  'home-visits':      P(6628700),  // person having a foot massage
}

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

const services = [
  {
    id: 'medical-pedicure',
    icon: Scissors,
    title: 'Medical Pedicures',
    price: 'from $75',
    badge: 'Most Popular',
    badgeColor: 'bg-teal-600',
    iconColor: 'bg-teal-50 text-teal-600',
    desc: 'Our medical pedicure is the cornerstone of what we do — a comprehensive clinical foot care appointment carried out in a sterile environment by a registered nurse. Unlike salon pedicures, there is no cosmetic nail polish. Every procedure focuses on health outcomes.',
    includes: [
      'Complete health history review',
      'Visual and tactile foot assessment',
      'Professional nail trimming and filing',
      'Thick nail reduction and thinning',
      'Ingrown nail edge removal',
      'Callus and corn reduction',
      'Dry heel care and moisturizing',
      'Antiseptic cleansing',
      'Documentation and care plan notes',
    ],
    note: 'Suitable for patients with diabetes, poor circulation, neuropathy, and other complex conditions.',
  },
  {
    id: 'fungal-nail',
    icon: Shield,
    title: 'Fungal Nail Treatment',
    price: 'On consultation',
    badge: 'Advanced',
    badgeColor: 'bg-emerald-600',
    iconColor: 'bg-emerald-50 text-emerald-600',
    desc: 'Fungal nail infections (onychomycosis) are common and can be persistent without proper treatment. We offer ToeFX — a clinically proven, pain-free laser system that targets the fungus beneath the nail, combined with topical antifungal protocols for optimal results.',
    includes: [
      'Nail and skin fungal assessment',
      'ToeFX laser therapy sessions',
      'Nail debridement and prep',
      'Topical antifungal recommendations',
      'Before & after documentation',
      'Ongoing monitoring appointments',
      'Patient education on prevention',
    ],
    note: 'Multiple sessions are typically required. Results are gradual as the nail grows out clear.',
  },
  {
    id: 'ingrown-nail',
    icon: Zap,
    title: 'Ingrown Nail Therapy',
    price: 'On consultation',
    badge: 'Pain-Free',
    badgeColor: 'bg-violet-600',
    iconColor: 'bg-violet-50 text-violet-600',
    desc: 'The Onyfix nail bracing system is a non-surgical, pain-free solution to ingrown nails. A thin composite strip is bonded to the nail surface and gently applies continuous corrective pressure to reshape the nail as it grows — eliminating the need for cutting or surgery.',
    includes: [
      'Ingrown nail assessment',
      'Onyfix nail brace application',
      'Edge removal where needed',
      'Pain relief immediate on application',
      'Follow-up monitoring visits',
      'Patient education on nail hygiene',
      'NEC nail reconstruction (if applicable)',
    ],
    note: 'The Onyfix brace is safe, invisible, and can be worn with normal footwear.',
  },
  {
    id: 'callus-corn',
    icon: Stethoscope,
    title: 'Callus & Corn Removal',
    price: 'Included in medical pedicure',
    badge: 'Immediate Relief',
    badgeColor: 'bg-amber-600',
    iconColor: 'bg-amber-50 text-amber-600',
    desc: 'Calluses and corns form when skin is subjected to repeated pressure or friction. Our nurses use sterile, professional-grade instruments to safely and painlessly reduce hardened skin — providing immediate relief and preventing further build-up.',
    includes: [
      'Assessment of pressure points',
      'Sterile scalpel debridement',
      'Pumice finishing',
      'Moisturizing treatment',
      'Footwear and padding advice',
      'Referral to orthotics if needed',
    ],
    note: 'Regular maintenance appointments are recommended to prevent recurrence.',
  },
  {
    id: 'diabetic',
    icon: Heart,
    title: 'Diabetic Foot Care',
    price: 'from $75',
    badge: 'Specialist Care',
    badgeColor: 'bg-rose-600',
    iconColor: 'bg-rose-50 text-rose-500',
    desc: 'People with diabetes face a significantly higher risk of foot complications including neuropathy, poor circulation, ulcers, and infection. Our nurses have specialized training in diabetic foot assessment and care, following evidence-based protocols to prevent serious complications.',
    includes: [
      'ABPI circulatory screening test',
      'Neuropathy assessment',
      'Vascular and skin integrity check',
      'Safe nail and skin care',
      'Wound assessment if applicable',
      'Patient education on daily care',
      'Referral pathways if required',
      'Detailed care documentation',
    ],
    note: 'Our care is recognized as an integral part of diabetes management. May be covered by extended health plans.',
  },
  {
    id: 'wart-removal',
    icon: Activity,
    title: 'Wart Removal (Swift)',
    price: 'On consultation',
    badge: 'Clinically Proven',
    badgeColor: 'bg-sky-600',
    iconColor: 'bg-sky-50 text-sky-600',
    desc: 'Swift is a microwave therapy device cleared for the treatment of plantar warts (verrucas). It delivers precisely controlled microwave energy to infected tissue, stimulating the immune system to clear the HPV virus. Most cases resolve in 3–4 sessions.',
    includes: [
      'Wart assessment and diagnosis',
      'Swift microwave therapy application',
      'No dressings or aftercare required',
      'No downtime — walk out normally',
      'Multiple sessions if required',
      'Significant cure rates vs. traditional methods',
    ],
    note: 'Swift is clinically proven with high cure rates. No cutting, no acids, no freezing.',
  },
  {
    id: 'dry-heel',
    icon: Droplets,
    title: 'Dry & Cracked Heel Care',
    price: 'Included in medical pedicure',
    badge: 'Soothing Relief',
    badgeColor: 'bg-cyan-600',
    iconColor: 'bg-cyan-50 text-cyan-600',
    desc: 'Cracked heels can progress from a cosmetic concern to a painful, infection-prone condition. Our nurses carefully debride thickened heel skin, apply professional-strength moisturizers, and provide guidance on preventing recurrence.',
    includes: [
      'Heel and sole assessment',
      'Debridement of thick/dry skin',
      'Pumice and filing',
      'Professional emollient application',
      'Footwear and lifestyle advice',
      'Home care product recommendations',
    ],
    note: 'Often part of the medical pedicure. Severe cases may require dedicated appointments.',
  },
  {
    id: 'home-visits',
    icon: Home,
    title: 'In-Home Nursing Visits',
    price: 'from $100',
    badge: 'We Come to You',
    badgeColor: 'bg-indigo-600',
    iconColor: 'bg-indigo-50 text-indigo-600',
    desc: 'For patients who cannot easily travel — including seniors, those with limited mobility, post-surgical patients, or individuals with chronic illness — we offer full foot care nursing services delivered right to your door. We bring sterile, professional equipment to your home.',
    includes: [
      'All medical pedicure services',
      'Fully sterile portable kit',
      'Flexible scheduling',
      'Surrey, White Rock, Langley, North Delta, Vancouver',
      'Familiar, comfortable environment',
      'Ideal for seniors and care homes',
    ],
    note: 'Contact us to confirm home visit availability in your area and to schedule.',
  },
]

export default function ServicesPage() {
  useReveal()

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-teal-800 to-teal-700 pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={`https://images.pexels.com/photos/6628700/pexels-photo-6628700.jpeg?auto=compress&cs=tinysrgb&w=1600`}
            alt="Professional foot massage and care treatment"
            fill
            className="object-cover opacity-20 mix-blend-luminosity"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="3" cy="3" r="1.5" fill="white"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-5 text-center">
          <div className="badge mb-5 mx-auto !text-teal-100 !bg-teal-700/60 !border-teal-500/50">
            <Scissors className="w-3.5 h-3.5" /> Clinical Foot Care Services
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
            Our Services
          </h1>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Every service is performed by a registered nurse using hospital-grade sterilized instruments. From routine maintenance to advanced treatments — we cover everything your feet need.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-5 space-y-10">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={s.id}
                id={s.id}
                className="card p-7 md:p-9 reveal"
                style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
              >
                {/* Service banner image */}
                {serviceImages[s.id] && (
                  <div className="relative h-44 -mx-7 -mt-7 mb-6 md:-mx-9 md:-mt-9 rounded-t-2xl overflow-hidden">
                    <Image
                      src={serviceImages[s.id]}
                      alt={s.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className={`absolute bottom-3 left-4 w-10 h-10 rounded-xl ${s.iconColor} flex items-center justify-center backdrop-blur-sm border border-white/30`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className={`absolute top-3 right-4 ${s.badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                      {s.badge}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap items-start gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl ${s.iconColor} flex items-center justify-center shrink-0 ${serviceImages[s.id] ? 'hidden' : ''}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h2 className="text-xl font-bold text-slate-800">{s.title}</h2>
                      {!serviceImages[s.id] && (
                        <span className={`${s.badgeColor} text-white text-xs font-semibold px-2.5 py-0.5 rounded-full`}>
                          {s.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-teal-600 font-semibold text-sm">{s.price}</div>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed mb-6">{s.desc}</p>

                <div className="grid sm:grid-cols-2 gap-2 mb-5">
                  {s.includes.map(item => (
                    <div key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>

                {s.note && (
                  <div className="bg-teal-50 border border-teal-100 rounded-xl px-4 py-3 text-sm text-teal-700">
                    <span className="font-medium">Note:</span> {s.note}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* Insurance note */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-5">
          <div className="reveal bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-100 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start">
            <div className="w-14 h-14 rounded-2xl bg-teal-600 flex items-center justify-center shrink-0">
              <Star className="w-7 h-7 text-white fill-current" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Extended Health Plan Coverage</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Many extended health benefit plans include coverage for nursing foot care services. Since our practitioners are licensed nurses (RNs and LPNs), our services may qualify for reimbursement under nursing care benefits. We recommend checking with your benefits provider before your appointment.
              </p>
              <p className="text-sm text-slate-500">
                We can provide detailed receipts for insurance claims. A referral from your doctor is <strong>not required</strong> to book with us, but may help with certain insurance submissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-700">
        <div className="max-w-3xl mx-auto px-5 text-center reveal">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to book your appointment?</h2>
          <p className="text-teal-100 mb-8">Call us or fill out our booking form. In-office and home visits available — no referral required.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary !bg-white !text-teal-700 hover:!bg-teal-50">
              Book Online <ArrowRight className="w-4 h-4" />
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
