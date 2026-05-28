import { useNavigate } from 'react-router-dom'
import { capitalize } from '../../utils/strings'
import styles from './GameCard.module.css'
import { boardThumb, cardThumb, videoThumb } from '../../assets/thumbnails/index.js'

export default function GameCard({ game }) {
    const navigate = useNavigate()

    const setThumbnailPlaceholder = () => {
        switch (game.genre) {
            case 'board':
                return boardThumb
            case 'card':
                return cardThumb
            case 'video':
                return videoThumb
        }
    }

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
                {console.log(game.genre)}
                <img className={`${game.genre === 'card' ? styles.cardGenre : ''}`} src={`${game.thumbnail === '' ? setThumbnailPlaceholder() : game.thumbnail}`}/>
                <div className={styles.badges}>
                    <div className={`${styles.status} ${styles[game.status]}`}>
                        {`${game.status === 'soon' ? '🕙' : ''} ${capitalize(game.status)}`}
                    </div>
                    <div className={styles.playerCount}>
                        {`${game.players}p`}
                    </div>
                </div>
            </div>
            <div className={styles.detailNavContainer}>
                <div className={styles.detailsContainer}>
                    <div className={styles.info}>
                        <div className={styles.genre}>
                            {capitalize(game.genre)}
                        </div>
                        <div className={styles.difficulty}>
                            {renderDifficultyDots()}
                        </div>
                    </div>
                    <h4>{game.name}</h4>
                </div>
                <div className={styles.gameNav}>
                    <button className={styles.playRoute} onClick={() => navigate(`/${game.gameUrl}`)}>Play!</button>
                    <button className={styles.gameRoute} onClick={() => navigate(`${game.detailUrl}`)}>ℹ</button>
                </div>
            </div>
        </div>
    )
}