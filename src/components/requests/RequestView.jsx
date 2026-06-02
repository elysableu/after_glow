import RequestForm from './RequestForm'
import styles from './RequestView.module.css'

export default function RequestView() {
    return (
        <div className={styles.requestView}>
            <RequestForm />
        </div>
    )
}