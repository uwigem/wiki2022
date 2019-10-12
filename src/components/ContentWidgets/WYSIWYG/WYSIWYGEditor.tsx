import React from 'react';
import { WidgetEditorProps } from '../../ContentMapping/ContentMapping';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, ContentState } from "draft-js";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './WYSIWYGEditor.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

export const WYSIWYGEditor: React.FC<WidgetEditorProps> = ({
	editedContent,
	setEditedContentOnChange
}) => {

	const contentState = editedContent.wysiwyg_content ?
		convertToRaw(ContentState.createFromBlockArray(htmlToDraft(editedContent.wysiwyg_content).contentBlocks)) :
		convertToRaw(EditorState.createEmpty().getCurrentContent());

	return <>
		<Editor
			initialContentState={contentState}
			wrapperClassName="wysiwyg-wrapper"
			editorClassName="wysiwyg-editor"
			onContentStateChange={(e) =>
				setEditedContentOnChange("wysiwyg_content", draftToHtml(e))
			}
		/>
	</>
}