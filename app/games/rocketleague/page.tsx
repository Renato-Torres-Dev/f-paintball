import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lunatics E-Sports - Rocket League",
  icons: "/images/icons/lunatics-logo.svg",
}

export default function RocketLeaguePage() {
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
          Rocket League
        </h1>
        <div className="flex flex-col items-center bg-neutral-800 bg-opacity-50 rounded-lg mt-6">
          <Image 
            src={"/images/card-rocketleague.png"}
            alt="Logo EAFC"
            width={250}
            height={250}
          />
          <p className="text-neutral-400 text-center max-w-[920px] my-6 text-lg sm:text-md font-kanit">
            Rocket League é uma experiência única que combina a emoção do futebol com a intensidade 
            da velocidade e acrobacias veiculares. Em Rocket League, os jogadores controlam carros 
            equipados com foguetes em arenas futurísticas, competindo em partidas emocionantes que 
            desafiam a gravidade e a habilidade.
          </p>
          <p className="text-neutral-400 text-center max-w-[920px] my-6 text-lg sm:text-md font-kanit">
            Nos campos de Rocket League, a coordenação em equipe e as habilidades individuais são 
            essenciais. Os jogadores devem dominar a arte dos saltos, dribles e defesas para superar 
            seus oponentes e marcar gols espetaculares. Com mecânicas de jogo simples de aprender, 
            mas difíceis de dominar, Rocket League oferece uma experiência acessível para jogadores 
            de todos os níveis de habilidade.
          </p>
          <p className="text-neutral-400 text-center max-w-[920px] my-6 text-lg sm:text-md font-kanit">
            Além das partidas casuais e ranqueadas, Rocket League também é o lar de uma vibrante 
            cena competitiva. Torneios regulares, tanto online quanto presenciais, oferecem aos 
            jogadores a oportunidade de competir em níveis mais altos, enfrentando os melhores times 
            do mundo em busca da glória.
          </p>
          <p className="text-neutral-400 text-center max-w-[920px] my-6 text-lg sm:text-md font-kanit">
            Os torneios de Rocket League são um verdadeiro espetáculo, onde os jogadores exibem 
            suas habilidades em partidas cheias de ação, enquanto os espectadores vibram com cada 
            gol, defesa e jogada incrível. Com premiações generosas e reconhecimento internacional 
            em jogo, os torneios de Rocket League são o palco perfeito para os melhores jogadores 
            do mundo brilharem.
          </p>
          <p className="text-neutral-400 text-center max-w-[920px] my-6 text-lg sm:text-md font-kanit">
            Seja você ballchaser, técnico ou até mesmo freestyler, venha fazer parte do nosso time 
            nas arenas de Rocket League. Disputar torneios no modo 3x3, onde é preciso fazer rotas, 
            realizar comunicação com o time, e aprender as áreas on e off do campo, para levar os 
            títulos dos torneios que valem dinheiro. <strong>Entre em contato conosco pelo nosso Discord,
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