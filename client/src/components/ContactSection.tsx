import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin } from 'lucide-react'
import FadeIn from './ui/FadeIn'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

const INITIAL: FormState = { name: '', email: '', subject: '', message: '' }

const INFO = [
  {
    icon: Mail,
    label: 'Email',
    value: 'harshilgoti01@gmail.com',
    href: 'mailto:harshilgoti01@gmail.com',
  },
  { icon: Phone, label: 'Phone', value: '+1 (551) 376-8675', href: 'tel:+15513768675' },
  { icon: MapPin, label: 'Location', value: 'Jersey City, NJ', href: null },
]

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok) throw new Error(data.message || 'Something went wrong')

      setStatus('success')
      setForm(INITIAL)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send message')
    }
  }

  const inputClass =
    'w-full bg-transparent rounded-2xl px-5 py-4 font-light text-sm sm:text-base outline-none ' +
    'transition-colors duration-300 text-[#E8F0F6] placeholder-[#D7E2EA]/30 ' +
    'border border-[rgba(215,226,234,0.14)] focus:border-[rgba(182,0,168,0.65)]'

  return (
    <section
      id="contact"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)', lineHeight: 1 }}
        >
          Contact
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* Left — info */}
        <FadeIn delay={0.08} y={30}>
          <div className="flex flex-col gap-8">
            <p
              className="font-light leading-relaxed"
              style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)', color: 'var(--text-secondary)' }}
            >
              Have a project in mind or just want to say hello? I&apos;d love to hear from
              you. Fill in the form and I&apos;ll get back to you as soon as possible.
            </p>

            <div className="flex flex-col gap-5">
              {INFO.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'var(--surface-2)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <Icon size={18} color="#E8F0F6" aria-hidden="true" />
                  </div>
                  <div>
                    <p
                      className="text-xs uppercase tracking-widest mb-0.5"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="font-medium cursor-pointer transition-opacity duration-300 hover:opacity-70"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium" style={{ color: 'var(--text-primary)' }}>
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Right — form */}
        <FadeIn delay={0.16} y={30}>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 rounded-[32px] p-6 sm:p-8"
            style={{
              background: 'rgba(23, 23, 27, 0.55)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid var(--border)',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.45)',
            }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="sr-only">
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Your email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
            </div>

            <label htmlFor="subject" className="sr-only">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject (optional)"
              value={form.subject}
              onChange={handleChange}
              className={inputClass}
            />

            <label htmlFor="message" className="sr-only">
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message..."
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className={`${inputClass} resize-none`}
            />

            <div aria-live="polite">
              {status === 'error' && (
                <p className="text-red-400 text-sm" role="alert">
                  {errorMsg}
                </p>
              )}
              {status === 'success' && (
                <p className="text-emerald-400 text-sm">
                  Message sent! I&apos;ll get back to you soon.
                </p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center gap-3 rounded-full font-medium uppercase
                tracking-widest text-white py-4 text-sm sm:text-base mt-1 cursor-pointer
                disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: 'var(--brand-gradient)',
                boxShadow:
                  '0 4px 24px rgba(181, 1, 167, 0.28), inset 4px 4px 12px rgba(119, 33, 177, 0.9)',
                outline: '2px solid rgba(255,255,255,0.92)',
                outlineOffset: '-3px',
              }}
            >
              {status === 'sending' ? (
                'Sending…'
              ) : (
                <>
                  Send Message <Send size={16} aria-hidden="true" />
                </>
              )}
            </motion.button>
          </form>
        </FadeIn>
      </div>
    </section>
  )
}
