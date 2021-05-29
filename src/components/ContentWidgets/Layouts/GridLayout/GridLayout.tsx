import React from 'react'
import { ContentSingularData } from "../../../_data/ContentSingularData";
import { Widget } from '../types';
import { ContentMapping } from '../../../ContentMapping/ContentMapping'
export type GridLayoutProps = {
    widgets: Widget[]
    gridLayout: number[][]
    columnSizes?: string[] | string
    rowSizes?: string[] | string
    rowGap?: string
    columnGap?: string
}

export const N = -1 // none/no widget

export const GridLayout: React.FC<ContentSingularData> = ({ grid_layout }: ContentSingularData) => {
    if (!grid_layout || !grid_layout.gridLayout) {
        return (
            <div>
                <h1>No Data for Grid Layout!</h1>
            </div>
        )
    }
    const styles = {
        display: "grid",
        gridTemplateColumns: grid_layout.columnSizes && formatRowsOrColumns(grid_layout.columnSizes),
        gridTemplateRows: grid_layout.rowSizes && formatRowsOrColumns(grid_layout.rowSizes),
        gridTemplateAreas: formatArea(grid_layout.gridLayout),
        rowGap: grid_layout.rowGap,
        columnGap: grid_layout.columnGap,
    }
    return (
        <div style={styles}>
            {grid_layout && grid_layout.widgets.map((widget, i) => {
                let Widget = ContentMapping[widget.type].widget
                return (
                    <div key={i} style={{ gridArea: translateNum(i) }} className="randomClass">
                        <Widget {...widget.content} />
                    </div>
                )
            })}
        </div>
    )
}

function formatRowsOrColumns(data: string[] | string) {
    if (typeof(data) === "string") {
        return data
    } else {
        return data.join(" ")
    }
}

function formatArea(data: number[][]) {
    let temp: string[] = data.map(row => `'${row.map(elem => translateNum(elem)).join(" ")}'`)
    return temp.join(" ")
}

function translateNum(num: number): string {
    if (num === N) {
        return "."
    } else {
        return (num + 10).toString(36)
    }
}

export default GridLayout