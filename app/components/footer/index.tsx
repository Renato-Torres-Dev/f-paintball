import Image from "next/image"
import Link from "next/link"
import { NavItemFooter } from "./nav-item-footer"

const NAV_ITEMS = [
  {
    label: "Início",
    href: "/",
  },
  {
    label: "Nossa História",
    href: "/sobre",
  },
  {
    label: "Membros",
    href: "/membros",
  },
  {
    label: "Vídeos",
    href: "/videos",
  },
  {
    label: "Conquistas",
    href: "/conquistas",
  },
  {
    label: "Notícias",
    href: "/noticias",
  },
]

export const Footer = () => {
  return (
    <footer className="h-[600px] lg:h-[300px] w-full flex flex-col lg:flex-row px-10 items-center justify-around bg-zinc-950/75">
      <div>
        <Link href="/">
            <Image
              width={250}
              height={250}
              src="/images/icon_f_paintball.png"
              alt="F-Paintball Club"
              className="ml-3"
            />
          </Link>
      </div>
      <div>
        <h1 className="allerta-stencil-title text-center text-md md:text-xl">F-PAINTBALL TEAM | CARUARU - PE | BRASIL</h1>
      </div>
      <div className="flex flex-col">
        <nav className="md:flex flex-col leading-8 md:leading-5 lg:leading-3 items-center gap-6">
          {NAV_ITEMS.map(item => (
            <NavItemFooter {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </footer>
  )
}