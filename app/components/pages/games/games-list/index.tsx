import Link from "next/link"
import { EAFC } from "./games-card/eafc"
import { RocketLeague } from "./games-card/rocketleague"
import { Valorant } from "./games-card/valorant"
import { CounterStrike } from "./games-card/cs2"

export const GameList = () => {
  return (
    <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6" id="game-list">
      <Link href={"/games/eafc"}>
        <EAFC />
      </Link>
      <Link href={"/games/rocketleague"}>
        <RocketLeague />
      </Link>
      <Link href={"/games/valorant"}>
        <Valorant />
      </Link>
      <Link href={"/games/cs2"}>
        <CounterStrike />
      </Link>
    </section>
  )
}