import { Link, useParams } from 'react-router-dom'
import { teams } from '../data/teams'
import { leagues } from '../data/leagues'
import { fixtures } from '../data/fixtures'

function normalize(name = '') {
  return name
    .toUpperCase()
    .replace(/\(.*?\)/g, '')
    .replace(/[.\s]/g, '')
}

function formatDate(date) {
  return new Date(`${date}T00:00`).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function TeamCalendar() {
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
  const rounds = league
    ? fixtures
        .filter((item) => item.leagueId === league.id)
        .sort((a, b) => a.round - b.round)
    : []
  const ownTeam = league?.standings.find((row) => row.isOwnTeam)?.team

  return (
    <main>
      <Link to={`/equipos/${team.id}`}>← Volver al equipo</Link>

      <h1>Calendario - {team.category}</h1>
      <p>{team.league}</p>

      {rounds.length === 0 ? (
        <p>Todavía no hay calendario disponible.</p>
      ) : (
        rounds.map((round) => (
          <section key={round.round} className="round">
            <h2>
              Jornada {round.round} · {formatDate(round.date)}
            </h2>
            <ul className="fixture-list">
              {round.matches.map((match, index) => {
                const hasResult =
                  match.homeScore !== null && match.awayScore !== null
                   const isOwn =
                    normalize(match.home) === normalize(ownTeam) ||
                    normalize(match.away) === normalize(ownTeam)
                const info = [match.time, match.venue].filter(Boolean).join(' · ')

                return (
                  <li
                    key={index}
                    className={isOwn ? 'fixture own-fixture' : 'fixture'}
                  >
                    <span className="fixture-home">{match.home}</span>
                    <span className="fixture-score">
                      {hasResult ? `${match.homeScore} - ${match.awayScore}` : 'vs'}
                    </span>
                    <span className="fixture-away">{match.away}</span>
                    {info && <span className="fixture-info">{info}</span>}
                  </li>
                )
              })}
            </ul>
            {round.rest && <p className="fixture-rest">Descansa: {round.rest}</p>}
          </section>
        ))
      )}
    </main>
  )
}

export default TeamCalendar