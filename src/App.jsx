import React from 'react'
import Hero from './Components/Hero'
import About from './Components/About'
import Navbar from './Components/Navbar'


const App = () => {
  return (
  <>
  <main  className='relative min-h-screen w-screen overflow-x-hidden'>
    <Hero/>
    <About/>
    <Navbar/>
  </main>
  </>
  )
}

export default App