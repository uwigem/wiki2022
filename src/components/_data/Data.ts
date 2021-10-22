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
		NAME: "Frank DiMaio, PhD",
		ROLE: "Mentor, Primary Investigator",
		PICTURE: "https://2021.igem.org/wiki/images/4/41/T--Washington--DiMaio.jpeg",
		FILTER: "Mentors",
		BIO: "Projects: Protein structure determination from low-resolution experimental data; Improved methods for computational modeling of protein conformations; Prediction and design of symmetric protein assemblies;"
	},

	{
		NAME: "Chris Cheng",
		ROLE: "Web Development, Design",
		PICTURE: "https://2021.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png",
		FILTER: "Web Development, Design",
		BIO: ""
	},
  {
		NAME: "Nicole Houppermans",
		ROLE: "Drylab",
		PICTURE: "https://2021.igem.org/wiki/images/5/5f/T--Washington--Nicole.jpeg",
		FILTER: "Drylab",
		BIO: "Nicole is a third year student at the University of Washington. She loves learning more about modeling biology and biochemistry. Outside of iGEM, she enjoys crocheting scarves and hats."
	},
  {
		NAME: "Benjamin Kuo",
		ROLE: "Human Practices",
		PICTURE: "https://2021.igem.org/wiki/images/4/40/T--Washington--Ben_Kuo_Photo.png",
		FILTER: "Human Practices",
    LINKEDIN: "www.linkedin.com/in/ben-kuo",
		BIO: "Originally from Texas, Ben is a third-year undergraduate student majoring in biochemistry and microbiology. Ben's focus this year was leading the Human Practices team and driving project direction. In his free time, Ben enjoys singing, gardening, and playing football."
	},
  {
		NAME: "Joey Liang",
		ROLE: "Wetlab",
		PICTURE: "https://2021.igem.org/wiki/images/f/fc/T--Washington--Joey-Liang.jpg",
		FILTER: "Wetlab",
    LINKEDIN: "https://www.linkedin.com/in/joey-liang",
		BIO: "Joey is a current junior in Bioengineering from Bellevue, WA. He is currently the Wetlab Subteam Manager for UW iGEM. In addition to iGEM, Joey has also been involved in research for the past 3.5 years. He plans to pursue medical school after graduation."
	},
  {
		NAME: "Chaytan Inman",
		ROLE: "Drylab",
		PICTURE: "https://2021.igem.org/wiki/images/4/41/T--Washington--Chayten_Inman.png",
		FILTER: "Drylab",
    LINKEDIN: "https://www.linkedin.com/in/chaytan-inman/",
    GITHUB: "https://github.com/chaytanc",
		BIO: "Hi! I am majoring in computer science because I believe in the power of outsourcing cognition to machines. I am equally intrigued by engineering biology and the exponential potential of changing ourselves in this way. I also love gardening!"
	},
  {
		NAME: "Conrad Yee",
		ROLE: "Fundraising",
		PICTURE: "https://2021.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png",
		FILTER: "Fundraising",
		BIO: "I am a business finance major interested in medicine and synthetic biology!"
	},
  {
		NAME: "Diana Dai",
		ROLE: "Web Development",
		PICTURE: "https://2021.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png",
		FILTER: "Web Development",
    LINKEDIN: "https://www.linkedin.com/in/diana-dai/",
    GITHUB: "https://github.com/MoSummers-dy",
		BIO: "Diana is a junior obtaining a BS in Computer Science. Her focus on the team was to produce the team Wikis. In her spare time, she enjoys playing video games, listening to music, and teaching kids from kindergarten to high school."
	},
  {
		NAME: "Jaden Stetler",
		ROLE: "Web Development, Human Practices",
		PICTURE: "https://2021.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png",
		FILTER: "Web Development, Human Practice",
    LINKEDIN: "https://www.linkedin.com/in/jadenstetler/",
		BIO: "I am a Computer Science major at UW involved in Web Development and previously involved with Human Practices."
	},
  {
		NAME: "Jennifer Tao",
		ROLE: "Web Development",
		PICTURE: "https://2021.igem.org/wiki/images/c/ce/T--Washington--Jennifer-Tao.png",
		FILTER: "Web Development",
    LINKEDIN: "https://www.linkedin.com/in/tingjia-tao-5bba31147/",
    GITHUB: "https://github.com/jentao",
		BIO: "Jennifer is a junior studying Computer Science. She is passionate about web development and software engineering. She also enjoys painting, dancing and playing video games."
	},
  {
		NAME: "Victor Shan",
		ROLE: "Web Development",
		PICTURE: "https://2021.igem.org/wiki/images/3/3c/T--Washington--Victor-Shan.png",
		FILTER: "Web Development",
    LINKEDIN: "https://www.linkedin.com/in/victorshanvs/",
    GITHUB: "https://github.com/VictorShan",
		BIO: "I am sophomore at UW's Paul G. Allen School of Computer Science.  On the iGEM team, I worked on the \"Join Us\" section on the homepage and the sidebar on the team page. I'm interested in making PWAs with machine learning.  I like listening to music and audiobooks on walks/runs and playing StarCraft 2."
	},
  {
		NAME: "Max Zhou",
		ROLE: "Web Development",
		PICTURE: "https://2021.igem.org/wiki/images/e/e1/T--Washington--MaxZhou.png",
		FILTER: "Web Development",
    LINKEDIN: "https://www.linkedin.com/in/yifan-zhou-99913217a/",
    GITHUB: "https://github.com/zhouyifan0904",
		BIO: "Max is from Hangzhou, China and is currently a senior studying computer science. He works on the Washington iGEM websites. Outside of iGEM he enjoys cooking and Ping Pong."
	},
  {
		NAME: "Delaney Wilde",
		ROLE: "Design, Adviser",
		PICTURE: "https://2021.igem.org/wiki/images/f/f4/T--Washington--Delaney-Wilde.jpg",
		FILTER: "Design, Adviser",
    LINKEDIN: "https://www.linkedin.com/in/delaneywilde",
		BIO: "Delaney is a junior majoring in Bioengineering and minoring in Math. She currently works on design and advises the team, and she was previously a simulations member as well. In addition to iGEM, Delaney participates in other research on campus, is on the Bioengineering Diversity Committe, and is the Treasurer of the Tau Beta Pi chapter at UW."
	},
  {
		NAME: "Forrest Hsu",
		ROLE: "Wetlab, Drylab, Human Practices",
		PICTURE: "https://2021.igem.org/wiki/images/d/d6/T--Washington--Forrest-Hsu.png",
		FILTER: "Wetlab, Drylab, Human Practices",
    LINKEDIN: "https://www.linkedin.com/in/forrest-hsu/",
    GITHUB: "https://github.com/HForrest",
		BIO: "Forrest is a current senior studying Molecular Biology. Outside of the lab, he plays baritone horn for the m9, dances, and bakes bread."
	},{
		NAME: "Jasmine Wee",
		ROLE: "Drylab, Design",
		PICTURE: "https://2021.igem.org/wiki/images/9/94/T--Washington--Jasmine-Wee.png",
		FILTER: "Drylab, Design",
    LINKEDIN: "www.linkedin.com/in/jasminewee7",
		BIO: "Hello! My reasons for joining iGEM is not only to learn more about biology, but being able to apply what I've learnt in class to real world problems. In my free time, I'm an amateur photographer and love exploring the outdoors."
	},{
		NAME: "Vrishabhadev Sathish Kumar",
		ROLE: "Drylab, Human Practices",
		PICTURE: "https://2021.igem.org/wiki/images/7/7c/T--Washington--Vrishabhadev-Sathish-Kumar.png",
		FILTER: "Drylab, Human Practices",
    LINKEDIN: "https://www.linkedin.com/in/v-s-k/",
    GITHUB: "https://github.com/vsk-1167",
		BIO: "Hey, Vrishab here!  Inspired by the intersections of CS and Data Science in synthetic biology and genetics, I am truly excited to explore and generate meaningful impacts on communities in need through iGEM!"
	},{
		NAME: "Karl Anderson",
		ROLE: "Adviser",
		PICTURE: "https://2021.igem.org/wiki/images/4/41/T--Washington--DiMaio.jpeg",
		FILTER: "Adviser",
    LINKEDIN: "https://www.linkedin.com/in/karlbanderson/",
		BIO: "Karl has been a member of Washington iGEM since 2017, and from 2019 onwards has continued as an advisor. He graduated UW in 2020, and now works at a company focusing on immunotherapy research. "
	},
  {
		NAME: "Shean Fu Phen",
		ROLE: "Design",
		PICTURE: "https://2021.igem.org/wiki/images/8/82/T--Washington--Shean-Fu-Phen.png",
		FILTER: "Design",
    LINKEDIN: "https://www.linkedin.com/in/shean-fu-phen/",
		BIO: "As a wet lab researcher turned designer, I work on the team's visuals. Having been on the team for two years, my favorite part of iGEM is the supportive community."
	},
  {
		NAME: "Christina Chen",
		ROLE: "Drylab, Wetlab, Fundraising",
		PICTURE: "https://2021.igem.org/wiki/images/0/0d/T--Washington--Christina-Chen.jpg",
		FILTER: "Drylab, Wetlab, Fundraising",
		BIO: "Christina is a graduating junior. Outside of iGEM, she’s an officer for AED Pre-health honors society and works with the Wang Lab in the CSE department, researching Skeletal Muscle Stem Cells. In her free time, she volunteers with COPE and enjoys playing tennis."
	},
  {
		NAME: "Ellen Xu",
		ROLE: "Wetlab, Synbio for Everyone",
		PICTURE: "https://2021.igem.org/wiki/images/1/19/T--Washington--EllenXu.png",
		FILTER: "Wetlab, Synbio for Everyone",
		BIO: "I joined iGEM to explore more about the Synthetic Biology field. It was excited to move to learn about computational Biology in this year's project."
	},
  {
		NAME: "Emily Xu",
		ROLE: "Design",
		PICTURE: "https://2021.igem.org/wiki/images/d/d1/T--Washington--EmilyXu.png",
		FILTER: "Design",
		BIO: "Emily Xu is an undergraduate at UW pursuing a B.S. in Molecular, Cellular, and Developmental Biology and a Data Science minor. In her free time, she enjoys drawing, hiking, and watching cooking videos. "
	},
  {
		NAME: "Jay Yung",
		ROLE: "Adviser",
		PICTURE: "https://2021.igem.org/wiki/images/8/81/T--Washington--JayYung.jpg",
		FILTER: "Adviser",
		BIO: "Jay has been involved with iGEM since 2018 and currently serves as an advisor. He graduated from UW in 2020 and currently studies photosynthesis with the Niyogi Lab at UC Berkeley."
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