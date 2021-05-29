import styles from './GridSquare.module.css'

type SquareType = {
    text: number
    onClick: () => void
}
export default function Square({ text, onClick }: SquareType) {
    return (
        <button onClick={onClick}>{text}</button>
    )
}