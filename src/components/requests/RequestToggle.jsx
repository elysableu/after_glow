import styles from './RequestToggle.module.css'

export default function RequestToggle({isContribute, setIsContribute}) {
    function handleToggle(e) {
        setIsContribute(e.target.checked)
    }

    return (
        <div className={styles.requestToggle}>
            <label className={styles.switch}>
                <input 
                    className={styles.checkbox} 
                    type="checkbox" 
                    checked={isContribute}
                    onChange={handleToggle}
                    />
                <span className={styles.toggle}>
                    <span className={styles.left} >
                        <span className={styles.dot}></span>
                    </span>
                    <span className={styles.right}>
                        <span className={styles.dot}></span>
                    </span>
                </span>
            </label>
        </div>
    )
}