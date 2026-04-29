import Link from 'next/link'
import {
  Wrench,
  Phone,
  Mail,
  Stethoscope,
  Scissors,
  ShieldCheck,
  Home,
  Sparkles,
  HeartPulse,
} from 'lucide-react'

export const metadata = {
  title: 'Under Maintenance — Nirvana Foot Care',
  description:
    'Our website is briefly under maintenance. Nirvana Foot Care continues to provide expert foot care nursing services across Vancouver, BC.',
}

const services = [
  {
    icon: Sparkles,
    title: 'Medical Pedicures',
    desc: 'Hospital-grade hygiene with nail trimming, callus reduction, and skin care.',
  },
  {
    icon: Scissors,
    title: 'Ingrown & Thick Nail Care',
    desc: 'Onyfix bracing and gentle reshaping for painful, problem nails.',
  },
  {
    icon: HeartPulse,
    title: 'Diabetic Foot Care',
    desc: 'Specialized assessments and ongoing care to protect at-risk feet.',
  },
  {
    icon: ShieldCheck,
    title: 'Fungal Nail Treatment',
    desc: 'ToeFX photodisinfection to clear stubborn fungal infections.',
  },
  {
    icon: Stethoscope,
    title: 'Wart & Callus Removal',
    desc: 'Swift microwave therapy and precise debridement for lasting relief.',
  },
  {
    icon: Home,
    title: 'In-Home Nursing Visits',
    desc: 'Foot care delivered to seniors and clients with mobility challenges.',
  },
]

export default function MaintenancePage() {
  return (
    <section className="relative min-h-[80vh] bg-gradient-to-b from-teal-50 via-white to-white">
      <div className="max-w-5xl mx-auto px-5 py-20 md:py-28">
        {/* Hero */}
        <div className="text-center">
          <span className="badge">
            <Wrench className="w-4 h-4" />
            Site maintenance in progress
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            We're polishing things up.
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Our website is briefly offline for scheduled maintenance. Don't worry — our
            clinic is open and our nurses are still providing the same trusted{' '}
            <span className="font-semibold text-teal-700">foot care service</span> you rely on.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+16045551234" className="btn-primary">
              <Phone className="w-4 h-4" />
              Call (604) 555-1234
            </a>
            <a href="mailto:hello@nirvanafootcare.ca" className="btn-outline">
              <Mail className="w-4 h-4" />
              hello@nirvanafootcare.ca
            </a>
          </div>
        </div>

        {/* Services strip */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h2 className="section-heading">Our Foot Care Services</h2>
            <p className="section-subheading">
              Expert care delivered by registered nurses — available by phone while the
              site is down.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card p-6">
                <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-500">
            Already a patient?{' '}
            <Link href="/contact" className="text-teal-700 font-medium hover:underline">
              Contact us
            </Link>{' '}
            to confirm or reschedule your appointment.
          </p>
        </div>
      </div>
    </section>
  )
}
