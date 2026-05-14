'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

const links = [
  { href: '/',          label: 'Home' },
  { href: '/services',  label: 'Services' },
  { href: '/about',     label: 'About Us' },
  { href: '/contact',   label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm">
            <Image
              src="/logo.png"
              alt="Nirvana Foot Care logo"
              width={40}
              height={40}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <div>
            <div className={`font-bold text-base leading-none transition-colors ${scrolled ? 'text-slate-800' : 'text-white'}`}>
              Nirvana
            </div>
            <div className={`text-[10px] font-medium leading-none tracking-wide transition-colors ${scrolled ? 'text-teal-600' : 'text-teal-200'}`}>
              FOOT CARE
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === l.href
                  ? 'bg-teal-50 text-teal-700'
                  : scrolled
                  ? 'text-slate-600 hover:text-teal-700 hover:bg-teal-50'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:17788618502"
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${scrolled ? 'text-slate-600 hover:text-teal-600' : 'text-white/90 hover:text-white'}`}
          >
            <Phone className="w-3.5 h-3.5" />
            +1 (778) 861-8502
          </a>
          <Link href="/contact" className="btn-primary text-sm py-2.5">
            Book Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <nav className="flex flex-col p-4 gap-1">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  pathname === l.href
                    ? 'bg-teal-50 text-teal-700'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
              <a href="tel:17788618502" className="flex items-center gap-2 px-4 py-3 text-sm text-slate-600">
                <Phone className="w-4 h-4 text-teal-600" /> +1 (778) 861-8502
              </a>
              <Link href="/contact" className="btn-primary justify-center text-sm">
                Book an Appointment
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
