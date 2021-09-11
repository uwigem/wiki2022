import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { ContentMapping, WidgetTypes } from '../../ContentMapping/ContentMapping'
import styles from './WidgetSelectionModal.module.css'
import WidgetCategory from './WidgetCategory'

export type WidgetSelectionModuleProps = {
    startingState: boolean
    onSubmit: (selectedWidget: WidgetTypes) => void
}


/**
 * This modal should allow users to select a widget and return the widget for
 * the editor to render.
 *
 * Last Modified
 * Victor Shan
 * Sept 11, 2021
 */
export default function WidgetSelectionModal({ startingState, onSubmit }: WidgetSelectionModuleProps) {
    const [showSelectWidget, setShowSelectWidget] = useState(startingState);
    const [selectedWidget, setSelectedWidget] = useState<undefined | WidgetTypes>()

    useEffect(() => {
        setShowSelectWidget(startingState);
    }, [startingState]);

    return (
        <Modal
            contentClassName={styles.modal}
            size="xl"
            centered
            show={showSelectWidget}
            scrollable
            backdrop={"static"}
            backdropClassName={styles.backdrop} // z-index needs to be higher than navbar
            style={{ zIndex: 1400 }} // has to be bigger than navbar (z-index=1100)
        >
            <Modal.Header closeButton className={styles.darker} onHide={() => setShowSelectWidget(false)}>
                <Modal.Title>Select a New Widget</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className={styles.body}>
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
                </div>
            </Modal.Body>
            <Modal.Footer className={styles.darker}>
                <Button
                    variant="secondary"
                    onClick={() => setShowSelectWidget(false)}
                >
                    Cancel
                </Button>
                <Button
                    disabled={!selectedWidget}
                    onClick={() => {
                        selectedWidget && onSubmit(selectedWidget)
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