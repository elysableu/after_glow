import ContributeRequestForm from './ContributeRequestForm'
import GameRequestForm from './GameRequestForm'
import RequestToggle from './RequestToggle'
import styles from './RequestForm.module.css'

export default function RequestForm() {
    return (
        <div className={styles.requestForm}>
            <RequestToggle />
            <ContributeRequestForm />
            <GameRequestForm />
        </div>
    )
}