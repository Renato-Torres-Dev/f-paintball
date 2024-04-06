import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lunatics E-Sports - Valorant",
  icons: "/images/icons/lunatics-logo.svg",
}

export default function ValorantPage() {
  return(
    <section className="w-full sm:min-h-[600px] flex flex-col items-center justify-center relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          background: `url(/images/hero-bg-old.png) no-repeat center/cover`
        }}
      />
      <div className="items-center">
        <h1 className="text-center text-4xl font-kanit text-red-700">
          Valorant
        </h1>
        <div className="flex flex-col items-center bg-neutral-800 bg-opacity-50 rounded-lg mt-6">
          <Image 
            src={"/images/card-valorant.png"}
            alt="Logo EAFC"
            width={250}
            height={250}
          />
          <p className="text-neutral-400 text-center max-w-[920px] my-6 text-lg sm:text-md font-kanit">
            Valorant é um jogo de tiro tático desenvolvido pela Riot Games, conhecido por sua 
            abordagem estratégica e mecânicas únicas. Em Valorant, os jogadores assumem o papel 
            de agentes com habilidades especiais, enfrentando-se em equipes para completar objetivos 
            em mapas variados.
          </p>
          <p className="text-neutral-400 text-center max-w-[920px] my-6 text-lg sm:text-md font-kanit">
            A essência de Valorant reside na combinação de habilidades individuais e estratégia de 
            equipe. Cada agente possui habilidades únicas que podem influenciar o curso de uma 
            partida, desde curar aliados até criar obstáculos para os oponentes. A coordenação em 
            equipe e o conhecimento tático são fundamentais para o sucesso, tornando cada partida 
            uma experiência desafiadora e recompensadora.
          </p>
          <p className="text-neutral-400 text-center max-w-[920px] my-6 text-lg sm:text-md font-kanit">
            Além das partidas casuais e ranqueadas, Valorant é palco de uma cena competitiva 
            vibrante. Torneios de todos os níveis, desde locais até internacionais, oferecem aos 
            jogadores a oportunidade de competir em um cenário global, enfrentando os melhores 
            jogadores do mundo.
          </p>
          <p className="text-neutral-400 text-center max-w-[920px] my-6 text-lg sm:text-md font-kanit">
            Os torneios de Valorant são uma demonstração de habilidade e estratégia, onde equipes 
            competem em partidas intensas pela vitória. Os espectadores são cativados por jogadas 
            incríveis, reviravoltas emocionantes e momentos de pura tensão. Com premiações 
            substanciais e reconhecimento mundial em jogo, os torneios de Valorant são o sonho de 
            qualquer jogador competitivo.
          </p>
          <p className="text-neutral-400 text-center max-w-[920px] my-6 text-lg sm:text-md font-kanit">
            Quer entrar na arena e provar suas habilidades em um dos jogos de tiro mais 
            emocionantes da atualidade? Junte-se ao time dos Lunatics e torne-se parte da história 
            nos campos de batalha virtuais deste jogo eletrizante. <strong>Entre em contato conosco 
            pelo nosso Discord, e agende o seu teste com o nosso treinador.</strong>
          </p>
        </div>
      </div>
      <div className="mt-6 hover:text-red-700">
        <Link href="/games">
          Voltar para Games
        </Link>
      </div>
    </section>
  )
}