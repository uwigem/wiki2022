import { ContentMapping, ExampleWidget, WidgetEditorProps } from "../../../ContentMapping/ContentMapping";
import GridLayout, { GridLayoutProps, N } from './GridLayout'
import { Widget } from "../types";
import React from 'react'
import GridSelector from "./GridSelector/GridSelector";

const GridLayoutEditor: React.FC<WidgetEditorProps> = ({ editedContent, setEditedContentOnChange }: WidgetEditorProps) => {
    let content: GridLayoutProps
    if (editedContent.grid_layout) {
        content = editedContent.grid_layout;
    } else {
        const EXAMPLE_GRID_PROPS = {
            widgets: [ExampleWidget, ExampleWidget],
            gridLayout: [
                [0, 0, 0, N],
                [N, 1, 1, 1],
            ],
        }
        content = EXAMPLE_GRID_PROPS
        setEditedContentOnChange("grid_layout", EXAMPLE_GRID_PROPS)
    }

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
            <GridSelector
                rows={content.gridLayout.length}
                cols={content.gridLayout[0].length}
                initialGrid={content.gridLayout}
                onGridChange={handleLayoutChange}
                widgetNames={content.widgets.map(widget => ContentMapping[widget.type].displayName)}
                />
            {/*editedContent.grid_layout?.widgets.map((widget, i) => {
                return (<></>)
            })*/}
        </article>
    )
}

export default GridLayoutEditor