function formatDate(date) {
  return new Date(`${date}T00:00`).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function MatchCard({ match, teamName }) {
  return (
    <article className="match-card">
      <h3>
        {teamName} vs {match.opponent}
      </h3>
      <p>
        {formatDate(match.date)} · {match.time}
      </p>
      <p>{match.venue}</p>
      {match.played && (
        <p className="match-score">
          Resultado: {match.homeScore} - {match.awayScore}
        </p>
      )}
    </article>
  )
}

export default MatchCard