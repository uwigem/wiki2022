import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { PdfViewer } from './PdfViewer';

// configure enzyme to work with React version 16
Enzyme.configure({ adapter: new Adapter() });

// TODO: Add more tests
describe.skip("PdfViewer component", () => {
	const fakeClick = jest.fn().mockImplementation(() => {
		return;
	});

	beforeEach(() => {
		fakeClick.mockClear();
	});

	it("mounts correctly", () => {
		mount(<PdfViewer onClick={fakeClick} />);
	});

	it("calls the click handler when clicked on", () => {
		const wrapper = mount(<PdfViewer onClick={fakeClick} />);
		expect(fakeClick.mock.calls.length).toEqual(0);
		wrapper.find("button").simulate("click");
		expect(fakeClick.mock.calls.length).toEqual(1);
	});
})
