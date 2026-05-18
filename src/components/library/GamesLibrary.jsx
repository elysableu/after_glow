import { GAMES } from '../../lib/games'
import GameCard from './GameCard'

export default function GamesLibrary() {
    return (
        <div className="game-grid">
            {GAMES.map( game => 
                <GameCard key={game.id} game={game} />
            )}
        </div>
    )
}