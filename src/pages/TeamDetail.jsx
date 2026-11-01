import { Link, useParams } from 'react-router-dom'
import { teams } from '../data/teams'
import { matches } from '../data/matches'
import MatchCard from '../components/MatchCard'

function TeamDetail() {
  const { id } = useParams()
  const team = teams.find((item) => item.id === Number(id))

  if (!team) {
    return (
      <main>
        <h1>Equipo no encontrado</h1>
        <Link to="/">Volver al inicio</Link>
      </main>
    )
  }

  const teamMatches = matches.filter((match) => match.teamId === team.id)

  const upcomingMatches = teamMatches
    .filter((match) => !match.played)
    .sort((a, b) => a.date.localeCompare(b.date))

  const playedMatches = teamMatches
    .filter((match) => match.played)
    .sort((a, b) => b.date.localeCompare(a.date))

  return (
    <main>
      <Link to="/">← Volver al inicio</Link>

      <h1>{team.name}</h1>
      <p>Categoría: {team.category}</p>
      <p>Liga: {team.league}</p>

      <h2>Próximos partidos</h2>
      {upcomingMatches.length === 0 ? (
        <p>No hay partidos programados.</p>
      ) : (
        <section className="match-list">
          {upcomingMatches.map((match) => (
            <MatchCard key={match.id} match={match} teamName={team.name} />
          ))}
        </section>
      )}

      <h2>Resultados</h2>
      {playedMatches.length === 0 ? (
        <p>Todavía no hay resultados.</p>
      ) : (
        <section className="match-list">
          {playedMatches.map((match) => (
            <MatchCard key={match.id} match={match} teamName={team.name} />
          ))}
        </section>
      )}
    </main>
  )
}

export default TeamDetail