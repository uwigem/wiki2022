import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ImgRowItem, ImagesInRow } from './ImagesInRow';
import { ImagesInRowEditor } from './ImagesInRowEditor';
import { ContentSingularData } from '../../_data/ContentSingularData';

// configure enzyme to work with React version 16
Enzyme.configure({ adapter: new Adapter() });

const fakeProps: ImgRowItem[] = [
    {
        imgLink: 'http://2018.igem.org/wiki/images/c/c0/T--Washington--Ingrid.png',
        imgCaption: 'Dr. Ingrid Pultz, Washington iGEM alum, PVP Biologics',
        imgAltTag: 'fake alt text 1',
        externalLink: 'fake ext link1'
    },
    {
        imgLink: 'http://2018.igem.org/wiki/images/5/5e/T--Washington--David.png',
        imgCaption: 'Dr. David Younger, Washington iGEM alum, A-Alpha Bio',
        imgAltTag: 'fake alt text 2',
        externalLink: 'fake ext link2'
    }
];

const fakePropsEmptyAltTag: ImgRowItem[] = [
    {
        imgLink: 'http://2018.igem.org/wiki/images/c/c0/T--Washington--Ingrid.png',
        imgCaption: 'Dr. Ingrid Pultz, Washington iGEM alum, PVP Biologics',
        imgAltTag: '',
        externalLink: 'fake ext link1'
    },
    {
        imgLink: 'http://2018.igem.org/wiki/images/5/5e/T--Washington--David.png',
        imgCaption: 'Dr. David Younger, Washington iGEM alum, A-Alpha Bio',
        imgAltTag: '',
        externalLink: 'fake ext link2'
    }
];

const fakePropsEmptyExtLink: ImgRowItem[] = [
    {
        imgLink: 'http://2018.igem.org/wiki/images/c/c0/T--Washington--Ingrid.png',
        imgCaption: 'Dr. Ingrid Pultz, Washington iGEM alum, PVP Biologics',
        imgAltTag: 'fake alt text 1',
        externalLink: ''
    },
    {
        imgLink: 'http://2018.igem.org/wiki/images/5/5e/T--Washington--David.png',
        imgCaption: 'Dr. David Younger, Washington iGEM alum, A-Alpha Bio',
        imgAltTag: 'fake alt text 2',
        externalLink: ''
    }
];

describe("ImagesInRow component", () => {
    const emptyProps: ImgRowItem[] = [];

    it("mounts correctly with no props", () => {
        mount(<ImagesInRow imagesInRow_items={emptyProps} />);
    });

    it("mounts correctly with fake props", () => {
        mount(<ImagesInRow imagesInRow_items={fakeProps} />);
    });

    it("generates correct image row item content", () => {
        const wrapper = mount(<ImagesInRow imagesInRow_items={fakeProps} />);
        expect(wrapper.find(".img-row-item").length).toEqual(fakeProps.length);
        expect(wrapper.find(".img-row-image").length).toEqual(fakeProps.length);
        fakeProps.map((fakeImgRowItem: ImgRowItem, i: number) => {
            expect(wrapper.find(".img-row-image").at(i).prop("src")).toEqual(fakeImgRowItem.imgLink);
            expect(wrapper.find(".img-row-caption").at(i).text()).toEqual(fakeImgRowItem.imgCaption);
            expect(wrapper.find(".img-row-image").at(i).prop("alt")).
                toEqual(fakeImgRowItem.imgAltTag);
            expect(wrapper.find(".img-row-item").at(i).find("figure").find("a").prop("href")).
                toEqual(fakeImgRowItem.externalLink);
        });
    });

    /** caption should replace empty alt tag */
    it("generates correct image row item content w/ empty alt tag", () => {
        const wrapper = mount(<ImagesInRow imagesInRow_items={fakePropsEmptyAltTag} />);
        fakeProps.map((fakeImgRowItem: ImgRowItem, i: number) => {
            expect(wrapper.find(".img-row-image").at(i).prop("alt")).
                toEqual(fakeImgRowItem.imgCaption);
        });
    });

    /** image link should replace empty external link */
    it("generates correct image row item content w/ empty external link", () => {
        const wrapper = mount(<ImagesInRow imagesInRow_items={fakePropsEmptyExtLink} />);
        fakeProps.map((fakeImgRowItem: ImgRowItem, i: number) => {
            expect(wrapper.find(".img-row-item").at(i).find("figure").find("a").prop("href")).
                toEqual(fakeImgRowItem.imgLink);
        });
    });
});

describe("ImagesInRowEditor component", () => {
    const fakeOriginalContent: ContentSingularData = { imagesInRow_items: undefined };
    const fakeEditedContent: ContentSingularData = { imagesInRow_items: undefined };
    const fakeSetEditedContentOnChange =
        jest.fn().mockImplementation((contentToUpdate: ImgRowItem[]) => {
            fakeEditedContent.imagesInRow_items = contentToUpdate;
        });

    it("mounts correctly w/ empty props", () => {
        mount(<ImagesInRowEditor
            originalContent={fakeOriginalContent}
            editedContent={fakeEditedContent}
            setEditedContentOnChange={fakeSetEditedContentOnChange} />)
    });

    it("mounts correctly with edited fake props", () => {
        fakeEditedContent.imagesInRow_items = fakeProps;
        const wrapper = mount(<ImagesInRowEditor
            originalContent={fakeOriginalContent}
            editedContent={fakeEditedContent}
            setEditedContentOnChange={fakeSetEditedContentOnChange} />)
        expect(wrapper.find('.img-row-item').length).toEqual(fakeProps.length);
    });

    it("setEditedContentOnChange updates editedContent", () => {
        fakeSetEditedContentOnChange(fakeProps);
        const wrapper = mount(<ImagesInRowEditor
            originalContent={fakeOriginalContent}
            editedContent={fakeEditedContent}
            setEditedContentOnChange={fakeSetEditedContentOnChange} />)
        expect(wrapper.find('.img-row-item').length).toEqual(fakeProps.length);
    });
});