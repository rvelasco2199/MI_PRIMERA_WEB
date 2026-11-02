import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import TeamDetail from './pages/TeamDetail'
import TeamCalendar from './pages/TeamCalendar'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipos/:id" element={<TeamDetail />} />
        <Route path="/equipos/:id/calendario" element={<TeamCalendar />} />
      </Routes>
    </>
  )
}

export default App
