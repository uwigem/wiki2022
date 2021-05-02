import { ContentSingularData } from "../../../_data/ContentSingularData";
import { Widget } from '../types';
import { ContentMapping, ExampleWidget } from '../../../ContentMapping/ContentMapping'
export type GridLayoutProps = {
    widgets: Widget[]
    gridLayout: number[][]
    columnSizes?: string[] | string
    rowSizes?: string[] | string
    rowGap?: string
    columnGap?: string
}

export const GridLayout: React.FC<ContentSingularData> = ({ grid_layout }: ContentSingularData) => {
    if (!grid_layout) {
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
        gridTemplateArea: formatArea(grid_layout?.gridLayout),
        rowGap: grid_layout.rowGap,
        columnGap: grid_layout.columnGap,
    }
    return (
        <div style={styles}>
            {grid_layout && grid_layout.widgets.map((widget, i) => {
                let Widget = ContentMapping[widget.type].widget
                return (
                    <Widget {...widget.content} key={i} style={{ gridArea: i }}/>
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
    let temp: string[] = data.map(row => `'${row.join(" ")}'`)
    return temp.join(" ")
}

export const EMPTY_GRID_LAYOUT_SETTINGS: GridLayoutProps = {
    widgets: [ExampleWidget],
    gridLayout: [[0]]
}

export default GridLayout