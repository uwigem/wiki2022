import React from 'react';
import { ContentSingularData } from '../../_data/ContentSingularData';
import './Separator.css';
import { DEFAULT_COLOR, DEFAULT_WIDTH } from './SeparatorConstants';
/**
 * A separator widget with the given width and color
 * separator_width  percentage width
 * separator_color  RGB values
 *
 * Last Modified
 * Jennifer Tao
 * July 14, 2019
 */
export const Separator: React.FC<ContentSingularData> = ({
	separator_width,
	separator_color
}) => {
	const { r, g, b } = separator_color || DEFAULT_COLOR;
	return <div className="separator-container">
		<div
			className="separator"
			style={{
				width: (separator_width || DEFAULT_WIDTH) + "%",
				backgroundColor: `rgb(${r},${g},${b})`
			}}
		/>
	</div>
};
