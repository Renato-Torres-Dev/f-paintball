import Image from "next/image"

export const Valorant = () => {
  return (
    <div className="h-[436px] flex flex-col bg-neutral-950 overflow-hidden border-2 hover:border-red-600 opacity-70 hover:opacity-100 transition-all group">
      <div className="w-full h-38 overflow-hidden">
        <Image 
          src={"/images/card-valorant.png"}
          alt="Valorant Logo"
          width={380}
          height={200}
          unoptimized
          className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"        
        />
      </div>

      <div className="flex-1 flex flex-col p-8">
        <strong className="font-kanit text-neutral-50/90 group-hover:text-red-600 transition-all">Valorant</strong>
        <p className="mt-2 text-neutral-400 line-clamp-4">
          Valorant mergulha os jogadores em um mundo de ação tática e tiroteios intensos. 
          Combinando habilidades únicas de agentes com mecânicas de tiro precisas, cada rodada 
          é um teste de estratégia, trabalho em equipe e reflexos rápidos. Prepare-se para 
          operações secretas, emboscadas táticas e momentos de pura emoção enquanto lutamos 
          para alcançar a vitória em Valorant.
        </p>
      </div>
    </div>
  )
}