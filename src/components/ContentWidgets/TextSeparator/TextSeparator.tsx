import React from 'react';
import { ContentSingularData } from '../../_data/ContentSingularData';
import './TextSeparator.css';
import {Grid, Divider} from "@material-ui/core";
import { DEFAULT_COLOR, DEFAULT_SIZE } from './TextSeparatorConstants';
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
	text_separator_size,
	text_separator_color
}) => {
	const { r, g, b } = text_separator_color || DEFAULT_COLOR;
	const size = text_separator_size || DEFAULT_SIZE;
	
	// Current issues:
	// - width doesn't change dynamically (always starts at specified default, and once edited goes to internal default value??)

	// originally tried using a single divider and putting text in between but couldn't get it to work
	// now, we have two dividers on either side and text in the middle, all separated by grids
	return <div className="text-separator-container wi-content-wrapper">
		<Grid container alignItems="center" spacing={3}>
    		<Grid item xs>
      			<Divider style={{height: size + 'px', background: `rgb(${r},${g},${b})`}}/>
    		</Grid>
    			<Grid item>{plainText_content}</Grid>
    		<Grid item xs>
      			<Divider style={{height: size + 'px', background: `rgb(${r},${g},${b})`}}/>
    		</Grid>
  		</Grid>
	</div>
};
