import { Link } from 'react-router-dom'

import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            {/* <img /> <- add in logo img*/}
            <h2>AG</h2>
            <section className={styles.navContainer}>
                <nav className={styles.nav}>
                    <Link to="/" className={styles.navLink}>Home</Link>
                    <Link to="/" className={styles.navLink}>About</Link>
                    <Link to="/" className={styles.navLink}>Games Library</Link>
                </nav>
            </section>
        </header>
    )
}