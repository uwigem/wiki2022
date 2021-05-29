import { useState } from "react"
import Card from "react-bootstrap/Card"
import { N } from '../GridLayout'
import GridSquare from './GridSquare'
import styles from './GridSelector.module.css'
import Form from 'react-bootstrap/Form'

type GridSelectorType = {
    rows: number
    cols: number
    widgetNames: []
    onGridChange: (grid: number[][]) => void
    initialGrid?: number[][]
}

type point = [number, number] // [row, col]

export default function GridSelector({ rows, cols, widgetNames, onGridChange, initialGrid = [[]] }: GridSelectorType) {
    const hasInitialGrid: boolean = initialGrid.length === rows && initialGrid[0].length === cols
    const [grid, setGrid] = useState<number[][]>(hasInitialGrid ? initialGrid : genEmptyGrid(rows, cols))
    const [startedSelection, setStartSelection] = useState<point | undefined>()
    const [selectVal, setSelectVal] = useState<number>(N)
    const genClickFunc = (row: number, col: number) => {
        return () => handleClick([row, col], selectVal, setStartSelection, setGrid)
    }
    return (
        <Card>
            <Card.Body>
                <Card.Title>{rows} by {cols} Grid</Card.Title>
                <Form.Control as="select" onChange={e => setSelectVal(parseInt(e.target.value))}>
                    <option key={N} disabled selected value={N}>Select a Component</option>
                    {widgetNames.map((name, i) => <option value={i}>{name}</option>)}
                </Form.Control>
                <div className={styles.grid}>{genGridElements(grid, genClickFunc)}</div>
            </Card.Body>
        </Card>
    )
}

function genEmptyGrid(rows: number = 0, columns: number = 0): number[][] {
    if (rows === 0 || columns === 0) return [[]]
    const grid = []
    for (let row = 0; row < rows; row++) {
        const row = []
        for (let column = 0; column < columns; column++) {
            row.push(N)
        }
        grid.push(row)
    }
    return grid
}

function genGridElements(
    grid: number[][],
    clickFunc: (row: number, col: number) => () => void): JSX.Element[] {

    return grid.map((row, rowNum) => {
        return (
            <div>
                {row.map((val, colNum) => <GridSquare onClick={clickFunc(rowNum, colNum)} text={val} />)}
            </div>
        )
    })
}

function handleClick(
    clickPoint: point,
    value: number,
    setStartSelection: (old: (startPoint: point | undefined) => (point | undefined)) => void,
    setGrid: (old: (grid: number[][]) => number[][]) => void) {

    setStartSelection(startPoint => {
        if (startPoint) {
            setGrid(oldGrid => {
                if (validSelection(startPoint, clickPoint, oldGrid)) {
                    return addSelection(startPoint, clickPoint, value, oldGrid)
                } else {
                    return oldGrid
                }
            })
            return undefined
        } else {
            return clickPoint
        }
    })
}



function validSelection(startPoint: point, endPoint: point, grid: number[][]): boolean {
    const rowIncr = endPoint[0] > startPoint[0] ? 1 : -1
    const colIncr = endPoint[1] > startPoint[1] ? 1 : -1
    for (let row = startPoint[0]; row !== endPoint[0]; row += rowIncr) {
        for (let col = startPoint[1]; col !== endPoint[1]; col += colIncr) {
            if (grid[row][col] !== N) {
                return false
            }
        }
    }
    return true
}

function addSelection(startPoint: point, endPoint: point, value: number, grid: number[][]) {
    const newGrid = replaceSelection(value, grid)
    const rowIncr = endPoint[0] > startPoint[0] ? 1 : -1
    const colIncr = endPoint[1] > startPoint[1] ? 1 : -1
    for (let row = startPoint[0]; row !== endPoint[0]; row += rowIncr) {
        for (let col = startPoint[1]; col !== endPoint[1]; col += colIncr) {
            newGrid[row][col] = value
        }
    }
    return newGrid
}

function replaceSelection(selectVal: number, grid: number[][], replaceVal: number = N) {
    const newGrid = []
    for (const row of grid) {
        const newRow = []
        for (const value of row) {
            newRow.push(value === selectVal ? replaceVal : value)
        }
        newGrid.push(newRow)
    }
    return newGrid
}