import { FadeIn } from '../App'

export default function About() {
  return (
    <section id="sobre" className="bg-bg-warm section-padding-lg">
      <div className="container-ultra">
        <div className="flex flex-col md:flex-row md:items-start md:gap-16">

          {/* Foto — order-1 mobile, order-2 desktop */}
          <div className="order-1 md:order-2 md:w-2/5 mb-10 md:mb-0">
            <FadeIn>
              <div className="relative w-full max-w-xs mx-auto md:translate-y-8">
                {/* Cantos decorativos — Padrão B */}
                <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-primary/50" />
                <div className="absolute -top-3 -right-3 w-10 h-10 border-t-2 border-r-2 border-primary/50" />
                <div className="absolute -bottom-3 -left-3 w-10 h-10 border-b-2 border-l-2 border-primary/50" />
                <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-primary/50" />

                {/* Placeholder */}
                <div className="aspect-[3/4] bg-primary/10 rounded-sm flex flex-col items-center justify-center gap-3">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="16" r="8" stroke="#C4788A" strokeWidth="1.5" fill="none" />
                    <path d="M8 40c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="#C4788A" strokeWidth="1.5" fill="none" />
                  </svg>
                  <span className="text-primary/60 font-sans text-xs">Foto Eduarda</span>
                </div>

                <img
                  src="{URL_DA_FOTO_ABOUT_EDUARDA}"
                  alt="Eduarda Sampaio, terapeuta TRG"
                  className="absolute inset-0 w-full h-full object-cover object-top rounded-sm"
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                />
              </div>
            </FadeIn>
          </div>

          {/* Texto — order-2 mobile, order-1 desktop */}
          <div className="order-2 md:order-1 md:w-3/5">
            <FadeIn>
              <p className="eyebrow-ultra text-secondary mb-4">Minha história</p>
              <h2 className="font-display text-3xl md:text-4xl font-light italic text-text-main mb-8">
                Quem chegou até esse trabalho por ter{' '}
                <span className="text-primary">passado pelo mesmo.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="font-sans text-text-main/70 font-light leading-relaxed mb-4">
                Eu não descobri a TRG por acidente.
              </p>
              <p className="font-sans text-text-main/70 font-light leading-relaxed mb-4">
                Durante anos carreguei padrões que não entendia, pensamentos que voltavam e uma sensação de que algo dentro de mim resistia à mudança. Tentei outros caminhos. Ficava bem por um tempo e voltava ao mesmo lugar.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <blockquote className="border-l-2 border-primary pl-6 my-8 font-display text-xl italic text-text-main">
                "Foi quando me deparei com a TRG que entendi o que estava acontecendo. Não faltava esforço. Faltava o nível certo de acesso."
              </blockquote>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="font-sans text-text-main/70 font-light leading-relaxed mb-4">
                Hoje sou especialista em TRG e atendo mulheres que se veem nessa mesma situação. Que sabem que precisam mudar mas não conseguem sair do lugar, não por falta de vontade, mas porque o que prende está mais fundo do que qualquer conversa alcança.
              </p>
              <p className="font-sans text-text-main/70 font-light leading-relaxed mb-8">
                É esse lugar que me dedico a acessar, com rigor, cuidado e o método certo.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-wrap gap-3">
                {['Especialista em TRG', 'Formação em Terapia Emocional', 'Atendimento exclusivo para mulheres'].map((badge) => (
                  <span
                    key={badge}
                    className="font-sans text-xs text-primary border border-primary/30 rounded-full px-4 py-2"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <p className="font-display text-base italic text-primary/70 mt-10">
                E o processo que eu conduzo funciona assim.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
