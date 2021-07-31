import React from 'react';
import { ContentSingularData } from '../../_data/ContentSingularData';

/**
 * Example image shows an image
 *
 * Last Modified
 * Jaden Stetler
 * July 31, 2021
 */
export const ExampleImage: React.FC<ContentSingularData> = ({
	exampleImage_imageLink,
  exampleImage_percentageSize,
  exampleImage_subtitle,
  exampleImage_altTag,
  exampleImage_externalLink
}) => {
	if (!exampleImage_imageLink || !exampleImage_percentageSize) {
		return <></>
	}

  return <div className="centered">
    <a href={exampleImage_externalLink ? exampleImage_externalLink : exampleImage_imageLink}>
      <img
      src={exampleImage_imageLink}
      alt={exampleImage_altTag ? exampleImage_altTag : exampleImage_subtitle}
      style={{
        width: `${exampleImage_percentageSize}%`,
        height: `auto`
      }} />
    </a>
    <p>
      {exampleImage_subtitle}
    </p>
  </div>
}