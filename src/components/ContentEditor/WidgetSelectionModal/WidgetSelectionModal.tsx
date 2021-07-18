import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { ContentMapping, WidgetCategories, WidgetTypes } from '../../ContentMapping/ContentMapping'
import WidgetElement from './WidgetElement'
import styles from './WidgetSelectionModal.module.css'

export type WidgetSelectionModuleProps = {
    startingState: boolean
    onClose: (selectedWidget: string) => void
}


/**
 * This modal should allow users to select a widget and return the widget for
 * the editor to render.
 *
 * Last Modified
 * Victor SHan
 * July 17
 */
export default function WidgetSelectionModule({ startingState, onClose }: WidgetSelectionModuleProps) {
    const [showSelectWidget, setShowSelectWidget] = useState(startingState);
    const [selectedWidget, setSelectedWidget] = useState<undefined | string>()
    return (
        <Modal contentClassName={styles.modal} size="xl" centered show={showSelectWidget} onHide={onClose} scrollable>
            <Modal.Header translate closeButton>
                <Modal.Title>Widget Selection</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {Object.entries(ContentMapping).map(widgetEntry => {
                    const [widgetKey, widget] = widgetEntry
                    return (
                        <WidgetElement
                            key={widgetKey}
                            widget={widget}
                            selected={widgetKey === selectedWidget}
                            onClick={() => setSelectedWidget(widgetKey)}/>
                    )
                })}
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="secondary"
                    onClick={() => setShowSelectWidget(false)}
                >
                    Cancel
                </Button>
                <Button
                    disabled={!selectedWidget}
                    onClick={() => setShowSelectWidget(false)}
                >
                    Select
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

function sortWidgets() {
    const widgetCategories: { [key: string]: string[] } = {}
    for (const [key, widget] of Object.entries(ContentMapping)) {
        if (!widgetCategories[widget.widgetCategory]) {
            widgetCategories[widget.widgetCategory] = []
        }
        widgetCategories[widget.widgetCategory].push(key)
    }
    return widgetCategories
}