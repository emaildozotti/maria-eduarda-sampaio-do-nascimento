import { FadeIn } from '../App'

const dores = [
  {
    numero: '01',
    texto: 'Sei que preciso mudar, mas algo dentro de mim me puxa de volta sempre.'
  },
  {
    numero: '02',
    texto: 'Estou exausta de tentar dar conta de tudo e ainda me sentir uma bagunça por dentro.'
  },
  {
    numero: '03',
    texto: 'Acordo com aquela ansiedade todo dia e ela não me deixa viver o que está na minha frente.'
  },
  {
    numero: '04',
    texto: 'Já fiz terapia antes, ficava um tempo bem, mas voltava para o mesmo lugar.'
  }
]

export default function PainPoints() {
  return (
    <section id="dores" className="bg-dark section-padding-lg">
      <div className="container-ultra">
        <FadeIn>
          <h2 className="font-display text-3xl md:text-4xl font-light italic text-off-white mb-16 text-center">
            Você se identifica com <span className="text-primary">alguma dessas?</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {dores.map((dor, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="relative bg-off-white/5 border border-off-white/10 rounded-sm p-10 hover:bg-off-white/8 transition-colors">
                <span className="absolute top-6 right-8 font-display text-8xl font-light text-secondary/30 leading-none select-none">
                  {dor.numero}
                </span>
                <p className="font-sans text-off-white/80 font-light leading-relaxed relative z-10 max-w-xs">
                  "{dor.texto}"
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Transição — elemento separado */}
        <FadeIn>
          <p className="font-display text-xl md:text-2xl italic text-primary text-center max-w-lg mx-auto">
            Se algo aqui ressoou em você, existe uma razão para esse padrão se repetir.
            <br />
            <span className="text-secondary">E ela tem nome.</span>
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
