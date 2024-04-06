import Image from "next/image"

export const RocketLeague = () => {
  return (
    <div className="h-[436px] flex flex-col bg-neutral-950 overflow-hidden border-2 hover:border-red-600 opacity-70 hover:opacity-100 transition-all group">
      <div className="w-full h-38 overflow-hidden">
        <Image 
          src={"/images/card-rocketleague.png"}
          alt="Rocket League Logo"
          width={380}
          height={200}
          unoptimized
          className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"        
        />
      </div>

      <div className="flex-1 flex flex-col p-8">
        <strong className="font-kanit text-neutral-50/90 group-hover:text-red-600 transition-all">Rocket League</strong>
        <p className="mt-2 text-neutral-400 line-clamp-4">
          Rocket League é uma fusão emocionante entre futebol e veículos, onde jogadores 
          competem em arenas futurísticas controlando carros equipados com propulsores. 
          Cada partida é uma experiência cheia de adrenalina, onde a coordenação em equipe 
          e as habilidades individuais são essenciais para a vitória. Prepare-se para saltos 
          espetaculares, dribles incríveis e jogadas emocionantes enquanto enfrentamos os melhores times no campo de Rocket League.
        </p>
      </div>
    </div>
  )
}