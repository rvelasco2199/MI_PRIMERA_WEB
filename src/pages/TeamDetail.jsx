import { Link, useParams } from 'react-router-dom'
import { teams } from '../data/teams'
import { leagues } from '../data/leagues'
import { getUpcomingMatches, getPlayedMatches } from '../utils/teamMatches'
import MatchCard from '../components/MatchCard'
import StandingsTable from '../components/StandingsTable'

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

  const league = leagues.find((item) => item.name === team.league)
  const upcomingMatches = getUpcomingMatches(team).slice(0, 3)
  const playedMatches = getPlayedMatches(team).slice(0, 3)

  return (
    <main>
      <Link to="/">← Volver al inicio</Link>

      <h1>
        {team.name} - {team.category}
      </h1>
      <p>Liga: {team.league}</p>
      <p>
        <Link to={`/equipos/${team.id}/calendario`}>
          Ver calendario completo de la liga
        </Link>
      </p>

      <h2>Próximos partidos</h2>
      {upcomingMatches.length === 0 ? (
        <p>No hay partidos programados.</p>
      ) : (
        <section className="match-list">
          {upcomingMatches.map((match) => (
            <MatchCard key={match.round} match={match} />
          ))}
        </section>
      )}

      <h2>Últimos resultados</h2>
      {playedMatches.length === 0 ? (
        <p>Todavía no hay resultados.</p>
      ) : (
        <section className="match-list">
          {playedMatches.map((match) => (
            <MatchCard key={match.round} match={match} />
          ))}
        </section>
      )}

      <h2>Clasificación</h2>
      {league ? (
        <StandingsTable standings={league.standings} />
      ) : (
        <p>Todavía no hay clasificación disponible.</p>
      )}
    </main>
  )
}

export default TeamDetail