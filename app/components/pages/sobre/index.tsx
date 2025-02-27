import NextLink from "next/link";
import { HiArrowNarrowLeft } from "react-icons/hi"

export const SobreIntroducao = () => {
  return (
    <section className="w-full sm:min-h-[600px] pb-10 sm:pb-24 py-24 px-6 bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center">
      <div className="items-center">
        <h1 className="text-center text-4xl allerta-stencil-title text-lime-700">
          Sobre F-Paintball
        </h1>
        <div className="flex flex-col items-center bg-neutral-800 bg-opacity-50 rounded-lg mt-6">
          <p className="text-neutral-400 text-center max-w-[640px] my-6 text-lg sm:text-md allerta-stencil">
            <span style={{fontWeight: 600}}>Texto ainda em construção! </span> 
            
          </p>
          <p className="text-neutral-400 text-center max-w-[640px] my-6 text-lg sm:text-md allerta-stencil">
            
          </p>
          <p className="text-neutral-400 text-center max-w-[640px] my-6 text-lg sm:text-md allerta-stencil">
            
          </p>
          <p className="text-neutral-400 text-center max-w-[640px] my-6 text-lg sm:text-md allerta-stencil">
            
          </p>
        </div>
        <NextLink href="/" className="flex items-center gap-2 mt-6 text-neutral-300 text-sm hover:text-lime-500 transition-colors">
          <HiArrowNarrowLeft size={20}/>
          Voltar para o início
        </NextLink>
      </div>
    </section>
  )
}