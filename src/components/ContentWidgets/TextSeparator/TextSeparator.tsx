import React from 'react';
import { ContentSingularData } from '../../_data/ContentSingularData';
import './TextSeparator.css';
import Divider from "@material-ui/core/Divider"
/**
 * A separator widget with the given width, text, and color
 * separator_width  percentage width
 * separator_text displayed text
 * separator_color  RGB values
 *
 * Last Modified
 * Diandre Sabale
 * July 26, 2022
 */
export const TextSeparator: React.FC<ContentSingularData> = ({
	plainText_content,
}) => {
	return <div className="text-separator-container wi-content-wrapper">
		<Divider>{plainText_content}</Divider>
	</div>
};
