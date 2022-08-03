import React from 'react';
import { ContentSingularData } from '../../_data/ContentSingularData';
import './TextSeparator.css';
import {Grid, Divider} from "@material-ui/core";
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
	plainText_content
}) => {
	// originally tried using a single divider and putting text in between but couldn't get it to work
	// now, we have two dividers on either side and text in the middle, all separated by grids
	// next step: make editing work
	// what we want to change (in order of priority):
	// 1. Text
	// 2. Width
	// 3. Color
	return <div className="text-separator-container wi-content-wrapper">
		<Grid container alignItems="center" spacing={3}>
    <Grid item xs>
      <Divider />
    </Grid>
    <Grid item>{plainText_content}</Grid>
    <Grid item xs>
      <Divider />
    </Grid>
  </Grid>
	</div>
};
