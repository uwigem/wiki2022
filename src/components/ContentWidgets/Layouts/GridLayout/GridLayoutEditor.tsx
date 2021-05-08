import { ExampleWidget, WidgetEditorProps } from "../../../ContentMapping/ContentMapping";
import GridLayout, { GridLayoutProps, EMPTY_GRID_LAYOUT_SETTINGS } from './GridLayout'
import { Widget } from "../types";
import React from 'react'

const GridLayoutEditor: React.FC<WidgetEditorProps> = ({ editedContent, setEditedContentOnChange }: WidgetEditorProps) => {
    let content = editedContent.grid_layout || EMPTY_GRID_LAYOUT_SETTINGS

    let genhandleWidgetChange = (i: number) => {
        return (widget: Widget) => {
            content.widgets[i] = widget
            setEditedContentOnChange("grid_layout", {...content})
        }
    }

    let handleWidgetNumberChange = (i: number) => {
        while(content.widgets.length < i)
            content.widgets.push(ExampleWidget)
        while(content.widgets.length > i)
            content.widgets.pop()
        setEditedContentOnChange("grid_layout", {...content})
    }

    let handleLayoutChange = (gridLayout: number[][]) => {
        setEditedContentOnChange("grid_layout", {...content, gridLayout})
    }

    let handleColumnGapChange = (columnGap: string) => {
        setEditedContentOnChange("grid_layout", {...content, columnGap})
    }

    let handleRowChange = (rowChange: string) => {
        setEditedContentOnChange("grid_layout", {...content, rowChange})
    }

    let handleColumnSizeChange = (columnSizes: string[] | string) => {
        setEditedContentOnChange("grid_layout", {...content, columnSizes})
    }

    let handleRowSizeChange = (rowSizes: string[] | string) => {
        setEditedContentOnChange("grid_layout", {...content, rowSizes})
    }

    return (
        <article>
            <GridLayout {...editedContent}/>
            <hr/>
            <h1>Editor goes here</h1>
            {/*editedContent.grid_layout?.widgets.map((widget, i) => {
                return (<></>)
            })*/}
        </article>
    )
}

export default GridLayoutEditor