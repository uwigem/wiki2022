import React from 'react';
import { WidgetEditorProps } from '../../ContentMapping/ContentMapping';

export const ExampleImageEditor: React.FC<WidgetEditorProps> = ({
    editedContent,
    setEditedContentOnChange
}) => {
    let imgLink = editedContent.exampleImage_imageLink || "";
    let imgSize = editedContent.exampleImage_percentageSize || 0;
    return <>
        <img src={imgLink} style={{ width: `${imgSize}%`, height: `${imgSize}%` }} />
        <br />
        <h3>Image link</h3>
        <input type="text" onChange={(e) => setEditedContentOnChange("exampleImage_imageLink", e.target.value)} />
        <h3>Image Size</h3>
        <input type="text" onChange={(e) => setEditedContentOnChange("exampleImage_percentageSize", Number(e.target.value))} />
    </>

}