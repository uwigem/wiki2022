import React, { useState } from 'react';
import { ContentSingularData } from '../../_data/ContentSingularData';
import './Gallery.css';
import { GALLERY_COL_COUNT } from '../../_data/Constants';

type GalleryColProps = {
	images: string[],
	first: number,
	last: number,
	setCurrentIndex: React.Dispatch<React.SetStateAction<number>>,
	setDisplayState: React.Dispatch<React.SetStateAction<boolean>>
}

const GalleryCol: React.FC<GalleryColProps> = ({
	images, first, last, setCurrentIndex, setDisplayState
}) => {
	const columnContent = [];
	for (let i = first; i < last; i++) {
		columnContent.push(<img
			className="gallery-image"
			key={images[i]}
			src={images[i]}
			alt={images[i]}
			onClick={() => {
				setCurrentIndex(i);
				setDisplayState(true);
			}} />)
	}
	return <div className="gallery-col">{columnContent}</div>;
}


type GalleryImagesProps = {
	images: string[];
}

const GalleryImages: React.FC<GalleryImagesProps> = ({
	images
}) => {
	var [currentIndex, setCurrentIndex] = useState(0);
	var [displayState, setDisplayState] = useState(false);
	const n = Math.ceil(images.length / GALLERY_COL_COUNT);

	return <div className="gallery-display">
		<GalleryCol
			images={images}
			first={0}
			last={n}
			setCurrentIndex={setCurrentIndex}
			setDisplayState={setDisplayState}
		></GalleryCol>
		<GalleryCol
			images={images}
			first={n}
			last={2 * n}
			setCurrentIndex={setCurrentIndex}
			setDisplayState={setDisplayState}
		></GalleryCol>
		<GalleryCol
			images={images}
			first={2 * n}
			last={images.length}
			setCurrentIndex={setCurrentIndex}
			setDisplayState={setDisplayState}
		></GalleryCol>

		<div
			className="gallery-lightbox"
			style={{ display: displayState ? "block" : "none" }}>
			<span
				className="gallery-lightbox-prev"
				style={{ visibility: (currentIndex > 0) ? "visible" : "hidden" }}
				onClick={() => {
					setCurrentIndex(currentIndex - 1);
				}}
			>&#10094;</span>
			<div className="gallery-lightbox-content">
				<span
					className="gallery-lightbox-close"
					onClick={() => setDisplayState(false)}
				>&times;</span>
				<img src={images[currentIndex]} alt={images[currentIndex]}></img>
			</div>
			<span
				className="gallery-lightbox-next"
				style={{ visibility: (currentIndex < (images.length - 1)) ? "visible" : "hidden" }}
				onClick={() => {
					setCurrentIndex(currentIndex + 1);
				}}
			>&#10095;</span>
		</div>
	</div>
}

/**
 * Gallery shows images in random order
 *
 * Last Modified
 * Jennifer Tao
 * September 27, 2019
 */
export const Gallery: React.FC<ContentSingularData> = ({
	gallery_content
}) => {

	if (!gallery_content) {
		return <></>
	}
    /** shuffle code using the Fisher-Yates algorithm by Jeff on stackoverflow
     *  https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
    */
	const shuffle = (a: string[]) => {
		var j, x, i;
		for (i = a.length - 1; i > 0; i--) {
			j = Math.floor(Math.random() * (i + 1));
			x = a[i];
			a[i] = a[j];
			a[j] = x;
		}
		return a;
	}

	return <GalleryImages images={shuffle(gallery_content)}></GalleryImages>
}