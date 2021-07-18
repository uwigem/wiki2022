import { ContentMappingElementType } from "../../ContentMapping/ContentMapping"
import styles from './WidgetElement.module.css'
import React from 'react'

type WidgetElementProps = {
    selected: boolean
    widget: ContentMappingElementType
    onClick: () => void
}

const DEFAULT_IMAGE = "https://2019.igem.org/wiki/images/9/92/T--Washington--Wetlab_and_Simulations.png"


/**
 * This is a widget figure that is used to select widgets in the widget modal.
 *
 * Last Modified
 * Victor SHan
 * July 17
 */
export default function WidgetElement({ widget, selected, onClick }: WidgetElementProps) {
    return (
        <figure
            className={styles.figure + " "  + selected ? styles.selected: ""}
            onClick={onClick}>
            <img src={widget.imgPreview || DEFAULT_IMAGE} alt={widget.displayName}/>
            <figcaption>{widget.displayName}</figcaption>
        </figure>
    )
}