import NextLink from "next/link";
import { HiArrowNarrowLeft } from "react-icons/hi"

export const SobreIntroducao = () => {
  return (
    <section className="w-full sm:min-h-[600px] pb-10 sm:pb-24 py-24 px-6 bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center">
      <div className="items-center">
        <h1 className="text-center text-4xl font-kanit text-red-700">
          Sobre Lunatics E-Sports
        </h1>
        <div className="flex flex-col items-center bg-neutral-800 bg-opacity-50 rounded-lg mt-6">
          <p className="text-neutral-400 text-center max-w-[640px] my-6 text-lg sm:text-md font-kanit">
            <span style={{fontWeight: 600}}>No Lunatics E-Sports, não somos apenas um time. </span> 
            Somos uma comunidade unida por uma paixão compartilhada pelos e-sports. Fundado 
            por um grupo de jogadores visionários, nosso time é uma fusão de talento, determinação
            e camaradagem. Cada membro traz consigo uma expertise única, contribuindo para a 
            diversidade e força coletiva do nosso grupo.
          </p>
          <p className="text-neutral-400 text-center max-w-[640px] my-6 text-lg sm:text-md font-kanit">
            <span style={{fontWeight: 600}}>Nossa equipe é mais do que apenas competição.</span> Somos uma família. Nos 
            bastidores, trabalhamos arduamente para apoiar uns aos outros, celebrando nossas 
            vitórias e aprendendo com nossos desafios. Juntos, enfrentamos adversidades e celebramos 
            conquistas, formando laços que vão além do mundo virtual.
          </p>
          <p className="text-neutral-400 text-center max-w-[640px] my-6 text-lg sm:text-md font-kanit">
            <span style={{fontWeight: 600}}>No Lunatics E-Sports, a excelência é uma jornada contínua.</span> Estamos constantemente 
            refinando nossas habilidades, explorando novas estratégias e adaptando-nos às mudanças 
            no cenário dos e-sports. Nossa mentalidade é de crescimento constante, buscando 
            sempre alcançar novos patamares de sucesso e inspirar outros ao longo do caminho.
          </p>
          <p className="text-neutral-400 text-center max-w-[640px] my-6 text-lg sm:text-md font-kanit">
            <span style={{fontWeight: 600}}>No Lunatics E-Sports, nossa história é marcada por nossa dedicação, nossa camaradagem 
            e nossa paixão pelo jogo.</span> Estamos determinados a deixar nossa marca no mundo dos e-sports 
            e a inspirar outros a perseguirem seus sonhos, não importa quão impossíveis possam parecer. Juntos, 
            somos mais do que apenas um time, somos uma força a ser reconhecida nos e-sports.
          </p>
        </div>
        <NextLink href="/" className="flex items-center gap-2 mt-6 text-neutral-300 text-sm hover:text-red-500 transition-colors">
          <HiArrowNarrowLeft size={20}/>
          Voltar para o início
        </NextLink>
      </div>
    </section>
  )
}