import { Metadata } from "next";
import { HeroSection } from "./components/pages/home/hero-section";
import { BlogHome } from "./components/pages/home/blog";
import { MembrosHome } from "./components/pages/membros";

export const metadata: Metadata = {
  title: "F-Paintball | Family Paintball",
  icons: "/images/icons/icon_f_paintball.svg",
}

export default async function Home() {
  return (
    <>
      <HeroSection />
      <BlogHome />
      <MembrosHome />
    </>
  )
}
