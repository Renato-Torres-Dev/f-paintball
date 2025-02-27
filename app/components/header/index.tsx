import Image from "next/image"
import Link from "next/link"
import { NavItem } from "./nav-item"

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

export const Header = () => {
  return (
    <header className="absolute top-0 w-full z-10 h-24 flex items-center justify-center bg-zinc-950/75">
      <div className="container flex items-center justify-start">
        <Link href="/"/>
        <Image
          width={58}
          height={49}
          src="/images/icon_f_paintball.png"
          alt="F-Paintball Club"
          style={{
            marginLeft: 12,
          }}
        />
      </div>
      <div className="container flex items-center justify-between">
        <nav className="flex items-center gap-4 sm:gap-10">
          {NAV_ITEMS.map(item => (
            <NavItem {...item} key={item.label}/>
          ))}
        </nav>
      </div>
    </header>
  )
}