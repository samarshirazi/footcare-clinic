'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, CheckCircle2, Send, AlertCircle } from 'lucide-react'

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

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactPage() {
  useReveal()

  const [formState, setFormState] = useState<FormState>('idle')
  const [form, setForm] = useState({
    name: '', email: '', phone: '', visitType: 'in-office',
    service: '', preferredDate: '', message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')
    // Simulate submission (local only — no backend)
    await new Promise(r => setTimeout(r, 1200))
    setFormState('success')
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-teal-800 to-teal-700 pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={`https://images.pexels.com/photos/8600448/pexels-photo-8600448.jpeg?auto=compress&cs=tinysrgb&w=1600`}
            alt="Nurse applying moisturizer to patient's foot during treatment"
            fill
            className="object-cover opacity-20 mix-blend-luminosity"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots3" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="3" cy="3" r="1.5" fill="white"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots3)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-5 text-center">
          <div className="badge mb-5 mx-auto !text-teal-100 !bg-teal-700/60 !border-teal-500/50">
            <Send className="w-3.5 h-3.5" /> Get In Touch
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">Book an Appointment</h1>
          <p className="text-teal-100 text-lg max-w-xl mx-auto leading-relaxed">
            Fill out the form below and we&apos;ll get back to you within one business day to confirm your appointment.
          </p>
        </div>
      </section>

      {/* Contact layout */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-3 gap-10">
          {/* Info column */}
          <div className="space-y-6">
            {/* Clinic info */}
            <div className="card p-6 reveal">
              <h3 className="font-bold text-slate-800 mb-5">Clinic Information</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-800 text-sm mb-0.5">Address</div>
                    <div className="text-slate-500 text-sm">2620 West Broadway<br />Vancouver, BC V6K 2G3<br /><span className="text-xs text-teal-600">Located inside Foot Solutions</span></div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-800 text-sm mb-0.5">Phone</div>
                    <a href="tel:17788618502" className="text-slate-500 text-sm hover:text-teal-600 transition-colors">+1 (778) 861-8502</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-800 text-sm mb-0.5">Email</div>
                    <a href="mailto:info@nirvanafootcare.ca" className="text-slate-500 text-sm hover:text-teal-600 transition-colors">info@nirvanafootcare.ca</a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div className="card p-6 reveal">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-600" /> Clinic Hours
              </h3>
              <ul className="space-y-2.5 text-sm">
                {[
                  { day: 'Tuesday – Friday', hours: '9:00 AM – 5:00 PM', open: true },
                  { day: 'Saturday', hours: '10:00 AM – 3:00 PM', open: true },
                  { day: 'Sunday – Monday', hours: 'Closed', open: false },
                ].map(h => (
                  <li key={h.day} className="flex justify-between items-center py-1.5 border-b border-slate-50 last:border-0">
                    <span className="text-slate-600">{h.day}</span>
                    <span className={`font-medium ${h.open ? 'text-teal-600' : 'text-slate-400'}`}>{h.hours}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 bg-amber-50 border border-amber-100 rounded-xl p-3 text-xs text-amber-700">
                <AlertCircle className="w-3.5 h-3.5 inline mr-1" />
                <strong>24-hour cancellation policy.</strong> Please notify us at least 24 hours before your appointment.
              </div>
            </div>

            {/* Coverage */}
            <div className="card p-6 reveal">
              <h3 className="font-bold text-slate-800 mb-3">Home Visit Areas</h3>
              <div className="flex flex-wrap gap-2">
                {['Vancouver', 'West Side', 'Burnaby', 'Surrey', 'White Rock', 'Langley', 'North Delta', 'Aldergrove'].map(a => (
                  <span key={a} className="bg-teal-50 text-teal-700 border border-teal-100 text-xs font-medium px-2.5 py-1 rounded-full">
                    {a}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-400 mt-3">Home visit availability may vary. Contact us to confirm your area.</p>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-2 reveal">
            {formState === 'success' ? (
              <div className="card p-10 text-center flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Request Received!</h3>
                <p className="text-slate-500 max-w-sm">
                  Thank you, <strong>{form.name}</strong>. We&apos;ll reach out to <strong>{form.email || form.phone}</strong> within one business day to confirm your appointment.
                </p>
                <p className="text-sm text-slate-400">
                  In the meantime, if you have any questions, call us at <a href="tel:17788618502" className="text-teal-600 font-medium">+1 (778) 861-8502</a>.
                </p>
                <button
                  onClick={() => { setFormState('idle'); setForm({ name: '', email: '', phone: '', visitType: 'in-office', service: '', preferredDate: '', message: '' }) }}
                  className="btn-outline mt-2"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card p-7 md:p-9">
                <h2 className="text-xl font-bold text-slate-800 mb-6">Appointment Request</h2>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(604) 555-0100"
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Visit Type *</label>
                    <select
                      name="visitType"
                      required
                      value={form.visitType}
                      onChange={handleChange}
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition bg-white"
                    >
                      <option value="in-office">In-Office</option>
                      <option value="home-visit">Home Visit</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Service Needed</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition bg-white"
                    >
                      <option value="">Select a service...</option>
                      <option value="medical-pedicure">Medical Pedicure</option>
                      <option value="fungal-nail">Fungal Nail Treatment (ToeFX)</option>
                      <option value="ingrown-nail">Ingrown Nail (Onyfix)</option>
                      <option value="callus-corn">Callus & Corn Removal</option>
                      <option value="diabetic">Diabetic Foot Care</option>
                      <option value="wart-removal">Wart Removal (Swift)</option>
                      <option value="dry-heel">Dry Heel Care</option>
                      <option value="not-sure">Not Sure — Need Assessment</option>
                    </select>
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Preferred Date / Time</label>
                  <input
                    type="text"
                    name="preferredDate"
                    value={form.preferredDate}
                    onChange={handleChange}
                    placeholder="e.g. Wednesday afternoon, or any weekday morning"
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Additional Information</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your condition, any health concerns (e.g. diabetes, circulation issues), or questions you have..."
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition resize-none"
                  />
                </div>

                <div className="bg-slate-50 rounded-xl p-4 mb-6 text-xs text-slate-500 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                    No referral required — you can book directly with us.
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                    Extended health plan coverage may apply.
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                    We&apos;ll confirm your appointment within 1 business day.
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="btn-primary w-full justify-center text-base"
                >
                  {formState === 'submitting' ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>Send Appointment Request <Send className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="pb-0">
        <div className="w-full h-64 bg-slate-200 relative overflow-hidden">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-slate-500">
            <MapPin className="w-8 h-8 text-teal-500" />
            <div className="text-sm font-medium">2620 West Broadway, Vancouver, BC</div>
            <div className="text-xs text-slate-400">Located inside Foot Solutions on West Broadway</div>
            <a
              href="https://maps.google.com/?q=2620+West+Broadway+Vancouver+BC"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 btn-primary text-sm py-2"
            >
              Open in Google Maps
            </a>
          </div>
          {/* Simple grid background to suggest a map */}
          <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="mapgrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#94a3b8" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mapgrid)" />
          </svg>
        </div>
      </section>
    </>
  )
}
