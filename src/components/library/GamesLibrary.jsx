import { GAMES } from '../../lib/games'
import GameCard from './GameCard'
import styles from './GamesLibrary.module.css'

export default function GamesLibrary() {
    return (
        <div className={styles.libraryGrid}>
            {GAMES.map( game => 
                <GameCard key={game.id} game={game} />
            )}
        </div>
    )
}