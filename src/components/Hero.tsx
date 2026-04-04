import { FadeIn } from '../App'

export default function Hero() {
  const tel = '5511988690670'
  const msg = encodeURIComponent('Olá, Eduarda. Vi sua página e gostaria de entender melhor como o processo de TRG funciona. Posso conversar com você?')

  return (
    <>
      {/* Header sticky — só desktop */}
      <header className="hidden md:block sticky top-0 z-50 bg-bg-warm/90 backdrop-blur-sm border-b border-primary/10">
        <div className="container-ultra flex items-center justify-between py-4">
          <p className="font-display text-xl text-primary italic">Eduarda Sampaio</p>
          <a
            href={`https://wa.me/${tel}?text=${msg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-main/70 hover:text-primary transition-colors"
          >
            Agendar sessão
          </a>
        </div>
      </header>

      {/* Hero Section — Split Layout Editorial (Opção A) */}
      <section id="hero" className="relative min-h-screen bg-bg-warm overflow-hidden flex items-center">

        {/* Aurora — 3 blobs */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-32 -left-32 w-96 h-96 rounded-full"
            style={{
              background: 'radial-gradient(circle, #C4788A52 0%, transparent 70%)',
              filter: 'blur(80px)',
              animation: 'aurora-1 12s ease-in-out infinite'
            }}
          />
          <div
            className="absolute -top-20 right-0 w-80 h-80 rounded-full"
            style={{
              background: 'radial-gradient(circle, #C48A3C45 0%, transparent 70%)',
              filter: 'blur(70px)',
              animation: 'aurora-2 15s ease-in-out infinite'
            }}
          />
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full"
            style={{
              background: 'radial-gradient(circle, #FAF3EC28 0%, transparent 70%)',
              filter: 'blur(90px)',
              animation: 'aurora-3 18s ease-in-out infinite'
            }}
          />
        </div>

        <div className="container-ultra relative z-10 w-full py-20 md:py-0">
          <div className="flex flex-col md:flex-row md:items-center md:gap-16 min-h-screen md:min-h-0">

            {/* Texto — order-1 mobile e desktop */}
            <div className="order-1 md:w-1/2 relative">
              {/* Linha editorial — signature element */}
              <div className="hidden md:block absolute -left-8 top-0 bottom-0 w-px bg-secondary/40" />

              <FadeIn delay={0}>
                <p className="eyebrow-ultra text-secondary mb-6">TERAPIA TRG ONLINE</p>
              </FadeIn>

              <FadeIn delay={0.15}>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light italic leading-tight text-text-main mb-6">
                  O padrão{' '}
                  <span className="text-primary">para.</span>
                  <br />
                  Você finalmente
                  <br />
                  se{' '}
                  <span className="text-secondary">move.</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.30}>
                <p className="font-sans text-lg text-text-main/70 font-light mb-10 max-w-md">
                  Para quem já tentou e sente que a raiz não foi tocada.
                </p>
              </FadeIn>

              <FadeIn delay={0.45}>
                <button
                  onClick={() => document.getElementById('dores')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-shimmer bg-primary text-off-white rounded-full font-sans text-sm font-medium hover:bg-primary-dark transition-colors"
                >
                  Quero entender o que está acontecendo
                </button>
              </FadeIn>

            </div>

            {/* Foto — order-2 mobile e desktop */}
            <div className="order-2 md:w-1/2 mt-10 md:mt-0 flex justify-center">
              <div className="relative w-64 h-80 md:w-80 md:h-[28rem]">
                {/* Cantos decorativos — Photo Treatment Padrão B */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary/60 rounded-tl-sm" />
                <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-primary/60 rounded-tr-sm" />
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-primary/60 rounded-bl-sm" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary/60 rounded-br-sm" />

                {/* Placeholder */}
                <div className="absolute inset-0 bg-primary/10 rounded-sm flex flex-col items-center justify-center gap-3">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="16" r="8" stroke="#C4788A" strokeWidth="1.5" fill="none" />
                    <path d="M8 40c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="#C4788A" strokeWidth="1.5" fill="none" />
                  </svg>
                  <span className="text-primary/60 font-sans text-xs">Foto Eduarda</span>
                </div>

                {/* Foto real — substituir src pela URL real */}
                <img
                  src="https://i.imgur.com/4S4bGz8.jpeg"
                  alt="Eduarda Sampaio, terapeuta TRG"
                  className="absolute inset-0 w-full h-full object-cover object-top rounded-sm"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
