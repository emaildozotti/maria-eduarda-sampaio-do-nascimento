import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FadeIn } from '../App'

const faqs = [
  {
    pergunta: 'Já tentei terapia e não funcionou. Por que essa seria diferente?',
    resposta: 'Porque a TRG não trabalha no mesmo nível que a maioria das abordagens. Terapias convencionais atuam principalmente no que você consegue verbalizar e compreender conscientemente. Isso tem valor, mas quando o padrão está armazenado em camadas mais profundas, o alívio fica na superfície. A TRG acessa memórias inconscientes, onde os padrões emocionais realmente vivem. É por isso que a mudança sustenta.'
  },
  {
    pergunta: 'Funciona online?',
    resposta: 'Sim. As sessões acontecem pelo Google Meet e são tão eficazes quanto o presencial. A TRG não depende de presença física para funcionar. O que importa é o método e a condução, e esses acontecem integralmente online.'
  },
  {
    pergunta: 'Qual é o investimento?',
    resposta: 'O investimento mensal varia de acordo com a frequência de sessões e o seu momento no processo. Na conversa inicial, após entender o que você está vivendo, eu consigo te apresentar as opções com clareza. O que posso dizer é que é um processo semanal, e o investimento está dimensionado para ser viável para quem está comprometida com a mudança real. E menor que o custo de continuar no ciclo que drena sua energia, seus relacionamentos e sua prosperidade.'
  },
  {
    pergunta: 'Quanto tempo leva para sentir resultados?',
    resposta: 'A maioria das mulheres começa a perceber diferença entre a segunda e a quarta sessão. Padrões mais antigos ou mais enraizados pedem um processo mais longo, geralmente de três a seis meses para transformação consistente. O tempo depende do que está sendo trabalhado, mas o progresso acontece de forma gradual e você vai sentindo ao longo do caminho.'
  },
  {
    pergunta: 'Tenho medo de reviver traumas. A TRG vai me expor a isso?',
    resposta: 'Não. Esse é um dos maiores mal-entendidos sobre o método. Na TRG, você não precisa reviver o que foi doloroso para que o reprocessamento aconteça. O processo é conduzido com segurança e no seu ritmo, e você permanece no controle durante toda a sessão.'
  },
  {
    pergunta: 'O que acontece de verdade numa sessão de TRG? Vou perder o controle?',
    resposta: 'Não. Você está consciente e presente durante toda a sessão. O que acontece é que eu conduzo um processo específico que cria condições para o sistema nervoso reorganizar respostas antigas. Não é algo que você "sofre", é algo que você atravessa com acompanhamento. A sensação mais comum que as mulheres relatam é de leveza ao sair.'
  }
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-bg-warm section-padding-lg">
      <div className="container-ultra max-w-2xl">
        <FadeIn>
          <p className="eyebrow-ultra text-secondary mb-4">Perguntas frequentes</p>
          <h2 className="font-display text-3xl md:text-4xl font-light italic text-text-main mb-16">
            Antes de você{' '}
            <span className="text-primary">dar o passo</span>
          </h2>
        </FadeIn>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <div className="border-b border-text-main/10">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                  aria-expanded={open === i}
                >
                  <span className="font-sans text-text-main font-light pr-8 group-hover:text-primary transition-colors">
                    {faq.pergunta}
                  </span>
                  <span
                    className={`text-primary transition-transform duration-300 flex-shrink-0 ${
                      open === i ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  >
                    ↓
                  </span>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-text-main/65 font-light leading-relaxed pb-6">
                        {faq.resposta}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
