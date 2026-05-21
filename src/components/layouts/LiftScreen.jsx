import styles from './LiftScreen.module.css'

export default function LiftScreen() {
    return (
        <div className={styles.liftScreen}>
            <h1>AfterGlow Arcade</h1>
            <h2>Where the arcade never closes</h2>
            <div className={styles.holographicContainer}>
                <div className={styles.holographicCard}>
                    <button className={styles.startButton}>
                        <h3>PRESS START</h3>
                    </button>
                </div>
            </div>
        </div>
    )
}