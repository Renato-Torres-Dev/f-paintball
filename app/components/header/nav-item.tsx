'use client'

import { cn } from "@/app/lib/utils";
import Link from "next/link"
import { usePathname } from "next/navigation"

type NavItemProps = {
  label: string,
  href: string,
}

export const NavItem = ({ label, href }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link href={href} className={cn(
      "flex items-center gap-2 text-neutral-400 hover:text-red-900 font-medium font-kanit",
      isActive && "text-red-600 hover:text-red-600"
    )}>
      {label}
    </Link>
  )
}