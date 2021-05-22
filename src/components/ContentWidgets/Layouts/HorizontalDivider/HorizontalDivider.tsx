import React from 'react'
import { ContentSingularData } from "../../../_data/ContentSingularData";
import { ContentMapping, ExampleWidget, WidgetTypes } from '../../../ContentMapping/ContentMapping'
import Box from '@material-ui/core/Box/Box';
import { Widget } from '../types';



export type HorizontalDividerProps = {
    left: Widget
    right: Widget
    percent: number
}

export const HorizontalDivider: React.FC<ContentSingularData>  = ({ horizontal_divider }: ContentSingularData) => {
    let leftType: WidgetTypes = horizontal_divider ? horizontal_divider.left.type : ExampleWidget.type
    let rightType: WidgetTypes = horizontal_divider ? horizontal_divider.right.type : ExampleWidget.type
    let LeftWidget: React.FC<ContentSingularData> = ContentMapping[leftType].widget
    let RightWidget: React.FC<ContentSingularData> = ContentMapping[rightType].widget

    return (
        <Box display={"flex"} flexDirection={"row"}>
            <Box display={"flex"} flexDirection={"column"} style={{ width: `${horizontal_divider ? horizontal_divider.percent : 50}%` }}>
                <LeftWidget {...(horizontal_divider ? horizontal_divider.left.content : ExampleWidget.content)}/>
            </Box>
            <Box display={"flex"} flexDirection={"column"} style={{ width: `${100 - (horizontal_divider ? horizontal_divider.percent : 50)}%`}}>
                <RightWidget {...(horizontal_divider ? horizontal_divider.right.content : ExampleWidget.content)}/>
            </Box>
        </Box>
    )
}