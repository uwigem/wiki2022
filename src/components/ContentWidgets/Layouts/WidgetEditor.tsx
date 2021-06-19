import React from 'react'
import { Widget } from "./types";
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import WidgetChooser from './WidgetChooser'
import { ContentMapping, WidgetEditorProps as EditorProps, WidgetTypes } from "../../ContentMapping/ContentMapping";
import { ContentSingularData } from "../../_data/ContentSingularData";
import Button from 'react-bootstrap/Button'

type WidgetEditorProps = {
    widget: Widget
    onWidgetChange: (widget: Widget) => void
    onRemove?: () => void
}
export default function WidgetEditor({ widget, onWidgetChange, onRemove }: WidgetEditorProps) {

    const handleWidgetChange = (widgetType: WidgetTypes) => {
        onWidgetChange({
            type: widgetType,
            content: {},
        })
    }

    return (
        <Accordion>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    {ContentMapping[widget.type].displayName}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <WidgetChooser widgetType={widget.type} handleWidgetChange={handleWidgetChange}/>
                        {renderWidgetEditor(widget, (widget: Widget) => onWidgetChange({ type: widget.type, content: widget.content}))}
                        {onRemove && <Button variant="outline-danger" onClick={onRemove}>Remove Widget</Button>}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

function renderWidgetEditor(
    widget: Widget,
    setContent: (content: Widget) => void): JSX.Element {
    let WidgetComponent = ContentMapping[widget.type].editor

    let props: EditorProps = {
        originalContent: widget.content,
        editedContent: widget.content,
        setEditedContentOnChange: (key: string, content: ContentSingularData) => {
            let newContent = {...widget.content, [key]: content}
            setContent({ type: widget.type, content: newContent })
        }
    }
    return <WidgetComponent {...props} />
}