import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lunatics E-Sports - CS 2",
  icons: "/images/icons/lunatics-logo.svg",
}

export default function CounterStrikePage() {
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
          Counter-Strike 2
        </h1>
        <div className="flex flex-col items-center bg-neutral-800 bg-opacity-50 rounded-lg mt-6">
          <Image 
            src={"/images/card-cs2.png"}
            alt="Logo EAFC"
            width={250}
            height={250}
          />
          <p className="text-neutral-400 text-center max-w-[920px] my-6 text-lg sm:text-md font-kanit">
            Counter-Strike 2 é a continuação de um dos jogos mais icônicos e influentes da história 
            dos e-sports. Neste jogo de tiro em primeira pessoa, os jogadores são divididos em 
            equipes de terroristas e contra-terroristas, cada uma com objetivos específicos em 
            mapas variados.
          </p>
          <p className="text-neutral-400 text-center max-w-[920px] my-6 text-lg sm:text-md font-kanit">
            A essência de Counter-Strike 2 reside na precisão, trabalho em equipe e estratégia. 
            Cada arma exige habilidade e prática para dominar, e cada rodada é uma batalha tática 
            pela vantagem sobre o inimigo. Os mapas são projetados para promover a jogabilidade 
            estratégica, incentivando os jogadores a explorar diferentes abordagens para alcançar 
            a vitória.
          </p>
          <p className="text-neutral-400 text-center max-w-[920px] my-6 text-lg sm:text-md font-kanit">
            Counter-Strike 2 é mais do que apenas um jogo, é um fenômeno cultural que moldou o 
            cenário dos e-sports. Desde suas origens humildes como um mod de Half-Life até se 
            tornar um dos jogos mais populares do mundo, Counter-Strike 2 continua a atrair 
            jogadores e espectadores com sua jogabilidade intensa e competitiva.
          </p>
          <p className="text-neutral-400 text-center max-w-[920px] my-6 text-lg sm:text-md font-kanit">
            Os campeonatos de Counter-Strike 2 são alguns dos eventos mais emocionantes do 
            calendário dos e-sports. Desde torneios regionais até competições internacionais 
            de grande escala, os melhores jogadores do mundo se reúnem para competir por prestígio, 
            reconhecimento e prêmios em dinheiro. Cada campeonato é uma celebração da habilidade, 
            estratégia e paixão pelo jogo, proporcionando momentos emocionantes e inesquecíveis 
            para jogadores e espectadores.
          </p>
          <p className="text-neutral-400 text-center max-w-[920px] my-6 text-lg sm:text-md font-kanit">
            Entre na linha de frente e prove suas habilidades em um dos jogos 
            de tiro mais competitivos já criados. Junte-se ao esquadrão do Lunatics e 
            faça parte da história nos campos de batalha virtuais deste clássico dos e-sports. 
            <strong> Entre em contato conosco pelo nosso Discord, e agende o seu teste com o 
            nosso treinador.</strong>
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