import React from 'react';
import { WidgetEditorProps } from '../../ContentMapping/ContentMapping';
import { Gallery } from './Gallery';
import './Gallery.css';
import ImageLink from './ImageLink';

export const GalleryEditor: React.FC<WidgetEditorProps> = ({
	editedContent,
	setEditedContentOnChange
}) => {
    const content = editedContent.gallery_content || []
	const addImage = (link: string) => {
        const newImages = [...content]
        newImages.push(link)
        setEditedContentOnChange("gallery_content", newImages)
	}

    const updateImage = (oldLink: string, newLink: string) => {
        const newImages = [...content]
        newImages[newImages.indexOf(oldLink)] = newLink
        setEditedContentOnChange("gallery_content", newImages)
    }

	const removeImage = (link: string) => {
        const newImages = [...content]
        newImages.splice(newImages.indexOf(link), 1)
        setEditedContentOnChange("gallery_content", newImages)
	}

	return (
    <>
    {console.log(content)}
    <Gallery gallery_content={editedContent.gallery_content || []}/>
    <div className="gallery-editor">
		{content.map((link) => {
			return <div key={link}>
                <ImageLink value={link} onUpdate={(val) => updateImage(link, val)} />
				<button
					className="gallery-delete-button"
					onClick={() => removeImage(link)}
				>Delete</button>
			</div>
		})}
		<div>
			<button
				className="gallery-add-button"
				onClick={() => addImage("")}
			>Add</button>
		</div>
	</div>
    </>
    )
}