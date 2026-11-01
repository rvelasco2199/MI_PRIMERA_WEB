function StandingsTable({ standings, highlightTeam }) {
  const sorted = [...standings].sort((a, b) => b.points - a.points)

  return (
    <div className="table-wrapper">
      <table className="standings-table">
        <thead>
          <tr>
            <th>Pos.</th>
            <th>Equipo</th>
            <th>PJ</th>
            <th>G</th>
            <th>E</th>
            <th>P</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((row, index) => (
            <tr
              key={row.team}
              className={row.team === highlightTeam ? 'highlighted-row' : ''}
            >
              <td>{index + 1}</td>
              <td>{row.team}</td>
              <td>{row.played}</td>
              <td>{row.won}</td>
              <td>{row.drawn}</td>
              <td>{row.lost}</td>
              <td>{row.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StandingsTable