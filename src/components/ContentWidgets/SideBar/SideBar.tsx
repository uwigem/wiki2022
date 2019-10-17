import React, { useEffect, useState } from 'react'
import { ContentViewProps } from '../../ContentView/ContentView';
import { ContentData } from '../../_data/Data';
import { CssBaseline } from '@material-ui/core';

export type SideBarProps = {
	contentData: ContentData,
	pageTitle: string
	// activeSection: string,
	// activeSectionIndex: number
}

type sectionInfo = {
	sectionID: string,
	top: number,
	bottom: number,
	index: number,
	totalSections: number
}

const onClickLink = (event: React.MouseEvent) => {
	let id = event.currentTarget.id.split("-")[0];
	document.getElementById(id)!!.scrollIntoView({ behavior: "smooth" });
	const yourElement = document.getElementById(event.currentTarget.id.split("-")[0]);
	const yCoordinate = yourElement!!.getBoundingClientRect().top + window.pageYOffset;
	const yOffset = -100;

	window.scrollTo({
		top: yCoordinate + yOffset,
		behavior: 'smooth'
	});
}

const calculateSectionArea = (sections: sectionInfo[]) => {
	sections.forEach((section, index) => {
		let element = document.getElementById(section.sectionID);

		let top = element!.offsetTop - 150;
		let bottom = 99999999;
		if (sections[index + 1]) {
			let nextElement = document.getElementById(sections[index + 1].sectionID);
			bottom = nextElement!.offsetTop - 150;
		}
		sections[index] = {
			sectionID: section.sectionID, top: top, bottom: bottom, index: index,
			totalSections: sections.length
		};
	});
}

export const SideBar: React.FC<SideBarProps> = ({
	contentData,
	pageTitle
}) => {
	const [currentActiveSection, setCurrentActiveSection] = useState<sectionInfo>({} as sectionInfo);
	let sections: sectionInfo[] = [];

	useEffect(() => {
		contentData[pageTitle].contentOrder!.forEach((id, index) => {
			let content = contentData[pageTitle].content![id];
			if (content && content.type === "HEADER") {
				sections.push({ sectionID: id, top: 0, bottom: 0, index: index, totalSections: 0 });
			}
		});

		calculateSectionArea(sections)

		if (!currentActiveSection) {
			setCurrentActiveSection(sections[0]);
		}
	}, []);

	if (!contentData && !pageTitle) {
		return <></>;
	} else if (contentData[pageTitle]
		&& (!contentData[pageTitle].hasSidebar || !contentData[pageTitle].content)
		&& contentData[pageTitle].contentOrder && contentData[pageTitle].contentOrder!.length === 0
	) {
		return <></>;
	}

	window.addEventListener("resize", (val) => {
		calculateSectionArea(sections);
	});

	window.addEventListener("scroll", () => {
		for (let i = 0; i < sections.length; i++) {
			let section = sections[i];
			if (window.scrollY >= section.top && window.scrollY <= section.bottom) {
				if (section.sectionID != currentActiveSection.sectionID) {
					setCurrentActiveSection(section);
					break;
				}
			}
		}
	});

	let generateSectionLinks = contentData[pageTitle].contentOrder!!.map((content) => {
		let widgetInfo = contentData[pageTitle].content![content]
		return widgetInfo!.type === "HEADER" ? <li id={content + "-link"}
			key={content}
			className={content === currentActiveSection.sectionID ? "active-section" : "nonactive-section"}
			onClick={onClickLink}>
			{widgetInfo!.header_content}
		</li> : null
	});

	let progress = currentActiveSection ?
		Math.round((currentActiveSection.index + 1) / currentActiveSection.totalSections * 100.0) : 0;
	return <div id="sidebar-container" style={{ height: (contentData[pageTitle].contentOrder!.length * 12) + "px" }}>
		<ul id="sidebar">
			{contentData[pageTitle].content ? generateSectionLinks : null}
		</ul>
		<div id="sidebar-progress"><span style={{ height: progress + "%" }}>&nbsp;</span></div>
	</div>;
}