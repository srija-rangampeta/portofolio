import { education } from '../data/portfolioData.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

const Education = () => {
  const scrollRevealRef = useScrollReveal()

  return (
    <section id="education" className="py-24 px-6 max-w-[1400px] mx-auto" style={{ borderLeft: '1px solid var(--border)', borderRight: '1px solid var(--border)' }}>
      <div className="pb-12 mb-12" style={{ borderBottom: '1px solid var(--border)' }}>
        <h2 className="font-primary text-5xl md:text-7xl" style={{ color: 'var(--text)' }}>Education</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {education.map((item, index) => (
          <div key={index} data-animation-on-scroll className="p-6 rounded-sm" style={{ background: 'color-mix(in srgb, var(--surface) 40%, transparent)', border: '1px solid var(--border)', backdropFilter: 'blur(8px)' }}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-primary text-xl" style={{ color: 'var(--text)' }}>{item.degree}</h3>
                <p className="text-sm mt-1" style={{ color: 'var(--text-sec)' }}>{item.school}</p>
              </div>
              <span className="font-mono text-xs" style={{ color: 'var(--text-sec)' }}>{item.period}</span>
            </div>
            {item.detail && (
              <p style={{ color: 'var(--text-sec)' }} className="font-light leading-relaxed">
                {item.detail}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education