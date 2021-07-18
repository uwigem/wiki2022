import React from 'react'
import { ContentMapping, WidgetTypes } from "../../ContentMapping/ContentMapping"
import WidgetElement from './WidgetElement'
import styles from './WidgetCategory.module.css'
export type WidgetCategoryProps = {
    title: string
    selectedWidget: WidgetTypes | undefined
    widgetTypes: WidgetTypes[]
    onWidgetSelect: (widgetType: WidgetTypes) => void
}
export default function WidgetCategory({ title, widgetTypes, selectedWidget, onWidgetSelect }: WidgetCategoryProps) {
    return (
        <section>
            <header className={styles.header}>
                <h6>{title}</h6>
                <hr />
            </header>
            <div className={styles.widgets}>
                {widgetTypes.map(widgetType => {
                    return (
                        <WidgetElement
                            key={widgetType}
                            selected={widgetType === selectedWidget}
                            widget={ContentMapping[widgetType]}
                            onClick={() => onWidgetSelect(widgetType)}/>
                    )
                })}
            </div>
        </section>
    )
}