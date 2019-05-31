export default class NavbarData {
    /**
     * getData returns the navbar data
     */
    static getData() {
        return navbarData;
    }
}

export type NavbarType = {
    title: string,
    names: string[],
    links: string[]
}

let navbarData: NavbarType[] = [
    {
        title: "Home",
        names: ["Home", "UW 2017", "UW 2016", "UW 2015", "UW 2014", "UW 2013", "UW 2012", "UW 2011", "UW 2010", "UW 2009", "UW 2008"],
        links: [
            "http://2018.igem.org/Team:Washington",
            "http://2017.igem.org/Team:Washington",
            "http://2016.igem.org/Team:Washington",
            "http://2015.igem.org/Team:Washington",
            "http://2014.igem.org/Team:Washington",
            "http://2013.igem.org/Team:Washington",
            "http://2012.igem.org/Team:Washington",
            "http://2011.igem.org/Team:Washington",
            "http://2010.igem.org/Team:Washington",
            "http://2009.igem.org/Team:Washington",
            "http://2008.igem.org/Team:Washington"
        ]
    },
    {
        title: "Project",
        names: ["Project Description", "Design", "Experiments", "Notebook", "InterLab", "Model", "Results", "Parts", "Hardware"],
        links: ["/Description", "/Design", "/Experiments", "/Notebook", "/InterLab", "/Model", "/Results", "/Parts", "/Hardware"]
    },
    {
        title: "Human Practices",
        names: ["Overview", "Integrated HP", "Collaborations", "Education & Engagement", "Entrepreneurship", "HP Design", "Team Development"],
        links: ["/Human_Practices", "/Integrated_Human_Practices", "/Collaborations", "/Public_Engagement", "/Entrepreneurship", "/HP_Design", "/Team_Development"]
    },
    {
        title: "Safety",
        names: ["Safety"],
        links: ["/Safety"]
    },
    {
        title: "People",
        names: ["Team", "Attributions", "Sponsors", "Gallery"],
        links: ["/Team", "/Attributions", "/Sponsors", "/Gallery"]
    },
    {
        title: "Judging",
        names: ["Medal Requirements"],
        links: ["/Medal_Requirements"]
    },
];