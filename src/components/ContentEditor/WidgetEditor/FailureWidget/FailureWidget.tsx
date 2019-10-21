import React from 'react';
import { ContentSingularData } from '../../../_data/ContentSingularData';
import { WidgetEditorProps } from '../../../ContentMapping/ContentMapping';

const TEXT = "Widget failed to render. Please hard reload/clear cache to see this module. If you are a developer, use a different page."

export const FailureWidget: React.FC<ContentSingularData> = () => {
	return <div className="failure wi-content-wrapper">{TEXT}</div>
}

export const FailureEditWidget: React.FC<WidgetEditorProps> = () => {
	return <div className="failure wi-content-wrapper">{TEXT}</div>
}