import React from 'react';
import { WidgetEditorProps } from '../../ContentMapping/ContentMapping';

export const HeaderEditor: React.FC<WidgetEditorProps> = ({
	editedContent,
	setEditedContentOnChange
}) => {
	let header = <h1>{editedContent.header_content}</h1>;
	if (editedContent.header_priority === 2) {
		header = <h2>{editedContent.header_content}</h2>;
	} else if (editedContent.header_priority === 3) {
		header = <h3>{editedContent.header_content}</h3>;
	} else if (editedContent.header_priority === 4) {
		header = <h4>{editedContent.header_content}</h4>;
	}

	if (!editedContent.header_priority) {
		setEditedContentOnChange("header_priority", 1);
	}

	return <>
		{header}
		<hr />
		<input type="text" value={editedContent.header_content} onChange={(e) => {
			setEditedContentOnChange("header_content", e.target.value);
		}} />
		<select value={editedContent.header_priority} onChange={(e) => {
			setEditedContentOnChange("header_priority", parseInt(e.target.value));
		}}>
			<option value={1}>1</option>
			<option value={2}>2</option>
			<option value={3}>3</option>
			<option value={4}>4</option>
		</select>
	</>
}