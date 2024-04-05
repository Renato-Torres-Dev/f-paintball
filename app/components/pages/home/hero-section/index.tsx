'use client'

import { motion } from 'framer-motion'
import { TbBrandDiscord, TbBrandInstagram, TbBrandYoutube } from 'react-icons/tb'

const Mock_Contacts = [
  {
    url:"/",
    icon: <TbBrandInstagram />
  },
  {
    url:"/",
    icon: <TbBrandYoutube />
  },
  {
    url:"/",
    icon: <TbBrandDiscord />
  }
]

export const HeroSection = () => {
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-center pb-10 sm:pb-32 py-32 lg:pb-[170px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <motion.div 
          className="w-full lg:max-w-[530px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h2 className="text-4xl font-kanit mt-2 text-red-700">Lunatics E-Sports</h2>
          <p className="text-neutral-400 my-6 text-lg sm:text-md font-kanit">
            Onde a competição transcende as barreiras dos consoles e Pc's, e abraça
            uma variedade de jogos de e-sports. Aqui, mergulhamos na emoção de títulos
            como EAFC, Rocket League, Valorant e diversos outros jogos que ecoam a paixão
            pelo esporte virtual. Junte-se a nós enquanto exploramos uma jornada repleta
            de conquistas, determinação e alegria pelo jogo. Prepare-se para testemunhar
            o poder dos e-sports enquanto deixamos nossa marca em múltiplas arenas digitais.
            Bem-vindos ao Lunatics E-Sports, onde a vitória é apenas o começo!
          </p>
        </motion.div>
      </div>
      <div className='mt-6 mx-4 lg:mx-16 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row'>
        <div className='text-4xl text-neutral-600 flex items-center h-20 gap-3'>
          {Mock_Contacts.map((contact, index) => (
            <a
              href={contact.url}
              key={`contact=${index}`}
              target='_blank'
              className='hover:text-red-600 transition-colors'
            >
              {contact.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}