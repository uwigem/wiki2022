import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { AddNewWidgetButton } from './AddNewWidgetButton';

// configure enzyme to work with React version 16
Enzyme.configure({ adapter: new Adapter() });

describe("AddNewWidgetButton component", () => {
    const fakeClick = jest.fn().mockImplementation(() => {
        return;
    });

    beforeEach(() => {
        fakeClick.mockClear();
    });

    it("mounts correctly", () => {
        mount(<AddNewWidgetButton onClick={fakeClick} />);
    });

    it("calls the click handler when clicked on", () => {
        const wrapper = mount(<AddNewWidgetButton onClick={fakeClick} />);
        expect(fakeClick.mock.calls.length).toEqual(0);
        wrapper.find("button").simulate("click");
        expect(fakeClick.mock.calls.length).toEqual(1);
    });
})