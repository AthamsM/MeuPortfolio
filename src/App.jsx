import { useState } from "react"
import Home from "./pages/Home"
import Header from "./componentes/Header"
import Projects from "./pages/Projects"
import About from "./pages/About"

function App() {
  return (
    <div className="bg-radial from-[#1B2735] to-[#090A0F]">
      <div className="sticky top-0 z-40">
        <Header />
      </div>
      <div id="home">
        <Home />
      </div>
      <div id="projects" className="pt-0 pb-0 sm:pt-20 z-10">
        <Projects />
      </div>
      <div id="about" className="pt-0 sm:pt-20 z-10">
        <About />
      </div>
    </div>
  )
}

export default App
