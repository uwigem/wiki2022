import React, { useState, useContext } from 'react';
import { ContentSingularData } from '../../_data/ContentSingularData';
import Button from 'react-bootstrap/Button'
import './WidgetEditor.css';
import { WidgetCategories, ContentMapping, WidgetTypes } from '../../ContentMapping/ContentMapping';
import './WidgetEditor.css';
import { EnvironmentContext } from '../../../contexts/EnvironmentContext/EnvironmentContext';
import { WidgetLiveEdit } from '../WidgetLiveEdit/WidgetLiveEdit';
import {WidgetLiveEditBar} from '../WidgetLiveEdit/WidgetLiveEditBar';
import { FailureWidget, FailureEditWidget } from './FailureWidget/FailureWidget';
import WidgetSelectionModal from '../WidgetSelectionModal/WidgetSelectionModal'
import { JsxElement } from 'typescript';

type WidgetEditorProps = {
	content: ContentSingularData | undefined,
	contentHash: string,
	currYear: number,
	pageToEdit: string,
	user: firebase.User | null,
	deleteWidget: (contentHash: string) => void
}

/**
 * WidgetEditor is the widget editing component. It handles the logic for editing a single widget,
 * updating it, and rendering it.
 *
 * Last Modified
 * September 11, 2021
 * Victor Shan
 *
 * TODO:
 *  - Update the selector to be more user friendly (make a thing popup?)
 *  - Current it is not user friendly to benefit development
 *  - Factor currYear into a context hook
 *  - Put user into a context hook as well to reduce duplication
 *  - Make edithistory be its own class
 */
export const WidgetEditor: React.FC<WidgetEditorProps> = ({ content, contentHash, currYear,
	pageToEdit, user, deleteWidget }) => {
	const [editing, setEditing] = useState<boolean>(false);
	const [showWidgetSelector, setShowWidgetSelector] = useState<boolean>(false);
	const [editedContent, setEditedContent] = useState<ContentSingularData>({ ...content } as ContentSingularData);
	const { firebase } = useContext(EnvironmentContext);


	if (!content || !firebase) {
		return <></>;
	}

	let ContentWidget;
	let ContentEditingWidget;

	if (!ContentMapping[content!.type]) {
		ContentWidget = FailureWidget
		ContentEditingWidget = FailureEditWidget
	} else {
		ContentWidget = ContentMapping[editedContent.type].widget;
		ContentEditingWidget = ContentMapping[editedContent.type].editor;
	}

	const handleWidgetTypeChange = (widgetType: WidgetTypes) => {
		setEditedContentOnChange("type", widgetType as string, editedContent, setEditedContent);
	};

	return <div className="widget-editor">
		{!editing && <>
            <div className="content-editbanner-container">
                <div className="content-button-container">
                    <ContentWidget {...editedContent} />
                    <div>
                        <WidgetLiveEdit
                            contentHash={contentHash}
                            currYear={currYear}
                            pageToEdit={pageToEdit}
                            user={user}
                            editing={false}
                            setEditing={setEditing}
                            editedContent={editedContent}
                            deleteWidget={deleteWidget} />
                    </div>
                </div>
                <WidgetLiveEditBar
                    contentHash={contentHash}
                    currYear={currYear}
                    pageToEdit={pageToEdit}
                    user={user}
                    editing={false} />
            </div>
		</>}

		{editing && <>
			<div className="widget-picker">
				<form>
					<Button onClick={() => {
						setShowWidgetSelector(true);
						console.log("Changing widget")
					}}>Change Widget</Button>
				</form>
			</div>
			<ContentEditingWidget editedContent={editedContent}
				originalContent={content}
				setEditedContentOnChange={(keyToChange: string, valueToChange: string) => {
					setEditedContentOnChange(keyToChange, valueToChange, editedContent, setEditedContent);
				}} />
			<div>
				<WidgetLiveEdit
					contentHash={contentHash}
					currYear={currYear}
					pageToEdit={pageToEdit}
					user={user}
					editing={true}
					setEditing={setEditing}
					editedContent={editedContent}
					deleteWidget={deleteWidget} />
			</div>
			<WidgetSelectionModal startingState={showWidgetSelector} onSubmit={(widgetType: WidgetTypes) => {
				handleWidgetTypeChange(widgetType);
				setShowWidgetSelector(false);
			}} />
		</>}
	</div>
}


/**
 * setEditedContentOnChange will modify the specific widget property specified. The limitation
 * of this function is that you will only be allowed to modify one property of the widget at a
 * time.
 *
 * Note: The value can be _any_ type, so if you did want to modify two values at once, you
 * would create an object to house those two values instead.
 *
 * Another note: This only updates the component client side until the save button is pressed to
 * submit the updates to firebase!
 *
 * @param keyToChange string key of the key value pair to update
 * @param valueToChange value of the key value pair to update. Any type.
 */
export const setEditedContentOnChange = (keyToChange: string, valueToChange: any,
	editedContent: ContentSingularData,
	setEditedContent: React.Dispatch<React.SetStateAction<ContentSingularData>>) => {
	const updatedContent = { ...editedContent, [keyToChange]: valueToChange } as ContentSingularData;
	setEditedContent(updatedContent);
}