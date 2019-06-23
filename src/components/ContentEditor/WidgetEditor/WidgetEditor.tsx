import React, { useState } from 'react';
import { ContentSingularData } from '../../_data/ContentSingularData';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import './WidgetEditor.css';
import { WidgetTypes, ContentMapping } from '../../ContentMapping/ContentMapping';
import firebase from 'firebase/app';
import 'firebase/database';
import { HistoryTypes } from '../../_debug/EditorHistory';

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
    const setEditedContentOnChange = (keyToChange: string, valueToChange: any) => {
        const updatedContent = { ...editedContent, [keyToChange]: valueToChange } as ContentSingularData;
        setEditedContent(updatedContent);
    }

    if (!content) {
        return <></>;
    }

    let ContentWidget = ContentMapping[editedContent.type].widget;
    let ContentEditingWidget = ContentMapping[editedContent.type].editor;

    return <div className="widget-editor">
        {!editing && <>
            <ContentWidget content={editedContent} />
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
                            setEditedContentOnChange("type", e.target.value as string);
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
                setEditedContentOnChange={setEditedContentOnChange} />
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