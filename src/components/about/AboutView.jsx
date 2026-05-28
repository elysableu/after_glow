import styles from './AboutView.module.css'
import AboutStory from './AboutStory'

export default function AboutView() {
    return (
        <div className={styles.aboutView}>
        <h2>About AG</h2>
           <AboutStory />
        </div>
    )
}