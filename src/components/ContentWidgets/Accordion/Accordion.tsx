import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { ContentSingularData } from '../../_data/ContentSingularData';
import './Accordion.css';

/**
 * Accordion is a collapsible list of titles and cooresponding content
 * 
 * Last Modified
 * Jennifer Tao
 * Auguest 10, 2019
 */
export type AccordionPageProps = {
	title: string,
	panel: string
}

export const AccordionPage: React.FC<AccordionPageProps> = ({
	title,
	panel
}) => {
	const [isActive, setCollapseState] = useState(false);
	return <div className={isActive ? "active-accordion" : ""}>
		<button
			className="accordion-title"
			onClick={() => setCollapseState(!isActive)}
		>{title}</button>
		<div className="accordion-panel">
			<ReactMarkdown source={panel} />
		</div>
	</div>
}

export const Accordion: React.FC<ContentSingularData> = ({
	accordion_content
}) => {
	if (!accordion_content) {
		return <></>
	}

	return <>
		{accordion_content.map((section) => {
			return <AccordionPage
				title={section.title}
				panel={section.panel}
			></AccordionPage>
		})}
	</>
}