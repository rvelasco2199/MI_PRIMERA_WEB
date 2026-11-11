import { teams } from '../data/teams'
import { getUpcomingMatches, getPlayedMatches } from '../utils/teamMatches'
import TeamCard from '../components/TeamCard'
import MatchCard from '../components/MatchCard'

function Home() {
  const nextMatches = teams
    .map((team) => ({ team, match: getUpcomingMatches(team)[0] }))
    .filter((item) => item.match)

  const lastMatches = teams
    .map((team) => ({ team, match: getPlayedMatches(team)[0] }))
    .filter((item) => item.match)

  return (
    <main>
      <h1>Club de Fútbol Sala</h1>

      <h2>Nuestros equipos</h2>
      <section className="team-list">
        {teams.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </section>

      <h2>Próximo partido</h2>
      <section className="match-list">
        {nextMatches.map(({ team, match }) => (
          <div key={team.id}>
            <p className="match-category">{team.category}</p>
            <MatchCard match={match} />
          </div>
        ))}
      </section>

      <h2>Último resultado</h2>
      <section className="match-list">
        {lastMatches.map(({ team, match }) => (
          <div key={team.id}>
            <p className="match-category">{team.category}</p>
            <MatchCard match={match} />
          </div>
        ))}
      </section>
    </main>
  )
}

export default Home