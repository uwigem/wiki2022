import React, { useEffect, useState } from "react";
import { ExampleWidget, WidgetEditorProps } from "../../ContentMapping/ContentMapping";
import { HorizontalDivider } from "./HorizontalDivider";
import { ContentMapping } from '../../ContentMapping/ContentMapping'
import { ContentSingularData } from "../../_data/ContentSingularData";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { Widget } from "./types";
import Box from "@material-ui/core/Box/Box";
import WidgetChooser from "./WidgetChooser";
import { faOldRepublic } from "@fortawesome/free-brands-svg-icons";

export const HorizontalDividerEditor: React.FC<WidgetEditorProps> = ({ originalContent, editedContent, setEditedContentOnChange }: WidgetEditorProps) => {
    
    if (!editedContent.horizontal_divider && originalContent.horizontal_divider) {
        setEditedContentOnChange("horizontal_divider", originalContent.horizontal_divider)
    }

    let [leftWidget, setLeftWidget] = useState<Widget>(editedContent.horizontal_divider ? editedContent.horizontal_divider.left : ExampleWidget)
    let [rightWidget, setRightWidget] = useState<Widget>(editedContent.horizontal_divider ? editedContent.horizontal_divider.right : ExampleWidget)
    let [percent, setPercent] = useState<number>(editedContent.horizontal_divider ? editedContent.horizontal_divider.percent : 50)

    useEffect(() => {
        setEditedContentOnChange("horizontal_divider", {
            left: leftWidget,
            right: rightWidget,
            percent: percent
        })
    }, [leftWidget, rightWidget, percent])


    return (
        <>
            <HorizontalDivider {...editedContent} />
            <hr/>
            <Box display="flex" flexDirection="row" justifyContent="space-around">
                <div>
                    <Typography gutterBottom>Left Widget</Typography>
                    <WidgetChooser
                        widgetType={leftWidget.type} 
                        handleWidgetChange={widgetType => setLeftWidget(old => ({ type: widgetType, content: {}}))}/>
                </div>
                <div>
                    <Typography gutterBottom>Right Widget</Typography>
                    <WidgetChooser
                        widgetType={rightWidget.type} 
                        handleWidgetChange={widgetType => setRightWidget(old => ({ type: widgetType, content: {}}))}/>
                </div>
                <div>
                    <Typography gutterBottom>Left Section Width Percent {percent}%</Typography>
                    <TextField label={`Percent ${percent}%`} type={"number"} variant={"outlined"} onChange={e => setPercent(Number(e.target.value))}/>
                </div>
            </Box>
            {leftWidget && renderWidgetEditor(leftWidget, setLeftWidget)}
            {rightWidget && renderWidgetEditor(rightWidget, setRightWidget)}
        </>
    )
}

function renderWidgetEditor(
        widget: Widget,
        setContent: (content: Widget) => void): JSX.Element {  
    let WidgetComponent = ContentMapping[widget.type].editor
    console.log(widget.content);
    
    let props: WidgetEditorProps = {
        originalContent: widget.content,
        editedContent: widget.content,
        setEditedContentOnChange: (key: string, content: ContentSingularData) => {
            let newContent = {...widget.content, [key]: content}
            console.log(newContent);
            
            setContent({ type: widget.type, content: newContent })
        }
    }
    return <WidgetComponent {...props} />
}