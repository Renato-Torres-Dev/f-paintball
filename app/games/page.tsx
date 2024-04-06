import { GameIntroduction } from "../components/pages/games/games-introduction";
import { GameList } from "../components/pages/games/games-list";

export default function Games () {
  return (
    <section className="bg-black">
      <GameIntroduction />
      <GameList />
    </section>
  )
}