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
  { icon: Mail, label: 'Email', value: 'harshilgoti01@gmail.com', href: 'mailto:harshilgoti01@gmail.com' },
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
    'w-full bg-transparent border border-[#D7E2EA]/20 rounded-2xl px-5 py-4 text-[#D7E2EA] placeholder-[#D7E2EA]/30 font-light text-sm sm:text-base outline-none focus:border-[#D7E2EA]/60 transition-colors duration-200'

  return (
    <section
      id="contact"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        -mt-10 sm:-mt-12 md:-mt-14 z-20 relative
        px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase text-center text-[#0C0C0C] mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)', lineHeight: 1 }}
        >
          Contact
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* Left — info */}
        <FadeIn delay={0.1} y={30}>
          <div className="flex flex-col gap-8">
            <p
              className="text-[#0C0C0C]/70 font-light leading-relaxed"
              style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}
            >
              Have a project in mind or just want to say hello? I&apos;d love to hear from you.
              Fill in the form and I&apos;ll get back to you as soon as possible.
            </p>

            <div className="flex flex-col gap-5">
              {INFO.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0C0C0C] flex items-center justify-center flex-shrink-0">
                    <Icon size={18} color="#D7E2EA" />
                  </div>
                  <div>
                    <p className="text-[#0C0C0C]/40 text-xs uppercase tracking-widest mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-[#0C0C0C] font-medium hover:opacity-60 transition-opacity">
                        {value}
                      </a>
                    ) : (
                      <p className="text-[#0C0C0C] font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Right — form */}
        <FadeIn delay={0.2} y={30}>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 bg-[#0C0C0C] rounded-[32px] p-6 sm:p-8"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
                className={inputClass}
              />
              <input
                name="email"
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>

            <input
              name="subject"
              type="text"
              placeholder="Subject (optional)"
              value={form.subject}
              onChange={handleChange}
              className={inputClass}
            />

            <textarea
              name="message"
              placeholder="Your message..."
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className={`${inputClass} resize-none`}
            />

            {status === 'error' && (
              <p className="text-red-400 text-sm">{errorMsg}</p>
            )}

            {status === 'success' && (
              <p className="text-green-400 text-sm">
                Message sent! I&apos;ll get back to you soon.
              </p>
            )}

            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 rounded-full font-medium uppercase tracking-widest text-white
                py-4 text-sm sm:text-base mt-1 disabled:opacity-50 transition-opacity"
              style={{
                background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
                outline: '2px solid white',
                outlineOffset: '-3px',
              }}
            >
              {status === 'sending' ? 'Sending…' : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </motion.button>
          </form>
        </FadeIn>
      </div>
    </section>
  )
}
