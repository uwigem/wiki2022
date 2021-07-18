import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { ContentMapping, WidgetTypes } from '../../ContentMapping/ContentMapping'
import WidgetElement from './WidgetElement'
import styles from './WidgetSelectionModal.module.css'
import WidgetCategory from './WidgetCategory'

export type WidgetSelectionModuleProps = {
    startingState: boolean
    onClose: (selectedWidget: WidgetTypes) => void
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
    const [selectedWidget, setSelectedWidget] = useState<undefined | WidgetTypes>()
    return (
        <Modal
            contentClassName={styles.modal}
            size="lg"
            centered
            show={showSelectWidget}
            scrollable
            backdrop={"static"}
        >
            <Modal.Header translate>
                <Modal.Title>Widget Selection</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {Object.entries(sortWidgets()).map(entry => {
                    return (
                        <WidgetCategory
                            key={entry[0]}
                            title={entry[0]}
                            selectedWidget={selectedWidget}
                            onWidgetSelect={setSelectedWidget}
                            widgetTypes={entry[1]}/>
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
                    onClick={() => {
                        selectedWidget && onClose(selectedWidget)
                        setShowSelectWidget(false)
                    }}
                >
                    Select
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

function sortWidgets(): { [key: string]: WidgetTypes[] } {
    const widgetCategories: { [key: string]: WidgetTypes[] } = {}
    for (const [key, widget] of Object.entries(ContentMapping)) {
        if (!widgetCategories[widget.widgetCategory]) {
            widgetCategories[widget.widgetCategory] = []
        }
        widgetCategories[widget.widgetCategory].push(key as WidgetTypes)
    }
    return widgetCategories
}