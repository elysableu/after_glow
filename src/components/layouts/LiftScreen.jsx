import styles from './LiftScreen.module.css'

export default function LiftScreen({lifted, onStart}) {
    return (
        <div className={`${styles.liftScreen} ${lifted ? styles.lifted : ''}`}>
            <h2>Welcome to</h2>
            <h1>AfterGlow Arcade</h1>
            <h2>Where the arcade never closes</h2>
            <div className={styles.holographicContainer}>
                <div className={styles.holographicCard}>
                    <button className={styles.startButton} onClick={onStart}>
                        <h3>PRESS START</h3>
                    </button>
                </div>
            </div>
        </div>
    )
}