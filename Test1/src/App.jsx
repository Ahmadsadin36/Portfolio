import { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Skill from './components/Skill'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ContactMe from './components/ContactMe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <About />
    <Skill />
    <Projects />
    <ContactMe />
    <Footer />

    </>
  )
}

export default App
