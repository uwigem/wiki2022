import React, { useState, useEffect } from 'react';
import { ContentSingularData } from '../../_data/ContentSingularData';
import Button from '@material-ui/core/Button';
import { HistoryTypes } from '../../_debug/EditorHistory';
import firebase from 'firebase';
import './WidgetLiveEdit.css';
import {
	LIVE_EDIT_TIMETOUT,
	LIVE_EDIT_REFRESH
} from '../../_data/Constants';

type WidgetLiveEditProps = {
	contentHash: string,
	currYear: number,
	pageToEdit: string,
	user: firebase.User | null
	editing: boolean
	setEditing: any,
	editedContent: ContentSingularData,
	deleteWidget: (contentHash: string) => void
};

enum EditingState {
	SAFE,
	CURRENTUSER,
	UNSAFE
}

/**
 * WidgetLiveEdit manages the edit/save button, communicate with firebase to
 * figure out the state of the widget and display whether a widget is currently
 * being edited somewhere else.
 */

export const WidgetLiveEdit: React.FC<WidgetLiveEditProps> = ({
	contentHash, currYear, pageToEdit, user, editing, setEditing, editedContent, deleteWidget
}) => {

	let [editingState, setEditingState] = useState<EditingState>(EditingState.SAFE);

	let widgetRef: firebase.database.Reference = firebase.database().ref(`${currYear}/LiveEditHistory/${pageToEdit}/${contentHash}`);

	// update firebase with the current timestamp
	const updateOnce = () => {
		widgetRef.update({
			timestamp: firebase.database.ServerValue.TIMESTAMP,
			editor: (user && user.email) || "Unknown user",
			saved: false
		});
	};

	useEffect(() => {
		if (editing) {
			// update database on a set interval if we're editing.
			// if browser is closed unexpectedly, the last time we're still online
			// will be recorded.
			const updateInterval = setInterval(() => {
				updateOnce();
			}, LIVE_EDIT_REFRESH * 1000);
			return () => clearInterval(updateInterval);
		}
	});

	useEffect(() => {
		// set up listener to firebase, re-render when updated
		const onChange = widgetRef.on('value', (snapshot) => {
			let record = snapshot.val();
			if (record) {
				let diff: number = (Date.now() - record.timestamp) / 1000;
				let saved: boolean = record.saved;

				if (!saved && diff < LIVE_EDIT_TIMETOUT) {
					// not saved and not yet timed out
					let editorName = record.editor;
					if (user && editorName === user.email) {
						setEditingState(EditingState.CURRENTUSER);
					} else {
						setEditingState(EditingState.UNSAFE);
					}
				} else {
					// otherwise safe
					setEditingState(EditingState.SAFE);
				}
			}
		});
        return () => widgetRef.off('value', onChange);
	});

	// determine which buttons to show
	let button = editing ?
		<Button variant="contained" color="primary"
			onClick={async () => {
				await firebase.database().ref(`${currYear}/ContentData/${pageToEdit}/content/${contentHash}`).set(editedContent);
				await firebase.database().ref(`${currYear}/EditHistory/${pageToEdit}/${contentHash}`).push({
					type: HistoryTypes.UPDATE,
					timestamp: firebase.database.ServerValue.TIMESTAMP,
					creator: (user && user.email) || "Unknown user",
					content: editedContent
				});
				await widgetRef.update({
					saved: true
				});
				setEditing(false);
			}}>
			Save
		</Button> :
		(editingState === EditingState.UNSAFE ?
			<><Button variant="contained" color="primary"
				onClick={() => {
					setEditing(true);
					updateOnce();
				}} disabled>
				Edit
		</Button>
				<Button variant="contained" color="primary"
					onClick={() => {
						setEditing(true);
						updateOnce();
					}}>
					Edit Anyway
		</Button></> :
			<Button variant="contained" color="primary"
				onClick={() => {
					setEditing(true);
					updateOnce();
				}} >
				Edit
		</Button>
		);

	return <div className="widget-button-container">
		{button}
		<div className="widget-editor-padding-left">
			<Button variant="contained" color="primary"
				onClick={() => deleteWidget(contentHash)}>Delete</Button>
		</div>
	</div>
}