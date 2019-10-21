import React from 'react';
import { WidgetEditorProps } from '../../ContentMapping/ContentMapping';

export const ExampleImageEditor: React.FC<WidgetEditorProps> = ({
	editedContent,
	setEditedContentOnChange
}) => {
	let imgLink = editedContent.exampleImage_imageLink || "";
	let imgSize = editedContent.exampleImage_percentageSize || 0;
	let imgSubtitle = editedContent.exampleImage_subtitle || "";
	return <>
		<h3>Image link</h3>
		<input type="text" value={imgLink} onChange={(e) => setEditedContentOnChange("exampleImage_imageLink", e.target.value)} />
		<h3>Image Size (percentage out of 100)</h3>
		<input type="text" value={imgSize} onChange={(e) => setEditedContentOnChange("exampleImage_percentageSize", Number(e.target.value))} />
		<h3>Image subtitle</h3>
		<input type="text" value={imgSubtitle} onChange={(e) => setEditedContentOnChange("exampleImage_subtitle", e.target.value)} />
		<br />
		<div className="centered">
			<img src={imgLink} style={{ width: `${imgSize}%`, height: `auto` }} />
			<p>{imgSubtitle}</p>
		</div>
	</>

}