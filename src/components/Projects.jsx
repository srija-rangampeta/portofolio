import { projects } from '../data/portfolioData.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

const Projects = () => {
  const scrollRevealRef = useScrollReveal()

  return (
    <section id="projects" className="py-24 px-6 max-w-[1400px] mx-auto" style={{ borderLeft: '1px solid var(--border)', borderRight: '1px solid var(--border)' }}>
      <div className="pb-12 mb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6" style={{ borderBottom: '1px solid var(--border)' }}>
        <div data-animation-on-scroll>
          <span className="text-primary text-sm uppercase tracking-widest mb-4 block">My Work</span>
          <h2 className="font-primary text-5xl md:text-7xl" style={{ color: 'var(--text)' }}>Featured Projects</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2" style={{ border: '1px solid var(--border)' }}>
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.demo}
            target="_blank"
            rel="noopener"
            className="project-card group block p-8 lg:p-12 transition-colors duration-500"
            style={{ borderColor: 'var(--border)' }}
          >
            <div className="overflow-hidden rounded-sm mb-8 relative aspect-[16/9] bg-neutral-surface/50 flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <span className="text-6xl opacity-50">🚀</span>
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-primary text-3xl group-hover:text-primary transition-colors" style={{ color: 'var(--text)' }}>{project.title}</h3>
                <span className="text-xs px-2 py-1 rounded-full" style={{ border: '1px solid var(--border)', color: 'var(--text-sec)' }}>{project.type}</span>
              </div>
              <p style={{ color: 'var(--text-sec)' }} className="font-light">{project.description}</p>
              <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
                <div className="flex gap-2 flex-wrap">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs font-semibold uppercase tracking-wider text-primary/80">{tech}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener"
                      className="text-xs font-semibold uppercase tracking-widest text-primary hover:underline flex items-center gap-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub ↗
                    </a>
                  )}
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                    Live Demo ↗
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-primary mb-2">Key Features:</h4>
                <ul className="text-xs text-text-sec space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>• {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects