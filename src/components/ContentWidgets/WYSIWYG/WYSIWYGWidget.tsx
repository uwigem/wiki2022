import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { ContentSingularData } from '../../_data/ContentSingularData';
import { convertToRaw, ContentState, } from "draft-js";
import htmlToDraft from 'html-to-draftjs';
import './WYSIWYGEditor.css';

export const WYSIWYGWidget: React.FC<ContentSingularData> = ({ wysiwyg_content }) => {
	if (!wysiwyg_content) {
		return <></>
	} else {
		const contentState = convertToRaw(ContentState.createFromBlockArray(htmlToDraft(wysiwyg_content).contentBlocks));
		// display editor content by setting editor as read only
		return <Editor
			initialContentState={contentState}
			wrapperClassName="wysiwyg-wrapper"
			editorClassName="wysiwyg-display"
			toolbarHidden={true}
			readOnly={true}
		/>
	}
}
