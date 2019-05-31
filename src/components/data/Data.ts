import NavbarData, { NavbarType } from './NavbarData/NavbarData';

export default class Data {
    private navbarData = new NavbarData();
    constructor() {
    }

    getNavbarData(): NavbarType[] {
        return this.navbarData.getData();
    }

    getImgsToPrefetch(): string[] {
        return imgs;
    }
}

const imgs: string[] = [];

// TODO: define type
const contentData = []