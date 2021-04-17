import React, { useState, useEffect } from 'react';
import { ContentSingularData } from '../../_data/ContentSingularData';
import firebase from 'firebase';
import './WidgetLiveEdit.css';
import {
	LIVE_EDIT_TIMETOUT,
	LIVE_EDIT_REFRESH,
	CURRENTLY_EDITED_BY_YOU_MESSAGE,
	SAFE_MESSAGE
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

export const WidgetLiveEditBanner: React.FC<WidgetLiveEditProps> = ({
	contentHash, currYear, pageToEdit, user, editing, setEditing, editedContent, deleteWidget
}) => {

	let [editingState, setEditingState] = useState<EditingState>(EditingState.SAFE);
	let [message, setMessage] = useState<string>(SAFE_MESSAGE);

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
		widgetRef.on('value', (snapshot) => {
			let record = snapshot.val();
			if (record) {
				let diff: number = (Date.now() - record.timestamp) / 1000;
				let saved: boolean = record.saved;

				if (!saved && diff < LIVE_EDIT_TIMETOUT) {
					// not saved and not yet timed out
					let editorName = record.editor;
					if (user && editorName === user.email) {
						setEditingState(EditingState.CURRENTUSER);
						setMessage(CURRENTLY_EDITED_BY_YOU_MESSAGE);
					} else {
						setEditingState(EditingState.UNSAFE);
						setMessage("currently edited by " + editorName);
					}
				} else {
					// otherwise safe
					setEditingState(EditingState.SAFE);
					setMessage(SAFE_MESSAGE);
				}
			}
		});
	});

	// determine banner style
	let banner = <div
		className={editingState === EditingState.UNSAFE ?
			"widget-live-edit-bar-unsafe tooltip" : "widget-live-edit-bar-safe tooltip"} >
            &nbsp;&nbsp;
            <span className="tooltiptext">{message}</span>
	</div>;

	return <div>
		{banner}
	</div>
}