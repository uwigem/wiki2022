import NavbarData, { NavbarType } from './NavbarData/NavbarData';

export default class Data {
    static getImgsToPrefetch(): string[] {
        return imgs;
    }

    static getContentData(page: string): ContentPageData {
        return contentData[page];
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

export type PageSpecificColors = {
    [idx: string]: {
        primaryColor: string,
        secondaryColor: string
    }
}

export type DisplayConstants = {
    primaryColor: string,
    secondaryColor: String,
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