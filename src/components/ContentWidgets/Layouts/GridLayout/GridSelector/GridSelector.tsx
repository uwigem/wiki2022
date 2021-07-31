import React, { useState } from "react"
import Card from "react-bootstrap/Card"
import { N } from '../GridLayout'
import GridSquare from './GridSquare'
import styles from './GridSelector.module.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'

type GridSelectorType = {
    rows: number
    cols: number
    widgetNames: string[]
    onGridChange: (grid: number[][]) => void
    grid: number[][]
}

type point = [number, number] // [row, col]

export default function GridSelector({ rows, cols, widgetNames, onGridChange, grid = [[]] }: GridSelectorType) {
    const hasInitialGrid: boolean = grid.length === rows && grid[0].length === cols
    if (!hasInitialGrid) {
        onGridChange(genEmptyGrid(rows, cols))
    }
    const [startedSelection, setStartSelection] = useState<point | undefined>()
    const [selectVal, setSelectVal] = useState<number>(0)
    const genClickFunc = (row: number, col: number) => {
        return () => handleClick([row, col], selectVal, setStartSelection, grid, onGridChange)
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title>{rows} by {cols} Grid</Card.Title>
                <InputGroup>
                    <Form.Control as="select" onChange={e => {
                        const num = parseInt(e.target.value)
                        setSelectVal(num === 0 || num ? num : N)
                    }}>
                        {widgetNames.map((name, i) => <option key={i} value={i}>{i}: {name}</option>)}
                    </Form.Control>
                    <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={() => onGridChange(replaceSelection(selectVal, grid, N))}>Clear Current</Button>
                        <Button variant="outline-secondary" onClick={() => onGridChange(genEmptyGrid(rows, cols))}>Clear Grid</Button>
                    </InputGroup.Append>
                </InputGroup>
                <div className={styles.grid}>{genGridElements(grid, genClickFunc)}</div>
                <p>{startedSelection ? "Started Selection" : "Not started selection"}</p>
                <div className={styles.colRowEditor}>
                    <p>Columns</p>
                    <Button variant="outline-danger" onClick={() => onGridChange(changeCols(cols - 1, grid))}>-</Button>
                    <Button variant="outline-success" onClick={() => onGridChange(changeCols(cols + 1, grid))}>+</Button>
                    <p>Rows</p>
                    <Button variant="outline-danger" onClick={() => onGridChange(changeRows(rows - 1, grid))}>-</Button>
                    <Button variant="outline-success" onClick={() => onGridChange(changeRows(rows + 1, grid))}>+</Button>
                </div>
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
            <div key={rowNum} className={styles.row}>
                {row.map((val, colNum) => <GridSquare key={colNum} onClick={clickFunc(rowNum, colNum)} text={val} />)}
            </div>
        )
    })
}

function handleClick(
    clickPoint: point,
    value: number,
    setStartSelection: (old: (startPoint: point | undefined) => (point | undefined)) => void,
    grid: number[][],
    onGridChange: (grid: number[][]) => void) {

    setStartSelection(startPoint => {
        if (startPoint) {
            if (validSelection(startPoint, clickPoint, grid)) {
                onGridChange(addSelection(startPoint, clickPoint, value, grid))
            }
            return undefined
        } else {
            return clickPoint
        }
    })
}



function validSelection(startPoint: point, endPoint: point, grid: number[][]): boolean {
    const rowIncr = endPoint[0] > startPoint[0] ? 1 : -1
    const colIncr = endPoint[1] > startPoint[1] ? 1 : -1
    for (let row = startPoint[0]; row !== endPoint[0] + rowIncr; row += rowIncr) {
        for (let col = startPoint[1]; col !== endPoint[1] + colIncr; col += colIncr) {
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
    for (let row = startPoint[0]; row !== endPoint[0] + rowIncr; row += rowIncr) {
        for (let col = startPoint[1]; col !== endPoint[1] + colIncr; col += colIncr) {
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

function copyGrid(grid: number[][]) {
    return replaceSelection(N, grid, N)
}

function changeRows(rows: number, grid: number[][]) {
    let newGrid = copyGrid(grid)
    while (newGrid.length > rows) {
        newGrid.pop()
    }

    while (newGrid.length < rows) {
        newGrid.push(grid[0].map(e => N))
    }

    return newGrid
}

function changeCols(cols: number, grid: number[][]) {
    console.log("Change Cols to", cols)
    let newGrid = copyGrid(grid)
    newGrid.forEach(row => {
        while (row.length > cols) {
            row.pop()
        }

        while (row.length < cols) {
            row.push(N)
        }
    })

    console.log("changed Cols")
    console.log(newGrid)
    return newGrid
}