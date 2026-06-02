import { useState } from 'react'
import ContributeRequestForm from './ContributeRequestForm'
import GameRequestForm from './GameRequestForm'
import RequestToggle from './RequestToggle'
import styles from './RequestForm.module.css'

export default function RequestForm() {
    const [ isContribute, setIsContribute ] = useState(false)

    return (
        <div className={styles.requestForm}>
            <RequestToggle isContribute={isContribute} setIsContribute={setIsContribute} />
            {isContribute ? <ContributeRequestForm /> : <GameRequestForm />}
        </div>
    )
}