import NavbarData, { NavbarType } from './NavbarData/NavbarData';

export default class Data {
    static getImgsToPrefetch(): string[] {
        return imgs;
    }

    static getContentData(page: string): ContentPageData {
        return contentData[page];
    }
}

const imgs: string[] = [];

// TODO: TO BE DETERMINED
export type ContentSingularData = {
    [idx: string]: string
}

export type ContentPageData = {
    title: String,
    data: ContentSingularData[]
}

export type ContentData = {
    [idx: string]: ContentPageData,
    BLANK: ContentPageData
}

const contentData: ContentData = {
    BLANK: {
        title: "",
        data: [
            {}
        ]
    },
    "/": {
        title: "Main Page",
        data: [
            {
                // TBD
            }
        ]
    }
}