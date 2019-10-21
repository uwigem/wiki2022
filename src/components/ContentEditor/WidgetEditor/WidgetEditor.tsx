import React, { useState, useEffect, useContext } from 'react';
import { ContentSingularData } from '../../_data/ContentSingularData';
import './WidgetEditor.css';
import { WidgetCategories, ContentMapping } from '../../ContentMapping/ContentMapping';
import './WidgetEditor.css';
import equal from 'deep-equal';
import { EnvironmentContext } from '../../../contexts/EnvironmentContext/EnvironmentContext';
import { WidgetLiveEdit } from '../WidgetLiveEdit/WidgetLiveEdit';
import { FailureWidget, FailureEditWidget } from './FailureWidget/FailureWidget';

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
 * September 27, 2019
 * Nitesh Chetry
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
	const [editedContent, setEditedContent] = useState<ContentSingularData>({ ...content } as ContentSingularData);
	const { firebase } = useContext(EnvironmentContext);

	useEffect(() => {
		if (!equal(content, editedContent)) {
			setEditedContent({ ...content } as ContentSingularData);
		}
	}, [content /** WHATEVER THE YELLOW ERROR SAYS, DO NOT ADD `editedContent` HERE. It makes the editor not work */])


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

	return <div className="widget-editor">
		{!editing && <>
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
		</>}

		{editing && <>
			<div className="widget-picker">
				<form>
					<fieldset>
						<legend>Select a Widget</legend>
						<select
							value={editedContent.type}
							onChange={(e) => {
								setEditedContentOnChange("type", e.target.value as string, editedContent, setEditedContent);
							}}>
							<option value="" disabled selected>-- Select a Widget --</option>
							{/* display Widget Categories and Widgets in dropdown, sorted alphabetically */}
							{/* TODO: Optimize dropdown organizing for a better time complexity */}
							{Object.keys(WidgetCategories).map((category) => {
								const categoryWidgets = Object.keys(ContentMapping).filter(widgetKey => ContentMapping[widgetKey].widgetCategory === category)
								categoryWidgets.sort();
								if (categoryWidgets.length > 0) {
									return <optgroup label={category}>
										{categoryWidgets.map((widgetKey) => {
											return <option key={widgetKey} value={widgetKey}>
												{ContentMapping[widgetKey].displayName}
											</option>
										})}
									</optgroup>
								} else {
									return <></>
								}
							})}
						</select>
					</fieldset>
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