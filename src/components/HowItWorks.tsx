import { FadeIn } from '../App'

const passos = [
  {
    numero: '1',
    titulo: 'A conversa inicial',
    descricao: 'Antes de qualquer coisa, a gente conversa. Eu quero entender o que você está vivendo, o que já tentou e o que ainda não foi tocado. Só depois disso eu consigo te dizer com clareza se a TRG é o caminho certo para você agora.'
  },
  {
    numero: '2',
    titulo: 'Como as sessões funcionam',
    descricao: 'As sessões acontecem online, pelo Google Meet, com frequência semanal. Cada encontro é conduzido com segurança e no seu ritmo. Não existe pressão para acessar o que você não está pronta, e o processo acontece de forma gradual e sustentada.'
  },
  {
    numero: '3',
    titulo: 'A transformação',
    descricao: 'O que começa a mudar não é só como você pensa sobre a situação, é como você sente e reage a ela. O padrão que se repetia perde a força. A leveza que você buscava deixa de ser uma meta e passa a ser o seu estado natural.'
  }
]

const desmistificacao = [
  'TRG não é hipnose nem te coloca em transe.',
  'Você não precisa reviver traumas para que o reprocessamento aconteça.',
  'Não é um processo doloroso nem exige exposição forçada ao passado.',
  'Não é "só conversa": existe uma técnica específica que guia cada sessão.',
  'Não funciona para todos os casos, e se não for o indicado para você, eu vou te dizer.'
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-bg-light section-padding-lg">
      <div className="container-ultra">
        <FadeIn>
          <p className="eyebrow-ultra text-secondary mb-4">Como funciona</p>
          <h2 className="font-display text-3xl md:text-4xl font-light italic text-text-main mb-16">
            Como é trabalhar{' '}
            <span className="text-primary">comigo</span>
          </h2>
        </FadeIn>

        <div className="space-y-6 mb-20">
          {passos.map((passo, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="flex gap-8 items-start bg-bg-warm rounded-sm p-8">
                <span className="font-display text-5xl font-light text-secondary/60 leading-none flex-shrink-0">
                  {passo.numero}
                </span>
                <div>
                  <h3 className="font-display text-xl font-light italic text-text-main mb-2">
                    {passo.titulo}
                  </h3>
                  <p className="font-sans text-text-main/70 font-light leading-relaxed">
                    {passo.descricao}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Desmistificação TRG */}
        <FadeIn>
          <div className="bg-primary/5 border border-primary/20 rounded-sm p-8 md:p-10">
            <h3 className="font-display text-xl font-light italic text-primary mb-2">
              Antes de continuar, preciso desfazer algumas coisas que ouço com frequência:
            </h3>
            <ul className="space-y-3 mt-6">
              {desmistificacao.map((item, i) => (
                <li key={i} className="flex gap-3 items-start font-sans text-text-main/70 font-light">
                  <span className="text-secondary mt-1 flex-shrink-0">◆</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="font-sans text-text-main/50 font-light italic text-center mt-8">
            Se você ficou com dúvidas, eu respondo as mais comuns logo abaixo.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
