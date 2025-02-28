'use client'

import { cn } from "@/app/lib/utils";
import Link from "next/link"
import { usePathname } from "next/navigation"

type NavItemProps = {
  label: string,
  href: string,
  onClick?: () => void;
}

export const NavItem = ({ label, href }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link href={href} className={cn(
      "flex items-center gap-2 text-neutral-400 hover:text-lime-900 font-medium font-kanit",
      isActive && "text-lime-600 hover:text-lime-300"
    )}>
      {label}
    </Link>
  )
}