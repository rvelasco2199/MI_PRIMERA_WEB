import { Link } from 'react-router-dom'

function TeamCard({ team }) {
  return (
    <article className="team-card">
      <h2>{team.name}</h2>
      <p>Categoría: {team.category}</p>
      <p>Liga: {team.league}</p>
      <Link to={`/equipos/${team.id}`}>Ver equipo</Link>
    </article>
  )
}

export default TeamCard