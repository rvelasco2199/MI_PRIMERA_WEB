import './App.css'
import { teams } from './data/teams'
import TeamCard from './components/TeamCard'

function App() {
  return (
    <main>
      <h1>Club de Fútbol Sala</h1>
      <h2>Nuestros equipos</h2>
      <section className="team-list">
        {teams.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </section>
    </main>
  )
}

export default App
