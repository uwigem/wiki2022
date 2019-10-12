import React from 'react';
import { WidgetEditorProps } from '../../ContentMapping/ContentMapping';
import './Gallery.css';

export const GalleryEditor: React.FC<WidgetEditorProps> = ({
	editedContent,
	setEditedContentOnChange
}) => {
	const galleryContent = editedContent.gallery_content || [];

	const updateGallery = (link: string, index: number) => {
		const newContent = galleryContent.slice(0);
		newContent[index] = link;
		setEditedContentOnChange("gallery_content", newContent);
	}

	const deleteContent = (index: number) => {
		const newContent = galleryContent.slice(0);
		newContent.splice(index, 1);
		setEditedContentOnChange("gallery_content", newContent);
	}

	return <div className="gallery-editor">
		{galleryContent.map((link, index) => {
			return <div key={link}>
				<input
					type="text"
					onChange={(e) => updateGallery(e.target.value, index)}
					value={link}
				></input>
				<button
					className="gallery-delete-button"
					onClick={() => deleteContent(index)}
				>Delete</button>
			</div>
		})}
		<div>
			<button
				className="gallery-add-button"
				onClick={() => {
					const newContent = galleryContent.slice(0);
					newContent.push("");
					setEditedContentOnChange("gallery_content", newContent);
				}}
			>Add</button>
		</div>
	</div>
}