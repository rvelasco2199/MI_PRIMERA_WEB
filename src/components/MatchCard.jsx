function formatDate(date) {
  return new Date(`${date}T00:00`).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function MatchCard({ match, teamName }) {
  const home = match.home ?? teamName
  const away = match.away ?? match.opponent
  const info = [match.time, match.venue].filter(Boolean).join(' · ')

  return (
    <article className="match-card">
      <h3>
        {home} vs {away}
      </h3>
      <p>
        {match.round ? `Jornada ${match.round} · ` : ''}
        {formatDate(match.date)}
      </p>
      {info && <p>{info}</p>}
      {match.played && (
        <p className="match-score">
          Resultado: {match.homeScore} - {match.awayScore}
        </p>
      )}
    </article>
  )
}

export default MatchCard