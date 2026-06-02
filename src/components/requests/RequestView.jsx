import RequestForm from './RequestForm'
import styles from './RequestView.module.css'

export default function RequestView() {
    return (
        <div className={styles.requestView}>
            <h3>Make a request of our devs</h3>
            <RequestForm />
        </div>
    )
}