import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { ContentSingularData } from '../../_data/ContentSingularData';
import './TabView.css';

export type Tab = {
    tabLabel: string
    tabContent: string
} 

export const TabView: React.FC<ContentSingularData> = ({
    tabView_content
}) => {
    
    const [currentTab, setCurrentTab] = useState(0);

    if (!tabView_content || tabView_content.length == 0) {
        return <></>
    }
    
    let tabs = tabView_content!!.map((tab, index) => {
        return <li key={tab.tabLabel + index} className={index == currentTab ? "tab-label current-tab" : "tab-label"} 
            onClick={() => setCurrentTab(index)}>{tab.tabLabel}</li>
    });

    return <div>
        <ul className="tabs-container">
            {tabs}
        </ul>
        <div className="current-tab-content">
            <ReactMarkdown className="react-markdown" source={tabView_content[currentTab].tabContent} />
        </div>
    </div>;
}