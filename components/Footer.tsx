import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Top strip */}
      <div className="bg-teal-600">
        <div className="max-w-6xl mx-auto px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white font-medium text-sm">
            Extended health plan coverage may apply — verify with your insurer.
          </p>
          <Link href="/contact" className="bg-white text-teal-700 hover:bg-teal-50 font-semibold px-5 py-2 rounded-full text-sm transition-colors whitespace-nowrap">
            Book Today
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-xl bg-teal-600 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
                <path d="M12 2C9.5 2 7.5 3.5 6.5 5.5C5.5 4.5 4 4 2.5 4.5C1 5 0 6.5 0.5 8C1 9.5 2 10.5 3 11C3 15 5.5 18 8 19.5C9 20 10 20.5 11 20.8V22h2v-1.2c1-.3 2-.8 3-1.3c2.5-1.5 5-4.5 5-8.5C21 6.5 16.5 2 12 2z"/>
              </svg>
            </div>
            <div>
              <div className="font-bold text-white text-sm leading-none">StepRight</div>
              <div className="text-[10px] text-teal-400 font-medium leading-none tracking-wide">FOOT CARE</div>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            Expert medical foot care by registered nurses. Hospital-grade sterilization, no referral required.
          </p>
          <div className="flex gap-3">
            <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-teal-600 flex items-center justify-center transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-teal-600 flex items-center justify-center transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
          <ul className="space-y-2.5 text-sm">
            {[
              'Medical Pedicures',
              'Nail Care & Thinning',
              'Callus & Corn Removal',
              'Fungal Nail Treatment',
              'Ingrown Nail Therapy',
              'Diabetic Foot Care',
              'Wart Removal',
              'Home Visits',
            ].map(s => (
              <li key={s}>
                <Link href="/services" className="text-slate-400 hover:text-teal-400 transition-colors">{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {[
              { href: '/',          label: 'Home' },
              { href: '/about',     label: 'About Us' },
              { href: '/services',  label: 'Our Services' },
              { href: '/contact',   label: 'Book Appointment' },
            ].map(l => (
              <li key={l.href}>
                <Link href={l.href} className="text-slate-400 hover:text-teal-400 transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>

          <h4 className="text-white font-semibold text-sm mt-7 mb-4">Hours</h4>
          <ul className="space-y-1.5 text-sm text-slate-400">
            <li className="flex items-start gap-2"><Clock className="w-3.5 h-3.5 mt-0.5 text-teal-500 shrink-0" /><span>Tue–Fri: 9:00 AM – 5:00 PM</span></li>
            <li className="flex items-start gap-2"><Clock className="w-3.5 h-3.5 mt-0.5 text-teal-500 shrink-0" /><span>Sat: 10:00 AM – 3:00 PM</span></li>
            <li className="pl-5 text-slate-500">Sun–Mon: Closed</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Contact Us</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
              <span>2620 West Broadway<br />Vancouver, BC V6K 2G3</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-teal-500 shrink-0" />
              <a href="tel:6042677463" className="hover:text-teal-400 transition-colors">(604) 267-7463</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-teal-500 shrink-0" />
              <a href="mailto:info@stepright.ca" className="hover:text-teal-400 transition-colors">info@stepright.ca</a>
            </li>
          </ul>

          <div className="mt-6 p-3 bg-slate-800 rounded-xl text-xs text-slate-400 leading-relaxed">
            <span className="text-teal-400 font-medium">24-hour cancellation policy.</span> Please notify us at least 24 hours in advance to avoid a late-cancellation fee.
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-5 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} StepRight Foot Care. All rights reserved.</p>
          <p>Licensed RNs & LPNs · Hospital-grade sterilization · BC, Canada</p>
        </div>
      </div>
    </footer>
  )
}
