import Image from "next/image"

export const EAFC = () => {
  return (
    <div className="h-[436px] flex flex-col bg-neutral-950 overflow-hidden border-2 hover:border-red-600 opacity-70 hover:opacity-100 transition-all group">
      <div className="w-full h-38 overflow-hidden">
        <Image 
          src={"/images/card-eafc.png"}
          alt="EA FC Logo"
          width={380}
          height={200}
          unoptimized
          className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"        
        />
      </div>

      <div className="flex-1 flex flex-col p-8">
        <strong className="font-kanit text-neutral-50/90 group-hover:text-red-600 transition-all">EA FC</strong>
        <p className="mt-2 text-neutral-400 line-clamp-4">
          EA FC oferece uma experiência de futebol virtual incomparável, trazendo à vida 
          os maiores times e jogadores do mundo. Com gráficos impressionantes e jogabilidade 
          realista, cada partida é uma batalha intensa pela supremacia nos gramados virtuais. 
          No EA FC, cada passe, cada chute e cada defesa importa, enquanto buscamos dominar 
          os campos e conquistar a glória.
        </p>
      </div>
    </div>
  )
}