import { personal } from '../data/portfolioData.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

const About = () => {
  const scrollRevealRef = useScrollReveal()

  return (
    <section id="about" className="py-24 px-6 max-w-[1400px] mx-auto" style={{ borderLeft: '1px solid var(--border)', borderRight: '1px solid var(--border)' }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div data-animation-on-scroll>
          <h2 className="font-primary text-5xl md:text-6xl mb-12 leading-tight" style={{ color: 'var(--text)' }}>
            Code is the <br />
            <span className="text-primary italic">blueprint.</span>
          </h2>
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-sm mx-auto lg:mx-0" style={{ background: 'color-mix(in srgb, var(--surface) 40%, transparent)', border: '1px solid var(--border)' }}>
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <span className="text-6xl opacity-50">👩‍💻</span>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white font-mono text-sm">{personal.location}</p>
            </div>
          </div>
        </div>

        <div data-animation-on-scroll className="flex flex-col justify-center space-y-8">
          <div className="space-y-6 text-lg leading-relaxed font-light" style={{ color: 'var(--text-sec)' }}>
            <p>
              <span className="font-normal" style={{ color: 'var(--text)' }}>I am {personal.name.split(' ')[1]},</span> a final-year B.Tech student in Computer Science Engineering with a specialization in Artificial Intelligence and Data Science.
            </p>
            <p>
              I am passionate about Frontend Development and UI/UX Design, creating intuitive digital experiences that solve real-world problems.
            </p>
            <p>
              I continuously improve my problem-solving and communication skills while actively seeking internships and entry-level opportunities to apply my knowledge.
            </p>
          </div>
          <div className="flex gap-4 pt-4">
            <span className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border" style={{ borderColor: 'var(--border)', color: 'var(--text-sec)' }}>Clean Code</span>
            <span className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border" style={{ borderColor: 'var(--border)', color: 'var(--text-sec)' }}>AI-Driven Design</span>
            <span className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border" style={{ borderColor: 'var(--border)', color: 'var(--text-sec)' }}>Problem Solving</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About