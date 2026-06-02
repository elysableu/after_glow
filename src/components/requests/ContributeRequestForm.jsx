import styles from './ContributeRequestForm.module.css'

export default function ContributeRequestForm() {
    return (
        <div className={styles.contributeForm}>
            <h3>Player 2, press start</h3>
            <p>We're a small team and the arcade is growing. If you want to build games, write docs, or just get involved — this is where you start. All skill levels welcome.</p>
            {/* 
                Information collected =>
                    - Name
                    - Email
                    - GitHub Profile Link
                    - Reason for joining/collborating 
                    - Experience level => all welcome to allow me to monitor newer contributors
                    - Publication alias/name
                    - Optional additional message
            */}
            <form>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Name: </label>
                    <input placeholder="Enter your name" id="name" className={styles.formInput} type="text"/>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Email: </label>
                    <input placeholder="Enter your email" id="email" className={styles.formInput} type="email"/>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>GitHub Username: </label>
                    <input placeholder="Enter your GitHub username" id="email" className={styles.formInput} type="email"/>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Reason for contributing: </label>
                    <input placeholder="Enter your message" id="email" className={styles.formInput} type="email"/>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Skill Level: </label>
                    <input placeholder="Enter your skill level" id="genre" className={styles.formInput} type="text"/>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Publication Alias: </label>
                    <input placeholder="Enter your alias" id="game" className={styles.formInput} type="text"/>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Message: </label>
                    <input placeholder="What else should I know" id="message" className={styles.formInput} type="text"/>
                </div>
            </form>
        </div>
    )
}