import React from 'react';
import { WidgetEditorProps } from '../../ContentMapping/ContentMapping';
import { TextSeparator } from './TextSeparator';
import { DEFAULT_SIZE, DEFAULT_COLOR, Color } from './TextSeparatorConstants';

/**
 * TextSeparatorEditor edits the width, text and color of a text separator widget
 *
 * Last Modified
 * Diandre Sabale
 * August 18, 2022
 */
 export const TextSeparatorEditor: React.FC<WidgetEditorProps> = ({
    editedContent,
    setEditedContentOnChange
}) => {
	const size = editedContent.text_separator_size || DEFAULT_SIZE;
	const color = editedContent.text_separator_color || DEFAULT_COLOR;
	const text = editedContent.plainText_content || "default";

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
		setEditedContentOnChange("text_separator_color", newColor);
	};
	
    return <>
		<TextSeparator plainText_content={text} text_separator_color={color} text_separator_size={size}/>

		<h3>Text to display:</h3>
        <input type="text" onChange={(e) => {
            setEditedContentOnChange("plainText_content", e.target.value);
        }} />
		<h3>Size:</h3>
        <input
			type="number"
			min="0"
			max="50"
			value={size}
			onChange={e => { setEditedContentOnChange("text_separator_size", e.target.value) }}
		/>
        <h3>Color:</h3>
		<input
			type="button"
			value="Default Color"
			onClick={() => { setEditedContentOnChange("text_separator_color", DEFAULT_COLOR) }}
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
    </>
}
