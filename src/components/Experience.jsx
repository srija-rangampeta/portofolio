import { experiences } from '../data/portfolioData.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

const Experience = () => {
  const scrollRevealRef = useScrollReveal()

  return (
    <section id="experience" className="py-24 px-6 max-w-[1400px] mx-auto" style={{ borderLeft: '1px solid var(--border)', borderRight: '1px solid var(--border)' }}>
      <div className="pb-12 mb-12" style={{ borderBottom: '1px solid var(--border)' }}>
        <span className="text-primary text-sm uppercase tracking-widest mb-4 block">Career</span>
        <h2 className="font-primary text-5xl md:text-7xl" style={{ color: 'var(--text)' }}>Experience</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map((experience, index) => (
          <div key={index} data-animation-on-scroll className="p-6 rounded-sm" style={{ background: 'color-mix(in srgb, var(--surface) 40%, transparent)', border: '1px solid var(--border)', backdropFilter: 'blur(8px)' }}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-primary text-2xl" style={{ color: 'var(--text)' }}>{experience.title}</h3>
              <span className="font-mono text-xs" style={{ color: 'var(--text-sec)' }}>{experience.period}</span>
            </div>
            <p className="text-sm mb-2 font-semibold text-primary">Class Representative</p>
            <p style={{ color: 'var(--text-sec)' }} className="font-light leading-relaxed">
              {experience.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="font-primary text-3xl mb-8" style={{ color: 'var(--text)' }}>Leadership</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div data-animation-on-scroll className="p-6 rounded-sm md:col-span-3" style={{ background: 'color-mix(in srgb, var(--surface) 40%, transparent)', border: '1px solid var(--border)', backdropFilter: 'blur(8px)' }}>
            <div>
              <h4 className="font-primary text-xl" style={{ color: 'var(--text)' }}>Facilitator</h4>
              <p className="text-sm mt-1" style={{ color: 'var(--text-sec)' }}>For Newcomers</p>
            </div>
            <p style={{ color: 'var(--text-sec)' }} className="font-light leading-relaxed mt-4">
              {experiences[1].description}
            </p>
          </div>
          <div data-animation-on-scroll className="p-6 rounded-sm" style={{ background: 'color-mix(in srgb, var(--surface) 40%, transparent)', border: '1px solid var(--border)', backdropFilter: 'blur(8px)' }}>
            <h4 className="font-primary text-lg mb-2" style={{ color: 'var(--text)' }}>Class Rep</h4>
            <p className="text-sm mt-1" style={{ color: 'var(--text-sec)' }}>Student-Faculty Bridge</p>
            <p style={{ color: 'var(--text-sec)' }} className="font-light leading-relaxed mt-2">
              {experiences[0].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience