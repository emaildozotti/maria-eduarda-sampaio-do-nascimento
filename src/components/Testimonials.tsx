import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FadeIn } from '../App'

const depoimentos = [
  {
    nome: 'Ana C., 38 anos, professora',
    resultado: 'O padrão não tem mais a mesma força',
    texto: 'Eu tinha tentado outras terapias e ficava bem por um tempo, mas sempre voltava ao mesmo lugar. Com a Duda foi diferente. Algo mudou de verdade, não na superfície. Não consigo explicar exatamente o que aconteceu, mas o padrão que me prendia simplesmente não tem mais a mesma força.',
    destaque: 'Algo mudou de verdade, não na superfície'
  },
  {
    nome: 'Juliana M., 42 anos, empresária',
    resultado: 'A mudança apareceu antes de eu mesma perceber',
    texto: 'Eu era muito cética. Achava que já sabia tudo sobre mim e que não tinha mais nada para descobrir. O que a TRG acessou estava muito além do que eu imaginava. Depois de alguns meses, as pessoas próximas começaram a perceber uma mudança em mim antes de eu mesma perceber.',
    destaque: 'O que a TRG acessou estava muito além do que eu imaginava'
  },
  {
    nome: 'Fernanda R., 35 anos, advogada',
    resultado: 'Sem aquela ansiedade que não deixava viver',
    texto: 'Acordar sem aquela ansiedade que não me deixava viver era algo que eu já tinha desistido de esperar. Hoje eu tenho. E não foi porque aprendi a controlar ela, foi porque entendi e dissolvi o que estava por baixo.',
    destaque: 'Não foi porque aprendi a controlar, foi porque dissolvi o que estava por baixo'
  }
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? depoimentos.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === depoimentos.length - 1 ? 0 : c + 1))

  return (
    <section id="depoimentos" className="bg-dark section-padding-lg overflow-hidden">
      <div className="container-ultra">
        <FadeIn>
          <p className="eyebrow-ultra text-secondary mb-4 text-center">Resultados reais</p>
          <h2 className="font-display text-3xl md:text-4xl font-light italic text-off-white mb-16 text-center">
            Pessoas que{' '}
            <span className="text-primary">saíram do ciclo</span>
          </h2>
        </FadeIn>

        <div className="relative max-w-2xl mx-auto">
          {/* Aspa decorativa 120px */}
          <span
            className="absolute -top-8 -left-4 font-display leading-none text-primary/20 select-none"
            style={{ fontSize: '120px' }}
            aria-hidden="true"
          >
            "
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <p className="font-display text-xl md:text-2xl italic text-primary mb-4 leading-relaxed">
                "{depoimentos[current].destaque}"
              </p>
              <p className="font-sans text-off-white/70 font-light leading-relaxed mb-8">
                {depoimentos[current].texto}
              </p>
              <div>
                <p className="font-sans text-off-white/90 font-medium text-sm">
                  — {depoimentos[current].nome}
                </p>
                <p className="font-sans text-secondary/80 text-xs mt-1">
                  {depoimentos[current].resultado}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Botões prev/next */}
          <div className="flex items-center gap-4 mt-10">
            <button
              onClick={prev}
              aria-label="Depoimento anterior"
              className="w-10 h-10 border border-off-white/20 rounded-full flex items-center justify-center text-off-white/60 hover:border-primary hover:text-primary transition-colors"
            >
              ←
            </button>
            <div className="flex gap-2">
              {depoimentos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Ir para depoimento ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === current ? 'bg-primary' : 'bg-off-white/20'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Próximo depoimento"
              className="w-10 h-10 border border-off-white/20 rounded-full flex items-center justify-center text-off-white/60 hover:border-primary hover:text-primary transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
