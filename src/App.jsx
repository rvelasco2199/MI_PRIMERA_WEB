import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TeamDetail from './pages/TeamDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/equipos/:id" element={<TeamDetail />} />
    </Routes>
  )
}

export default App
