import { useNavigate } from 'react-router-dom'
import { capitalize } from '../../utils/strings'
import styles from './GameCard.module.css'

export default function GameCard({ game }) {
    const navigate = useNavigate()

    const renderDifficultyDots = () => {
        const totalDots = 5
        const dots = Array.from({length: totalDots}, (_, i) => i < game.difficulty ? 'on' : 'off')

        return dots.map((dot, i) => (
            <div key={i} className={`${styles.diffDot} ${styles[dot]}`} />
        ))  
    }

    return (
        <div className={styles.gameCard}>
            <div className={styles.thumbnailContainer}>
                <img src={game.thumbnail}/>
                <div className={styles.badges}>
                    <div className={styles.status}>
                        {`${game.status === 'soon' ? '🕙' : ''} ${capitalize(game.status)}`}
                    </div>
                    <div className={styles.playerCount}>
                        {`${game.players}p`}
                    </div>
                </div>
            </div>
            <div className={styles.detailsContainer}>
                <div className={styles.info}>
                    <div className={styles.genre}>
                        {capitalize(game.genre)}
                    </div>
                    <div className={styles.difficulty}>
                        {renderDifficultyDots()}
                    </div>
                </div>
                <h3>{game.name}</h3>
            </div>
            <div className={styles.gameNav}>
                <button onClick={() => navigate(`/${game.detailUrl}`)}>Play!</button>
                <button onClick={() => navigate(`${game.gameUrl}`)}>ℹ</button>
            </div>
        </div>
    )
}