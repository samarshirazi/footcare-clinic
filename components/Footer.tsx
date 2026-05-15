import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react'

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
            <div className="w-10 h-10 rounded-xl overflow-hidden">
              <Image
                src="/logo.png"
                alt="Nirvana Foot Care logo"
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <div className="font-bold text-white text-sm leading-none">Nirvana</div>
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
            <li className="flex items-start gap-2"><Clock className="w-3.5 h-3.5 mt-0.5 text-teal-500 shrink-0" /><span>Mon–Fri: 9:00 AM – 5:00 PM</span></li>
            <li className="pl-5 text-slate-500">Sat–Sun: Closed</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Contact Us</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-teal-500 shrink-0" />
              <a href="tel:17788618502" className="hover:text-teal-400 transition-colors">+1 (778) 861-8502</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-teal-500 shrink-0" />
              <a href="mailto:nirvanafootcare@gmail.com" className="hover:text-teal-400 transition-colors">nirvanafootcare@gmail.com</a>
            </li>
          </ul>

          <div className="mt-6 p-3 bg-slate-800 rounded-xl text-xs text-slate-400 leading-relaxed">
            <span className="text-teal-400 font-medium">24-hour cancellation policy.</span> Please notify us at least 24 hours in advance to avoid a late-cancellation fee.
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-5 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Nirvana Foot Care. All rights reserved.</p>
          <p>Licensed RNs & LPNs · Hospital-grade sterilization · BC, Canada</p>
        </div>
      </div>
    </footer>
  )
}
