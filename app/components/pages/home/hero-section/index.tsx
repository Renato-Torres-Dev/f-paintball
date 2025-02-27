'use client'

import { motion } from 'framer-motion'
import { TbBrandDiscord, TbBrandInstagram, TbBrandYoutube } from 'react-icons/tb'

const Mock_Contacts = [
  {
    url:"https://www.instagram.com/f_paintball_club/",
    icon: <TbBrandInstagram />
  },
  {
    url:"https://www.youtube.com/@F-Paintball",
    icon: <TbBrandYoutube />
  },
  {
    url:"https://discord.gg/SQEqHNZw",
    icon: <TbBrandDiscord />
  }
]

export const HeroSection = () => {
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-center pb-10 sm:pb-32 py-32 lg:pb-[170px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row-reverse">
        <motion.div 
          className="w-full lg:max-w-[530px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h2 className="text-4xl allerta-stencil-title mt-2 text-lime-600">F-Paintball Club</h2>
          <p className="text-neutral-400 my-6 text-lg sm:text-md font-kanit">
            Somos amantes desse esporte, chamado Paintball. Aqui você pode entrar 
            em contato conosco, ficar por dentro das notícias do mundo do Paintball, 
            ver vídeos das nossas partidas e partidas de outras equipes, e também, 
            ficar por dentro dos nossos campeonatos.
          </p>
          <p className="text-neutral-400 my-6 text-lg sm:text-md allerta-stencil">
          Sigam-nos nas redes sociais!
          </p>
        </motion.div>
      </div>
      <div className='mt-6 mx-4 lg:mx-16 lg:mt-10 flex justify-end px-[150px] sm:items-center sm:gap-5 flex-col sm:flex-row'>
        <div className='text-4xl text-neutral-600 flex items-center h-20 gap-3'>
          {Mock_Contacts.map((contact, index) => (
            <a
              href={contact.url}
              key={`contact=${index}`}
              target='_blank'
              className='hover:text-lime-600 transition-colors'
            >
              {contact.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}