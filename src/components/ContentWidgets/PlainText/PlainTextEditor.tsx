import React from 'react';
import { WidgetEditorProps } from '../../ContentMapping/ContentMapping';

export const PlainTextEditor: React.FC<WidgetEditorProps> = ({
    editedContent,
    setEditedContentOnChange
}) => {
    return <>
        {editedContent.plainText_content}
        <hr />
        <input type="text" onChange={(e) => {
            setEditedContentOnChange("plainText_content", e.target.value);
        }} />
    </>
}