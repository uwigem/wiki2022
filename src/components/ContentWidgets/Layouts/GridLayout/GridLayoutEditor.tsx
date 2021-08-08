import { ContentMapping, ExampleWidget, WidgetEditorProps } from "../../../ContentMapping/ContentMapping";
import GridLayout, { GridLayoutProps, N } from './GridLayout'
import { Widget } from "../types";
import React from 'react'
import GridSelector from "./GridSelector/GridSelector";
import WidgetEditor from "../WidgetEditor";
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

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

    let handleRowSizeChange = (rowChange: string) => {
        setEditedContentOnChange("grid_layout", {...content, rowChange})
    }

    let handleColumnSizeChange = (columnSizes: string[] | string) => {
        setEditedContentOnChange("grid_layout", {...content, columnSizes})
    }

    let handleRowGapChange = (rowSizes: string[] | string) => {
        setEditedContentOnChange("grid_layout", {...content, rowSizes})
    }

    return (
        <article>
            <GridLayout {...editedContent}/>
            <hr/>
            <Form>
                <Form.Group>
                    <Form.Label>Num Widgets</Form.Label>
                    <Form.Control type="number" value={content.widgets.length} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleWidgetNumberChange(parseInt(e.target.value) || 1)}/>
                </Form.Group>
                <Form.Row>
                    <Col xs="auto">
                        <Form.Label>
                            Column Size
                        </Form.Label>
                        <Form.Control type="text" placeholder="1fr" onChange={e => handleColumnSizeChange(e.target.value)}/>
                    </Col>
                    <Col xs="auto">
                        <Form.Label>
                            Column Gap
                        </Form.Label>
                        <Form.Control type="text" placeholder="0px" onChange={e => handleColumnGapChange(e.target.value)}/>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col xs="auto">
                        <Form.Label>
                            Row Size
                        </Form.Label>
                        <Form.Control type="text" placeholder="1fr" onChange={e => handleRowSizeChange(e.target.value)}/>
                    </Col>
                    <Col xs="auto">
                        <Form.Label>
                            Row Gap
                        </Form.Label>
                        <Form.Control type="text" placeholder="0px" onChange={e => handleRowGapChange(e.target.value)}/>
                    </Col>
                </Form.Row>
            </Form>
            <GridSelector
                rows={content.gridLayout.length}
                cols={content.gridLayout[0].length}
                grid={content.gridLayout}
                onGridChange={handleLayoutChange}
                widgetNames={content.widgets.map(widget => ContentMapping[widget.type].displayName)}
                />
            {content.widgets.map((widget, i) => {
                return <WidgetEditor key={i} widget={widget} onWidgetChange={genhandleWidgetChange(i)} />
            })}
        </article>
    )
}

export default GridLayoutEditor