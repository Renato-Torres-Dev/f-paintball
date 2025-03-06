"use client"

import Image from "next/image"
import Link from "next/link"
import { NavItem } from "./nav-item"
import { useState } from "react"
import { X, Menu } from "lucide-react";

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

export const Header = () => {
  const [ menuOpen, setMenuOpen ] = useState(false);

  return (
    <header className="absolute top-0 w-full z-10 h-24 flex items-center bg-zinc-950/75 px-4">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            width={58}
            height={49}
            src="/images/icon_f_paintball.png"
            alt="F-Paintball Club"
            className="ml-3"
          />
        </Link>
        
        {/* Menu desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map(item => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>

        {/* Menu mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Dropdown mobile */}
      {menuOpen && (
        <div className="absolute top-24 left-0 w-full bg-zinc-950 p-6 flex flex-col items-center space-y-4 md:hidden">
          {NAV_ITEMS.map(item => (
            <NavItem {...item} key={item.label} onClick={() => setMenuOpen(false)} />
          ))}
        </div>
      )}
    </header>
  )
}