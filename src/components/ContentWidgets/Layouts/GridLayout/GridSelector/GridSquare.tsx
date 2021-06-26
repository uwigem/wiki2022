import React from 'react'
import styles from './GridSquare.module.css'
import { N } from '../GridLayout'
type SquareType = {
    text: number
    onClick: () => void
}
export default function Square({ text, onClick }: SquareType) {
    return (
        <div className={styles.button} onClick={onClick}>
            <p>{text !== N && text}</p>
        </div>
    )
}