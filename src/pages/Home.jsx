import { teams } from '../data/teams'
import { matches } from '../data/matches'
import TeamCard from '../components/TeamCard'
import MatchCard from '../components/MatchCard'

function getTeamName(teamId) {
  const team = teams.find((item) => item.id === teamId)
  return team ? team.name : 'Equipo'
}

function Home() {
  const upcomingMatches = matches
    .filter((match) => !match.played)
    .sort((a, b) => a.date.localeCompare(b.date))

  const playedMatches = matches
    .filter((match) => match.played)
    .sort((a, b) => b.date.localeCompare(a.date))

  return (
    <main>
      <h1>Club de Fútbol Sala</h1>

      <h2>Nuestros equipos</h2>
      <section className="team-list">
        {teams.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </section>

      <h2>Próximos partidos</h2>
      <section className="match-list">
        {upcomingMatches.map((match) => (
          <MatchCard
            key={match.id}
            match={match}
            teamName={getTeamName(match.teamId)}
          />
        ))}
      </section>

      <h2>Últimos resultados</h2>
      <section className="match-list">
        {playedMatches.map((match) => (
          <MatchCard
            key={match.id}
            match={match}
            teamName={getTeamName(match.teamId)}
          />
        ))}
      </section>
    </main>
  )
}

export default Home