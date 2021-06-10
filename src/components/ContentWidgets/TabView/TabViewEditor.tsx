import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { WidgetEditorProps } from '../../ContentMapping/ContentMapping';
import { Tab } from './TabView';

// TODO: Fix an issue with tab input clicking out of box
export const TabViewEditor: React.FC<WidgetEditorProps> = ({
	originalContent,
	editedContent,
	setEditedContentOnChange
}) => {

	const [currentTab, setCurrentTab] = useState(0);
	const [renderView, setRenderView] = useState(false);

	let copyTabViewContent: Tab[] = [];
	if (editedContent && editedContent.tabView_content) {
		copyTabViewContent = [...editedContent.tabView_content!!];
	}

	const saveContent = (event: React.FormEvent<HTMLTextAreaElement>) => {
		copyTabViewContent[currentTab].tabContent = event.currentTarget.value;
		setEditedContentOnChange("tabView_content", copyTabViewContent);
	}

	const addNewTab = () => {
		let newTab = {
			tabLabel: "Tab" + (copyTabViewContent.length + 1),
			tabContent: ""
		};
		copyTabViewContent.push(newTab);
		setEditedContentOnChange("tabView_content", copyTabViewContent);
	}

	const changeView = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (renderView) {
			event.currentTarget.innerText = "View Content Unrendered";
			setRenderView(false);
		} else {
			event.currentTarget.innerText = "View Content Rendered";
			setRenderView(true);
		}
	}

	let inputTabs = copyTabViewContent.map((tab, index) => {

		const onTabNameChange = (event: React.FormEvent<HTMLInputElement>) => {
			copyTabViewContent[index].tabLabel = event.currentTarget.value;
			setEditedContentOnChange("tabView_content", copyTabViewContent);
		}

		const removeTab = () => {
			copyTabViewContent.splice(index, 1);
			setEditedContentOnChange("tabView_content", copyTabViewContent);
		}

		const moveTab = (startEndTab: number, nextIndex: number) => {
			if (index !== startEndTab) {
				let saveValue = copyTabViewContent[index];
				copyTabViewContent[index] = copyTabViewContent[nextIndex];
				copyTabViewContent[nextIndex] = saveValue;
				setEditedContentOnChange("tabView_content", copyTabViewContent);
			}
		}

		const showContent = () => {
			setCurrentTab(index);
		}

		return <li key={tab.tabLabel + index} id={tab.tabLabel + index}>
			<button className="tab-control-btn" onClick={showContent}>Content</button>
			<input className="tab-label-input" type="text" value={tab.tabLabel} onChange={onTabNameChange} />
			<button className="tab-control-btn tab-control-btn-left"
				onClick={() => moveTab(0, index - 1)}>←</button>
			<button className="tab-control-btn tab-control-btn-right"
				onClick={() => moveTab(copyTabViewContent.length - 1, index + 1)}>→</button>
			<button className="remove-tab-btn" onClick={removeTab}>X</button>
		</li>
	});

	return <>
		<ul className="tabs-container">
			{inputTabs}
			<button className="add-tab-btn" onClick={addNewTab}>Add Tab</button>
		</ul>
		<div className={renderView ? "current-tab-content" : "current-tab-content-editor"}>
			{copyTabViewContent.length > 0 ?
				(renderView ?
					<ReactMarkdown className="react-markdown" source={copyTabViewContent[currentTab].tabContent} /> :
					<textarea onChange={saveContent} value={copyTabViewContent[currentTab].tabContent} />) :
				null}
		</div>
		{copyTabViewContent.length > 0 ?
			<p className="text-center">Currently Viewing: {copyTabViewContent[currentTab].tabLabel} Content</p> :
			null}
		<button className="tab-content-render-btn" onClick={changeView}>View Content Rendered</button>
	</>

}