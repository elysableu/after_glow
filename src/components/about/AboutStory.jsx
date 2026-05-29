import { ABOUT } from '../../lib/about'
import AboutChapter from './AboutChapter'
import styles from './AboutStory.module.css'

export default function AboutStory() {

    return (
        <div className={styles.story}>
            {ABOUT.map( chapter => 
                <AboutChapter key={chapter.title} {...chapter}/>
            )}
        </div>
    )
}