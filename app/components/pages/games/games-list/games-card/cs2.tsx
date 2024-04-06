import Image from "next/image"

export const CounterStrike = () => {
  return (
    <div className="h-[436px] flex flex-col bg-neutral-950 overflow-hidden border-2 hover:border-red-600 opacity-70 hover:opacity-100 transition-all group">
      <div className="w-full h-38 overflow-hidden">
        <Image 
          src={"/images/card-cs2.png"}
          alt="Counter-Strike 2 Logo"
          width={380}
          height={200}
          unoptimized
          className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"        
        />
      </div>

      <div className="flex-1 flex flex-col p-8">
        <strong className="font-kanit text-neutral-50/90 group-hover:text-red-600 transition-all">Counter-Strike 2</strong>
        <p className="mt-2 text-neutral-400 line-clamp-4">
          Counter-Strike 2 é um dos pilares dos e-sports, oferecendo uma experiência de tiro 
          em primeira pessoa dinâmica e altamente competitiva. Como membros de forças especiais 
          ou terroristas, os jogadores se enfrentam em confrontos estratégicos, onde a precisão, 
          o trabalho em equipe e o conhecimento do mapa são fundamentais para o sucesso. 
          Prepare-se para ação implacável, partidas de tirar o fôlego e momentos de pura tensão 
          enquanto nos aventuramos nos campos de batalha do Counter-Strike 2.
        </p>
      </div>
    </div>
  )
}