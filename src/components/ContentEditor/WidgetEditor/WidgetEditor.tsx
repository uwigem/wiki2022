import React, { useState, useEffect, useContext } from 'react';
import { ContentSingularData } from '../../_data/ContentSingularData';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import './WidgetEditor.css';
import { WidgetTypes, ContentMapping } from '../../ContentMapping/ContentMapping';
import { HistoryTypes } from '../../_debug/EditorHistory';
import equal from 'deep-equal';
import { EnvironmentContext } from '../../../contexts/EnvironmentContext/EnvironmentContext';

type WidgetEditorProps = {
	content: ContentSingularData | undefined,
	contentHash: string,
	currYear: number,
	pageToEdit: string,
	user: firebase.User | null
}

/**
 * WidgetEditor is the widget editing component. It handles the logic for editing a single widget,
 * updating it, and rendering it.
 *
 * Last Modified
 * July 17, 2019
 * William Kwok
 *
 * TODO:
 *  - Update the selector to be more user friendly (make a thing popup?)
 *  - Current it is not user friendly to benefit development
 *  - Factor currYear into a context hook
 *  - Put user into a context hook as well to reduce duplication
 *  - Make edithistory be its own class
 */
export const WidgetEditor: React.FC<WidgetEditorProps> = ({ content, contentHash, currYear,
	pageToEdit, user }) => {
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

	let ContentWidget = ContentMapping[editedContent.type].widget;
	let ContentEditingWidget = ContentMapping[editedContent.type].editor;
	return <div className="widget-editor">
		{!editing && <>
			<ContentWidget {...editedContent} />
			<div>
				<Button variant="contained" color="primary"
					onClick={() => setEditing(true)}>Edit</Button>

			</div>
		</>}

		{editing && <>
			<div>
				<FormControl className="content-editor-formcontrol">
					<InputLabel>Select a component type</InputLabel>
					<Select
						value={editedContent.type}
						onChange={(e) => {
							setEditedContentOnChange("type", e.target.value as string, editedContent, setEditedContent);
						}}>
						{Object.keys(WidgetTypes).map(widgetType => {
							return <MenuItem key={widgetType} value={widgetType}>
								{widgetType}
							</MenuItem>
						})}
					</Select>
				</FormControl>
			</div>
			<ContentEditingWidget editedContent={editedContent}
				originalContent={content}
				setEditedContentOnChange={(keyToChange: string, valueToChange: string) => {
					setEditedContentOnChange(keyToChange, valueToChange, editedContent, setEditedContent);
				}} />
			<div>
				<Button variant="contained" color="primary"
					onClick={async () => {
						await firebase.database().ref(`${currYear}/ContentData/${pageToEdit}/content/${contentHash}`).set(editedContent);
						await firebase.database().ref(`${currYear}/EditHistory/${pageToEdit}/${contentHash}`).push({
							type: HistoryTypes.UPDATE,
							timestamp: firebase.database.ServerValue.TIMESTAMP,
							creator: (user && user.email) || "Unknown user",
							content: editedContent
						});
						setEditing(false);
					}}>
					Save
                </Button>
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