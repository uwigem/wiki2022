
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

// configure enzyme to work with React version 16
Enzyme.configure({ adapter: new Adapter() });

describe("App component", () => {
    it("mounts correctly", () => {
        mount(<App IEOREDGE={true}
            currYear={2019}
            firebase={null}
            ContentEditor={() => <></>} />);
    });

    /** 
     * We cannot test debug header when not on localhost because setting the url
     * does not work correctly.
     */
    it("shows a debug header when the route is localhost", () => {
        const wrapper = mount(<App IEOREDGE={true}
            currYear={2019}
            firebase={null}
            ContentEditor={() => <></>} />);
        expect(wrapper.find("DebugHeader").length).toEqual(1);
    });


});



// describe('<ConceptCard /> component', () => {
//     const generateExercise = jest.fn()
//         .mockImplementation((a, b) => { return { concept: a, type: b } });
//     const getInstruction = jest.fn()
//         .mockImplementation((a, b) => { return { concept: a, type: b } });
//     const title = "abc";
//     const key = 2;
//     const concept = "zxcv";

//     it('Mounts correctly with props', () => {
//         const wrapper = mount(<ConceptCard
//             title={title}
//             key={key}
//             concept={concept}
//             generateExercise={generateExercise}
//             getInstruction={getInstruction}
//         />);
//         expect(wrapper.state().expand).toBe(false);
//         const wrapperProps = wrapper.props();
//         expect(wrapperProps.title).toBe(title);
//         expect(wrapperProps.concept).toBe(concept);
//         wrapper.unmount();
//     });