import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import About from './components/about'
import Technology from './components/technology'
import Expirences from './components/expirences'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialised selection:bg-neutral-300 selection:bg-cyan-900 '>
      <div className='fixed top-0 -z-10 h-full w-full'>
      <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div></div>
        </div>
    <div className='container mx-auto py-1'>
    <Navbar/>
    <Hero/>
    <About />
    <Technology />
    <Expirences />
    <Projects />
    <Contact />
    <Footer />
    
    </div>
  
    </div>
  )
}

export default App
