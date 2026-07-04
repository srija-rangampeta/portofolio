import { personal, socialLinks } from '../data/portfolioData.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { useState } from 'react'

const Contact = () => {
  const scrollRevealRef = useScrollReveal()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
    setIsSubmitting(false)
  }

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="relative w-full px-6 md:px-12 py-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-10 rounded-sm p-8 md:p-14 overflow-hidden" style={{ border: '1px solid var(--border)', background: 'color-mix(in srgb, var(--surface) 10%, transparent)', backdropFilter: 'blur(16px)' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '42px 42px' }}></div>

        {/* LEFT */}
        <div className="relative z-10 flex flex-col justify-between">
          <div>
            <p className="text-primary uppercase tracking-[0.25em] text-sm">Connect</p>
            <div className="w-12 h-[1px] bg-primary mt-4 mb-10"></div>
            <h2 className="text-6xl md:text-7xl leading-[0.95] font-primary" style={{ color: 'var(--text)' }}>
              Let's Connect
              <span className="block italic text-primary">and Grow</span>
            </h2>
            <p className="text-lg leading-relaxed mt-10 max-w-lg" style={{ color: 'var(--text-sec)' }}>
              As a final-year Computer Science Engineering student, I'm actively seeking internships and entry-level opportunities to apply my frontend development and UI/UX design skills.
            </p>
          </div>
          <div className="mt-16 rounded-2xl p-6" style={{ border: '1px solid var(--border)', background: 'color-mix(in srgb, var(--surface) 20%, transparent)', backdropFilter: 'blur(16px)' }}>
            <p className="text-green-400 text-xs uppercase tracking-[0.2em] mb-4">● Currently Available For</p>
            <p className="text-xl" style={{ color: 'var(--text)' }}>Frontend Development Internships</p>
            <p className="mt-4 leading-relaxed" style={{ color: 'var(--text-sec)' }}>AI Integration • System Design • Clean Architecture</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative z-10 space-y-6">
          {/* Social Cards */}
          <div className="grid grid-cols-2 gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="group rounded-2xl p-5 transition duration-300"
                style={{ border: '1px solid var(--border)', background: 'color-mix(in srgb, var(--surface) 20%, transparent)', backdropFilter: 'blur(16px)' }}
              >
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl" style={{ background: `${link.iconBg}`, border: `1px solid ${link.iconBorder}`, color: link.iconColor }}>
                    {link.icon}
                  </div>
                  <span className="text-xl" style={{ color: 'var(--text-sec)' }}>↗</span>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg" style={{ color: 'var(--text)' }}>{link.label}</h3>
                  <p className="text-xs mt-1" style={{ color: 'var(--text-sec)' }}>{link.subtitle}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Direct Contact */}
          <div className="rounded-2xl p-6" style={{ border: '1px solid var(--border)', background: 'color-mix(in srgb, var(--surface) 20%, transparent)', backdropFilter: 'blur(16px)' }}>
            <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text)' }}>Get In Touch</h3>
            <p style={{ color: 'var(--text-sec)' }} className="font-light leading-relaxed mb-6">
              The fastest way to reach me is by email or phone — I typically respond within a day.
            </p>
            <div className="flex flex-col gap-3">
              <a href="mailto:srijabaswaraj@gmail.com" className="flex items-center gap-3 text-sm hover:text-primary transition-colors" style={{ color: 'var(--text)' }}>
                <span>✉</span> srijabaswaraj@gmail.com
              </a>
              <a href="tel:+918143262204" className="flex items-center gap-3 text-sm hover:text-primary transition-colors" style={{ color: 'var(--text)' }}>
                <span>☎</span> +91-8143262204
              </a>
            </div>
          </div>

          <div className="text-center italic text-lg" style={{ color: 'var(--text-sec)' }}>
            “Consistent learning. Intentional building. Purposeful growth.”
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact