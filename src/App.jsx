import React from 'react';
import NavBar from './component/NavBar';
import Hero from './sections/hero';
import Whatsapp from './component/Whatsapp'
import About from './sections/About';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './component/Footer';
import Projects from './sections/Projects';
import { Analytics } from "@vercel/analytics/react"

function App() {

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 transition-colors duration-500 overflow-hidden">
      <NavBar />
      <section className='mt-16 bg-white dark:bg-black dark:text-white flex items-center justify-center' id='home' >
        <Hero />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='skills'>
        <Skills />
      </section>
      <section id='projects'>
        <Projects />
      </section>
      <section id='contact'>
        <Contact />
      </section>
      <Footer />
      <Whatsapp />
      <Analytics />
    </div>
  )
}

export default App
