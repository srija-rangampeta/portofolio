import { useState, useEffect, useCallback } from 'react'
import { phrases } from '../data/portfolioData.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { personal } from '../data/portfolioData.js'

const Hero = () => {
  const [currentPhrase, setCurrentPhrase] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [phraseIndex, setPhraseIndex] = useState(0)

  const typeEffect = useCallback(() => {
    const current = phrases[phraseIndex]
    if (!isDeleting) {
      setCurrentPhrase(current.substring(0, (currentPhrase.length || 0) + 1))
      if (currentPhrase.length === current.length) {
        setTimeout(typeEffect, 2000)
        return
      } else {
        setTimeout(typeEffect, 80)
      }
    } else {
      setCurrentPhrase(current.substring(0, currentPhrase.length - 1))
      if (currentPhrase.length === 0) {
        setIsDeleting(false)
        setPhraseIndex((prev) => (prev + 1) % phrases.length)
      } else {
        setTimeout(typeEffect, 40)
      }
    }
  }, [currentPhrase, isDeleting, phraseIndex])

  useEffect(() => {
    const timeout = setTimeout(typeEffect, 100)
    return () => clearTimeout(timeout)
  }, [typeEffect])

  const scrollRevealRef = useScrollReveal()

  return (
    <section id="home" className="min-h-[50vh] pt-36 pb-8 px-6 max-w-[1400px] mx-auto flex flex-col justify-end relative">
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 h-full w-full relative z-10">
        <div
          data-animation-on-scroll
          className="md:col-span-8 p-6 md:p-8 rounded-sm flex flex-col justify-between min-h-[220px]"
          style={{ background: 'color-mix(in srgb, var(--surface) 40%, transparent)', border: '1px solid var(--border)', backdropFilter: 'blur(8px)' }}
        >
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="font-mono text-xs" style={{ color: 'var(--text-sec)' }}>Open to Internships</span>
            </div>
            <span className="font-mono text-xs text-primary border border-primary/30 px-2 py-1 rounded">Learning.Building.Evolving</span>
          </div>
          <div>
            <h1 className="font-primary text-5xl md:text-6xl lg:text-7xl leading-[0.85] tracking-tight" style={{ color: 'var(--text)' }}>{personal.name}</h1>
            <div className="mt-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <div className="h-px flex-1 hidden md:block" style={{ background: 'var(--border)' }}></div>
              <p className="font-secondary text-lg font-light max-w-md" style={{ color: 'var(--text-sec)' }}>
                <span id="typing-text" className="typing-cursor">{currentPhrase}</span>
              </p>
            </div>
          </div>
        </div>

        <div
          data-animation-on-scroll
          className="md:col-span-4 relative overflow-hidden rounded-sm min-h-[220px] group p-8 flex flex-col justify-between"
          style={{ border: '1px solid var(--border)', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(16px)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent"></div>
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '42px 42px' }}></div>
          <div className="relative z-10 flex flex-col items-center mt-2">
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <div className="px-6 py-3 rounded-full border border-green-400/20 bg-green-400/10 text-green-200 text-sm backdrop-blur-md shadow-lg hover:scale-105 transition duration-300">Frontend</div>
              <div className="px-6 py-3 rounded-full border border-gray-400/20 bg-gray-400/10 text-gray-200 text-sm backdrop-blur-md shadow-lg hover:scale-105 transition duration-300">UI/UX</div>
              <div className="px-6 py-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-200 text-sm backdrop-blur-md shadow-lg hover:scale-105 transition duration-300">AI & DS</div>
            </div>
            <div className="w-[1px] h-8" style={{ background: 'var(--border)' }}></div>
            <div className="px-6 py-3 rounded-full border border-lime-400/20 bg-lime-400/10 text-lime-200 text-sm backdrop-blur-md shadow-lg hover:scale-105 transition duration-300">CSE Student</div>
          </div>
          <div className="relative z-10">
            <p className="font-primary italic text-3xl leading-none text-white">
              Creativity meets<br />Technology
            </p>
          </div>
        </div>

        <div
          data-animation-on-scroll
          className="md:col-span-5 p-6 rounded-sm flex flex-col justify-center"
          style={{ background: 'color-mix(in srgb, var(--surface) 40%, transparent)', border: '1px solid var(--border)', backdropFilter: 'blur(8px)' }}
        >
          <div className="space-y-6">
            <p className="text-lg md:text-xl leading-relaxed font-light" style={{ color: 'var(--text-sec)' }}>
              "Every project is another step <span className="font-normal underline decoration-primary decoration-1 underline-offset-4" style={{ color: 'var(--text)' }}>forward</span>."
            </p>
            <div className="flex items-center gap-4 text-sm font-mono pt-2" style={{ color: 'var(--text-sec)' }}>
              <span>Currently: Final Year CSE Student</span>
            </div>
          </div>
        </div>

        <div
          data-animation-on-scroll
          className="md:col-span-7 bg-primary border border-primary p-6 rounded-sm flex flex-col justify-between group hover:bg-secondary transition-all cursor-pointer relative overflow-hidden"
        >
          <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 bg-black/10 rounded-full text-xs font-bold uppercase tracking-widest text-text-onPrimary mb-4 backdrop-blur-md">● Open to opportunities</span>
            <h2 className="font-primary text-3xl md:text-4xl text-text-onPrimary leading-tight">
              Let's connect <br />& create
            </h2>
          </div>
          <div className="relative z-10 flex justify-end">
            <svg className="w-12 h-12 text-text-onPrimary transform group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </div>
          <a href="#contact" className="absolute inset-0 z-20"></a>
        </div>
      </div>

      <div className="mt-12 flex gap-4">
        {personal.ctaButtons.map((button, index) => (
          <a
            key={index}
            href={button.href}
            download={button.download}
            className="px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 ${index === 0 ? 'bg-primary text-text-onPrimary hover:bg-secondary' : 'border border-primary text-primary hover:bg-primary/10'}"
          >
            {button.label}
          </a>
        ))}
      </div>
    </section>
  )
}

export default Hero