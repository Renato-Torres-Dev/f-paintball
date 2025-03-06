import { Metadata } from "next";
import { Videos } from "../components/pages/videos";

export const metadata: Metadata = {
  title: "Lunatics E-Sports - Sobre",
  icons: "/images/icons/lunatics-logo.svg",
}

export default function Sobre () {
  return (
    <Videos />
  )
}