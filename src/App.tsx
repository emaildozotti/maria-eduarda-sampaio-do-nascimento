// DECLARAÇÃO DE UNICIDADE — Eduarda Sampaio LP
// Differentiator: Rosa rosé profundo (#C4788A) + Âmbar dourado (#C48A3C) + linha editorial fina dourada no hero
// Decisão única de layout: Hero Opção A (Split-Layout Editorial) com linha editorial 1px border-secondary/40 lado esquerdo do copy
// Elemento irrepetível: Cormorant Garamond 300 italic em rosa rosé como tipografia de autoridade feminina

import { motion } from 'motion/react'
import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import VideoSection from './components/VideoSection'
import Method from './components/Method'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export const FadeIn = ({ children, delay = 0, className = '' }: FadeInProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-20px 0px' }}
    transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
)

export default function App() {
  return (
    <main>
      <Hero />
      <PainPoints />
      <VideoSection />
      <Method />
      <About />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}
