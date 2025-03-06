'use client'

import { cn } from "@/app/lib/utils";
import Link from "next/link"
import { usePathname } from "next/navigation"

type NavItemFooterProps = {
  label: string,
  href: string,
  onClick?: () => void;
}

export const NavItemFooter = ({ label, href }: NavItemFooterProps) => {
  return (
    <Link href={href} className={cn(
      "flex flex-col items-center gap-2 text-neutral-400 hover:text-lime-900 font-medium font-kanit",
    )}>
      {label}
    </Link>
  )
}