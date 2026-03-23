import { FadeIn } from '../App'

export default function VideoSection() {
  const videoId = '{YOUTUBE_VIDEO_ID_EDUARDA}'

  return (
    <section id="video" className="bg-bg-warm section-padding">
      <div className="container-ultra">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <p className="font-display text-lg md:text-xl italic text-text-main/70 mb-4">
              Nesse vídeo eu quero te mostrar por que tanta gente tenta mudar e volta ao mesmo lugar.
            </p>
            <p className="font-sans text-text-main/60 font-light mb-2">
              Não porque faltou esforço, mas porque existe um nível que a maioria das abordagens não alcança.
            </p>
            <p className="font-sans text-text-main/60 font-light mb-10">
              Assiste até o fim, porque o que eu falo aqui pode mudar como você entende a sua situação.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex justify-center">
              <div
                className="relative rounded-sm ring-1 ring-primary shadow-2xl overflow-hidden"
                style={{ width: '300px', paddingBottom: 'calc(300px * 16/9)', height: 0 }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="Vídeo de Eduarda Sampaio — TRG"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="font-display text-base italic text-primary text-center mt-8">
              Se o que você ouviu fez sentido, me conta mais sobre o que você está vivendo.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
