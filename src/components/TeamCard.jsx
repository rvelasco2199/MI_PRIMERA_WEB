import { Link } from 'react-router-dom'

function TeamCard({ team }) {
  return (
    <article className="team-card">
      <h2>{team.category}</h2>
      <p>{team.name}</p>
      <p>Liga: {team.league}</p>
      <Link to={`/equipos/${team.id}`}>Ver equipo</Link>
    </article>
  )
}

export default TeamCard