import NavbarData, { NavbarType } from './NavbarData/NavbarData';
import { COLORS } from './Constants';
import { ContentSingularData } from './ContentSingularData';

export const VERSION = "1.1.0";

export default class Data {
	static getImgsToPrefetch(): string[] {
		return imgs;
	}

	static getContentData(): ContentData {
		return contentData;
	}

	static getDisplayConstants() {
		return displayConstants;
	}

	static getTeamData() {
		return teamData;
	}

	static getSponsorsData() {
		return sponsorsData;
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

const imgs: string[] = [
	"https://2019.igem.org/wiki/images/5/51/T--Washington--WilliamKwok.jpg",
	"https://2019.igem.org/wiki/images/c/c5/T--Washington--AnastasiaNicolov.jpg",
	"https://2019.igem.org/wiki/images/8/8e/T--Washington--AngieDang.jpg",
	"https://2019.igem.org/wiki/images/3/35/T--Washington--ChiTruong.jpg",
	"https://2019.igem.org/wiki/images/2/2f/T--Washington--ClaraToo.jpg",
	"https://2019.igem.org/wiki/images/6/61/T--Washington--DelaneyWilde.jpg",
	"https://2019.igem.org/wiki/images/8/8d/T--Washington--ElgeneQuitevis.jpg",
	"https://2019.igem.org/wiki/images/4/41/T--Washington--ElisaTruong.jpg",
	"https://2019.igem.org/wiki/images/f/f2/T--Washington--EllenXu.jpg",
	"https://2019.igem.org/wiki/images/9/9e/T--Washington--EricYeh.jpg",
	"https://2019.igem.org/wiki/images/5/52/T--Washington--IshiraParikh.jpg",
	"https://2019.igem.org/wiki/images/8/81/T--Washington--JayYung.jpg",
	"https://2019.igem.org/wiki/images/5/53/T--Washington--JenniferTao.jpg",
	"https://2019.igem.org/wiki/images/7/72/T--Washington--JerryCao.jpg",
	"https://2019.igem.org/wiki/images/0/08/T--Washington--JoanneWong.jpg",
	"https://2019.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png",
	"https://2019.igem.org/wiki/images/6/65/T--Washington--MonetToschBerneburg.jpg",
	"https://2019.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png",
	"https://2019.igem.org/wiki/images/8/8b/T--Washington--AllisonLee.jpg",
	"https://2019.igem.org/wiki/images/6/67/T--Washington--AngelWong.jpg",
	"https://2019.igem.org/wiki/images/e/ef/T--Washington--KarenImmendorf.jpg",
	"https://2019.igem.org/wiki/images/b/b6/T--Washington--SidneyChan.jpg",
	"https://2019.igem.org/wiki/images/2/22/T--Washington--SijiaZhang.jpg",
	"https://2019.igem.org/wiki/images/5/5e/T--Washington--MaliaClark.jpg",
	"https://2019.igem.org/wiki/images/a/ac/T--Washington--NatalieMurren.jpg",
	"https://2019.igem.org/wiki/images/d/d2/T--Washington--GraceKim.jpg",
	"https://2019.igem.org/wiki/images/2/24/T--Washington--NiteshChetry.jpg",
	"https://2019.igem.org/wiki/images/9/9d/T--Washington--QuocTran.jpg",
	"https://2019.igem.org/wiki/images/e/ed/T--Washington--VarunSridhar.jpg",
	"https://2019.igem.org/wiki/images/3/31/T--Washington--VeraOkolo.jpg",
	"https://2019.igem.org/wiki/images/d/d3/T--Washington--VivianHuynh.jpg",
	"https://2019.igem.org/wiki/images/e/e2/T--Washington--HannahCheung.jpg",
	"https://2019.igem.org/wiki/images/4/43/T--Washington--MaxZhou.jpg",
	"https://2019.igem.org/wiki/images/d/d8/T--Washington--BrianHong.jpg",
	"https://2019.igem.org/wiki/images/5/51/T--Washington--LauraFreeman.jpg",
    "https://2019.igem.org/wiki/images/9/92/T--Washington--Wetlab_and_Simulations.png"
];

export type ContentHashMapping = {
	// If the key doesn't exist, it is possible for it to be undefined.
	[idx: string]: ContentSingularData | undefined
}

export type ContentPageData = {
	hasSidebar: boolean
	contentOrder?: string[]
	content?: ContentHashMapping
	MISC?: string
}

export type ContentData = {
	[idx: string]: ContentPageData
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

export type TeamData = {
	NAME: string,
	ROLE: string,
	PICTURE: string,
	LINKEDIN?: string,
	GITHUB?: string,
	WEBSITE?: string,
	FILTER: string,
	BIO: string,
	CUSTSIZE?: number,
	XPOS?: number,
	YPOS?: number
}[]

export type SponsorsData = {
	NAME: string,
	PICTURE: string,
	FILTER: string,
	XPOS?: number,
	YPOS?: number,
	CUSTSIZE?: number,
	LINK: string,
	BIO: string,
	SUBTEXT: string
}[];

const sponsorsData: SponsorsData = [
	{
		NAME: "UW Department of Biochemistry",
		PICTURE: "https://2021.igem.org/wiki/images/8/88/T--Washington--BioChemLogo.png",
		FILTER: "Eukaryote",
		LINK: "https://depts.washington.edu/biowww/",
		BIO: "",
		SUBTEXT: ""
	},
	{
		NAME: "UW Paul G. Allen School of Computer Science and Engineering",
		PICTURE: "https://2021.igem.org/wiki/images/1/1c/T--Washington--CSELogo.png",
		FILTER: "Eukaryote",
		LINK: "https://www.cs.washington.edu/",
		BIO: "",
		SUBTEXT: ""
	},
	{
		NAME: "Institute for Protein Design",
		PICTURE: "https://2021.igem.org/wiki/images/c/c7/T--Washington--IPDLogo.png",
		FILTER: "Eukaryote",
		LINK: "https://www.ipd.uw.edu/",
		BIO: "",
		SUBTEXT: ""
	},
	{
		NAME: "UW Department of Applied Math",
		PICTURE: "https://2021.igem.org/wiki/images/2/2c/T--Washington--amathlogo.png",
		FILTER: "Prokaryote",
		LINK: "https://amath.washington.edu/",
		BIO: "",
		SUBTEXT: ""
	},
	{
		NAME: "UW Department of Microbiology",
		PICTURE: "https://2021.igem.org/wiki/images/6/6a/T--Washington--Microbio.png",
		FILTER: "Prokaryote",
		LINK: "https://microbiology.washington.edu/",
		BIO: "",
		SUBTEXT: ""
	},
	{
		NAME: "Zulip",
		PICTURE: "https://2021.igem.org/wiki/images/0/00/T--Washington--Zuliplogo.png",
		FILTER: "Prokaryote",
		LINK: "https://zulipchat.com/",
		BIO: "",
		SUBTEXT: ""
	},
	{
		NAME: "IDT",
		PICTURE: "https://2021.igem.org/wiki/images/9/9e/T--Washington--IDTlogo.png",
		FILTER: "Prokaryote",
		LINK: "https://www.idtdna.com/",
		BIO: "",
		SUBTEXT: ""
	},
	{
		NAME: "Chipotle",
		PICTURE: "https://2021.igem.org/wiki/images/b/be/T--Washington--Chipotle.png",
		FILTER: "Prokaryote",
		LINK: "https://www.chipotle.com/",
		BIO: "",
		SUBTEXT: ""
	},
	{
		NAME: "Benchling",
		PICTURE: "https://2021.igem.org/wiki/images/8/82/T--Washington--Benchling.png",
		FILTER: "Prokaryote",
		LINK: "https://www.benchling.com/",
		BIO: "",
		SUBTEXT: ""
	},
	{
		NAME: "iGEM (iGEM Impact Grant)",
		PICTURE: "https://2021.igem.org/wiki/images/f/ff/T--Washington--igem_icon.svg",
		FILTER: "Prokaryote",
		LINK: "https://2021.igem.org/Teams/Grants/Impact",
		BIO: "",
		SUBTEXT: ""
	},
];

const teamData: TeamData = [
	{
		NAME: "William Kwok",
		ROLE: "Web Development Lead",
		PICTURE: "https://2019.igem.org/wiki/images/5/51/T--Washington--WilliamKwok.jpg",
		LINKEDIN: "https://linkedin.com/in/william-w-kwok",
		GITHUB: "https://github.com/kwokwilliam",
		WEBSITE: "https://williamk.info/?q=igem19",
		FILTER: "Web Dev, Leadership",
		BIO: "Coming from tropical Hawaii, William is a current senior obtaining a BS in Informatics. His focus on the team was leading the web development team to produce the team Wiki and scaling internal tooling for future development. He currently is a teaching assistant for Server Side Development, the Director of IT on the Informatics Undergraduate Association, and interned at Qualtrics this past summer. In his spare time, he enjoys playing video games, programming side projects, and going bouldering."
	},
	{
		NAME: "Anastasia Nicolov",
		ROLE: "Adviser",
		PICTURE: "https://2019.igem.org/wiki/images/c/c5/T--Washington--AnastasiaNicolov.jpg",
		FILTER: "Adviser",
		BIO: "Anastasia Nicolov is a bioreactor scientist at Just Biotherapeutics, a drug manufacturing company based in Seattle, WA. She graduated from the University of Washington in 2017 with a B.S. in Bioengineering and a Bachelor's of Music in Violin Performance. An advisor for both SoundBio iGEM and Team Washington, this is her sixth year being involved in iGEM and attending the Jamboree. Outside of work and iGEM, she enjoys playing in local orchestras, running her Etsy jewelry business, and traveling with her family."
	},
	{
		NAME: "Angie Dang",
		ROLE: "Design",
		PICTURE: "https://2019.igem.org/wiki/images/8/8e/T--Washington--AngieDang.jpg",
		FILTER: "Design",
		BIO: "Angie is a Washington native who recently graduated from the University of Washington with a double major in Biochemistry and Chemistry. After joining iGEM last year, she returned to help out with the Design team. She's an aspiring pharmacy student who spends her free time making digital art and watching mukbang videos."
	},
	{
		NAME: "Chi Truong",
		ROLE: "Fundraising Lead, Simulations, Design",
		PICTURE: "https://2019.igem.org/wiki/images/3/35/T--Washington--ChiTruong.jpg",
		FILTER: "Leadership, Simulations, Design",
		LINKEDIN: "https://www.linkedin.com/in/chi-truong-241461133/",
		BIO: "Born and raised in Vietnam, Chi Truong is currently a Junior in Biochemistry at the University of Washington. She came to UW iGEM to explore research and meet new people. She focuses on funding for the team. She also works with Simulations team to generate models using Rosetta and PyMOL. In her free time, she enjoys cooking, listening to music and reading history books.",
		CUSTSIZE: 110
	},
	{
		NAME: "Clara Too",
		PICTURE: "https://2019.igem.org/wiki/images/2/2f/T--Washington--ClaraToo.jpg",
		ROLE: "Design Lead, Fundraising",
		FILTER: "Design, Leadership, Fundraising",
		WEBSITE: "https://tooc.myportfolio.com/",
		BIO: "Clara Too is the UW iGEM Design Lead. She is an Interaction Design junior with an interest in exploring the intersection between science, medicine, and design. She is also involved with InterVarsity Undergrad Christian fellowship as a small group leader, and enjoys connecting with people on a deeper level. Other hobbies she has include playing the piano and guitar, doodling, and taking naps. Find her work below."
	},
	{
		NAME: "Delaney Wilde",
		PICTURE: "https://2019.igem.org/wiki/images/6/61/T--Washington--DelaneyWilde.jpg",
		ROLE: "Simulations, Design",
		FILTER: "Simulations, Design",
		BIO: "Delaney is a sophomore majoring in Bioengineering and minoring in Math. She joined iGEM to learn about molecular modeling, and on the simulations team, she used Rosetta to simulate protein structure. She was also responsible for designing graphics for the wiki and the materials for the industry panel, Sit Down with Synbio. If she has free time, she enjoys swimming and baking pies."
	},
	{
		NAME: "Elgene Quitevis",
		PICTURE: "https://2019.igem.org/wiki/images/8/8d/T--Washington--ElgeneQuitevis.jpg",
		ROLE: "Lab Scientist",
		FILTER: "Wetlab",
		BIO: "Elgene is a senior studying Molecular, Cellular & Developmental Biology and Biochemistry. He enjoys a wide variety of things like geeking out on all STEM-related things especially relating to the intersection between biology, technology, and engineering as well as conducting his own research outside of iGEM regarding somatosensory development in Zebrafish. When he’s not in school or in the lab, he also enjoys hanging out with friends, playing videogames, browsing the internet and among other things, collecting or sending memes to his friends.",
		LINKEDIN: "https://www.linkedin.com/in/elgene-john-quitevis-663746150"
	},
	{
		NAME: "Elisa Truong",
		PICTURE: "https://2019.igem.org/wiki/images/4/41/T--Washington--ElisaTruong.jpg",
		ROLE: "Web Developer",
		FILTER: "Web Dev",
		BIO: "Born in Redmond, raised in the birthplace of Costco (Kirkland), Elisa is a senior studying Informatics with a focus on software dev, HCI, and bioinformatics. She is a part of the web development team. She enjoys watching Netflix's, illustrating, and eating.",
		LINKEDIN: "https://linkedin.com/in/elisa-truong/",
	},
	{
		NAME: "Ellen Xu",
		PICTURE: "https://2019.igem.org/wiki/images/f/f2/T--Washington--EllenXu.jpg",
		BIO: "Ellen was born and raised in Beijing and she is currently a junior majoring in Biochemistry. She joined iGEM to learn wetlab techniques and explore more about synthetic Biology. Her role in iGEM is working in lab and together organizing the outreach events. In her spare time, she enjoys cooking, watching movies, and traveling.",
		ROLE: "Lab Scientist, Outreach",
		FILTER: "Outreach, Wetlab"
	},
	{
		NAME: "Eric Yeh",
		PICTURE: "https://2019.igem.org/wiki/images/9/9e/T--Washington--EricYeh.jpg",
		BIO: "Eric is a sophomore majoring in Computer Science and minoring in Neural Computation/Engineering. As a member of iGEM, he created simulations in Rosetta to improve protein design and helped develop a synthetic biology activity booklet/audiobook. In his free time, he enjoys playing violin and video games.",
		ROLE: "Outreach, Simulations",
		FILTER: "Outreach, Simulations"
	},
	{
		NAME: "Ishira Parikh",
		PICTURE: "https://2019.igem.org/wiki/images/5/52/T--Washington--IshiraParikh.jpg",
		BIO: "Ishira is a third year undergraduate student majoring in molecular biology and disability studies. This year, Ishira was primarily responsible for heading the development of the accessible synthetic biology curriculum. Outside of iGEM and her other academic responsibilities, Ishira enjoys photography editing, hiking, visual arts, and listening to live music.",
		ROLE: "Public Education Lead",
		FILTER: "Outreach, Leadership"
	},
	{
		NAME: "Jay Yung",
		PICTURE: "https://2019.igem.org/wiki/images/8/81/T--Washington--JayYung.jpg",
		BIO: "In his third year at the University of Washington, Jay is a plant biology major hoping to pursue a career in research. This is his second year on Washington iGEM and he has enjoyed the challenges associated with leading this years project. In his free time he enjoys playing music, dancing, watching performances, obsessing over world news, and looking at plants.",
		ROLE: "Project Manager, Wetlab Lead",
		FILTER: "Wetlab, Leadership"
	},
	{
		NAME: "Jennifer Tao",
		PICTURE: "https://2019.igem.org/wiki/images/5/53/T--Washington--JenniferTao.jpg",
		BIO: "Coming from XInjiang, China. Jennifer is currently a sophomore studying Computer Science. She focuses on programming the Wiki editor with the Web Development team. In her spare time, she enjoys painting, dancing tango, and playing card games.",
		GITHUB: "https://github.com/jentao",
		LINKEDIN: "https://www.linkedin.com/in/jennifer-tao-5bba31147/",
		ROLE: "Web Development",
		FILTER: "Web Dev"
	},
	{
		NAME: "Jerry Cao",
		PICTURE: "https://2019.igem.org/wiki/images/7/72/T--Washington--JerryCao.jpg",
		BIO: "Jerry is a sophomore majoring in Computer Science. This year, Jerry helped organize the team as the Operations Manager and worked on the wetlab aspect of the project. Outside of iGEM, Jerry enjoys listening to music, playing tennis, and working on fabrication projects. ",
		ROLE: "Operations Manager, Fundraising, Lab Scientist",
		FILTER: "Leadership"
	},
	{
		NAME: "Joanne Wong",
		PICTURE: "https://2019.igem.org/wiki/images/0/08/T--Washington--JoanneWong.jpg",
		BIO: "Joanne is currently a senior studying Chemical Engineering with a focus area in Bio & Biomedical Materials, Interfaces and Systems with a minor in Applied Mathematics. Coming from Hong Kong, she never had the chance to pursue her interest in science but finding out about the iGEM team allowed her to achieve that. Being a part of the iGEM team has not only allowed her to see if research is right for her, but also has allowed her to meet so many people with similar interests. This experience has only further confirmed that she would love to continue to work in the field of research in the near future.",
		LINKEDIN: "https://linkedin.com/in/joanneytwong",
		ROLE: "Lab Manager",
		FILTER: "Wetlab, Leadership"
	},
	{
		NAME: "Shean Fu Phen",
		PICTURE: "https://2019.igem.org/wiki/images/e/e0/T--Washington--SheanPham.jpg",
		BIO: "Shean Fu is a sophomore studying Physiology at the University of Washington. He is part of both wetlab and outreach in a bid to help translate the complicated science into something much easier to understand. Outside of lab he does a lot of archery and Wushu, as well as filming dance covers for a dance team.",
		ROLE: "Outreach, Lab Scientist",
		FILTER: "Outreach, Wetlab"
	},
	{
		NAME: "Monet Tosch-Berneburg",
		PICTURE: "https://2019.igem.org/wiki/images/6/65/T--Washington--MonetToschBerneburg.jpg",
		BIO: "Monet Tosch-Berneburg is an intended bio-chemistry major with a bioethics minor. She will be perusing an evolutionary genetics PhD. Currently, she is working with Washington iGEM's outreach subteam to help introduce young students to synthetic biology.",
		ROLE: "Outreach",
		FILTER: "Outreach"
	},
	{
		NAME: "Pacy Wu",
		PICTURE: "https://2019.igem.org/wiki/images/6/67/T--Washington--PacyWu.jpg",
		BIO: "Pacy was born and raised in Taiwan. She is currently a sophomore intending to major in computer science. In iGEM, she was involved with the simulations and fundraising team. During her free time, she enjoys watching TV shows, listening to music, and hanging out with friends.",
		ROLE: "Fundraising, Simulations",
		FILTER: "Fundraising, Simulations"
	},
	{
		NAME: "Allison Lee",
		PICTURE: "https://2019.igem.org/wiki/images/8/8b/T--Washington--AllisonLee.jpg",
		BIO: "Allison is a fourth-year undergraduate student studying Informatics. She was on the web development subteam and helped create the wiki. Outside of iGEM, she enjoys baking, hiking, and bouldering.",
		ROLE: "Web Developer",
		FILTER: "Web Dev"
	},
	{
		NAME: "Angel Wong",
		PICTURE: "https://2019.igem.org/wiki/images/6/67/T--Washington--AngelWong.jpg",
		BIO: "Angel is a senior at the University of Washington obtaining a B.S in Bioengineering and a B.S. in Biochemistry. She has been involved in iGEM her since her freshman year, serving as a presenter for the 2017 season and project administrative lead for the 2018 season. She is currently an adviser for the team and provides guidance for training members, staying organized, and navigating the iGEM competition.",
		ROLE: "Adviser",
		FILTER: "Adviser",
		LINKEDIN: "https://www.linkedin.com/in/angeltanwong/"
	},
	{
		NAME: "Karen Immendorf",
		PICTURE: "https://2019.igem.org/wiki/images/e/ef/T--Washington--KarenImmendorf.jpg",
		BIO: "Karen is a 4th year student at UW majoring in Molecular, Cellular, and Developmental Biology. She is currently work in the Center for Integrative Brain Research of Seattle Children's Research Institute in a lab that focuses on uncovering how gene mutations affect protein machinery in the glutamate synapse which may ultimately lead to autism spectrum disorders. She is interested the potential applications of Washington iGEM's project across fields of Research, Medicine, and Biotechnology and learning more about product development through speaking with stakeholders in these fields.",
		ROLE: "Integrated Human Practices Lead, Fundraising, Presenter",
		FILTER: "Integrated Human Practices, Fundraising, Presenters, Leadership",
		LINKEDIN: "https://www.linkedin.com/in/karenimmendorf/"
	},
	{
		NAME: "Sidney Chan",
		BIO: "Sidney is a 3rd year student at UW who is majoring in Biochemistry and has a strong interest in pursuing research in drug delivery systems and novel therapeutics. She became interested in the UW iGEM team’s project after learning more about the field of synthetic biology and its intersection with medicine and biotechnology, and joined the Business team to learn more about the considerations that go into marketing and managing a product with biotechnological applications.",
		PICTURE: "https://2019.igem.org/wiki/images/b/b6/T--Washington--SidneyChan.jpg",
		ROLE: "Integrated Human Practices",
		FILTER: "Integrated Human Practices"
	},
	{
		NAME: "Sijia Zhang",
		BIO: "Sijia is a Junior at the University of Washington that is majoring in Bioengineering. He is interested in the development of stem cell engineering and synthetic biology. Currently, He is working in the Kwon lab at the University of Washington. He has joined the business team to explore the market of current biotechnology that is related to what he is studying and researching on.",
		PICTURE: "https://2019.igem.org/wiki/images/2/22/T--Washington--SijiaZhang.jpg",
		ROLE: "Integrated Human Practices",
		FILTER: "Integrated Human Practices"
	},
	{
		NAME: "Malia Clark",
		BIO: "Malia is a third year undergraduate majoring in Biochemistry or Molecular, Cellular & Developmental Biology. Her interest in the biotechnology field and gene-editing technologies, as well as the idea of working alongside other undergraduates drew her to iGEM, where she joined the Wetlab subteam in hopes of learning additional lab techniques and developing research skills. Outside of iGEM, she enjoys playing tennis, video games, ping pong, hiking, and reading.",
		PICTURE: "https://2019.igem.org/wiki/images/5/5e/T--Washington--MaliaClark.jpg",
		ROLE: "Lab Scientist",
		FILTER: "Wetlab"
	},
	{
		NAME: "Natalie Murren",
		PICTURE: "https://2019.igem.org/wiki/images/a/ac/T--Washington--NatalieMurren.jpg",
		BIO: "Natalie is a Sophomore planning to major in Biochemistry. This year is her first year being apart of iGEM and the wetlab subteam. She has had the opportunity to learn about basic lab techniques while also running experiments and contributing to a bigger project. In the future she plans to learn even more about synthetic biology and its applications.",
		ROLE: "Lab Scientist",
		FILTER: "Wetlab"
	},
	{
		NAME: "Grace Kim",
		PICTURE: "https://2019.igem.org/wiki/images/d/d2/T--Washington--GraceKim.jpg",
		BIO: "Born and raised in the Greater Seattle Area, Grace is currently a junior majoring in Bioengineering. She joined iGEM to explore synthetic biology and meet new people. Besides researching, she enjoys learning about immunotherapy and food science, volunteering, hanging out with friends, and trying new foods.",
		ROLE: "Lab Scheduler",
		FILTER: "Wetlab, Leadership"
	},
	{
		NAME: "Nitesh Chetry",
		PICTURE: "https://2019.igem.org/wiki/images/2/24/T--Washington--NiteshChetry.jpg",
		BIO: "Nitesh is currently a junior pursuing a B.S. in Informatics. This year, he worked on the Web Development team to help build widgets that other team members used to upload data to the wiki site, and he also improved tools to help the content uploading process. Outside of iGEM, Nitesh works part time as a Web Developer for the University of Washington’s Student Technology Fee Program.",
		LINKEDIN: "https://www.linkedin.com/in/niteshchetry/",
		GITHUB: "https://github.com/niteshchetry",
		ROLE: "Web Developer",
		FILTER: "Web Dev"
	},
	{
		NAME: "Quoc Tran",
		PICTURE: "https://2019.igem.org/wiki/images/9/9d/T--Washington--QuocTran.jpg",
		BIO: "Quoc is a Junior at the University of Washington majoring in Biochemistry alongside a minor in Real Estate. He is currently participating in a research project through Washington iGEM in which they hope to develop a biosensor using chemically induced dimerization (CID) system. The project reflects his interests in understanding how everything works in tandem, not limited to just protein interactions, in creating more practical and effective products that will help people studying the complex nature around us.",
		LINKEDIN: "https://www.linkedin.com/in/quocktran/",
		ROLE: "Lab Scientist, Fundraising, Treasurer",
		FILTER: "Wetlab, Fundraising, Leadership"
	},
	{
		NAME: "Varun Sridhar",
		PICTURE: "https://2019.igem.org/wiki/images/e/ed/T--Washington--VarunSridhar.jpg",
		BIO: "Originally from Michigan, Varun is a junior majoring in Molecular, Cellular, and Developmental Biology. His main contributions to the team this season have been working on our project in the Wetlab as well as presenting at the Jamboree. When he isn't working in iGEM, Varun can be found researching asymmetric cell division in fruit fly neuroblasts or running through Seattle's beautiful streets.",
		ROLE: "Lab Scientist, Presenter",
		FILTER: "Wetlab, Presenters"
	},
	{
		NAME: "Vera Okolo",
		PICTURE: "https://2019.igem.org/wiki/images/3/31/T--Washington--VeraOkolo.jpg",
		BIO: "Vera is a senior at the University of Washington double majoring in Molecular, Cellular, & Developmental Biology and Medical Anthropolgy & Global Health. Her role in iGEM was the taking part in the wet lab component of our team. In her spare moments of free team time, she reads any and all genres of books, bakes macarons, and practices singing and playing the piano.",
		ROLE: "Fundraising",
		FILTER: "Fundraising"
	},
	{
		NAME: "Vivian Huynh",
		PICTURE: "https://2019.igem.org/wiki/images/d/d3/T--Washington--VivianHuynh.jpg",
		BIO: "Vivian is a third year undergraduate student, majoring in Materials Science and Engineering. As a member of IGEM, she helped develop outreach curriculum for the Synthetic Biology Activity booklet and helped create simulation models using Tellurium. In her free time, she enjoys 3D printing and spending time with family and friends.",
		ROLE: "Outreach",
		FILTER: "Outreach"
	},
	{
		NAME: "Hannah Cheung",
		BIO: "Hannah is a current junior at the University of Washington majoring in Computer Science. She has been actively working on iGEM through collaborating with other iGEM teams globally, making kinetic models, increasing the accessibility of the outreach curriculum, and presenting at the Jamboree this year. When not tutoring students in Python, Hannah enjoys dancing, figure skating, watching sci-fi TV shows and movies, and listening to K-pop music.",
		PICTURE: "https://2019.igem.org/wiki/images/e/e2/T--Washington--HannahCheung.jpg",
		ROLE: "Collaborations Lead, Outreach, Simulations, Presenter",
		FILTER: "Collaborations, Outreach, Simulations, Presenters, Leadership"
	},
	{
		NAME: "Max Zhou",
		BIO: "Max is from Hangzhou, China and is currently a junior in computer science and informatics. He worked on the wiki editing tools in the web development team. Outside of iGEM he enjoys cooking and Ping Pong.",
		PICTURE: "https://2019.igem.org/wiki/images/4/43/T--Washington--MaxZhou.jpg",
		ROLE: "Web Developer",
		FILTER: "Web Dev",
		GITHUB: "https://github.com/zhouyifan0904",
		LINKEDIN: "https://www.linkedin.com/in/max-zhou-99913217a/"
	},
	{
		NAME: "Brian Hong",
		PICTURE: "https://2019.igem.org/wiki/images/d/d8/T--Washington--BrianHong.jpg",
		BIO: "Brian is a second year University of Washington student planning to major in electrical engineering and neuroscience. He joined iGEM to learn more about synthetic biology and its potential applications. Along the way, he has acquired many valuable lab research skills. Outside of iGEM, he enjoys writing, reading, film, and practicing kendo.",
		ROLE: "Lab Scientist, Fundraising",
		FILTER: "Wetlab, Fundraising"
	},
	{
		NAME: "Laura Freeman",
		PICTURE: "https://2019.igem.org/wiki/images/5/51/T--Washington--LauraFreeman.jpg",
		BIO: "Laura is a senior studying informatics and human-computer interaction. Her focus was consulting with the web development team on UI and UX, and she created the design guidelines for this year's wiki. Right now, she also works part time as a product designer for a growing commute benefits provider called Luum. She's excited to be graduating in the end of 2019!",
		ROLE: "Web Developer",
		FILTER: "Web Dev",
		LINKEDIN: "http://www.linkedin.com/in/lxfreeman"
	},
	{
		NAME: "Simran Sidhu",
		PICTURE: "https://2019.igem.org/wiki/images/4/4d/T--Washington--SimranSidhu.jpg",
		BIO: "Simran is a sophomore intending to major in bioengineering. This year, Simran was primarily responsible for organizing outreach events with schools and the community and hosting Sit Down with Synbio. Outside of iGEM and her other academic responsibilities, Simran is an avid runner and enjoys exploring the trails of the Pacific Northwest.",
		ROLE: "Public Engagement Lead, Lab Scientist, Outreach",
		FILTER: "Leadership, Integrated Human Practices, Outreach, Wetlab"
	},
	{
		NAME: "Joshua Ip",
		PICTURE: "https://2019.igem.org/wiki/images/b/bb/T--Washington--JoshuaIp.jpg",
		BIO: "Joshua Ip is a computer science major with a background in bioengineering. After iGEM, he plans to pursue software engineering.",
		ROLE: "Simulations Lead",
		FILTER: "Leadership, Simulations"
	},
	{
		NAME: "Ed van Bruggen",
		BIO: "Originally from the bay area, Ed is now a junior at UW pursuing a major in physics. He was a lead for the Simulations team, where he taught computation methods for understanding biological systems with tools such as Rosetta and Tellurium. When he's not staying up all night programming you can find him playing music or cooking.",
		PICTURE: "https://2019.igem.org/wiki/images/e/e1/T--Washington--EdvanBruggen.jpg",
		ROLE: "Simulations Lead",
		FILTER: "Simulations, Leadership"
	},
	{
		NAME: "Yoshi Goto",
		BIO: "Yoshi graduated in 2018 from the University of Washington with a B.S. in Bioengineering and a minor in Applied Mathematics, specializing in Synthetic and Systems Biology. He has been involved in iGEM for four years through team Washington, starting as a team member and moving through different positions. He now works as a Director of Operations at SoundBio Lab, Seattle's Community Lab. He is also an adviser for the SoundBio high school team. He credits iGEM as a career changer that led him to focus on synthetic and system biology, and to be involved in the DIYBio world. He is also actively involved in After iGEM Committees, and represented the iGEM Foundation as a Representative at SynBioBeta 2019. He believes that iGEM can change students' lives and foster innovation in an exciting field of biotechnology.",
		PICTURE: "https://2019.igem.org/wiki/images/c/c1/T--Washington--YoshiGoto.jpg",
		ROLE: "Adviser",
		FILTER: "Adviser",
		LINKEDIN: "https://www.linkedin.com/in/yoshigoto/"
	},
	{
		NAME: "Karl Anderson",
		PICTURE: "https://2019.igem.org/wiki/images/e/e1/T--Washington--KarlAnderson.jpg",
		BIO: "Karl is a senior studying Biochemistry and Molecular Biology. This year he assisted the wetlab and project development teams to help design the project and review lab work. He has previously been a wetlab member and project manager. Outside of iGEM, he is a researcher in the Lidstrom Lab at UW, where he is engineering enzymes to develop novel carbon assimilation pathways in bacteria.",
		LINKEDIN: "https://www.linkedin.com/in/karlbanderson/",
		ROLE: "Adviser",
		FILTER: "Adviser"
	},
	{
		NAME: "Dr. Herbert Sauro",
		BIO: "Dr. Sauro’s lab has been involved in a number of areas in systems as well as synthetic biology. He imitated the development of SBOL, the synthetic biology open language which is becoming the de facto language for describing synthetic designs. In systems biology he has developed a number of software tools, and standards most recently a Python based kit called Tellurium. He was cofounder of the SBML development teach. His modeling research involves developing new robust methods to develop more reliable predictive models that can simulate diseases such as cancer. Recently, he was appointed to lead a large Center for Reproducible Biomedical Modeling which was also recently awarded by the NIH.",
		PICTURE: "https://2019.igem.org/wiki/images/8/8f/T--Washington--HerbertSauro.jpg",
		WEBSITE: "https://www.sys-bio.org/",
		ROLE: "University of Washington Department of Bioengineering",
		FILTER: "PIs",
		YPOS: 0.01
	},
	{
		NAME: "Dr. Liangcai Gu",
		BIO: "Dr. Gu's lab use quantitative protein interaction profiling to understand molecular recognition and guide computational protein design. They develop protein interaction sequencing technologies by coupling ‘protein barcoding’ techniques—e.g., molecular attachment of proteins to barcoding DNAs, display of proteins on phage or cell surfaces, and indirect barcoding of unlabeled proteins by using DNA barcoded affinity reagents such as antibodies—to massively parallel 'in situ DNA sequencing' to quantitate protein interactions at a single-molecule or single-cell level. One example of protein interaction sequencing is a single-molecular-interaction sequencing (SMI-seq) technology (Gu, et al., Nature, 2014) for large-scale molecular counting of proteins and complexes. Our current research interests include (1) engineering of ligand-responsive protein assemblies, (2) human protein interactome profiling and drug screening, and (3) functional profiling of B-cell and T-cell receptors.",
		PICTURE: "https://2019.igem.org/wiki/images/a/ad/T--Washington--LiangcaiGu.jpg",
		WEBSITE: "https://depts.washington.edu/biowww/pages/faculty-Gu.shtml",
		ROLE: "University of Washington Department of Biochemistry",
		FILTER: "PIs"
	}
];


const displayConstants: DisplayConstants = {
	primaryColor: COLORS.PURPLE.PRIMARY,
	secondaryColor: COLORS.PURPLE.SECONDARY,
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
}