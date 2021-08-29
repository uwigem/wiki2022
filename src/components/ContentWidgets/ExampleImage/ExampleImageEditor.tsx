import React from 'react';
import { WidgetEditorProps } from '../../ContentMapping/ContentMapping';

export const ExampleImageEditor: React.FC<WidgetEditorProps> = ({
	editedContent,
	setEditedContentOnChange
}) => {
	let imgLink = editedContent.exampleImage_imageLink || "";
	let imgSize = editedContent.exampleImage_percentageSize || 0;
	let imgSubtitle = editedContent.exampleImage_subtitle || "";
  let imgAltTag = editedContent.exampleImage_altTag || "";
  let imgExternalLink = editedContent.exampleImage_externalLink || "";
	return <>
		<h3>Image Link</h3>
		<input type="text" value={imgLink} onChange={(e) => setEditedContentOnChange("exampleImage_imageLink", e.target.value)} />
		<h3>Image Size (percentage out of 100)</h3>
		<input type="text" value={imgSize} onChange={(e) => setEditedContentOnChange("exampleImage_percentageSize", Number(e.target.value))} />
		<h3>Image Subtitle</h3>
		<input type="text" value={imgSubtitle} onChange={(e) => setEditedContentOnChange("exampleImage_subtitle", e.target.value)} />
    <h3>Image Alternate Text</h3>
    <input type="text" value={imgAltTag} onChange={(e) => setEditedContentOnChange("exampleImage_altTag", e.target.value)} />
		<p>Describes image for vision-impaired users (defaults to caption)</p>
    <h3>External Link</h3>
    <input type="text" value={imgExternalLink} onChange={(e) => setEditedContentOnChange("exampleImage_externalLink", e.target.value)} />
		<p>Link when clicked (defaults to image link)</p>
		<br />
		<div className="centered">
      <a href={imgExternalLink ? imgExternalLink : imgLink}>
        <img src={imgLink} alt={imgAltTag} style={{ width: `${imgSize}%`, height: `auto` }} />
      </a>
      <p>{imgSubtitle}</p>
		</div>
	</>

}