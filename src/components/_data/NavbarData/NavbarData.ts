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
	links: string[],
	key: string
}

export const HomeLink = "https://2021.igem.org/Team:Washington";

let navbarData: NavbarType[] = [
	{
		title: "Archive",
		names: ["UW 2019", "UW 2018", "UW 2017", "UW 2016", "UW 2015", "UW 2014", "UW 2013", "UW 2012", "UW 2011", "UW 2010", "UW 2009", "UW 2008"],
		links: [
			"https://2019.igem.org/Team:Washington",
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
		],
		key: "archive"
	},
	{
		title: "Project",
		names: ["Project Description", "Engineering", "Contribution", "Implementation", "Experiments", "Notebook", "Model", "Results", "Parts"],
		links: ["/Description", "/Engineering", "/Contribution", "/Implementation", "/Experiments", "/Notebook", "/Model", "/Results", "/Parts"],
		key: "project"
	},
	{
		title: "Human Practices",
		names: ["Overview", "Implementation", "Collaborations", "Education & Communication"],
		links: ["/Human_Practices", "/Implementation", "/Collaborations", "/Communication"],
		key: "human_practices"
	},
	{
		title: "People",
		names: ["Team", "Attributions", "Sponsors"],
		links: ["/Team", "/Attributions", "/Sponsors"],
		key: "people"
	}
];