import React from 'react';
import { ContentSingularData } from '../../_data/ContentSingularData';
import './Banner.css';

export type BannerContent = {
	bannerText: string,
	textSize: number,
	textColor: string,
	imageLink: string,
	imageBlur: number,
	imageZoom: number,
	imageTopX: number,
	imageTopY: number,

	opacity: number; // opacitiy of screen NOT IMAGE
}

/**
 * Banner component shows text on top of an image
 * 
 * Last Modified
 * Michael Tsien
 * July 25, 2022
 */
export const Banner: React.FC<ContentSingularData> = ({ banner_content }) => {
	if (!banner_content) {
		return <></>
	}

	const imgStyle = {
		fontSize: (banner_content.textSize + 1) + 'vw',
		backgroundImage: 'url("' + banner_content.imageLink + '")',
		backgroundPosition: banner_content.imageTopX + '% ' + banner_content.imageTopY + '%',
		backgroundSize: banner_content.imageZoom + '%',
		filter: 'blur(' + banner_content.imageBlur + 'px)',
	}

	const textStyle = {
		fontSize: 0.5625 * banner_content.textSize + 'vw',
		color: banner_content.textColor
	}

	const screenStyle = {
		opacity: 100 - banner_content.opacity + '%'
	}

	return <div style={textStyle} className="banner" >
		<div className="banner-text" >
			{banner_content.bannerText}
		</div>
		<div className="banner-screen" style={screenStyle}/>
		<div className="banner-background" style={imgStyle}>
			<div style={textStyle} className="banner-hidden">{banner_content.bannerText}</div>
		</div>
	</div>
}