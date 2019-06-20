import NavbarData, { NavbarType } from './NavbarData/NavbarData';
import { MAIN_PAGE } from './Constants';
import { ContentSingularData } from './ContentSingularData';

export default class Data {
    static getImgsToPrefetch(): string[] {
        return imgs;
    }

    static getContentData(): ContentData {
        return contentData;
    }

    static getDisplayConstants(pageTitle: string) {
        if (displayConstants.globalColor) {
            return displayConstants;
        } else {
            let pageSpecificString = this.getNavbarDataTitleFromLink(pageTitle);
            if (pageSpecificString === "") {
                return displayConstants;
            } else {
                let specificPage = displayConstants.pageSpecificColors[pageSpecificString];
                if (specificPage) {
                    return specificPage;
                } else {
                    return displayConstants;
                }
            }
        }
    }

    static getNavbarDataTitleFromLink(pageTitle: string): string {
        let returnString = "";
        NavbarData.getData().forEach((navItem: NavbarType) => {
            if (navItem.links.indexOf(pageTitle) > -1 ||
                navItem.names.indexOf(pageTitle.split("/")[1]) > -1) {
                returnString = navItem.title;
            }
        });
        return returnString;
    }
}

const imgs: string[] = [];

export type ContentHashMapping = {
    [idx: string]: ContentSingularData
}

export type ContentPageData = {
    hasSidebar: boolean
    contentOrder?: string[]
    content?: ContentHashMapping
}

export type ContentData = {
    [idx: string]: ContentPageData,
}

export type PageSpecificColors = {
    [idx: string]: {
        primaryColor: string,
        secondaryColor: string
    }
}

export type DisplayConstants = {
    primaryColor: string,
    secondaryColor: string,
    globalColor: boolean,
    pageSpecificColors: PageSpecificColors,
    logo: string,
    buttonHeight: string
}

const displayConstants: DisplayConstants = {
    primaryColor: "#420DAB",
    secondaryColor: "#6308b2",
    globalColor: false,
    pageSpecificColors: {
        Home: {
            primaryColor: "#FFFFFF",
            secondaryColor: "#FFFF00"
        },
        Project: {
            primaryColor: "#FF0000",
            secondaryColor: "#00FF00"
        }
    },
    logo: "http://2017.igem.org/wiki/images/e/e9/T--Washington--WLogo.png",
    buttonHeight: "16px"
}

const contentData: ContentData = {
    [MAIN_PAGE]: {
        hasSidebar: false,
        contentOrder: [],
        content: {

        }
    }
}