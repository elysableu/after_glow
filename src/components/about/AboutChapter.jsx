import styles from './AboutChapter.module.css'

export default function AboutChapter({ title, chapter }) {
    return (
        <div className={styles.chapter}>
            <h3>{title}</h3>
            <p>{chapter}</p>
        </div>
    )
}