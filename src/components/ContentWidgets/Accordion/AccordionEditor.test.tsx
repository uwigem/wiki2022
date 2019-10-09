import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { AccordionEditor } from './AccordionEditor';
import { Accordion, AccordionPage, AccordionPageProps } from './Accordion';
import { ContentSingularData } from '../../_data/ContentSingularData';

Enzyme.configure({ adapter: new Adapter() });

const emptyContent: ContentSingularData = {};
const fakeContent = {
	accordion_content: [
		{ title: "Fake title 1", panel: "Fake content 1" },
		{ title: "Fake title 2", panel: "Fake content 2" },
		{ title: "Fake title 3", panel: "Fake content 3" },
	]
}

describe("Accordion component", () => {
	it("mounts correctly with empty props", () => {
		const wrapper = mount(<Accordion accordion_content={emptyContent.accordion_content} />);
		expect(wrapper.find(AccordionPage)).toHaveLength(0);
	});

	it("mounts correctly with fake props", () => {
		const wrapper = mount(<Accordion accordion_content={fakeContent.accordion_content} />);
		expect(wrapper.find(AccordionPage)).toHaveLength(3);
	});
});

describe("AccordionEditor component", () => {
	const fakeSetEditedContentOnChange =
		jest.fn().mockImplementation((key: string, contentToUpdate: AccordionPageProps[]) => {
			emptyContent.accordion_content = contentToUpdate;
		});
	beforeEach(() => {
		fakeSetEditedContentOnChange.mockClear();
	});

	it("mounts correctly with empty props", () => {
		const wrapper = mount(<AccordionEditor
			originalContent={emptyContent}
			editedContent={emptyContent}
			setEditedContentOnChange={fakeSetEditedContentOnChange}
		/>)
		expect(wrapper.find(".accordion-title-input")).toHaveLength(0);
	});

	it("mounts correctly with fake props", () => {
		const wrapper = mount(<AccordionEditor
			originalContent={fakeContent}
			editedContent={fakeContent}
			setEditedContentOnChange={fakeSetEditedContentOnChange}
		/>)
		expect(wrapper.find(".accordion-title-input")).toHaveLength(3);
	});

	it("updates correctly when add button is clicked on", () => {
		const wrapper = mount(<AccordionEditor
			originalContent={emptyContent}
			editedContent={emptyContent}
			setEditedContentOnChange={fakeSetEditedContentOnChange}
		/>)
		expect(emptyContent.accordion_content).toBeUndefined();
		wrapper.find(".accordion-add-new-button").simulate("click");
		expect(emptyContent.accordion_content).toHaveLength(1);
	});

	it("updates correctly when delete button is clicked on", () => {
		const wrapper = mount(<AccordionEditor
			originalContent={emptyContent}
			editedContent={emptyContent}
			setEditedContentOnChange={fakeSetEditedContentOnChange}
		/>)
		expect(emptyContent.accordion_content).toHaveLength(1);
		wrapper.find(".accordion-delete-button").first().simulate("click");
		expect(emptyContent.accordion_content).toHaveLength(0);
	});

	it.skip("setEditedContentOnChange updates editedContent correctly", () => {
		const wrapper = mount(<AccordionEditor
			originalContent={fakeContent}
			editedContent={fakeContent}
			setEditedContentOnChange={fakeSetEditedContentOnChange}
		/>)

		wrapper.find(".accordion-title-input").first().simulate("change", { target: { value: "Test" } });
		expect(emptyContent.accordion_content!![0].title).toEqual("Test");
	});
});