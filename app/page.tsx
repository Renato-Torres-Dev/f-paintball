import { Metadata } from "next";
import { HeroSection } from "./components/pages/home/hero-section";

export const metadata: Metadata = {
  title: "Lunatics E-Sports",
  icons: "/images/icons/lunatics-logo.svg",
}

export default async function Home() {
  return (
    <>
      <HeroSection />
    </>
  )
}
