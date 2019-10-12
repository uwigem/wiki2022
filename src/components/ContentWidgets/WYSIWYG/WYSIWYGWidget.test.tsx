import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ContentSingularData } from '../../_data/ContentSingularData';
import { WYSIWYGWidget } from './WYSIWYGWidget';
import { WYSIWYGEditor } from './WYSIWYGEditor';
import { Editor } from 'react-draft-wysiwyg';

// configure enzyme to work with React version 16
Enzyme.configure({ adapter: new Adapter() });

const emptyContent: ContentSingularData = {};
const fakeContent: ContentSingularData = { wysiwyg_state: "{\"blocks\":[{\"key\":\"cbe6j\",\"text\":\"fake content\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}" }

describe("WYSIWYGWidget component", () => {
	it("mounts correctly with empty content", () => {
		const wrapper = mount(<WYSIWYGWidget wysiwyg_state={emptyContent.wysiwyg_state} />);
		expect(wrapper.find(Editor)).toHaveLength(0);
	});

	it.skip("mounts correctly with empty content", () => {
		const wrapper = mount(<WYSIWYGWidget wysiwyg_state={fakeContent.wysiwyg_state} />);
		expect(wrapper.find(Editor)).toHaveLength(1);
	});
})

describe("WYSIWYGEditor component", () => {
	const fakeSetEditedContentOnChange = jest.fn().mockImplementation((contentTitle: string, editedContent: string) => {
		return;
	});

	beforeEach(() => {
		fakeSetEditedContentOnChange.mockClear();
	});

	it("mounts correctly with empty content", () => {
		mount(<WYSIWYGEditor
			originalContent={emptyContent}
			editedContent={emptyContent}
			setEditedContentOnChange={fakeSetEditedContentOnChange} />);
	});

	it("mounts correctly with fake content", () => {
		mount(<WYSIWYGEditor
			originalContent={fakeContent}
			editedContent={fakeContent}
			setEditedContentOnChange={fakeSetEditedContentOnChange} />);
	});
})