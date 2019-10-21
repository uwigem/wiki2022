import React from 'react';
import { ContentSingularData } from '../../_data/ContentSingularData';

/**
 * Example image shows an image
 * 
 * Last Modified
 * William Kwok
 * June 23, 2019
 */
export const ExampleImage: React.FC<ContentSingularData> = ({
	exampleImage_imageLink, exampleImage_percentageSize, exampleImage_subtitle
}) => {
	if (!exampleImage_imageLink || !exampleImage_percentageSize) {
		return <></>
	}
	return <div className="centered">
		<img src={exampleImage_imageLink} style={{
			width: `${exampleImage_percentageSize}%`,
			height: `auto`
		}} />
		<p>{exampleImage_subtitle}</p>
	</div>
}