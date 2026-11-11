import { leagues } from '../data/leagues'
import { fixtures } from '../data/fixtures'

function normalize(name = '') {
  return name
    .toUpperCase()
    .replace(/\(.*?\)/g, '')
    .replace(/[.\s]/g, '')
}

export function getTeamMatches(team) {
  const league = leagues.find((item) => item.name === team.league)
  if (!league) return []

  const ownTeam = league.standings.find((row) => row.isOwnTeam)?.team
  if (!ownTeam) return []

  const own = normalize(ownTeam)
  const result = []

  fixtures
    .filter((round) => round.leagueId === league.id)
    .forEach((round) => {
      round.matches.forEach((match) => {
        const isHome = normalize(match.home) === own
        const isAway = normalize(match.away) === own

        if (isHome || isAway) {
          result.push({
            ...match,
            round: round.round,
            date: round.date,
            isHome,
            opponent: isHome ? match.away : match.home,
            played: match.homeScore !== null && match.awayScore !== null,
          })
        }
      })
    })

  return result.sort((a, b) => a.date.localeCompare(b.date))
}

export function getUpcomingMatches(team) {
  return getTeamMatches(team).filter((match) => !match.played)
}

export function getPlayedMatches(team) {
  return getTeamMatches(team)
    .filter((match) => match.played)
    .reverse()
}