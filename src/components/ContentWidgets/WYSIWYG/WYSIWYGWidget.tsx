import React from 'react';
import { ContentSingularData } from '../../_data/ContentSingularData';
import './WYSIWYGEditor.css';

export const WYSIWYGWidget: React.FC<ContentSingularData> = ({ wysiwyg_content }) => {
	if (!wysiwyg_content) {
		return <></>
	} else {
		return <div className="wi-content-wrapper">
			{/** https://stackoverflow.com/questions/44286228/remove-style-attributes-from-string */}
			<div className="wysiwyg-wrapper" dangerouslySetInnerHTML={{ __html: wysiwyg_content.replace(/style="[^"]*"/g, "") }}>
			</div>
		</div>
	}
}
