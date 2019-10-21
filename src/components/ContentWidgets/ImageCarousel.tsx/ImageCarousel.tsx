import React from 'react';
import { ContentSingularData } from '../../_data/ContentSingularData';
import './ImageCarousel.css';
import Carousel from 'react-bootstrap/Carousel';


export type CarouselSettings = {
	showIndicators: boolean;
	showControls: boolean;
	showCaptions: boolean;
	height: number;
	width: number;
	fontSize: number;
	interval: number;
}

export type CarouselImagesContent = {
	imgLink: string;
	imgCaption: string;
	imgAltTag: string;
}

export const EMPTY_CAROUSEL_SETTINGS = {
	showIndicators: true,
	showControls: true,
	showCaptions: true,
	height: 40,
	width: 80,
	fontSize: 100,
	interval: 5000
}

/**
 * Displays a carousel of images 
 *
 * Last Modified
 * Nitesh Chetry
 * October 20, 2019
 */

export const ImageCarousel: React.FC<ContentSingularData> = ({
	carousel_settings,
	carousel_imagesContents
}) => {
	if (!carousel_settings && carousel_imagesContents) {
		return <> Error, must save carousel settings </>
	} else if (!carousel_settings || !carousel_imagesContents) {
		return <></>;
	}
	return <>
		<Carousel
			indicators={carousel_settings.showIndicators}
			controls={carousel_settings.showControls}
			interval={carousel_settings.interval}
			style={{
				maxWidth: `${carousel_settings.width}em`,
			}}
		>
			{carousel_imagesContents.map((carouselImage: CarouselImagesContent, index) => (
				<Carousel.Item key={index}>
					<img
						className="d-block w-100 carousel-img"
						src={carouselImage.imgLink}
						alt={carouselImage.imgAltTag ? carouselImage.imgAltTag : carouselImage.imgCaption}
						style={{ height: `${carousel_settings.height}em` }}
					/>
					{carousel_settings.showCaptions ? (
						<Carousel.Caption>
							<p style={{ fontSize: `${carousel_settings.fontSize}%` }} >{carouselImage.imgCaption}</p>
						</Carousel.Caption>
					) :
						<></>}

				</Carousel.Item>
			))}
		</Carousel>
	</>
};
