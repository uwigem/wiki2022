import React from 'react';
import { WidgetEditorProps } from '../../ContentMapping/ContentMapping';
import { Separator } from './Separator';
import './SeparatorConstants';
import { DEFAULT_WIDTH, DEFAULT_COLOR, Color } from './SeparatorConstants';

/**
 * SeparatorEditor edits the width and color of a separator widget
 *
 * Last Modified
 * Jennifer Tao
 * July 14, 2019
 */
export const SeparatorEditor: React.FC<WidgetEditorProps> = ({
	editedContent,
	setEditedContentOnChange
}) => {
	const width = editedContent.separator_width || DEFAULT_WIDTH;
	const color = editedContent.separator_color || DEFAULT_COLOR;

    /**
     * Updates seperator_color
     * @param e event
     * @param c color: {Color.RED, Color.GREEN, Color.BLUE}
     */
	const changeColor = (e: React.ChangeEvent<HTMLInputElement>, c: Color) => {
		let newColor = { ...color };
		switch (c) {
			case "RED":
				newColor.r = Number(e.target.value);
				break;
			case "GREEN":
				newColor.g = Number(e.target.value);
				break;
			case "BLUE":
				newColor.b = Number(e.target.value);

		}
		setEditedContentOnChange("separator_color", newColor);
	};

	return <div className="separator-container">
		<Separator separator_width={width} separator_color={color} />
		<h3>Size:</h3>
		Width:
        <input
			type="number"
			min="0"
			max="100"
			value={width}
			onChange={e => { setEditedContentOnChange("separator_width", e.target.value) }}
		/>% (Default: 33%)
        <h3>Color:</h3>
		<input
			type="button"
			value="Default Color"
			onClick={() => { setEditedContentOnChange("separator_color", DEFAULT_COLOR) }}
		/>
		<div>
			Red:
            <input
				type="number"
				min="0"
				max="255"
				value={color.r}
				onChange={e => { changeColor(e, Color.RED) }}
			/>
			Green:
            <input
				type="number"
				min="0"
				max="255"
				value={color.g}
				onChange={e => { changeColor(e, Color.GREEN) }}
			/>
			Blue:
            <input
				type="number"
				min="0"
				max="255"
				value={color.b}
				onChange={e => { changeColor(e, Color.BLUE) }}
			/>
		</div>
	</div>
}
