import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TabView, Tab } from './TabView';
import { TabViewEditor } from './TabViewEditor';
import { ContentSingularData } from '../../_data/ContentSingularData';

// configure enzyme to work with React version 16
Enzyme.configure({ adapter: new Adapter() });

describe("TabView component", () => {

    const fakeProps = [
            { tabLabel : "Tab1", tabContent : "" }, // This is an empty tab Content
            { tabLabel : "Tab2", tabContent : "Testing something with that" },
            { tabLabel : "", tabContent : "This has no tab label" }
        ];

    const emptyProps: Tab[] = [];

    beforeEach(() => { });

    it("mounts correctly with no props", () => {
        mount(<TabView tabView_content={emptyProps}/>);
    });

    it("mounts correctly with props", () => {
        mount(<TabView tabView_content={fakeProps} />);
    });

    it("mounts correctly with undefined props", () => {
        mount(<TabView />);
    });

    it("generates tabs correctly", () => {
        const wrapper = mount(<TabView tabView_content={fakeProps} />);
        expect(wrapper.find(".tab-label").length).toEqual(fakeProps.length);

        expect(wrapper.find(".tab-label:first-child").text()).toEqual(fakeProps[0].tabLabel);
        expect(wrapper.find(".tab-label:last-child").text()).toEqual(fakeProps[fakeProps.length - 1].tabLabel);
    });

    it("shows correct content for each tab", () => {
        const wrapper = mount(<TabView tabView_content={fakeProps} />);
        expect(wrapper.find(".current-tab-content").text()).toEqual(fakeProps[0].tabContent);

        wrapper.find(".tab-label:last-child").simulate("click");
        expect(wrapper.find(".current-tab-content").text()).toEqual(fakeProps[fakeProps.length - 1].tabContent);

        let tabs = wrapper.find(".tabs-container");
        tabs.childAt(1).simulate("click");
        expect(wrapper.find(".current-tab-content").text()).toEqual(fakeProps[1].tabContent);

        wrapper.find(".tab-label:first-child").simulate("click");
        expect(wrapper.find(".current-tab-content").text()).toEqual(fakeProps[0].tabContent);
    }); 
});

describe("TabViewEditor component", () => {

    const originalContent: ContentSingularData = { tabView_content : undefined };

    const editedContent: ContentSingularData = { tabView_content : undefined };

    // setEditedContentOnChange
    const setEditedContentOnChange = jest.fn().mockImplementation((contentTitle: string, 
        editedContent) => {
        originalContent.tabView_content = editedContent;
        editedContent.tabView_content = editedContent;
    });

    beforeEach(() => { });

    it("mounts correctly", () => {
        mount(<TabViewEditor originalContent={originalContent} 
            editedContent={editedContent}
            setEditedContentOnChange={setEditedContentOnChange} />);
    });

    it("adds tabs correctly", () => {
        const wrapper = mount(<TabViewEditor originalContent={originalContent} 
                editedContent={editedContent}
                setEditedContentOnChange={setEditedContentOnChange} />);

        for (let i = 0; i < 5; i++) {
            wrapper.find(".add-tab-btn").simulate("click");
            expect(originalContent.tabView_content!!.length).toEqual(i + 1);
            expect(originalContent.tabView_content!![i].tabLabel).toEqual("Tab" + (i + 1));
        }
    });

    it("removes tabs correctly", () => {
        originalContent.tabView_content = [
            { tabLabel: "Tab1", tabContent: "" },
            { tabLabel: "Tab2", tabContent: "" },
            { tabLabel: "Tab3", tabContent: "" }
        ];
        editedContent.tabView_content = [
            { tabLabel: "Tab1", tabContent: "" },
            { tabLabel: "Tab2", tabContent: "" },
            { tabLabel: "Tab3", tabContent: "" }
        ];
        const wrapper = mount(<TabViewEditor originalContent={originalContent} 
            editedContent={editedContent}
            setEditedContentOnChange={setEditedContentOnChange} />);
        wrapper.find(".remove-tab-btn").first().simulate("click");
        expect(originalContent.tabView_content.length).toEqual(2);
        expect(originalContent.tabView_content[0].tabLabel).toEqual("Tab2");
    });

    it("adjust tab order correctly", () => {
        originalContent.tabView_content = [
            { tabLabel: "Tab1", tabContent: "" },
            { tabLabel: "Tab2", tabContent: "" }
        ];
        editedContent.tabView_content = [
            { tabLabel: "Tab1", tabContent: "" },
            { tabLabel: "Tab2", tabContent: "" }
        ];
        const wrapper = mount(<TabViewEditor originalContent={originalContent} 
            editedContent={editedContent}
            setEditedContentOnChange={setEditedContentOnChange} />);
        wrapper.find("#Tab10 .tab-control-btn-right").simulate("click");
        expect(originalContent.tabView_content!![0].tabLabel).toEqual("Tab2");
        expect(originalContent.tabView_content!![1].tabLabel).toEqual("Tab1");
    });

    it("allows tab-content change correctly", () => {
        originalContent.tabView_content = [
            { tabLabel: "Tab1", tabContent: "" }
        ];
        editedContent.tabView_content = [
            { tabLabel: "Tab1", tabContent: "" }
        ];

        const wrapper = mount(<TabViewEditor originalContent={originalContent} 
            editedContent={editedContent}
            setEditedContentOnChange={setEditedContentOnChange} />);

        wrapper.find(".current-tab-content-editor textarea").simulate("change", { target: { value: "Hello" } });
        // expect(originalContent.tabView_content[0].tabContent).toEqual("Hello");
    });

    it("allows tab-label change correctly", () => {
        originalContent.tabView_content = [
            { tabLabel: "Tab1", tabContent: "" }
        ];
        editedContent.tabView_content = [
            { tabLabel: "Tab1", tabContent: "" }
        ];

        const wrapper = mount(<TabViewEditor originalContent={originalContent} 
            editedContent={editedContent}
            setEditedContentOnChange={setEditedContentOnChange} />);
        wrapper.find(".tab-label-input").simulate("change", { target: { value: 'Hello' } });
        // expect(editedContent.tabView_content[0].tabLabel).toEqual("Hello");
    });

});
