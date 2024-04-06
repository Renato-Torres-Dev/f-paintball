import { Metadata } from "next";
import { GameIntroduction } from "../components/pages/games/games-introduction";
import { GameList } from "../components/pages/games/games-list";

export const metadata: Metadata = {
  title: "Lunatics E-Sports - Games",
  icons: "/images/icons/lunatics-logo.svg",
}

export default function Games () {
  return (
    <section className="bg-black">
      <GameIntroduction />
      <GameList />
    </section>
  )
}