import { Metadata } from "next";
import { SobreIntroducao } from "../components/pages/sobre";

export const metadata: Metadata = {
  title: "Lunatics E-Sports - Sobre",
  icons: "/images/icons/lunatics-logo.svg",
}

export default function Sobre () {
  return (
    <SobreIntroducao />
  )
}