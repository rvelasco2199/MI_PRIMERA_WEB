import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="site-header">
      <div className="site-header-content">
        <Link to="/" className="site-logo">
          Club de Fútbol Sala
        </Link>
        <nav>
          <Link to="/">Inicio</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header