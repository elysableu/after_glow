import { Link } from 'react-router-dom'

import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            {/* <img /> <- add in logo img*/}
            <h2>AG</h2>
            <section className={styles.navContainer}>
                <nav className={styles.nav}>
                    <Link to="/about" className={styles.navLink}>About</Link>
                    <Link to="/" className={styles.navLink}>Game Library</Link>
                    <Link to="/" className={styles.navLink}>Request A Game</Link>
                </nav>
            </section>
        </header>
    )
}