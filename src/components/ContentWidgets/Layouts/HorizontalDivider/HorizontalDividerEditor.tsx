import React, { useEffect, useState } from "react";
import { ExampleWidget, WidgetEditorProps } from "../../../ContentMapping/ContentMapping";
import { HorizontalDivider } from "./HorizontalDivider";
import { ContentMapping } from '../../../ContentMapping/ContentMapping'
import { ContentSingularData } from "../../../_data/ContentSingularData";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { Widget } from "../types";
import WidgetChooser from "../WidgetChooser";
import Accordion from "react-bootstrap/Accordion";
import Card from 'react-bootstrap/Card';

export const HorizontalDividerEditor: React.FC<WidgetEditorProps> = ({ originalContent, editedContent, setEditedContentOnChange }: WidgetEditorProps) => {

    if (!editedContent.horizontal_divider && originalContent.horizontal_divider) {
        setEditedContentOnChange("horizontal_divider", originalContent.horizontal_divider)
    }

    let [leftWidget, setLeftWidget] = useState<Widget>(editedContent.horizontal_divider ? editedContent.horizontal_divider.left : ExampleWidget)
    let [rightWidget, setRightWidget] = useState<Widget>(editedContent.horizontal_divider ? editedContent.horizontal_divider.right : ExampleWidget)
    let [percent, setPercent] = useState<number>(editedContent.horizontal_divider ? editedContent.horizontal_divider.percent : 50)
    let [expanded, setExpanded] = useState<string | false>("panel1")
    useEffect(() => {
        setEditedContentOnChange("horizontal_divider", {
            left: leftWidget,
            right: rightWidget,
            percent: percent
        })
    }, [leftWidget, rightWidget, percent])

    const handleAccordionChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        console.log(`Accordion: ${panel}`);
        setExpanded(isExpanded ? panel : false)
    }

    return (
        <>
            <HorizontalDivider {...editedContent} />
            <hr/>
            <Typography gutterBottom>Left Section Width Percent {percent}%</Typography>
            <TextField label={`Percent ${percent}%`} type={"number"} variant={"outlined"} onChange={e => setPercent(Number(e.target.value))}/>
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Left Widget
                    </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <WidgetChooser
                                widgetType={leftWidget.type}
                                handleWidgetChange={widgetType => setLeftWidget(old => ({ type: widgetType, content: {}}))}/>
                            {leftWidget && renderWidgetEditor(leftWidget, setLeftWidget)}
                            </Card.Body>
                        </Accordion.Collapse>
                </Card>
            </Accordion>
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        Right Widget
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <WidgetChooser
                            widgetType={rightWidget.type}
                            handleWidgetChange={widgetType => setRightWidget(old => ({ type: widgetType, content: {}}))}/>
                            {rightWidget && renderWidgetEditor(rightWidget, setRightWidget)}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </>
    )
}

function renderWidgetEditor(
        widget: Widget,
        setContent: (content: Widget) => void): JSX.Element {
    let WidgetComponent = ContentMapping[widget.type].editor

    let props: WidgetEditorProps = {
        originalContent: widget.content,
        editedContent: widget.content,
        setEditedContentOnChange: (key: string, content: ContentSingularData) => {
            let newContent = {...widget.content, [key]: content}
            setContent({ type: widget.type, content: newContent })
        }
    }
    return <WidgetComponent {...props} />
}