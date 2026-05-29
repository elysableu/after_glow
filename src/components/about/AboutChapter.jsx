import styles from './AboutChapter.module.css'

export default function AboutChapter({ title, blurb, thumbnail }) {

    return (
        <div className={styles.chapter}>
            <div className={styles.banner}>
                <img alt={title} src={thumbnail}/>
                <h3>{title}</h3>
                <div className={styles.divider}></div>
            </div>
            <p>{blurb}</p>
        </div>
    )
}