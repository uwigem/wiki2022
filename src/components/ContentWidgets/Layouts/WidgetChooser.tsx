import React from 'react'
import { Select } from "@material-ui/core";
import { ContentMapping, WidgetCategories, WidgetTypes } from "../../ContentMapping/ContentMapping";

export type WidgetChooserProp = {
    widgetType: WidgetTypes
    handleWidgetChange: (widgetType: WidgetTypes) => void
}

export default function WidgetChooser({ widgetType, handleWidgetChange }: WidgetChooserProp) {
    let options =  Object.keys(WidgetCategories).map((category) => {
        const categoryWidgets = Object.keys(ContentMapping).filter(widgetKey => ContentMapping[widgetKey].widgetCategory === category)
            categoryWidgets.sort();
            if (categoryWidgets.length > 0) {
                return <optgroup label={category} key={category}>
                    {categoryWidgets.map((widgetKey) => {
                        //@ts-ignore
                        return <option key={widgetKey} value={widgetKey}> {/* selected={WidgetTypes[widgetKey] === widgetType} */}
                            {ContentMapping[widgetKey].displayName}
                        </option>
                    })}
                </optgroup>
            } else {
                return <></>
            }
    })

    return (

        <Select
            native
            // value={widgetType}
            //@ts-ignore
            onChange={e => handleWidgetChange(WidgetTypes[e.target.value as string] as WidgetTypes)}>
            {options}
        </Select>
    )
}