import { FadeIn } from '../App'

export default function Footer() {
  const tel = '5511988690670'
  const msg = encodeURIComponent('Olá, Eduarda. Vi sua página e gostaria de entender melhor como o processo de TRG funciona. Posso conversar com você?')

  return (
    <footer id="contato" className="bg-dark section-padding-lg">
      <div className="container-ultra text-center">
        <FadeIn>
          <p className="font-display text-xl italic text-secondary mb-6">Eduarda Sampaio</p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-display text-3xl md:text-4xl font-light italic text-off-white mb-4 max-w-lg mx-auto">
            Quando o padrão para de se repetir,{' '}
            <span className="text-primary">você finalmente se move.</span>
          </h2>
          <p className="font-sans text-off-white/60 font-light mb-4 max-w-md mx-auto">
            Esse passo começa com uma conversa.
          </p>
          <p className="font-sans text-off-white/50 font-light mb-12 max-w-md mx-auto">
            Não estou pedindo decisão. Estou convidando para uma conversa.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <a
            href={`https://wa.me/${tel}?text=${msg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer bg-primary text-off-white rounded-full font-sans text-sm font-medium hover:bg-primary-dark transition-colors"
          >
            Conversar com a Eduarda
          </a>
        </FadeIn>

        <FadeIn delay={0.35}>
          <div className="mt-20 pt-8 border-t border-off-white/10">
            <p className="font-sans text-off-white/30 text-xs">
              © 2025 Eduarda Sampaio. Terapia TRG · Atendimento exclusivo para mulheres · Online
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}
