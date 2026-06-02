import styles from './GameRequestForm.module.css'

export default function GameRequestForm() {
    return (
         <div className={styles.gameForm}>
            <form>
                {/* 
                    Information collected =>
                        - Name
                        - Email
                        - Game Type
                        - Game Name
                        - Optional comment
                */}
                <div className={styles.formGroup}>
                    <label className={styles.label}>Name: </label>
                    <input placeholder="Enter your name" id="name" className={styles.formInput} type="text"/>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Email: </label>
                    <input placeholder="Enter your email" id="email" className={styles.formInput} type="email"/>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Game Type: </label>
                    <input placeholder="Enter the game type" id="genre" className={styles.formInput} type="text"/>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Game Name: </label>
                    <input placeholder="Enter the name of the game" id="game" className={styles.formInput} type="text"/>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Message: </label>
                    <input placeholder="What else should I know" id="message" className={styles.formInput} type="text"/>
                </div>
                
            </form>
        </div>
    )
}