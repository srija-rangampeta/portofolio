import { skills } from '../data/portfolioData.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

const Skills = () => {
  const scrollRevealRef = useScrollReveal()

  return (
    <section id="skills" className="py-24 px-6 max-w-[1400px] mx-auto" style={{ borderLeft: '1px solid var(--border)', borderRight: '1px solid var(--border)' }}>
      <div className="pb-12 mb-12" style={{ borderBottom: '1px solid var(--border)' }}>
        <span className="text-primary text-sm uppercase tracking-widest mb-4 block">My Expertise</span>
        <h2 className="font-primary text-5xl md:text-7xl" style={{ color: 'var(--text)' }}>Technical Skills</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          data-animation-on-scroll
          className="p-6 rounded-sm"
          style={{ background: 'color-mix(in srgb, var(--surface) 40%, transparent)', border: '1px solid var(--border)', backdropFilter: 'blur(8px)' }}
        >
          <h3 className="font-primary text-2xl mb-6" style={{ color: 'var(--text)' }}>Technical</h3>
          <div className="flex flex-wrap gap-3">
            {skills.technical.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full text-sm border animate-pulse"
                style={{ borderColor: 'var(--border)', color: 'var(--text-sec)' }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div
          data-animation-on-scroll
          className="p-6 rounded-sm"
          style={{ background: 'color-mix(in srgb, var(--surface) 40%, transparent)', border: '1px solid var(--border)', backdropFilter: 'blur(8px)' }}
        >
          <h3 className="font-primary text-2xl mb-6" style={{ color: 'var(--text)' }}>Soft Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.soft.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full text-sm border animate-pulse"
                style={{ borderColor: 'var(--border)', color: 'var(--text-sec)' }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Frontend Development', value: 90, color: 'primary' },
          { label: 'UI/UX Design', value: 85, color: 'secondary' },
          { label: 'Python', value: 80, color: 'accent' },
          { label: 'Problem Solving', value: 95, color: 'green' },
        ].map((item, index) => (
          <div
            key={index}
            data-animation-on-scroll
            className="p-6 rounded-sm"
            style={{ background: 'color-mix(in srgb, var(--surface) 40%, transparent)', border: '1px solid var(--border)', backdropFilter: 'blur(8px)' }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-primary text-xl" style={{ color: 'var(--text)' }}>{item.label}</h3>
              <span className="text-3xl font-primary" style={{ color: `var(--${item.color})` }}>{item.value}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-neutral-surface/50 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${item.value}%`, background: `var(--${item.color})` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills