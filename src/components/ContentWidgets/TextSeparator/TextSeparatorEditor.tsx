import React from 'react';
import { WidgetEditorProps } from '../../ContentMapping/ContentMapping';
import { TextSeparator } from './TextSeparator';

/**
 * SeparatorEditor edits the width, text and color of a separator widget
 *
 * Last Modified
 * Jennifer Tao
 * July 14, 2019
 */
 export const TextSeparatorEditor: React.FC<WidgetEditorProps> = ({
    editedContent,
    setEditedContentOnChange
}) => {
	const text = "default";
    return <>
		<TextSeparator plainText_content={text}/>

		<h3>Text to display:</h3>
        <input type="text" onChange={(e) => {
            setEditedContentOnChange("plainText_content", e.target.value);
        }} />
    </>
}
