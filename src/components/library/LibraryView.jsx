import LiftScreen from '../layouts/LiftScreen'
import GamesLibrary from './GamesLibrary'
import styles from './LibraryView.module.css'


export default function LibraryView() {
    return (
        <div className={styles.libraryView}>
            <LiftScreen />
            <GamesLibrary />
        </div>
    )
}