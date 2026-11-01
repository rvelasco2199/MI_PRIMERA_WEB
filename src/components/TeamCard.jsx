function TeamCard({ team }) {
  return (
    <article className="team-card">
      <h2>{team.name}</h2>
      <p>Categoría: {team.category}</p>
      <p>Liga: {team.league}</p>
    </article>
  )
}

export default TeamCard