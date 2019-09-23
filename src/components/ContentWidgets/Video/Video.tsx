import React from 'react';
import { ContentSingularData } from '../../_data/ContentSingularData';
import './Video.css';

/**
 * Shows an embedded video.
 *
 * Last Modified
 * Max Zhou
 * July 15, 2019
 */
export const Video: React.FC<ContentSingularData> = ({
	video_videoLink,
	video_videoWidthPercentage
}) => {
	if (!video_videoLink || !video_videoWidthPercentage) {
		return <></>
	}

	return <div className="centered">
		<video
			className="video-player-auto-height"
			width={video_videoWidthPercentage + "%"}
			controls>
			<source src={video_videoLink} type="video/mp4" />
			Your browser does not support the video tag.
    	</video>
	</div>
}