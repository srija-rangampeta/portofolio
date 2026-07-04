import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Education from './Education'
import Experience from './Experience'
import Services from './Services'
import Testimonials from './Testimonials'
import Contact from './Contact'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default App