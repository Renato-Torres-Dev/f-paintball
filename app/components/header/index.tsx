import Image from "next/image"
import Link from "next/link"
import { NavItem } from "./nav-item"

const NAV_ITEMS = [
  {
    label: "Início",
    href: "/",
  },
  {
    label: "Sobre",
    href: "/sobre",
  },
  {
    label: "Games",
    href: "/games",
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
    <header className="absolute top-0 w-full z-10 h-24 flex items-center justify-center">
      <div className="container flex items-center justify-start">
        <Link href="/"/>
        <Image
          width={58}
          height={49}
          src="/images/logo.svg"
          alt="Logo Lunatics FC"
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