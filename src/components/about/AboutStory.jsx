import { ABOUT } from '../../lib/about'
import AboutChapter from './AboutChapter'
import styles from './AboutStory.module.css'

export default function AboutStory() {

    return (
        <div className={styles.story}>
            {Object.entries(ABOUT).map( ([ title, chapter ]) => 
                <AboutChapter key={title} title={title} chapter={chapter}/>
            )}
        </div>
    )
}