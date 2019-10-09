import React, { useState, useEffect } from 'react';
import { ContentData } from '../_data/Data';
import { ContentMapping } from '../../components/ContentMapping/ContentMapping';
import equal from 'deep-equal';


export type ContentViewProps = {
	contentData: ContentData,
	pageTitle: string
}

/**
 * ContentView shows the content from the data provided. It renders widgets.
 * 
 * Last Modified
 * July 19, 2019
 * William Kwok 
 */
export const ContentView: React.FC<ContentViewProps> = ({ contentData, pageTitle }) => {
	const [content, setContent] = useState<ContentData>({ ...contentData } as ContentData);

	useEffect(() => {
		if (!equal(content, contentData)) {
			setContent({ ...contentData } as ContentData)
		}
	}, [content, contentData]);

	let pageString = pageTitle === "" ? "MAIN_PAGE_DO_NOT_EDIT" :
		pageTitle.substring(1, pageTitle.length);

	if (!contentData || !contentData[pageString]) {
		return <></>
	}

	return <>
		{/** TODO: Add sidebar here if the page is a sidebar. */}
		<div id="content-view-container">
			{contentData[pageString].contentOrder &&
				contentData[pageString].content &&
				contentData[pageString].contentOrder!.map((contentHash) => {
					let content = contentData[pageString].content![contentHash];
					let ContentWidget = ContentMapping[content!.type].widget;
					return <div id={contentHash} key={contentHash}>
						<ContentWidget {...content} />
					</div>
				})
			}
		</div>
	</>
}