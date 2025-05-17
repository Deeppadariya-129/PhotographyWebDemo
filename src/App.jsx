import { useState } from 'react'
import './App.css'
import Herosection from './pages/Herosection'
import ImageAnimation from './pages/ImageAnimation'
import TextScrollAnimation from './pages/TextScrollAnimation'
import ServiceSection from './pages/ServiceSection'
import FooterSection from './pages/FooterSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Herosection/>
     <ImageAnimation />
     <TextScrollAnimation />
     <ServiceSection />
     <FooterSection />
    </>
  )
}

export default App
