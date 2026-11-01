import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import TeamDetail from './pages/TeamDetail'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipos/:id" element={<TeamDetail />} />
      </Routes>
    </>
  )
}

export default App
