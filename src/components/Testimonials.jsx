import { testimonials } from '../data/portfolioData.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

const Testimonials = () => {
  const scrollRevealRef = useScrollReveal()

  return (
    <section className="py-24 px-6 max-w-[1400px] mx-auto" style={{ borderLeft: '1px solid var(--border)', borderRight: '1px solid var(--border)' }}>
      <div className="pb-12 mb-12" style={{ borderBottom: '1px solid var(--border)' }}>
        <span className="text-primary text-sm uppercase tracking-widest mb-4 block">Social Proof</span>
        <h2 className="font-primary text-5xl md:text-7xl" style={{ color: 'var(--text)' }}>Kind Words</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} data-animation-on-scroll className="p-6 rounded-sm" style={{ background: 'color-mix(in srgb, var(--surface) 40%, transparent)', border: '1px solid var(--border)' }}>
            <p className="text-lg leading-relaxed font-light italic mb-6" style={{ color: 'var(--text)' }}>{testimonial.text}</p>
            <div>
              <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>{testimonial.author}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials