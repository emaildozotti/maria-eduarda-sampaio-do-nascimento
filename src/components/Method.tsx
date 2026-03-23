import { FadeIn } from '../App'

const pilares = [
  {
    numero: '01',
    titulo: 'O que o TRG acessa que a fala não alcança',
    descricao: `A TRG acessa memórias inconscientes. Não o que você lembra conscientemente ou o que você fala sobre, mas o que está armazenado em camadas mais profundas, onde a lógica não chega.
É nesse nível que os padrões emocionais vivem. É lá onde a sua história ficou guardada sem resolução.
A TRG reorganiza essas memórias de forma biológica: o sistema nervoso aprende uma resposta diferente, não porque você decidiu, mas porque a estrutura mudou.
Não é força de vontade. Não é reprogramação de crenças. É reprocessamento real, no nível que precisa ser tratado.
Por isso a mudança não volta. Porque a raiz foi tocada.`,
    destaque: true
  },
  {
    numero: '02',
    titulo: 'Você não precisa reviver o que foi doloroso',
    descricao: 'No processo, você não precisa reviver o que foi doloroso. O trabalho acontece no seu ritmo, com segurança, e sem exposição forçada ao que você não está pronta.',
    destaque: false
  },
  {
    numero: '03',
    titulo: 'A mudança que não exige esforço para durar',
    descricao: 'Entre as sessões, você não precisa fazer esforço para "manter o resultado". O que muda, muda de dentro para fora, sem depender de disciplina emocional constante.',
    destaque: false
  }
]

export default function Method() {
  return (
    <section id="metodo" className="bg-bg-light section-padding-lg">
      <div className="container-ultra">
        <FadeIn>
          <p className="eyebrow-ultra text-secondary mb-4">Meu método</p>
          <h2 className="font-display text-3xl md:text-4xl font-light italic text-text-main mb-4">
            TRG: Terapia de{' '}
            <span className="text-primary">Reprocessamento Generativo</span>
          </h2>
          <p className="font-sans text-text-main/60 font-light mb-4 max-w-lg">
            Eu trabalho com um método que não vou encontrar em qualquer consultório.
          </p>
          <p className="font-sans text-text-main/60 font-light mb-16 max-w-lg">
            E preciso te explicar o porquê ele funciona diferente antes de você decidir qualquer coisa.
          </p>
        </FadeIn>

        <div className="space-y-8">
          {pilares.map((pilar, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div
                className={`relative rounded-sm p-8 md:p-10 ${
                  pilar.destaque
                    ? 'bg-bg-warm border-l-4 border-primary'
                    : 'bg-bg-warm border-l-2 border-primary/30'
                }`}
              >
                <span className="absolute top-6 right-8 font-display text-7xl font-light text-secondary/20 leading-none select-none">
                  {pilar.numero}
                </span>
                <h3 className="font-display text-xl md:text-2xl font-light italic text-text-main mb-3 relative z-10">
                  {pilar.titulo}
                </h3>
                <p
                  className={`font-sans text-text-main/70 font-light leading-relaxed relative z-10 whitespace-pre-line ${
                    pilar.destaque ? 'max-w-2xl' : 'max-w-lg'
                  }`}
                >
                  {pilar.descricao}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-12 p-6 border border-primary/20 rounded-sm bg-primary/5">
            <p className="font-sans text-text-main/70 font-light italic">
              <span className="font-medium text-text-main not-italic">Não prometo:</span>{' '}
              que você nunca mais vai sofrer, nem que tudo vai se resolver em uma sessão.
              <br />
              <span className="mt-2 block">
                Prometo acesso ao que está por baixo do sofrimento que não passa.
              </span>
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <p className="font-display text-lg italic text-primary/80 mt-10 text-center">
            Mas antes de qualquer processo, você precisa saber com quem está falando.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
