import { services } from '../data/portfolioData.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

const Services = () => {
  const scrollRevealRef = useScrollReveal()

  return (
    <section className="py-24 px-6 max-w-[1400px] mx-auto" style={{ borderLeft: '1px solid var(--border)', borderRight: '1px solid var(--border)' }}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1 pr-6" style={{ borderRight: '1px solid var(--border)' }}>
          <h2 className="sticky top-32 text-primary text-2xl font-primary md:text-3xl text-left">What I Do</h2>
        </div>
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} data-animation-on-scroll className="space-y-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-primary mb-6" style={{ background: 'color-mix(in srgb, var(--surface) 60%, transparent)' }}>
                <span className="font-primary text-2xl">{service.number}</span>
              </div>
              <h3 className="text-xl font-semibold" style={{ color: 'var(--text)' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-sec)' }} className="font-light leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services