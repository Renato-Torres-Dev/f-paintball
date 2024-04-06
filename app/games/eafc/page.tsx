import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lunatics E-Sports - EAFC",
  icons: "/images/icons/lunatics-logo.svg",
}

export default function EafcPage() {
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
          EA FC - ProClubs
        </h1>
        <div className="flex flex-col items-center bg-neutral-800 bg-opacity-50 rounded-lg mt-6">
          <Image 
            src={"/images/card-eafc.png"}
            alt="Logo EAFC"
            width={250}
            height={250}
          />
          <p className="text-neutral-400 text-center max-w-[920px] my-6 text-lg sm:text-md font-kanit">
            O EA FC é uma celebração do futebol virtual, oferecendo aos jogadores uma experiência 
            imersiva onde podem assumir o controle de seus times favoritos e competir em uma 
            variedade de modos emocionantes. No entanto, é no modo Pro Clubs que a verdadeira 
            magia do EA FC se revela.
          </p>
          <p className="text-neutral-400 text-center max-w-[920px] my-6 text-lg sm:text-md font-kanit">
            No Pro Clubs, os jogadores têm a oportunidade de criar e personalizar seu próprio 
            jogador virtual, desde sua aparência física até seu estilo de jogo preferido. Em 
            seguida, eles se juntam a outros jogadores para formar um time completo, onde cada 
            jogador controla apenas um único membro da equipe durante as partidas.
          </p>
          <p className="text-neutral-400 text-center max-w-[920px] my-6 text-lg sm:text-md font-kanit">
            O objetivo do Pro Clubs é simples: trabalhar em equipe para dominar os adversários 
            em uma busca pela glória. Cada jogador desempenha um papel vital no campo, seja como 
            goleiro, zagueiro, meio-campo ou atacante, e a comunicação e a cooperação são 
            essenciais para o sucesso.
          </p>
          <p className="text-neutral-400 text-center max-w-[920px] my-6 text-lg sm:text-md font-kanit">
            O Pro Clubs oferece uma experiência de jogo única, onde os jogadores podem desenvolver 
            seus personagens ao longo do tempo, melhorando suas habilidades e conquistando 
            reconhecimento dentro da comunidade. Com competições regulares, ligas online e torneios 
            emocionantes, o Pro Clubs proporciona aos jogadores uma jornada contínua de desafios e 
            conquistas.
          </p>
          <p className="text-neutral-400 text-center max-w-[920px] my-6 text-lg sm:text-md font-kanit">
            E o Lunatics E-Sports está novamente nesse cenário competitivo, para mostrar sua força, 
            e disputar os campeonatos brasileiros federados pelas duas maiores federações nacionais 
            no palco do ProClubs. Quer se juntar nessa jornada, fazer parte da história do nosso clube 
            e decolar na sua carreira de e-atleta? <strong>Entre em contato conosco pelo nosso Discord,
            e agende o seu teste com o nosso treinador.</strong>
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