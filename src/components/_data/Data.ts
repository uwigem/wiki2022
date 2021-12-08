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
        NAME: "Arnav Jolly",
        ROLE: "Human Practices, Fundrasing",
        PICTURE: "https://2021.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png",
        FILTER: "Human Practices, Fundrasing",
        BIO: ""
    },
    {
        NAME: "Anjul Bansal",
        ROLE: "Human Practices",
        PICTURE: "https://2021.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png",
        FILTER: "Human Practices",
        BIO: ""
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
        NAME: "Chaytan Inman",
        ROLE: "Drylab",
        PICTURE: "https://2021.igem.org/wiki/images/4/41/T--Washington--Chayten_Inman.png",
        FILTER: "Drylab",
        LINKEDIN: "https://www.linkedin.com/in/chaytan-inman/",
        GITHUB: "https://github.com/chaytanc",
        BIO: "Hi! I am majoring in computer science because I believe in the power of outsourcing cognition to machines. I am equally intrigued by engineering biology and the exponential potential of changing ourselves in this way. I also love gardening!"
    },
    {
        NAME: "Chris Cheng",
        ROLE: "Web Development, Design",
        PICTURE: "https://2021.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png",
        FILTER: "Web Development, Design",
        BIO: ""
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
        NAME: "Darren Denq",
        ROLE: "Drylab",
        PICTURE: "https://2021.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png",
        FILTER: "Drylab",
        BIO: ""
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
        NAME: "Joey Liang",
        ROLE: "Wetlab",
        PICTURE: "https://2021.igem.org/wiki/images/f/fc/T--Washington--Joey-Liang.jpg",
        FILTER: "Wetlab",
        LINKEDIN: "https://www.linkedin.com/in/joey-liang",
        BIO: "Joey is a current junior in Bioengineering from Bellevue, WA. He is currently the Wetlab Subteam Manager for UW iGEM. In addition to iGEM, Joey has also been involved in research for the past 3.5 years. He plans to pursue medical school after graduation."
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
        NAME: "Lin Jaichen",
        ROLE: "Wetlab",
        PICTURE: "https://2021.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png",
        FILTER: "Wetlab",
        BIO: ""
    },
    {
        NAME: "Lucinda Lu",
        ROLE: "Wetlab",
        PICTURE: "https://2021.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png",
        FILTER: "Wetlab",
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
        NAME: "Forrest Hsu",
        ROLE: "Wetlab, Drylab, Human Practices",
        PICTURE: "https://2021.igem.org/wiki/images/d/d6/T--Washington--Forrest-Hsu.png",
        FILTER: "Wetlab, Drylab, Human Practices",
        LINKEDIN: "https://www.linkedin.com/in/forrest-hsu/",
        GITHUB: "https://github.com/HForrest",
        BIO: "Forrest is a current senior studying Molecular Biology. Outside of the lab, he plays baritone horn for the m9, dances, and bakes bread."
    },
    {
        NAME: "Jasmine Wee",
        ROLE: "Drylab, Design",
        PICTURE: "https://2021.igem.org/wiki/images/9/94/T--Washington--Jasmine-Wee.png",
        FILTER: "Drylab, Design",
        LINKEDIN: "www.linkedin.com/in/jasminewee7",
        BIO: "Hello! My reasons for joining iGEM is not only to learn more about biology, but being able to apply what I've learnt in class to real world problems. In my free time, I'm an amateur photographer and love exploring the outdoors."
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
        NAME: "Vrishabhadev Sathish Kumar",
        ROLE: "Drylab, Human Practices",
        PICTURE: "https://2021.igem.org/wiki/images/7/7c/T--Washington--Vrishabhadev-Sathish-Kumar.png",
        FILTER: "Drylab, Human Practices",
        LINKEDIN: "https://www.linkedin.com/in/v-s-k/",
        GITHUB: "https://github.com/vsk-1167",
        BIO: "Hey, Vrishab here!  Inspired by the intersections of CS and Data Science in synthetic biology and genetics, I am truly excited to explore and generate meaningful impacts on communities in need through iGEM!"
    },
    {
        NAME: "Shean Fu Phen",
        ROLE: "Design",
        PICTURE: "https://2021.igem.org/wiki/images/8/82/T--Washington--Shean-Fu-Phen.png",
        FILTER: "Design",
        LINKEDIN: "https://www.linkedin.com/in/shean-fu-phen/",
        BIO: "As a wet lab researcher turned designer, I work on the team's visuals. Having been on the team for two years, my favorite part of iGEM is the supportive community."
    },
    // Advisors
    {
        NAME: "Delaney Wilde",
        ROLE: "Design, Adviser",
        PICTURE: "https://2021.igem.org/wiki/images/f/f4/T--Washington--Delaney-Wilde.jpg",
        FILTER: "Design, Adviser",
        LINKEDIN: "https://www.linkedin.com/in/delaneywilde",
        BIO: "Delaney is a junior majoring in Bioengineering and minoring in Math. She currently works on design and advises the team, and she was previously a simulations member as well. In addition to iGEM, Delaney participates in other research on campus, is on the Bioengineering Diversity Committe, and is the Treasurer of the Tau Beta Pi chapter at UW."
    },
    {
        NAME: "Jay Yung",
        ROLE: "Adviser",
        PICTURE: "https://2021.igem.org/wiki/images/8/81/T--Washington--JayYung.jpg",
        FILTER: "Adviser",
        BIO: "Jay has been involved with iGEM since 2018 and currently serves as an advisor. He graduated from UW in 2020 and currently studies photosynthesis with the Niyogi Lab at UC Berkeley."
    },
    {
        NAME: "Karl Anderson",
        ROLE: "Adviser",
        PICTURE: "https://2021.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png",
        FILTER: "Adviser",
        LINKEDIN: "https://www.linkedin.com/in/karlbanderson/",
        BIO: "Karl has been a member of Washington iGEM since 2017, and from 2019 onwards has continued as an advisor. He graduated UW in 2020, and now works at a company focusing on immunotherapy research. "
    },
    {
        NAME: "Yoshi Goto",
        ROLE: "Advisor",
        PICTURE: "https://2021.igem.org/wiki/images/d/d1/T--Washington--HLogo1.png",
        FILTER: "Advisor",
        BIO: "Description/Intro needed",
    },
    // Mentors
    {
        NAME: "Frank DiMaio, PhD",
        ROLE: "Mentor, Primary Investigator",
        PICTURE: "https://2021.igem.org/wiki/images/4/41/T--Washington--DiMaio.jpeg",
        FILTER: "Mentors",
        BIO: "Projects: Protein structure determination from low-resolution experimental data; Improved methods for computational modeling of protein conformations; Prediction and design of symmetric protein assemblies;"
    },
    {
        NAME: "Dr. Gregor Reid",
        ROLE: "Mentor",
        PICTURE: "https://2021.igem.org/wiki/images/d/d1/T--Washington--HLogo1.png",
        FILTER: "Mentor",
        BIO: "Mentored the team to develop our probiotic-related probiotic project concept.",
    },
    {
        NAME: "Dr. Jordan Bisnaz",
        ROLE: "Mentor",
        PICTURE: "https://2021.igem.org/wiki/images/d/d1/T--Washington--HLogo1.png",
        FILTER: "Mentor",
        BIO: "Mentored the team to develop our probiotic-related probiotic project concept and advised our team to pursue a non-probiotic method of remediation.",
    },
    {
        NAME: "Jaime Paprich",
        ROLE: "Mentor",
        PICTURE: "https://2021.igem.org/wiki/images/d/d1/T--Washington--HLogo1.png",
        FILTER: "Mentor",
        BIO: "Description/Intro needed",
    },
    {
        NAME: "Dr Joe Wichmann",
        ROLE: "Mentor",
        PICTURE: "https://2021.igem.org/wiki/images/d/d1/T--Washington--HLogo1.png",
        FILTER: "Mentor",
        BIO: "Description/Intro needed",
    },
    {
        NAME: "Dr. Mindy Smith",
        ROLE: "Mentor",
        PICTURE: "https://2021.igem.org/wiki/images/d/d1/T--Washington--HLogo1.png",
        FILTER: "Mentor",
        BIO: "Description/Intro needed",
    },
    {
        NAME: "Dr. Jesse Zalatan",
        ROLE: "Mentor",
        PICTURE: "https://2021.igem.org/wiki/images/d/d1/T--Washington--HLogo1.png",
        FILTER: "Mentor",
        BIO: "Description/Intro needed",
    },
    {
        NAME: "Polly Olsen",
        ROLE: "Mentor",
        PICTURE: "https://2021.igem.org/wiki/images/d/d1/T--Washington--HLogo1.png",
        FILTER: "Mentor",
        BIO: "Description/Intro needed",
    },
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

const contentData: any = {
  "Attributions" : {
    "content" : {
      "187ca0d46696" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p><span style=\"color: rgb(0,0,0);font-size: 16px;\"><strong>Prof. Frank Dimaio</strong>, Assistant Professor, Department of Biochemistry, UW Institute of Protein Design</span></p>\n"
      },
      "1bfcc25262f0" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">These organizations donated to Washington iGEM and personnels helped coordinate the donations, making it possible for us to pursue and complete this project. </span></p>\n<ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>Jennifer Worrell</strong>, Department of Computer Science at UW, Director of Finance and Administration </span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>Trisha Davis</strong>, Department of Biochemistry, Professor and Chair</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>Zulfiya Lafi</strong>, Department of Biochemistry at UW, Administrator</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>Lance Stewart</strong>, Institute for Protein Design at UW, Chief Strategy and Operation Officers</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>Marcus Dahmen</strong>, Program Operations Analyst, Department of Biochemistry – Institute for Protein Design  </span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>Bernard Deconinck</strong>, Department of Applied Mathematics at UW, Professor and Chair of Applied Mathematics, Adjunct Professor of Mathematics</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>Katherine McDermott</strong>, Department of Applied Mathematics at UW, Administrator</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>Jeff Bowers</strong>, Department of Microbiology at UW School of Medicine, Finance- Operations Manager</span></li>\n</ul>\n"
      },
      "1f8c3f7d343" : {
        "header_content" : "Member Contributions",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "5bb2ceacced7" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">The following Administrative Staff assisted us immensely with interfacing our lab with the greater university body.</span></p>\n<ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>Zulfiya Lafi</strong>, Administrator, Department of Biochemistry</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>Tonya Alan Hirtzel</strong>, Assistant to the Chair, Department of Biochemistry</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>Cynthia Acuario</strong>, Program Operations Analyst, Department of Biochemistry</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>John Doan</strong>, Budget/Fiscal Analyst, Department of Biochemistry</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>Tana Knight</strong>, Budget/Fiscal Analyst, Department of Biochemistry</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>Prof. Trisha Davis</strong>, Professor and Chair, Department of Biochemistry</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>Tina Nguyen</strong>, Budget/Fiscal Analyst, Department of Biochemistry – Institute for Protein Design </span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>Marcus Dahmen</strong>, Program Operations Analyst, Department of Biochemistry – Institute for Protein Design  </span></li>\n</ul>\n"
      },
      "6609b5dd5c7" : {
        "header_content" : "Modeling",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "6bfce4c44ce6" : {
        "header_content" : "Wetlab",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "77b261a9cb78" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p><strong>Prof. Jan Roelof van der Meer, </strong>Professor, Department of Fundamental Microbiology, University of Lausanne</p>\n<ul>\n<li>Assisted with modeling arsenic kinetics</li>\n</ul>\n<p><strong>Prof. Frank Dimaio</strong>, Assistant Professor, Department of Biochemistry, UW Institute of Protein Design</p>\n<ul>\n<li>Provided assistance and guidance with Rosetta/PyMol&nbsp;</li>\n</ul>\n<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);font-size: 16px;\"><strong>Prof. Herbert Sauro</strong>, Professor, Bioengineering, Associate Professor, Electrical and Computer Engineering</span></p>\n<ul>\n<li style=\"margin-left:0px;\"><span style=\"color: rgb(0,0,0);font-size: 16px;\">Assistance with initial kinetics modeling </span></li>\n</ul>\n"
      },
      "84acb7c4002" : {
        "header_content" : "Fundraising",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "86e5ef94a" : {
        "header_content" : "Human Practices",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "87d96a2131ca" : {
        "header_content" : "Administration",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "a99b361fb6d" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p><strong>Delaney Wilde, </strong></p>\n<ul>\n<li>Assisted the team with project development, graphic design, and operational affairs</li>\n</ul>\n<p><strong>Karl Anderson</strong></p>\n<ul>\n<li>Assisted the team in project development, wetlab affairs, and operational affairs</li>\n</ul>\n<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);font-size: 16px;font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto;\"><strong>Yoshi Goto</strong></span></p>\n<ul>\n<li style=\"margin-left:1.5em;\"><span style=\"color: rgb(0,0,0);font-size: 16px;font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto;\">Assisted the team with project development and operational affairs</span></li>\n</ul>\n"
      },
      "b474dd31430" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p></p>\n<p><strong>Prof. Liangcai Gu</strong>, Assistant Professor, Department of Biochemistry, UW Institute of Protein Design</p>\n<p><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\"><strong>UW Biofab</strong>, Department of Electrical and Computer Engineering</span>&nbsp;</p>\n<ul>\n<li>Conducted transformation and plasmid verification</li>\n</ul>\n<p><strong>Anna Lauko</strong>, PhD Student, <span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">Baker's Lab, UW </span>Institute of Protein Design</p>\n<ul>\n<li>Provided advice for gene design and construction, as well as overall workflow for proof of concept</li>\n</ul>\n<p><strong>Dr. Sun Li, </strong>Gu's Lab, Department of Biochemistry</p>\n<ul>\n<li>Provided assistance for wetlab experiments</li>\n</ul>\n<p><strong>Dr. Pan Yuxin,</strong> Gu's Lab, Department of Biochemistry</p>\n<ul>\n<li>Provided assistance for wetlab experiments and advice for SDS PAGE</li>\n</ul>\n"
      },
      "c459d8ab1b6" : {
        "banner_content" : {
          "bannerText" : "Attributions",
          "imageBlur" : 0,
          "imageLink" : "",
          "imageTopX" : 0,
          "imageTopY" : 0,
          "imageZoom" : 100,
          "textColor" : "BLACK",
          "textSize" : 10
        },
        "header_priority" : 1,
        "type" : "BANNER"
      },
      "ce3a0b9c59d2" : {
        "header_content" : "Collaborations",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "d770f4968dc5" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p><strong>Dr. Gregor Reid</strong></p>\n<ul>\n<li>Mentored the team to develop our probiotic-related probiotic project concept.</li>\n</ul>\n<p><strong>Dr. Jordan Bisnaz</strong></p>\n<ul>\n<li style=\"margin-left:1.5em;\">&nbsp;<span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">Mentored the team to develop our probiotic-related probiotic project concept</span> and advised our team to pursue a non-probiotic method of remediation.</li>\n</ul>\n<p><strong>Jamie Paparich</strong></p>\n<ul>\n<li><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">Advised our team by providing information about our project context and connecting us to additional stakeholders implicated in the Northport remediation.</span></li>\n</ul>\n<p><strong>Dr. Joe Wichmann</strong></p>\n<ul>\n<li>Advised our team by providing information about our project context, suggesting modifications to our water-based biofilm reactor project concept.</li>\n</ul>\n<p><strong>Dr. Mindy Smith</strong></p>\n<ul>\n<li>Advised our team by providing information about human-health consequences of heavy metal accumulation, suggesting modifications to our soil-based rhizoremediation project concept.</li>\n</ul>\n<p><strong>Dr. Jesse Zalatan</strong></p>\n<ul>\n<li>Attended our lecture, provided information about his research in relation to synthetic biology.</li>\n</ul>\n<p><strong>Polly Olsen</strong></p>\n<ul>\n<li>Tribal Liason for the Burke Museum of Natural History and Culture, provided information about indigenous considerations.</li>\n</ul>\n"
      },
      "e8e12706d62" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p><strong>Waterloo iGEM</strong></p>\n<p><strong>FDR_HB iGEM</strong></p>\n<p><strong>Synbio for Everyone</strong>&nbsp;</p>\n<ul>\n<li>Synbio for Everyone is a non-profit organization located in Washington State originally created for Washington iGEM 2019, who provided us with educational material for our Solving Global Problems Workshop. Synbio for Everyone consists of students from a variety of majors who work on improving synthetic biology education accessibility and reducing educational equity gaps in STEM by writing curriculum and conducting educational outreach events.&nbsp;</li>\n</ul>\n"
      },
      "ed56f627245d" : {
        "header_content" : "Principal Investigators",
        "header_priority" : 1,
        "type" : "HEADER",
        "wysiwyg_content" : "<h1>Principal Investigators</h1>\n"
      },
      "f3420d1271" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p><strong>Benjamin Kuo</strong></p>\n<ul>\n<li>HP Manager</li>\n<li style=\"margin-left:1.5em;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">Main team meeting leader</span></li>\n<li>Initiated collaboration with Waterloo iGEM, FDR_HB, and Synbio for Everyone</li>\n<li>Presenter for workshops and outreach events.&nbsp;</li>\n<li>Preliminary research of problem context in the Upper Columbia River region</li>\n<li>Researched remediation techniques</li>\n<li style=\"margin-left:1.5em;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">Bioethical and Environmental considerations</span>&nbsp;</li>\n<li>Communicated with human practices stakeholders Dr. Wichmann, Dr. Smith, and Dr. Zalatan</li>\n</ul>\n<p><strong>Arnav Jolly</strong></p>\n<ul>\n<li>Human Practices Member</li>\n<li>Fundraising Member</li>\n<li>Conducted human practices research</li>\n<li>Did grant proposal review</li>\n</ul>\n<p><strong>Anjul Bansal</strong></p>\n<ul>\n<li>Human Practices Member</li>\n<li>Conducted human practices research</li>\n</ul>\n<p><strong>Nicole Houppermans</strong></p>\n<ul>\n<li>Drylab Kinetic Modeling Member</li>\n<li>Worked on creating kinetic models</li>\n<li>Lead collaboration with FDR_HB</li>\n<li>Lead the design and writing of the kinetic modeling section of the wiki</li>\n<li>Created Tellurium tutorial video</li>\n</ul>\n<p><strong>Darren Denq</strong></p>\n<ul>\n<li>Drylab Kinetic Modeling Member</li>\n<li>Worked on creating kinetic models</li>\n<li>Created code for conducing parameter scans</li>\n<li>Conducted and analyzed parameter scans</li>\n<li>Created graphs for the kinetic modeling sections of the wiki and presentation</li>\n</ul>\n<p><strong>Chaytan Inman</strong></p>\n<ul>\n<li>Drylab Kinetic Modeling Member</li>\n<li>Worked on creating kinetic models</li>\n<li>Lead creation of presentation video</li>\n<li>Created equations for the analysis of the amount of arsenic accumulation predicted by our kinetic model.</li>\n</ul>\n<p><strong>Joey Liang</strong></p>\n<ul>\n<li>Wetlab Manager</li>\n<li>Led communication with wetlab mentors, including Anna Lauko, Dr. Gu, and Dr. Sun.&nbsp;</li>\n<li>Led wetlab team meetings and design of wetlab experiments&nbsp;</li>\n<li>Managed lab access and ordering of lab supplies</li>\n<li>Optimized gene sequences and primer design for transformation</li>\n<li>Performed in person labwork: SDS-PAGE, Metal Tolerance&nbsp;</li>\n<li>Worked on wetlab part of parts registry, safety document, and experiments&nbsp;</li>\n</ul>\n<p><strong>Christina Chen</strong></p>\n<ul>\n<li>Fundraising Manager</li>\n<li>Worked on recruiting &amp; maintaining contact with sponsors</li>\n<li>Managed finances of our team and purchases</li>\n<li>Wetlab Member</li>\n<li>Performed in person labwork: Autoinduction, SDS-PAGE, Metal Tolerance</li>\n<li>Drylab Protein Modeling Member</li>\n<li>Lead the modification of the protein PBR</li>\n</ul>\n<p><strong>Jasmine Wee</strong></p>\n<ul>\n<li>Drylab Protein Modeling Member</li>\n<li>Design Member</li>\n<li>Edited and created graphs for the production of the project proposal video</li>\n<li>Lead the design of the modified version of the protein metallothionein</li>\n</ul>\n<p><strong>Lin Jiachen</strong></p>\n<ul>\n<li>Wetlab Member</li>\n<li>Designed overexpression of MTS and bicistronic gene constructs</li>\n<li>Optimized gene sequences and ordered genes via IDT</li>\n<li>Worked on designing the regulation pathway for MTs involving arsR</li>\n<li>Liaised with Biofab for transformation and verification of plasmids</li>\n<li>Performed in person lab work: Autoinduction, Protein extraction, SDS PAGE, Metal Tolerance</li>\n<li>Lead collaboration with FDR_HB</li>\n<li>Worked on wetlab section of the wiki and presentation as well as Parts Registry</li>\n</ul>\n<p><strong>Lucinda Lu</strong></p>\n<ul>\n<li>Wetlab Member</li>\n<li>Collaborated to lead creation of Promotional video</li>\n<li>Collaborated to lead creation of presentation video</li>\n<li>Worked on wetlab results analysis</li>\n<li>Helped run Metal tolerance assay</li>\n</ul>\n<p style=\"text-align:left;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\"><strong>Ellen Xu</strong></span></p>\n<ul>\n<li style=\"margin-left:1.5em;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">Wetlab Member</span>&nbsp;</li>\n<li>Worked on project design and wetlab design</li>\n</ul>\n<p><strong>Conrad Yee</strong></p>\n<ul>\n<li>Fundrasing Member</li>\n<li>Wrote grant proposals to support funding for the team.</li>\n</ul>\n<p><strong>Chris Cheng</strong></p>\n<ul>\n<li>Design member, Webdev Co-Lead</li>\n<li>Designed Homepage of the wiki, and improved design of wiki editor</li>\n</ul>\n<p><strong>Jaden Stetler</strong></p>\n<ul>\n<li>Webdev Co-Lead</li>\n<li>Improved wiki editor and custom wiki component functionality</li>\n<li>Implemented wiki navigation and sponsor page</li>\n</ul>\n<p><strong>Jennifer Tao</strong></p>\n<ul>\n<li>Webdev Co-Lead</li>\n<li>Improved wiki editor</li>\n<li>Implemented Team page</li>\n<li>Managed custom editor and access permissions</li>\n</ul>\n<p><strong>Victor Shan</strong></p>\n<ul>\n<li>Webdev Co-Lead</li>\n<li>Implemented Homepage CSS and fill with content from team. Import Homepage model and render using threeJS</li>\n<li>Implemented widget selector and grid layout component for editor.</li>\n</ul>\n<p><strong>Delaney Wilde</strong></p>\n<ul>\n<li>Design Member</li>\n<li>Helped with the design of project logo</li>\n<li>Worked on creating illustrations for the wiki</li>\n<li>Advisor</li>\n</ul>\n<p><strong>Emily Xu</strong></p>\n<ul>\n<li>Design Member</li>\n<li>Helped with the design of project logo</li>\n<li>Worked on creating illustrations for the wiki.</li>\n</ul>\n"
      },
      "f648b138febf" : {
        "header_content" : "Advisers",
        "header_priority" : 1,
        "type" : "HEADER"
      }
    },
    "contentOrder" : [ "c459d8ab1b6", "ed56f627245d", "187ca0d46696", "f648b138febf", "a99b361fb6d", "86e5ef94a", "d770f4968dc5", "6bfce4c44ce6", "b474dd31430", "6609b5dd5c7", "77b261a9cb78", "ce3a0b9c59d2", "e8e12706d62", "1f8c3f7d343", "f3420d1271", "84acb7c4002", "1bfcc25262f0", "87d96a2131ca", "5bb2ceacced7" ],
    "hasSidebar" : false
  },
  "Collaborations" : {
    "content" : {
      "02547a44250" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>Our human practices team initially sought this collaboration with FDR_HB due to the similarity in our project areas, and we decided that it would be in both of our teams' best interests to pursue a partnership. Our human practices subteams communicated frequently through email and met online through Zoom on July 22nd, August 6th, and September 3rd to discuss how our human practices teams could benefit each others' projects.</p>\n<h5><span style=\"font-size: 18px;\"><strong>7/22/2021</strong></span></h5>\n<p>During this meeting, we introduced ourselves and shared our current progress on our respective projects. We were able to learn more about the context of FDR_HB's project through this meeting:</p>\n<ul>\n<li>Their project is to create a solution for rapid, in-field detection of cadmium for use in the cacao farming industry, due to the elevated concentrations of cadmium present in potassium-rich fertilizers. Their ideal product would be a dipstick that utilizes cadmium-chelating proteins. Their current solution was designed as a live-culture shaking incubator that would provide information about cadmium presence after a lengthy duration of incubation.</li>\n</ul>\n<p></p>\n<p>Once we contextualized their team's project, our human practices team was able to relay FDR_HB's needs to our lab subteams to see if they were able to assist FDR_HB.</p>\n<h5><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 18px;\"><strong>8/5/2021</strong></span>&nbsp;</h5>\n<p>During this meeting, our teams discussed how our human practices needs could be met by the other.</p>\n<ul>\n<li>FDR_HB was in need of a mathematical modeling mentor, so our team provided a high-level overview of our modeling process to their math modeling lead. In addition, our wetlab subteam was able to troubleshoot and provide feedback about the potential use of a dipstick assay. Lastly, Washington iGEM's human practices subteam was able to communicate with our stakeholders to determine whether a rapid-time assay similar to the eventual product FDR_HB iGEM would create would be of use in a large-scale remediation setting.</li>\n<li>Washington iGEM was in need of feedback from stakeholders in the agricultural industry to determine if RhizoMet could be feasibly implemented in the agricultural industry. Our team was also able to request Spanish-speaking translators for Washington iGEM's sister organization Synbio for Everyone.</li>\n</ul>\n<h5><span style=\"font-size: 18px;\"><strong>9/3/2021</strong></span></h5>\n<p>During this meeting, our human practices teams met to provide updates.&nbsp;</p>\n<p><strong>FDR_HB:</strong> \"This past Wednesday we have been able to meet with the people the FDR_HB team is currently in contact with in regard to cacao, and we have asked them if there may be an arsenic issue in the soil. They, unfortunately, answered that they believe that there is no significant issue, but they did mention that there are many other heavy metals that have found their way into the soil, and may therefore be of concern.\"</p>\n<p>Although there was no significant presence of arsenic in the soil in the Peruvian cacao industry, the confirmation that FDR_HB's stakeholders gave indicated that RhizoMet had a potential future application in the agricultural industry.</p>\n<p><strong>Washington iGEM: </strong>\"Although cadmium is not the main driver of remediation within the town of Northport, WA, there may be other opportunities to implement a rapid-time cadmium-detection assay in other industrial smelting sites in Washington, such as in the Everett or Tacoma ASARCO smelter sites. Heavy metal concentrations are elevated in all areas of these remediation sites, so selectivity is not needed during remediation, but a cadmium-detection assay could be used to quickly verify that sites are cadmium-free after initial remediation.\"</p>\n<p>Without this collaboration, Washington iGEM's human practices team would not have been able to access information from FDR_HB's stakeholders and we would not have been able to fully examine the implications of our project.&nbsp;</p>\n<p></p>\n"
      },
      "1a3b302606f8" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>Upon meeting with FDR_HB, we learned that they were wanting to start to create a mathematical model of their project, but they did not have any experience with modeling, so they reach out to us to ask for our advice. We arranged a zoom meeting between our mathematical modeling teams in which we described how we started creating our kinetic models. We described how we first started learning more about kinetic modeling by finding published models, examining the equations they use, and using that experience to learn about how to build our own models. We also described to them about how we were building our kinetic model based off of a specific paper, \"Mechansitic Modeling of Genetic Circuits for ArsR Arsenic Regulation\" by Dr. Berset and colleagues. Through sharing this with them, we encouraged FDR_HB's math modeling team to start looking for published models that have similar aspects to their proposed project design. We also discussed how we were having issues with finding parameters for our model due to not having lab access. Additionally, FDR_HB also asked us about what program we were using for our model, so we introduced them to the python environment which we used, Tellurium.</p>\n<p>This opportunity to give advice to FDR_HB was also an excellent opportunity for our team because we wished to gain more experience with teaching others how to create synthetic biology models. In order to help others learn how to model synthetic biology systems, we created a tutorial video on how to use Tellurium, a python environment that is designed for modeling synthetic biology systems. In order to improve our tutorial video, we decided to sent FDR_HB our video and asked them to give us feedback on what we could improve. The video file that we sent them is located below.</p>\n"
      },
      "1fc79b704ac" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>Their feedback on the video was that it was easy to understand and provided valuable information. They suggested that we give more explanation on how the rates of the reactions modeled in the video were determined. They described how it might not be clear to someone with less experience in kinetic modeling how the rates of the reactions are derived. Based on the feedback from FDR_HB, we plan on adding more information about the reaction rates used in our model to the tutorial video.&nbsp;</p>\n<p>Additionally, our math modeling teams also had a zoom meeting recently to discuss how our projects have developed. We described to them the progress that we had made with our kinetic models. Their project is a two year long project, so they were still working on starting their model and working on developing their project. Because they will be continuing with their project, we plan on keeping contact with FDR_HB and continuing to discuss our projects with each other.</p>\n"
      },
      "22bbc3eba552" : {
        "exampleImage_imageLink" : "https://2021.igem.org/wiki/images/5/50/T--Washington--FDR_HB_Screenshot.png",
        "exampleImage_percentageSize" : 50,
        "exampleImage_subtitle" : "Meeting with FDR_HB iGEM",
        "type" : "IMAGE"
      },
      "24eaf640096" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>Waterloo: We collaborated with Waterloo iGEM on the project design aspect of our project. We held 2 video calls over the term to discuss Waterloo's 2020 project, REMINE, which was similar to our project this year, and to assist each others’ human practices and web development teams.</p>\n<h5><strong>4/17/2021</strong></h5>\n<p>Our teams met to discuss our current projects and Washington iGEM was interested in using Waterloo iGEM's previous project experience as a source of mentorship. Our team was able to ask for advice on our initial project concept and were able to receive valuable knowledge that Waterloo iGEM's learned over the 2020 season.&nbsp;</p>\n<h5><strong>8/6/2021</strong></h5>\n<p>Waterloo iGEM was able to meet with our team to discuss their career panel outreach event, which we were able to market and share. Additionally, <span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">Washington iGEM was able to help troubleshoot an issue Waterloo iGEM's web development team was encountering displaying content on their team's wiki.</span>&nbsp;</p>\n<p></p>\n"
      },
      "291cf4e21bf" : {
        "banner_content" : {
          "bannerText" : "Collaborations",
          "imageBlur" : 0,
          "imageLink" : "",
          "imageTopX" : 0,
          "imageTopY" : 0,
          "imageZoom" : 100,
          "textColor" : "BLACK",
          "textSize" : 10
        },
        "type" : "BANNER"
      },
      "34ac7f3938a1" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>Our human practices team was also able to connect FDR_HB to Washington iGEM's sister organization, <strong>Synbio for Everyone</strong>, which was created during the 2019 iGEM season in an effort to promote access to synthetic biology education and reduce educational equity gaps in STEM by creating educational Synthetic Biology curriculum and conducting educational outreach events and panels. FDR_HB iGEM was able to translate Synbio for Everyone's curriculum in order to make their educational material more accessible to underserved schools, which became an increasingly pertinent issue during the COVID-19 pandemic.</p>\n"
      },
      "4148541459ba" : {
        "header_content" : "Wetlab",
        "header_priority" : 2,
        "type" : "HEADER"
      },
      "53ffcf6b169" : {
        "header_content" : "Works Cited",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "57305ea3be12" : {
        "header_content" : "Waterloo",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "5bacad62b800" : {
        "header_content" : "Mathematical Modeling",
        "header_priority" : 2,
        "type" : "HEADER"
      },
      "64d0240eb0" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>We decided to collaborate with FDR_HB because their project design has similar themes to our own. They are working on designing a cadmium based biosensor to detect cadmium levels in fish and are working on creating a cadimium based biosensor to detect cadmium levels in cacao plants. This is similar to our own project design of using accumulating arsenic in soil, so we decide to collaborate with our mathematical modeling, plasmid design, and stakeholders. We initally met over zoom as large groups on July 22 and Aug 6 to start our partnership. Over the next few months, we met as more individualized subteams to discuss specific aspects of our projects with each other.</p>\n"
      },
      "812ed1192327" : {
        "header_content" : "Education & Communication",
        "header_priority" : 2,
        "type" : "HEADER"
      },
      "a61246f155c1" : {
        "grid_layout" : {
          "gridLayout" : [ [ 0, 0, 1, 1, 1 ] ],
          "widgets" : [ {
            "content" : {
              "exampleImage_imageLink" : "https://2021.igem.org/wiki/images/thumb/0/05/T--Washington--Wetlab_Collab.png/1090px-T--Washington--Wetlab_Collab.png",
              "exampleImage_percentageSize" : 70,
              "exampleImage_subtitle" : "Screenshot of Meeting"
            },
            "type" : "IMAGE"
          }, {
            "content" : {
              "wysiwyg_content" : "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 12pt;font-family: Arial;\">To gain a better understanding of each team’s project design for a meaningful collaboration, Washington iGEM’s wet lab team met with FDR_HB’s synbio team. From the meeting, we learnt that the results of our intended experiments would go a long way in improving our respective project design. FDR_HB is interested in designing a heavy metal accumulation system within yeast. This coincides with the ongoing experimental plan Washington has to verify the efficacy of our arsenic accumulation system within E.coli that involves the co-expression of a transport protein and a modified metallothionein. Thus Washington iGEM has agreed to share our results with FDR_HB Washington and this information could help FDR_HB to decide if they would like to co-express transport protein with a metal sequestering protein for their metal accumulation design. On the other hand, Washington iGEM is keen on eventually having our proteins be expressed under the control of a constitutive promoter. This is similar to the current design of the cell free detection system FDR_HB, and they have also referred us to the 2020 Puerto Rico iGEM team project design for further inspiration. Hence we believe that the verification of their plasmid design would also be beneficial to Washington iGEM eventually.</span><span style=\"font-family: Arial;\"> </span></p>\n"
            },
            "type" : "WYSIWYG_EDITOR"
          } ]
        },
        "type" : "GRID_LAYOUT",
        "wysiwyg_content" : "<p></p>\n"
      },
      "ac99186c503" : {
        "type" : "VIDEO",
        "video_videoLink" : "https://2021.igem.org/wiki/images/a/a4/T--Washington--Education_Tellurium_Tutorial_video.mp4",
        "video_videoWidthPercentage" : 75
      },
      "c4e1c3be4ccf" : {
        "header_content" : "FDR_HB",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "e72335f3de42" : {
        "header_content" : "Human Practices",
        "header_priority" : 2,
        "type" : "HEADER"
      },
      "ec126b185ddd" : {
        "imagesInRow_items" : [ {
          "externalLink" : "",
          "imgAltTag" : "",
          "imgCaption" : "4/17/2021 Meeting with Waterloo iGEM",
          "imgLink" : "https://2021.igem.org/wiki/images/a/a1/T--Washington--Waterloo_Screenshot1.png"
        }, {
          "externalLink" : "",
          "imgAltTag" : "",
          "imgCaption" : "8/6/2021 Meeting with Waterloo iGEM",
          "imgLink" : "https://2021.igem.org/wiki/images/e/ea/T--Washington--Waterloo_Screenshot2.png"
        } ],
        "type" : "IMAGES_IN_ROW"
      },
      "f90bfb79563" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>We collaborated with two teams this year, FDR_HB and Waterloo. We helped each other with mathematical modeling, laboratory work, and provided a direct line of contact between our human practices stake holders.&nbsp;</p>\n"
      },
      "fdab3b1b68d7" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>[1] Berset, Y., Merulla, D., Joublin, A., Hatzimanikatis, V., &amp; van der Meer, J. R. (2017). Mechanistic Modeling of Genetic Circuits for ArsR Arsenic Regulation. ACS synthetic biology, 6(5), 862-874. Doi: 10.1021/acssynbio.6b00364</p>\n"
      }
    },
    "contentOrder" : [ "291cf4e21bf", "f90bfb79563", "c4e1c3be4ccf", "22bbc3eba552", "64d0240eb0", "5bacad62b800", "1a3b302606f8", "ac99186c503", "1fc79b704ac", "4148541459ba", "a61246f155c1", "e72335f3de42", "02547a44250", "812ed1192327", "34ac7f3938a1", "57305ea3be12", "ec126b185ddd", "24eaf640096", "53ffcf6b169", "fdab3b1b68d7" ],
    "hasSidebar" : true
  },
  "Communication" : {
    "content" : {
      "0c188b841225" : {
        "pdfViewer_pdfHeightPixel" : 700,
        "pdfViewer_pdfLink" : "https://2021.igem.org/wiki/images/c/c2/T--Washington--Bioen_215_Presentation_Final.pdf",
        "pdfViewer_pdfWidthPercentage" : 100,
        "type" : "PDF_VIEWER"
      },
      "0e80614544b1" : {
        "banner_content" : {
          "bannerText" : "Education and Communication",
          "imageBlur" : 0,
          "imageLink" : "",
          "imageTopX" : 0,
          "imageTopY" : 0,
          "imageZoom" : 100,
          "textColor" : "BLACK",
          "textSize" : 10
        },
        "type" : "BANNER"
      },
      "155026e3d" : {
        "header_content" : "Solving Global Problems Workshop",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "2f527ff632e6" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>When our kinetic modeling team was developing our kinetic model, we decided to use the python environment Tellurium for creating our model. When working with Tellurium, we found that the program was easier to learn and more intuitive than many other modeling programs, and that this program can serve as a great way to introduce people to learning how to develop biological models. Because building a basic model does not require any complex processes, we also think that this program is great for people who don't have a background in programming. As a result, we decided to create a tutorial showing how to build a basic model in Tellurium. The video can be seen below.</p>\n"
      },
      "35c627d572dd" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>We gave an introductory lecture to an Introductory Bioengineering class, BIOEN 215, at the University of Washington. Our goals were to:</p>\n<ul>\n<li>Introduce the field of synthetic biology to future industry leaders</li>\n<li>Allow students to engage critical thinking skills by brainstorming potential applications of synthetic biology</li>\n<li style=\"margin-left:1.5em;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto;\">Advertise our upcoming <em>Solving Global Problems</em> workshop</span>&nbsp;</li>\n<li>Invite guest professor Jesse Zalatan to discuss his research in relation to synthetic biology.</li>\n<ul>\n<li>Jesse Zalatan studies the physical organizing principles of biological networks in systems such as cell signaling, metabolism, and gene regulation. His lab uses a variety of methods from fields including physical organic chemistry, mechanistic enzymology, biochemistry, and synthetic biology. Jesse did his graduate work at Stanford University from 2002-2008 with Dan Herschlag, where he addressed questions surrounding the mechanism and evolution in <span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">enzyme-catalyzed phosphoryl transfer reactions.</span> He also developed CRISPR-Cas tools for programmable control of gene expression networks.</li>\n</ul>\n</ul>\n"
      },
      "6a21c6de8c" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>After our initial Introduction to Synthetic Biology Lecture, we were able to hold our Solving Global Problems Workshop in collaboration with Synbio for Everyone, where we introduced a series of problems and held group brainstorming activities.</p>\n"
      },
      "87f4fdfaebe" : {
        "pdfViewer_pdfHeightPixel" : 700,
        "pdfViewer_pdfLink" : "https://2021.igem.org/wiki/images/e/e1/T--Washington--Solving_Problems.pdf",
        "pdfViewer_pdfWidthPercentage" : 100,
        "type" : "PDF_VIEWER"
      },
      "91ea1f96eb0" : {
        "type" : "VIDEO",
        "video_videoLink" : "https://2021.igem.org/wiki/images/a/a4/T--Washington--Education_Tellurium_Tutorial_video.mp4",
        "video_videoWidthPercentage" : 65
      },
      "9be9c049c3" : {
        "header_content" : "Introduction to Synthetic Biology Lecture",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "b151d32b66d" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>For teaching others how to use Tellurium, we decided to use a video format so that we could actively show the code being created. From using a video format, we can also distribute the video on platforms that are more likely to reach a wider audience.&nbsp;</p>\n<p>In order to improve our video, we reached out to another iGEM team, FDR_HB, and asked if they could give us feedback on the video. After watching the video, they suggested that we spend more time explaining how the reaction rates of the reactions used in the model were determined. Giving a better explanation of how the rates were derived will help viewers who do not have experience with reaction kinetics. Based on FDR_HB's feedback, we plan on editing the video to include a better explanation of the reaction rates.&nbsp;</p>\n<p>Because many iGEM teams develop kinetic models to support their projects, our Tellurium tutorial video can be used by future iGEM teams. Many teams who might not have programming experience will benefit greatly from using Tellurium for building their models because building a basic model in Tellurium does not require knowledge of python or programming experience, iGEM teams can watch our tutorial video to learn more about Tellurium and determine if using Tellurium would be a good fit for their project.</p>\n"
      },
      "e52a0e33d5a8" : {
        "header_content" : "Tellurium Tutorial Video",
        "header_priority" : 1,
        "type" : "HEADER"
      }
    },
    "contentOrder" : [ "0e80614544b1", "e52a0e33d5a8", "2f527ff632e6", "91ea1f96eb0", "b151d32b66d", "9be9c049c3", "35c627d572dd", "0c188b841225", "155026e3d", "6a21c6de8c", "87f4fdfaebe" ],
    "hasSidebar" : false
  },
  "Contribution" : {
    "content" : {
      "1207202bf" : {
        "banner_content" : {
          "bannerText" : "Contribution",
          "imageBlur" : 0,
          "imageLink" : "https://2021.igem.org/wiki/images/5/5e/T--Washington--page_header.png",
          "imageTopX" : 0,
          "imageTopY" : 0,
          "imageZoom" : 100,
          "textColor" : "WHITE",
          "textSize" : 10
        },
        "type" : "BANNER"
      },
      "2d18af94c2b4" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<h4>Modified MTIA: <a href=\"http://parts.igem.org/Part:BBa_K4023000\" target=\"_self\"><span style=\"color: rgb(0,43,184);background-color: rgb(255,255,255);font-family: arial, sans-serif;\">BBa K4023000</span></a>&nbsp;</h4>\n<p>Upon looking through the iGEM registry of parts, we noticed that <span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">MTIA human metallotheonein</span> has not been characterized by other team previously. Hence our work on <span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">MTIA human metallotheonein</span> would provide helpful information for future who also wish to use the protein for their projects. This year, we <span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">focused on modifying MTIA human metallotheonein to improve its specificity to Arsenite to increase its efficiency in remediating Arsenite. </span>Based on protein modelling results, the 7 binding sites of modified MTIA human metallotheonein all have higher binding affinity to Arsenite. Preliminary findings shows that the modified MTIA results in similar arsenic tolerance as wildtype MTIA and wildtype 4MT2, hence while further experimentations are required, there is great promise in the ability of the modified MTIA to sequester arsenic at a greater capacity. he details regarding drylab and wetlab experimentations with the modified MTIA are well documented in our wiki and the part registry (linked in section heading). The documentation could provide useful information on the both the wildtype and modified versions of th protein for furture use by other teams.&nbsp;</p>\n<h4 style=\"text-align:left;\">glpF:</h4>\n<p><span style=\"font-family: Arial;\">We intended to express glpF in our arsenic remediation system to mitigate the limiting effects of transport of arsenite into <em>E.coli</em>. Thus we referred to </span><a href=\"http://parts.igem.org/Part:BBa_K190028\" target=\"_blank\"><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: 12.35;font-family: Arial;\">iGEM09_Groningen</span></a><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: 12.35;font-family: Arial;\"> for the part sequence and optimized it for expression in <em>E.coli </em>IDT codon optimization tool.<em> </em>Based on the codon optimization algorithm on Benchling, we reduced the number of rare codons and uridine content, while keeping the GC content the same. More information could be found in the </span></p>\n<h4>glpF-rbs-Modified MTIA</h4>\n<p>Additionally, we have also designed a composite part that contains a glpF anf a Modified MTIA connected by a RBS. From the preliminrary findings, the addition of glpF to increase transport of Arsenite into E.coli did not decrease bacteria tolerance to the heavy metal. This eliminates the concern that coexpressing glpF and therefore increasing Arsenite concentration in E.coli would reduce E.coli tolerance towards Arsenite and result in a reduced capacity for arsenite remediation. Thus this finding bodes well for future experimentations by Washington iGEM or other teams keen on trying this particular bicistronic construct for arsenite remediation.&nbsp;</p>\n"
      },
      "36539e3824f" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>Throughout the course of our project, we have created many aspects which can be helpful for future iGEM teams. This includes new parts to the registry and optimization of old ones, kinetic modelling, and a Tellerium tutorial.&nbsp;</p>\n"
      },
      "3847edd6bac" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>[1] Berset, Y., Merulla, D., Joublin, A., Hatzimanikatis, V. &amp; van der Meer, J. R. (2017). Mechanistic Modeling of Genetic Circuits for ArsR Arsenic Regulation. <em>ACS synthetic biology, 6</em>(5), 862-874. Doi: 10.1021/acssynbio.6b00364</p>\n"
      },
      "77ebfc0086a9" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>We created a tutorial video which can be used as an educating tool for future iGEM teams to use to learn how to use the python environment Tellurium. Tellurium is used to model biological networks in python. Future iGEM teams can use our tutorial video to learn about how to program a biological model. Additionally, future iGEM teams can use the tutorial video to teach others how to create biological models. The tutorial video that we created is shown below.&nbsp;</p>\n"
      },
      "c9eb4709d15" : {
        "header_content" : "Modeling",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "dde5fa8504" : {
        "header_content" : "Works Cited",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "e0e5a516bc27" : {
        "header_content" : "Parts",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "e20d21e831e2" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>A large part of our project centered around modifying the protein metallothionein. Due to the influential nature of proteins, many iGEM teams may also wish to attempt to create modified proteins to advance their projects. As a result, the description of how we modified metallothionein using the program Rosetta will likely be useful for future iGEM teams, particularly teams that want to modify heavy-metal binding proteins.</p>\n<p>In addition to protein modeling, our team also design a kinetic model of the accumulation of arsenic and subsequent binding of arsenic to metallothionein within an E. coli cell. Future iGEM teams can use our model as an inspiration of how to create a kinetic model for arsenic accumulation in bacteria. After we had developed our kinetic model, we found that another iGEM team, Team Edinburgh, had based their 2020 project model off of the same main paper that we based our model on, \"Mechanistic Modeling of Genetic Circuits for ArsR Arsenic Regulation\" by Dr. Berset and colleagues [1]. Because we had already built our model, we were did not take inspiration from Team Edinburgh's model to use for our project, however, we still found it interesting how the paper by Dr. Berset and colleagues had influenced both of our projects. Because many arsenic inspired projects can use the kinetic modeling present in this paper, future iGEM teams will be able to see how we based our model off of this paper, which can inspire teams on how to build their own model.</p>\n"
      },
      "e99aa0a28d67" : {
        "header_content" : "Education",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "f19bc401c18f" : {
        "type" : "VIDEO",
        "video_videoLink" : "https://2021.igem.org/wiki/images/a/a4/T--Washington--Education_Tellurium_Tutorial_video.mp4",
        "video_videoWidthPercentage" : 65
      }
    },
    "contentOrder" : [ "1207202bf", "36539e3824f", "e0e5a516bc27", "2d18af94c2b4", "c9eb4709d15", "e20d21e831e2", "e99aa0a28d67", "77ebfc0086a9", "f19bc401c18f", "dde5fa8504", "3847edd6bac" ],
    "hasSidebar" : true
  },
  "Description" : {
    "content" : {
      "09d209704b9" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<h2 style=\"text-align:center;\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>Current Methods: Too little flexibility, too much cost</strong></span></h2>\n"
      },
      "0c092dc35" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>For our remediation effort, we needed to recruit help from the environment. Our plan begins with lomatium triternatum, which grows natively in Northport. By engineering the naturally occurring rhizobium bacteria to express proteins which sequester toxic arsenic compounds we would be able to accumulate arsenic by planting these modified plants. After inducing hyperaccumulation in the roots of these plants, our plants and their rhizobium bacteria could then be safely removed from the soil, decreasing the arsenic content, and thus limiting the exposure of heavy metals to people and the surrounding environment.&nbsp;</p>\n"
      },
      "14525f0a389f" : {
        "type" : "SEPARATOR"
      },
      "24c57944d12" : {
        "type" : "SEPARATOR"
      },
      "3b16f85c3ac9" : {
        "type" : "SEPARATOR"
      },
      "64ce1b2e709a" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>To implement such an ambitious project, we had to first design a bacteria to hyperaccumulate arsenic. To do this, we found a naturally occurring protein, metallothionein, which is frequently used in the remediation of other metals, and modified it to accumulate arsenic. Next, we needed to test our proposed solution by verifying the protein’s stability and that it can arsenic accumulation efficacy. Moreover, to predict the effect on the environment and ensure the viability of our solution, we needed a model of the interactions at a cellular level. Finally, using the combination of those results, we would revise and retest our system design until we are able to implement the solution.</p>\n"
      },
      "97ff69339ca" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>[1] Industry market research, reports, and Statistics. IBISWorld. (n.d.). Retrieved October 21, 2021, from https://www.ibisworld.com/united-states/market-research-reports/nonferrous-metal-refining-industry/.&nbsp;</p>\n<p>[2] Washington State Department of Health. (1999, January). Hazards of short-term exposure to arsenic contaminated soil. Washington State Department of Health. Retrieved October 21, 2021, from https://www.doh.wa.gov/Portals/1/Documents/Pubs/334-284.pdf.&nbsp;</p>\n<p>[3] World Health Organization. (2018, February 15). Arsenic. World Health Organization. Retrieved October 21, 2021, from https://www.who.int/news-room/fact-sheets/detail/arsenic.&nbsp;</p>\n<p>[4] Paparich, J. (n.d.). The Northport Project. THE NORTHPORT PROJECT. Retrieved October 21, 2021, from https://northportproject.com/.&nbsp;</p>\n<p>[5] Cai, B. (2020, October). Industry market research, reports, and Statistics. IBISWorld. Retrieved October 21, 2021, from https://www.ibisworld.com/china/market-research-reports/mining-equipment-manufacturing-industry/.&nbsp;</p>\n<p>[6] Environmental Protection Agency. (2002, September). Arsenic Treatment Technologies for Soil, Waste, and Water. Environmental Protection Agency. Retrieved October 21, 2021, from https://www2.epa.gov/sites/production/files/2015-04/documents/arsenic_report.pdf.&nbsp;</p>\n"
      },
      "a9aa9387d582" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<h2 style=\"text-align:center;\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 24px;font-family: Arial;\"><strong>Method: Design, Build, Test, Learn</strong></span></h2>\n"
      },
      "af277fafd7" : {
        "type" : "SEPARATOR"
      },
      "b414f127f8d5" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>The mining and subsequent smelting of metal ore is undoubtedly an integral part of modern society, with primary nonferrous smelting occupying a market share of $10.9 billion dollars in the U.S. alone [1]. However, currently unsustainable industry practices leave behind toxic metals like arsenic and lead which are retained in the environment for up to 9000 years [2]. Arsenic is one of the main contributors to heavy metal pollution in industrial and post-industrial regions globally, with at least 140 million people in 50 countries consuming arsenic-contaminated waters at concentrations above the WHO provisional guideline value of 10 μg/L [3]. In general, the outcome of arsenic smelting practices is the release of arsenic waste products which have increased the prevalence of arsenic poisoning across the world, with acute symptoms of gastric distress and long-term carcinogenic effects [3]. In more extreme cases like the town of Northport Washington, located in the Upper Columbia River region, residents have reported alarmingly high rates of Ulcerative Colitis, among other ailments [4]. Currently, the mining industry is only growing to accommodate for industrializing economies around the world. In China, manufacturing equipment sales reached a peak revenue in 2019 of $73.8 billion [5]. Current methods for remediating contaminated land often involve soil containment and relocation, but these solutions only temporarily postpone the symptoms originated by contaminated soils. Therefore, the lack of more permanent methods for detoxifying and remediating areas affected by the mining and smelting industry is not only crucial for restoring environments that have been affected in the past but also for promoting the health of residents and ecosystems that continue to be affected by these prominent industries.</p>\n"
      },
      "be5031453bb6" : {
        "exampleImage_imageLink" : "https://2021.igem.org/wiki/images/a/a9/T--Washington--UCR_Picture_1_-_Shed.png",
        "exampleImage_percentageSize" : 50,
        "type" : "IMAGE"
      },
      "ccf745c553e1" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<h2 style=\"text-align:center;\"><strong>Works Cited</strong></h2>\n<p></p>\n"
      },
      "d100643a7503" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<h2 style=\"text-align:center;\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 24px;font-family: Arial;\"><strong>Challenges: Building without a lab and COVID-19</strong></span></h2>\n"
      },
      "d272c7c7d00" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<h2 style=\"text-align:center;\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 24px;font-family: Arial;\"><strong>The Problem: Mining industires leave behind toxic chemicals that harm humans and the environment</strong></span></h2>\n"
      },
      "ec2ba95d39ee" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>Many methods exist to address arsenic soil contamination, however, many of these rely on extracting the soil and cannot be applied to large areas [6]. For example, a common solidification technique relies on mixing the affected soil with cement, lime, and concrete, which is not a feasible solution for as vast and expansive as the Upper Columbia River region, which contains over 1,245 miles of river and 260,452 square miles of land. Another common solution, thermal remediation, requires subjecting contaminated soil to extreme temperatures using heavy machinery and conveyor belts. This process is also not suited to treat broad areas, nor is it a cost effective option. Therefore, existing methods for remediating large areas such as the Upper Columbia River region have not been implemented due to the inconvenient and impracticality of up-scaling current remediation solutions.</p>\n"
      },
      "f1b2233643b8" : {
        "banner_content" : {
          "bannerText" : "Description",
          "imageBlur" : 0,
          "imageLink" : "https://2021.igem.org/wiki/images/5/5e/T--Washington--page_header.png",
          "imageTopX" : 0,
          "imageTopY" : 0,
          "imageZoom" : 100,
          "textColor" : "WHITE",
          "textSize" : 10
        },
        "type" : "BANNER"
      },
      "f947e5c216d5" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<h2 style=\"text-align:center;\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 24px;font-family: Arial;\"><strong>Our Solution: Detoxifying soil using plant rhizobacteria and sequestering harmful forms of arsenic</strong></span></h2>\n"
      },
      "fbf77e5632bd" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>Like many others, our team’s functioning has drastically changed since we resumed meeting in 2020 over Zoom. For the majority of the project’s formation, our team was separated by thousands of miles for some, and several hundred for many, so naturally, we were only able to meet online for roughly a year. It was not until several months ago that we were able to meet in person again, and we struggled to find a space in which to safely do so. Moreover, throughout the process we struggled to locate a space to conduct laboratory experiments as in-person lab work at our university was restricted to strictly necessary causes and we were not able to locate lab space until September 2021. Thus, we decided to focus our efforts on modeling in order to compensate for the inability to conduct in-person experiments. As well as focusing on modeling, we adapted by outsourcing some of our lab work, using companies like Biofab. This allowed us to start experiments to test our modified MT protein without access to our lab, although the full scope of our experiments was dramatically limited.</p>\n<p></p>\n<p>Overall, we are extremely proud of the way our team has adapted to the challenges presented by reengineering biology online and without lab access and we look forward to continuing our remediation efforts!</p>\n<p></p>\n"
      }
    },
    "contentOrder" : [ "f1b2233643b8", "d272c7c7d00", "be5031453bb6", "b414f127f8d5", "3b16f85c3ac9", "09d209704b9", "ec2ba95d39ee", "24c57944d12", "f947e5c216d5", "0c092dc35", "14525f0a389f", "a9aa9387d582", "64ce1b2e709a", "af277fafd7", "d100643a7503", "fbf77e5632bd", "ccf745c553e1", "97ff69339ca" ],
    "hasSidebar" : false
  },
  "Engineering" : {
    "content" : {
      "0c43b445a7f1" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>When building our kinetic model, we went through the Engineering cycle. We began kinetic modeling by trying to designing our initial model. We started with designing our model by gaining familiarity with the python environment we were going to use for modeling, Tellurium. We also researched the proteins that are naturally present in bacteria that provide resistance and tolerance to arsenic. After it was decided that we were going to design our kinetic model around E. coli, we decided to look for arsenic accumulation models for E. coli. We found that the paper, \"Mechanistic Modeling of Genetic Circuits for ArsR Arsenic Regulation\" by Dr. Berset and colleagues described a model that had many of the equations that we needed to begin with designing our model [1]. We designed our own model which incorporated some equations from the paper by Dr. Berset and colleagues. We added to our model many equations unique to our solution, such as the binding of metallothionien to arsenic and the expression of GlpF from our plasmid. After designing our model, we built our model in python using Tellurium.</p>\n<p>Once our model was built, we began to test our model by running different simulations of the model. The simulations would vary by the time scale that was modeled and by what species in the model we would want to see the results of. Upon testing our model, we discovered one issue. The binding of arsenic to metallothionein was far lower than what we were expecting. When we had originally built our model, we decided to use reaction rates for the binding of arsenic to metallotionein based on the values obtained from arsenic binding to MT-IA as described by the paper \"Kinetic analysis of arsenic-metalation of human metallothionein: significance of the two-domain structure\" by Dr. Ngu and colleagues [2]. Upon testing our model, we realized that the parameters for the rate at which arsenic binds to metallothionein were far smaller than what we were expecting. The values were likely smaller than we wanted because MT-IA is does not naturally bind to arsenic well, which is why we our team designed a modified version of metallothionein. In order to obtain more suitable parameters, we had to go back to designing improved versions of our metallothionein binding to arsenic equations. However, we found that this was difficult because we had created our own verion of metallothionein, so it was not possible to find literature values for the binding parameters. Additonally, we did not have access to a lab to create an experiment ourselves to support what the binding rate parameters could be. As a result, we decided that we were going to have to try to find parameters that were somewhat close to our design. We decided to base our 2nd design of the metallothionein binding to arsenic equations on the paper \"The zinc balance: competitive zinc metalation of carbonic anhydrase and metallothionein 1A\" by Dr. Pinter and colleagues [3]. From this paper, we obtained values for binding rate constants of zinc binding to MT-IA. We chose to use this paper because our metallothionein was modified based on MT-IA and because 7 zinc bind to MT-IA and our modified MT binds to 7 As. We edited our model to have these new parameters. After building the model, we ran another simulation and found that our model predicted far higher rates of metallothionein binding to arsenic that was more aligned with the results we were expecting.&nbsp;</p>\n<p>Overall, the engineering cycle used in our kinetic modeling was: designing our model -&gt; building our model -&gt; testing our model -&gt; analyzing the results of the model -&gt; making improvements to the model. By going through this engineering cycle, we were able to make efficient progress in creating the modeling, testing the modeling, and improving the model.</p>\n"
      },
      "23e70ba88495" : {
        "header_content" : "Works Cited",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "37a1d6bb88d" : {
        "header_content" : "Kinetic Modeling",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "38aca0bbc3d5" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>The first step in the Engineering cycle is design. Our project underwent many design changes before ultimately deciding to pursue our project of arsenic accumulation using rhizobacteria. In the spring of 2020, our team initially pursued a project focused on the accumulation of heavy metals from the human gut. Due to the prevalence of heavy metal poisoning from lead, arsenic, and cadmium around the world, we wanted to create a solution to this problem. We hoped to create a supplement that would contain modified lactobacilli bacteria which accumulate these toxic metals. Using modified proteins located inside the lactobacilli, the metals would be captured and excreted from the body as waste. Due to similarities in our project with PRODEACC, Team Lund's 2019 project, we hosted a meeting with Team Lund to discuss areas of improvement from their project and difficulties with the project. Our team faced difficulities finding mentorship in the field of study of probiotics, so we reached out to Dr. Mari Winkler for potential mentorship. Her lab focuses on waste water treatement of contaminates, including heavy metals.</p>\n<p>With further research, we realized our project only treated the symptoms of heavy metal toxicity and we decided we instead wanted to tackle the problem at its roots. We wanted to remove heavy metals from affected areas prior to human and animal consumption. Due to our connenction with the Winkler Lab, our lack of resources supporting our research with probiotics, and our shift in understanding of the bigger picture of heavy metal toxicity, we decided to shift our project focus onto metal accumulation in water.</p>\n<p>We began to design a water biofilm filter in order to accumulate heavy metals from water. We wanted to target our solution to helping the town of Northport, Washington, which has high amounts of heavy metal pollution. When researching how to best help to remediate Northport, we discovered that the heavy metal pollution was in the soil rather than in water. As a result, we decided to switch project designs to instead focus on designing a soil based remediation method.</p>\n<p>The design of our soil based project centers around the accumulation of arsenic from the soil using rhizobacteria. Our rhizobacteria will be modified to express a modified version of the protein metallothionein. <span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto;\">We designed our modified version of metallothionein so that it is specialized for binding to arsenic.</span>&nbsp;</p>\n"
      },
      "42e2d17608be" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>[1] Berset, Y., Merulla, D., Joublin, A., Hatzimanikatis, V., &amp; van der Meer, J. R. (2017). Mechanistic Modeling of Genetic Circuits for ArsR Arsenic Regulation. <em>ACS synthetic biology, 6</em>(5), 862-874.</p>\n<p>[2] Ngu, T. T., Easton, A., &amp; Stillman, M. J. (2008). Kinetic analysis of arsenic-metalation of human metallothionein: significance of the two-domain structure. <em>Journal of the American Chemical Society, 130</em>(50), 17016-17028.</p>\n<p>[3] Pinter, T. B., &amp; Stillman, M. J. (2014). The zinc balance: competitive zinc metalation of carbonic anhydrase and metallothionein 1A. <em>Biochemistry, 53</em>(39), 6276-6285.</p>\n<p></p>\n"
      },
      "49fcd7ea656" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Due to our initial design’s focus on the human gut, we choose to work with mammalian proteins so that the proteins would remain stable in a mammalian environment. We decided to use the MT1A human metallothionein protein sequence and the 4MT2 rat metallothionein protein as a template model for homology modeling. Despite the project’s transition into environmental metal accumulation, we decided to continue the protein modeling with mammalian proteins to ensure timely completion of the model. The modeling of the mammalian protein serves as a proof of concept for metal binding site modifications in metallothioneins, providing a foundation for future plant metallothioneins modifications.</span><br></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Due to metallothioneins' nature of having many binding sites that bound to various metals, we wanted to take advantage of its many binding sites by modifying the protein to become more specific to binding Arsenic. In doing so, we are able to significantly increase the concentration of Arsenic accumulated by a single protein and by a single bacterial cell. Due to geometry and sequence adjustments made in the metal binding sites, mutations were made in the protein backbone to energetically stabilize the protein when bound to Arsenic. </span><br></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Rosetta is not designed to model protein-metal interactions. Therefore when designing the protein we had to maintain a balance of stable protein energetics and reasonable distances for metal binding. This required fine-tuning the binding sites to maintain both stable energetics of the protein and keep amino acid-metal distances within a range of 2.23A - 2.33A. To engineer this protein with this balance of energy and distances in mind, we went through several iterations of the Relax. As mentioned in the Protein Modeling methodology description, we performed the Relax command several times in order to determine the best distance and angle constraints to use on the protein to satisfy the Arsenic’s binding geometry. This required small modifications to the distances and angles in the constraint file, running the relax command on our PDB file, then running get_metal_dists.py file to check the improvement in our distances and angles. While adjusting the distances, we also had to confirm that the protein's energetic stability was not worsening. On several occurrences, we ran into issues where the protein-metal distances closely matched Arsenic’s binding geometry, but the movement of the protein backbone created energetically unfavorable confirmations. Due to this balance that had to be maintained, we ran the relax command on several versions of the model to determine which models were energetically lowest prior to continuing our protein design. </span><br>&nbsp;</p>\n"
      },
      "68f2a390602" : {
        "banner_content" : {
          "bannerText" : "Engineering",
          "imageBlur" : 0,
          "imageLink" : "https://2021.igem.org/wiki/images/5/5e/T--Washington--page_header.png",
          "imageTopX" : 0,
          "imageTopY" : 23,
          "imageZoom" : 100,
          "textColor" : "WHITE",
          "textSize" : 10
        },
        "type" : "BANNER"
      },
      "6f7c5ef7274" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 16px;font-family: Arial;\">To effectively apply the modified MTIA protein designed by Drylab modelling to solving real world problems, we sought to use the protein in bioremediation. Bioremediation with whole cells has garnered traction recently as a cost-effective and environmentally friendly solution to heavy metal pollution. Hence, we intended to overexpress the protein in <em>E.coli</em> to investigate its effects on 1. E.coli tolerance to arsenite and 2. remediation of arsenite. Additionally, it has been reported that the transport of arsenite into cells is often a limiting factor to the amount of arsenite whole cell accumulators are able to sequester. Hence inspired by a study that showed co-expressing</span> <span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 16px;font-family: Arial;\">glpF, the protein responsible for bringing Arsenic into <em>E.coli</em>, and MT, does indeed improve accumulation, we constructed a similar bicistronic gene. Our gene construct contains an glpF codon sequence joined with the modified MTIA by a ribosome binding site (RBS), optimized manually for expression in <em>E.coli</em> with IDT codon optimization tool and Benchling.</span></p>\n<p></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 16px;font-family: Arial;\">Unfortunately, due to COVID restrictions, we did not have lab access until approximately a week before the wiki freeze deadline. Hence there was little testing that we could perform in person on our own. To maximize the amount of work we could get done before the wiki freeze, we outsourced a couple of experiments. Specifically, all genes were synthesized via IDT and we reached out to UW Biofab to perform transformation and plasmid verification. During our limited time in the lab, we sought to verify protein expression with SDS PAGE and the feasibility of our constructs (if it would increase toxicity for the host) with metal tolerance assays. We managed to run SDS PAGE 5 times, and each time we were able to learn from the previous result to modify and optimize experimental conditions. However for metal tolerance, we were only able to run it once as the materials required for the experiment only arrived a day before the wiki freeze. </span></p>\n<p></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 16px;font-family: Arial;\">Nevertheless, there were many take aways in terms of optimizing experimental designs for both experiments and subsequent experiments. Going forward, we would include a negative control to all our designs as this was overlooked in this round of experiments. We would also order a glpF gene from IDT and have that transformed into E.coli. Additionally, it would also be good if we could perform western blot to verify overexpression. All in all, the data we collected thus far are preliminary but nonetheless shows promise on the feasibility of our system design and of the intended function of the modified protein. </span></p>\n"
      },
      "8bec6bb3dae" : {
        "grid_layout" : {
          "gridLayout" : [ [ 0 ], [ 1 ] ],
          "widgets" : [ {
            "content" : {
              "wysiwyg_content" : "<p><span style=\"color: rgb(0,0,0);background-color: rgb(245,245,245);font-size: 16px;font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto;\">In the process of developing our project, we underwent several engineering cycles in different aspects of our project. The engineering process of our project revolved around the Engineering cycle:</span>&nbsp;</p>\n"
            },
            "type" : "WYSIWYG_EDITOR"
          }, {
            "content" : {
              "exampleImage_imageLink" : "https://2021.igem.org/wiki/images/d/da/T--Washington--Engineering.png",
              "exampleImage_percentageSize" : 50,
              "exampleImage_subtitle" : "Engineering Process"
            },
            "type" : "IMAGE"
          } ]
        },
        "type" : "GRID_LAYOUT",
        "wysiwyg_content" : "<p>In the process of developing our project, we underwent several engineering cycles in different aspects of our project. The engineering process of our project revolved around the Engineering cycle:</p>\n"
      },
      "97f4e127c221" : {
        "header_content" : "Project Development",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "e23a1d1054d" : {
        "banner_content" : {
          "bannerText" : "Wetlab",
          "imageBlur" : 0,
          "imageLink" : "",
          "imageTopX" : 0,
          "imageTopY" : 0,
          "imageZoom" : 100,
          "textColor" : "WHITE",
          "textSize" : 10
        },
        "header_content" : "Wetlab",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "e6b2801982dd" : {
        "header_content" : "Protein Modeling",
        "header_priority" : 1,
        "type" : "HEADER"
      }
    },
    "contentOrder" : [ "68f2a390602", "8bec6bb3dae", "97f4e127c221", "38aca0bbc3d5", "e6b2801982dd", "49fcd7ea656", "e23a1d1054d", "6f7c5ef7274", "37a1d6bb88d", "0c43b445a7f1", "23e70ba88495", "42e2d17608be" ],
    "hasSidebar" : true
  },
  "Experiments" : {
    "content" : {
      "00bad155f379" : {
        "grid_layout" : {
          "gridLayout" : [ [ 0, 1 ], [ 0, 1 ] ],
          "widgets" : [ {
            "content" : {
              "exampleImage_imageLink" : "https://2021.igem.org/wiki/images/thumb/f/f6/T--Washington--DNA_Synthesis_Overview.png/1599px-T--Washington--DNA_Synthesis_Overview.png",
              "exampleImage_percentageSize" : 100,
              "exampleImage_subtitle" : "DNA Synthesis Overview"
            },
            "type" : "IMAGE"
          }, {
            "content" : {
              "wysiwyg_content" : "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>All genes synthesized in this project were done via IDT.</strong></span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Protein sequences were obtained from Uniprot (Wildtype) and Drylab modelling (Modified) and the codons were optimized for expression in E.coli. This was done with the IDT optimization tool and Benchling. The optimized gene sequences were submitted to IDT to be synthesized and inserted into pET28b+ vector with a Kanamycin resistance marker.</span></p>\n"
            },
            "type" : "WYSIWYG_EDITOR"
          } ]
        },
        "type" : "GRID_LAYOUT"
      },
      "1f1f945dcf1" : {
        "header_content" : "Transformation & Verification",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "26c5038a10b6" : {
        "header_content" : "Works Cited",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "32fb88f7508" : {
        "bannder_content" : {
          "bannerText" : "Experiments",
          "imageBlur" : 0,
          "imageLink" : "https://2021.igem.org/wiki/images/5/5e/T--Washington--page_header.png",
          "imageTopX" : 49,
          "imageTopY" : 66,
          "imageZoom" : 100,
          "textColor" : "WHITE",
          "textSize" : 10
        },
        "banner_content" : {
          "bannerText" : "Experiments",
          "imageBlur" : 0,
          "imageLink" : "https://2021.igem.org/wiki/images/5/5e/T--Washington--page_header.png",
          "imageTopX" : 49,
          "imageTopY" : 66,
          "imageZoom" : 100,
          "textColor" : "WHITE",
          "textSize" : 10
        },
        "type" : "BANNER"
      },
      "7346100c00" : {
        "grid_layout" : {
          "gridLayout" : [ [ 0, 1 ], [ 0, 1 ] ],
          "widgets" : [ {
            "content" : {
              "exampleImage_imageLink" : "https://2021.igem.org/wiki/images/thumb/4/4f/T--Washington--Metal_Tolerance.png/1600px-T--Washington--Metal_Tolerance.png",
              "exampleImage_percentageSize" : 100,
              "exampleImage_subtitle" : "Metal Tolerance Overview"
            },
            "type" : "IMAGE"
          }, {
            "content" : {
              "wysiwyg_content" : "<p style=\"text-align:justify;\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>A minimum inhibitory concentration assay was conducted by the wetlab team to determine the Arsenic tolerance of transformed bacteria.</strong></span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Successfully transformed BL21 DE3 bacteria were autoinduced in Magic Media E.coli expression medium overnight. An aliquot of the induced bacteria was dispensed in a 96 well microplate and read at OD600 to determine concentration of induced bacteria. The induced bacteria were then diluted to 1 x 10</span><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 0.6em;font-family: Arial;\">6</span><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">/10μl. 25μl of adjusted bacteria suspension were transferred into a different 96 well microplate with 175μl of LB broth containing different concentrations of Sodium Arsenite. The plate was incubated at 37</span><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 12pt;font-family: Arial;\">oC and the plate was read at OD600 after 20hrs. </span>&nbsp;</p>\n"
            },
            "type" : "WYSIWYG_EDITOR"
          } ]
        },
        "type" : "GRID_LAYOUT"
      },
      "89a6d2b2e47" : {
        "header_content" : "Metal Tolerance",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "8a7f0db0720" : {
        "header_content" : "DNA Synthesis",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "90031cfb6f20" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<h4><span style=\"font-size: 18px;\">SDS PAGE</span></h4>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 12pt;font-family: Roboto, sans-serif;\"><strong>Autoinduction</strong>: Invitrogen (2014) MagicMedia™ E. coli Expression Medium: Manual. Carldbad, CA: Life Technologies Corporation 4</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 12pt;font-family: Roboto, sans-serif;\"><strong>Protein Lysis</strong>: Thermo Scientific (2011)  B-PER® Bacterial Protein Extraction Reagent: Instructions. Rockford, lL: Pierce Technology</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 12pt;font-family: Roboto, sans-serif;\"><strong>DTT</strong>: Laemmli sample buffer (2x) with DTT. Cold Spring Harbor Protocols. (1970, January 1). Retrieved October 19, 2021, from http://cshprotocols.cshlp.org/content/2007/1/pdb.rec10878.full?text_only=true. </span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 12pt;font-family: Roboto, sans-serif;\"><strong>SDS</strong>: BioRad (2011) 4–15% Mini-PROTEAN® TGX™ Precast Protein Gels: Instruction Manual and Application Guide. Hercules, CA: Bio-rad Laboratories</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 12pt;font-family: Roboto, sans-serif;\"><strong>Staining</strong>: Coomassie Brilliant Blue R-250 staining solution. Bio. (n.d.). Retrieved October 21, 2021, from https://www.bio-rad.com/en-us/sku/1610436-coomassie-brilliant-blue-r-250-staining-solution?ID=1610436.</span><br>&nbsp;</p>\n<h4>Metal Tolerance</h4>\n<p><strong>Adjusting bacteria concentration: </strong><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Direct E. coli cell count at OD600 - Tip Biosystems. (n.d.). Retrieved October 21, 2021, from https://tipbiosystems.com/applications/life-science/direct-e-coli-cell-count-at-od600/. </span>&nbsp;</p>\n<p><strong>MIC Assay: </strong><span style=\"color: rgb(34,34,34);background-color: rgb(255,255,255);font-size: 13px;font-family: Arial, sans-serif;\">Qin, W., Zhao, J., Yu, X., Liu, X., Chu, X., Tian, J., &amp; Wu, N. (2019). Improving cadmium resistance in Escherichia coli through continuous genome evolution.</span> <span style=\"color: rgb(34,34,34);background-color: rgb(255,255,255);font-size: 13px;font-family: Arial, sans-serif;\">Frontiers in microbiology,</span> <span style=\"color: rgb(34,34,34);background-color: rgb(255,255,255);font-size: 13px;font-family: Arial, sans-serif;\">10, 278.</span> and <span style=\"color: rgb(34,34,34);background-color: rgb(255,255,255);font-size: 13px;font-family: Arial, sans-serif;\">Kaushik, P., Rawat, N., Mathur, M., Raghuvanshi, P., Bhatnagar, P., Swarnkar, H., &amp; Flora, S. (2012). Arsenic hyper-tolerance in four Microbacterium species isolated from soil contaminated with textile effluent.</span> <span style=\"color: rgb(34,34,34);background-color: rgb(255,255,255);font-size: 13px;font-family: Arial, sans-serif;\">Toxicology international,</span> <span style=\"color: rgb(34,34,34);background-color: rgb(255,255,255);font-size: 13px;font-family: Arial, sans-serif;\">19(2), 188.</span>&nbsp;</p>\n"
      },
      "a3fdbd4069e" : {
        "header_content" : "SDS PAGE",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "c94e476a2527" : {
        "tabView_content" : [ {
          "tabContent" : "1. Obtain the amino acid FASTA sequence of the protein\n2. Optimize codons for expression in host organism using IDT optimization tool\n3. Add a STOP codon to the optimized sequence\n4. Past sequence into Benchling and check for uridine content using the sequence optimization tool\n5. Submit gene sequence to \"custom gene synthesis\"\n6. Select desired vector\n7. Submit order",
          "tabLabel" : "DNA Synthesis"
        }, {
          "tabContent" : "1. Create samples for plasmids on Aquarium platform\n2. Select desired order of events under \"Design\". \n3. Washington iGEM workflow: \n a) Transform cells \n b) Plate transformed cells \n c) Check plate \n d) Make overnight suspension \n e) Make glycerol stock (require sequencing result) and Make miniprep \n f) Send to sequencing (rehydrate primers before and upload sequencing results after) and Transform cells \n g) Plate transformed cells \n h) Check plate \n i) Make overnight suspension \n j) Make glycerol stock (do not require sequencing result)\n k) Streak E.coli plate \n l) Check plate\n3. Upon receiving sequencing results, verify results using alignment tool in Benchling and update under Plan info on Aquarium for experiments to proceed. \n4. Collect plates and glycerol stock when everything is ready. ",
          "tabLabel" : "Transformation & Verification"
        }, {
          "tabContent" : "Autoinduction\n\n1. Using sterile technique, add antibiotic of choice (50ug/ml of Kanamycin (BP9065 , Fisher Chemicals)) into MagicMedia™ Component A (K6803, ThermoFisher).\n2. Add the entire volume of MagicMedia™ Component B (K6803, ThermoFisher) to MagicMedia™ Component A and antibiotic of choice using sterile technique and mix by swirling the flask. \n3. Store unused complete medium at 4°C for one month\n4. Add 10% flask volume of complete MagicMedia™ medium to tubes of flask for culture volume less than 100ml (Add 5ml of complete MagicMedia™ medium to 50ml centrifuge tubes)\n5. Use sterile technique to inoculate the colony directly into the medium.\n6. Cap tube or flask and secure in an incubator. \n7. Incubate at 30°C or 37°C with vigorous shaking (300 rpm) for 18–24 hours.\n\nProtein Extraction\n\n1. Using sterile technique transfer an aliquot of autoinduced bacteria culture into a preweighed tube of desired volume\n2. Pellet bacterial cells by centrifugation at 5000 × g for 10 minutes. \n3. Add 2µL of lysozyme and 2µL of DNase I per 1mL of B-PER Reagent (90078, Thermofisher). \n4. Add 4mL of B-PER Reagent per gram of cell pellet. \n5. Pipette the suspension up and down until it is homogeneous. \n6. Incubate 10-15 minutes at room temperature. \n6. Centrifuge lysate at 15,000 × g for 5 minutes to separate soluble proteins from the insoluble proteins. \n7. Pipette out the lysate \n8. Analyse protein concentration of lysate by using Nanodrop\n9. Store on ice\n\nLaemmli Buffer\n\n1. Prepare 1M of DTT (#1610610, Biorad) to break down protein disulfide bonds and stabilize enzymes and other proteins (Dissolve 1.54g of DTT in 10ml ddH2O). \n2. To 10ml of 2x Laemmli Buffer (#1610737, Biorad), add 2ml of DTT\n3. Add an equal volume of ddH2O to  Laemmli Buffer with DTT to make 1x Laemmli Buffer with DTT\n4. Dilute protein concentration to 2mg/ml with 1x Laemmli Buffer with DTT\n5. Store at -70°C\n6. Heat on with heat block at 90°C for 5 min or 70°C for 10min before use\n\nSDS PAGE\n\n1. Prepare SDS running buffer by diluting 10x Tris/Tricine/SDS Running Buffer (#1610744, Biorad) with ddH2O\n2. Place premade Mini-Protean TGX, 4-15% 10 well (#4561083, Biorad) into the casket and fill the casket to the brim with running buffer\n3. Load 10ul of samples into the wells. \n4. Fill the chamber with a suitable amount of SDS running buffer based on the number of gels ran\n5. Run the gel at 200 V for 30 - 40 min\n6. Remove gel from the glass plates and stain the gel with Coomassie Brilliant Blue R-250 (#1610436, Biorad) for 2 hrs with gentle agitation (50 rpm)\n7. Prepare destaining solution by mixing 500ml HPLC grade methanol, 400ml ddH2O and 100ml Glacial Acetic Acid.\n8. Destain the gel for 2hrs using the destaining solution (80 rpm, change solution every 30 min)\n\n",
          "tabLabel" : "SDS PAGE"
        }, {
          "tabContent" : "1. Autoinduce successfully transformed BL21 DE3 for 24hrs\n2. Pipette out 200μl of the induced bacteria and dispense into a 96 Corning® 96 Well Clear Polystyrene Microplate (flat bottom clear, polystyrene, non-treated) \n3. Do triplicates for each of the different plasmids\n4. Measure OD600 absorbance of auto induced cultures\n5. Determine the bacteria concentration using 2.2 x 10^9 cells per 1 OD600 unit\n6. Dilute bacteria concentration to 1 x 10^6 per 10μL\n7. Dilute 50mM Sodium Arsenite Solution (#1062771000, Sigma) to 2mM, 4mM, 6mM, 8mM, 10mM using LB broth (#L2542, Sigma) \n8. Add 175μl of LB broth containing various concentrations of Sodium Arsenite to 96 well microplates\n9. Seed 25μl of diluted bacteria with different plasmids into the 96 well microplates\n10. Incubate at 37oC for 20hrs\n11. Measure OD600 absorbance",
          "tabLabel" : "Metal tolerance"
        } ],
        "type" : "TAB_VIEW"
      },
      "da8b63f0d3ca" : {
        "header_content" : "Protocol",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "df9bee1bb01" : {
        "grid_layout" : {
          "gridLayout" : [ [ 0, 1 ], [ 0, 1 ] ],
          "widgets" : [ {
            "content" : {
              "exampleImage_imageLink" : "https://2021.igem.org/wiki/images/thumb/b/b6/T--Washington--Biofab_Overview.png/1600px-T--Washington--Biofab_Overview.png",
              "exampleImage_percentageSize" : 100,
              "exampleImage_subtitle" : "Biofab Workflow"
            },
            "type" : "IMAGE"
          }, {
            "content" : {
              "wysiwyg_content" : "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>Transformation and verification of plasmid into </strong><strong><em>E.coli</em></strong><strong> was done through Biofab UW. </strong></span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Plasmids received from IDT were transformed into DH5</span><span style=\"color: rgb(189,193,198);background-color: rgb(32,33,36);font-size: 16px;font-family: Roboto, arial, sans-serif;\">α</span> <span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">cells via electroporation for cloning. An overnight suspension of the successfully transformed bacteria were then prepared for miniprep. In the meantime, primers were designed using Primer 3 blast on Benchling and synthesized by IDT. The plasmids obtained from the miniprep and primers from IDT were sent to genewiz for sanger sequencing. After verifying the sequencing results with Benchling, the plasmids were transformed into BL21 DE3 <em>E.coli</em> for protein expression and streaked.  </span></p>\n"
            },
            "type" : "WYSIWYG_EDITOR"
          } ]
        },
        "type" : "GRID_LAYOUT"
      },
      "f7b4944947e7" : {
        "grid_layout" : {
          "gridLayout" : [ [ 0, 1 ], [ 0, 1 ] ],
          "widgets" : [ {
            "content" : {
              "exampleImage_imageLink" : "https://2021.igem.org/wiki/images/a/ac/T--Washington--SDS_Overview.png",
              "exampleImage_percentageSize" : 80,
              "exampleImage_subtitle" : "SDS PAGE Overview"
            },
            "type" : "IMAGE"
          }, {
            "content" : {
              "wysiwyg_content" : "<p style=\"text-align:justify;\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>SDS PAGE was conducted by the wetlab team to verify protein expression.</strong></span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">A colony of the successfully transformed BL21 DE3 was suspended in MagicMedia E.coli Expression medium incubated in a shaking incubator at 300rpm, 37 degree celsius overnight to induce protein expression. The next day, 1ml of the inoculation was collected and pelleted in preparation for protein extraction with B-PER with Enzymes Bacterial with Proteins Extraction kit. Presence of protein was first verified with Nanodrop and the lysate was diluted before SDS PAGE was carried out. Briefly, we loaded samples and ladder into the premade gel and ran the SDS PAGE at 200V for 30min. We then stained the gel with Coomassie Brilliant Blue for 2 hrs and destained the gel to obtain the final results.</span></p>\n"
            },
            "type" : "WYSIWYG_EDITOR"
          } ]
        },
        "type" : "GRID_LAYOUT",
        "wysiwyg_content" : "<p style=\"text-align:justify;\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>SDS PAGE was conducted by the wetlab team to verify protein expression. </strong></span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">A colony of the successfully transformed BL21 DE3 was suspended in MagicMedia E.coli Expression medium incubated in a shaking incubator at 300rpm, 37 degree celsius overnight to induce protein expression. The next day, 1ml of the inoculation was collected and pelleted in preparation for protein extraction with B-PER with Enzymes Bacterial with Proteins Extraction kit. Presence of protein was first verified with Nanodrop before SDS PAGE was carried out. Briefly, we loaded samples and ladder into the premade gel and ran the SDS PAGE at 200V for 30min. We then stained the gel with Coomassie Brilliant Blue for 2 hrs and then destained for another 2hrs to obtain the final results.</span><br>&nbsp;</p>\n"
      }
    },
    "contentOrder" : [ "32fb88f7508", "8a7f0db0720", "00bad155f379", "1f1f945dcf1", "df9bee1bb01", "a3fdbd4069e", "f7b4944947e7", "89a6d2b2e47", "7346100c00", "da8b63f0d3ca", "c94e476a2527", "26c5038a10b6", "90031cfb6f20" ],
    "hasSidebar" : true
  },
  "Human_Practices" : {
    "content" : {
      "1c91bd81b83" : {
        "banner_content" : {
          "bannerText" : "Human Practices",
          "imageBlur" : 0,
          "imageLink" : "https://2021.igem.org/wiki/images/5/5e/T--Washington--page_header.png",
          "imageTopX" : 0,
          "imageTopY" : 0,
          "imageZoom" : 100,
          "textColor" : "WHITE",
          "textSize" : 10
        },
        "type" : "BANNER"
      },
      "2d2b4658478b" : {
        "header_content" : "Upper Columbia River Site (UCR)",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "411b54e4ab" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto;\">[1] Industry market research, reports, and Statistics. IBISWorld. (n.d.). Retrieved October 21, 2021, from https://www.ibisworld.com/united-states/market-research-reports/nonferrous-metal-refining-industry/. </span>&nbsp;</p>\n<p>[2] Baca, N., Hobson, O., &amp;amp; Murphy, B. (2021, June 16). The LeRoi smelter and the Upper Columbia River Basin. ArcGIS StoryMaps. Retrieved October 21, 2021, from https://storymaps.arcgis.com/stories/78ef9b5670e0489fad20e6d833bd9992.&nbsp;</p>\n<p>[3] Environmental Protection Agency. (n.d.). Final Site-wide Human Health Risk Assessment. Environmental Protection Agency. Retrieved October 21, 2021, from http://semspub.epa.gov/work/10/100302356.pdf.&nbsp;</p>\n<p>[4] Federal Remediation Technologies Roundtable. FRTR. (n.d.). Retrieved October 21, 2021, from https://frtr.gov/matrix2/top_page.html.&nbsp;</p>\n"
      },
      "4a76716228" : {
        "header_content" : "Understand",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "59e52bfb1aaf" : {
        "header_content" : "Remediation",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "5d0dd5908b3" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>To understand the problem from the point of view of indigenous populations, our team reached out to <strong>Dr. Polly Olsen</strong>, the Tribal Liaison of the Burke Museum located in the University of Washington. During our conversation, one key point stressed to our team was that of the 29 federally recognized tribes within Washington state, each one has different religion, history, and traditions of interaction with the environment.</p>\n<p>One plant Olsen discussed with us was the Camas plant, a native perennial flower that produces an edible bulb. She detailed her experiences and detailed her experience transplanting camas bulbs to be grown in the garden around the Burke Museum. Though many tribal liaisons were supportive of the introduction of camas into the soils of the Burke, it was stressed that one member from the Yakama Confederated Tribes disapproved of the transplantation of the camas plant into non-native soils. Therefore, in the search for our plant of choice, we would be wise to consider and choose a native plant.<br><br>Finally, our redesigned protein and bacteria chassis needed a way to remove the arsenic from the soil, and to then be removed from the soil itself. By reviewing literature, the symbiotic relationship between plants and root bacteria proved to be the most viable option. There were a few factors in narrowing down our plant(s) of choice: ideally, we needed a plant that is native, prolific, non-disruptive to indigenous populations, and climate-hardy.</p>\n<p>We began with a list of plants taken from an ongoing plant study in Northport. From that list, we identified 14 species that were abundant in the Upper Columbia Region.</p>\n<p>Next, we investigated/looked into the specific properties of each plant to identify a few potential candidates for our plant of choice. Our final plant candidates are all native, prolific, and climate hardy.&nbsp;</p>\n<p>Plant candidates:&nbsp;</p>\n<ul>\n<li>Lomatium Triternatum</li>\n<li>Bearberry</li>\n<li>Wild Rose</li>\n<li>Bracken fern</li>\n</ul>\n<p></p>\n<p>After considering the plant’s hardiness, native status, and prolificity, of these candidates, we chose to focus on Lomatium Triternatum (nine leaf biscuitroot), a member of the carrot family, due to its long taproot, the availability of literature available on inoculation of members of the Apiaceae family, and the absence of potentially adverse risk factors. (The bracken fern and bearberry all have a risk of being eaten by wildlife and risk recycling arsenic back into the food system).&nbsp;</p>\n"
      },
      "6ec1a9d9593" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>The metal smelting industry is enormous, with primary nonferrous metal smelting occupying a domestic market share of $10.9 billion in 2021. [1] Although these metals are vital to our modern lives, the environmental, fiscal, and cultural impact of the smelting and refining processes required to extract metals from ore can not be understated. One such example of the dire impacts of this metal smelting and refining can be viewed in our team’s home state, Washington.</p>\n<p>Washington, the evergreen state, is known for its beautiful landscape, vibrant hiking trails, and lush forests. However, over the last century, metal smelters in Canada have released heavy metal waste emissions into the Upper Columbia River (UCR) region. The smelters emit aerosolized pollution that integrates itself into the soil over time, and as a consequence, the upper layer of mineral soil (1/2in - 2in deep) is contaminated with high levels of various heavy metals. A smaller smelter, the LeRoi smelter, in the region has also contributed to this pollution with the smelter processing 500 tons of ore a day at its peak of operation in the 1900s. [2]&nbsp;</p>\n<p>Elapsing decades of operation, the continued extraction and processing of lead, zinc, copper, and other heavy metals from ore has affected not only towns near the border between Canada and the U.S. but also impacts the 1,245 miles of river, 260,452 square miles of land, and hundreds of thousands of people that the Columbia River watershed encompasses. [3]&nbsp;&nbsp;</p>\n<p>Our project aims to decrease heavy metal contamination in soil and thereby eliminate the detrimental effects on Northport residents. We are focusing on Arsenic, as different heavy metals require different approaches. For our project to be a success, we would need to design a protein that accomplishes this goal. We understand that solely designing the protein will not be enough, as there may be resistance from different people who are affected. Therefore, we also will need to gather support from a variety of stakeholders with different backgrounds and expertise. This will ensure that our solution can be implemented in industry without disrupting any other processes. The lower concentration of Arsenic in the soil will lead to better plant growth and decrease the amount of heavy metal poisoning for Indigenous and Northport residents. However, we realize that we would have to convince <span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">Indigenous </span>and Northport residents that GMOs would be beneficial to them, and reduce the stigma associated with GMOs.</p>\n<p>At first, we planned on developing a probiotic that would absorb heavy metals in the gut, thereby preventing its detrimental effects on the body. We focused on lead, as that was the most abundant heavy metal at Northport, and had the most effect on the residents. We realized that this solution would end up sending the heavy metals back into the ecosystem through human waste. As we could not figure out how to solve that problem, we decided to pivot to removing heavy metals from the environment itself. This way, we had control of what to do with the heavy metals and could recycle/dispose of them properly. We first focused on heavy metals in water, as the Columbia River had a high concentration of lead. We thought of implementing a filtration system in the river with a lead-binding protein in biofilm but realized most of the heavy metals were on the river bed. However, we realized that we could use that filter on wastewater treatment systems. Those systems did not have an effective way of removing heavy metals before the water is released into the environment. If we were to implement such a filter, heavy metals would not pass through wastewater treatment systems.</p>\n<p>While this project was feasible, we realized that it did not solve Northport’s problem. They would not benefit from this project, and our goal, in the beginning, was to improve their lives. After speaking with Dr. Wichmann, we decided to pivot to a soil-based solution, as Northport’s contaminated soil was greatly affecting the residents as well.</p>\n<p></p>\n"
      },
      "744d181aef" : {
        "header_content" : "Works Cited",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "aa94742cf011" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>Washington iGEM's project officially began in July 2020, and thus began a long process of competing project pitches and discussions regarding our team's 2021 project concept. Our team had conceived over a dozen potential projects, including microplastic degradation, aquaculture technologies, antifungals for agriculture, diagnostics for Alzheimer's and related diseases, combating antibiotic resistance, DNA Data Storage, as well as other concepts. We reached out to professors and industry leaders in each of these fields in order to gain a better understanding of each area.</p>\n<p>Given the recency of the COVID-19 pandemic and subsequent lockdown, however, our team wanted our project to be centered around health and medicine. Eventually, our team received extremely informative feedback from <strong>Dr. Gregor Reid</strong>, a scientist at the forefront of human microbiome and probiotics research at the Lawson Health Research Institute, and <strong>Dr. Jordan Bisanz. </strong>Through these two interactions, we were able to narrow our dozen project concepts down to the deaccumulation of metals within the human body through the use of probiotic organisms in the <span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">Lactobacillales</span> order.</p>\n<p>Through many more stakeholder interactions, our project began to take shape, shifting away from probiotic remediation due to the safety and bioethical risks presented by such a project, and eventually, our team settled on RhizoMet, Washington iGEM's solution to eliminate toxic levels of arsenic in the soil through the use of bioremediation.</p>\n"
      },
      "b2a28f37a0d" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">Our initial project concept was to create a probiotic that would chelate the build-up of heavy metals in affected populations. However, Dr. Bisnaz emphasized that in addition to the technical difficulties our team would face while developing this solution, including the risk of potential microbiome perturbations, the eventual approval for this solution would be difficult to coordinate between countries.</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">Our new candidate solution at the time was to create a biofilm bioreactor that would bind to and remove heavy metals from the Upper Columbia River (UCR) region. However, before fully committing to this concept, our team decided to refocus our efforts on redefining the context of the problem. To better understand the context of our problem, we began to look into the landscape of the affected region, using the EPA’s Human Health Risk Assessment (HHRA) as our guide [3].</span> <span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">The most critical findings are as follows:</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">The area surrounding the Upper Columbia River region (UCR) is generally thinly populated and consists of forests, farmland, and residential properties.  In 1896, approximately a dozen miles upstream of the U.S. - Canadia border, a small copper and gold smelter began operations in Trail, B.C. Over the course of a century, this small smelter grew in size and began to house more complex facilities, eventually being able to process lead, zinc, cadmium, silver, gold, bismuth, antimony, indium, germanium, and arsenic.</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">Presently, populations in the UCR region are exposed to many of the deposited emissions produced during the smelter's lifespan. Populations exposed to heavy metal exposure include:</span></p>\n<ul>\n<li><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">Residents</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">Outdoor workers</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">Recreational visitors</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">Colville High-Intensity Resource Users (CHIRU)</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">Spokane Tribe of Indians (STI)</span></li>\n</ul>\n<p></p>\n<p><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">These populations are poisoned from the incidental ingestion and inhalation of soil through gardening and recreational activities outside as well as inside of private homesteads and in communal areas such as parks and playgrounds.</span> <span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">Some of the major routes of exposure include:</span></p>\n<ul>\n<li><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">Incidental Ingestion of Surface Soil (major)</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">Inhalation of Airborne Particulates in Indoor Air (major)</span></li>\n<ul>\n<li><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">Airborne particulates from the soil may become suspended in the air by the wind or human disturbance, and over time, outdoor air may be transferred indoors.</span></li>\n</ul>\n<li><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">Dermal Contact with Surface Soil (minor)</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">Consumption of Fish (minor)</span></li>\n</ul>\n<p></p>\n<p><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">The HHRA provided our team with a general sense of the context surrounding the UCR region and its issues associated with the heavy metal deposits. Mentioned in the HHRA was a town in northeastern Washington named Northport that was within the affected UCR region and whose population seemed to have a litany of unusual, potentially heavy-metal-related health issues. We contacted Northport local <strong>Jamie Paparich</strong>, the instigator of the Northport Project, an advocacy group for the town, to learn more about how Northport was affected by heavy metal contamination. Here's what we learned from her:</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">Northport, WA is a small town right approximately 3 miles south of the U.S. - Canadia border whose population numbers around 300 people. Residents of Northport have been experiencing high rates of fatal and debilitating diseases, including but not limited to cancers, endocrine disorders, and Ulcerative Colitis.</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">Many Northport residents were convinced that out of the 119 residents that participated in a 2011 health survey conducted by <strong>Joshua Korenzik MD</strong>,</span> <span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">MD</span> <span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">Director of the Crohn’s and Colitis Center at Brigham and Women’s Hospital, that 17 residents were confirmed to have Chrohn's or Ulcerative Colitis, two types of Irritable Bowel Disease (IBD). Korenzik stated: \"that’s about 10 to 15 times what we’d expect to see in a population the size of Northport. I’m not aware of any other cluster like it.\"</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">It was clear to our team that we had to address this issue of the increasingly apparent health concerns arising in Northport, WA. Though industrial air pollutants have been declining in recent years, the damage has already been done. Heavy metals such as arsenic still persist in the soil and water and were detected in 83% of the sediment samples, and samples exceeded acceptable levels in 32% of the cases in a recent survey conducted regarding the Northport waterfront. [CITE]</span>&nbsp;</p>\n<p>Next, our team decided to consult <strong>Dr. Joe Wichmann</strong>, a technical advisor for the Northport remediation project commissioned by the EPA. We outlined our idea of a biofilm bioreactor, and he provided valuable feedback:</p>\n<ol>\n<li>The main issue with heavy metals in the Columbia River is not in the water. Much of the heavy metal waste is diluted once it enters the Columbia River, so the target of our project should be eliminating heavy metals from the soil rather than water. The heavy metal emissions in the air are of lesser concern.</li>\n<li>Heavy metal contamination is contained to the upper 2 inches of mineral soil, so a soil-focused solution would need to penetrate the duff and other organic matter to reach the soil with the highest levels of contamination.</li>\n<li>The terrain and landscape of the UCR vary widely. The soil ranges from sandy waterfront soils to thicker woodland soils interrupted by boulders and covered by organic matter, so a soil-based solution would need to be agnostic to soil type.</li>\n</ol>\n<p>In summary, in Northport, the top few inches of mineral topsoil (not including the organic duff layer) include sandy soils that have been previously contaminated with lead via aerial dispersion from industrial smokestacks. Northport residents are contaminated primarily through activities such as gardening, digging, and ingestion/inhalation of soil. Afflicted soil encompasses traditional indigenous and private homeowner property.</p>\n<p>For residents of Northport, an ideal soil-based remediation solution would be a low-cost, low-effort (less effort than the off-site relocation of contaminated soil from residential properties) and minimally-disruptive solution that would be agnostic to soil-type that outcompetes other remediation methods to reduce lead bioavailability by &gt;35% from 650ppm down to &lt;250ppm (WA Dept of Ecology standards).</p>\n<p>With this contextual information established, our team decided to first conduct some background research on existing, in-use remediation solutions so that our team could gain familiarity with the target goals and metrics of remediation, and second to identify a solution that could be used to alleviate this problem.&nbsp;</p>\n"
      },
      "b9379807575" : {
        "header_content" : "Overview",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "dbb3ae592b62" : {
        "carousel_imagesContents" : [ {
          "imgAltTag" : "",
          "imgCaption" : "Previous remediation efforts in Northport, WA",
          "imgLink" : "https://2021.igem.org/wiki/images/d/dc/T--Washington--Northport1Shed.jpg"
        }, {
          "imgAltTag" : "",
          "imgCaption" : "Previous remediation efforts in Northport, WA",
          "imgLink" : "https://2021.igem.org/wiki/images/7/7e/T--Washington--Northport2Excavation.jpg"
        }, {
          "imgAltTag" : "",
          "imgCaption" : "Overlook of Northport, WA",
          "imgLink" : "https://2021.igem.org/wiki/images/e/ed/T--Washington--Northport3TownOverlook.jpg"
        }, {
          "imgAltTag" : "",
          "imgCaption" : "Previous remediation efforts in Northport, WA",
          "imgLink" : "https://2021.igem.org/wiki/images/0/0f/T--Washington--Northport4WaterTrucks.jpg"
        }, {
          "imgAltTag" : "",
          "imgCaption" : "Lakeside view of Northport, WA",
          "imgLink" : "https://2021.igem.org/wiki/images/d/d5/T--Washington--Northport5Lake.jpg"
        }, {
          "imgAltTag" : "",
          "imgCaption" : "Mountain View of Northport, WA",
          "imgLink" : "https://2021.igem.org/wiki/images/6/66/T--Washington--Northport6MountainBackground.jpg"
        } ],
        "carousel_settings" : {
          "fontSize" : 100,
          "height" : 40,
          "interval" : 5000,
          "showCaptions" : true,
          "showControls" : true,
          "showIndicators" : true,
          "width" : 80
        },
        "type" : "CAROUSEL"
      },
      "e11d458f2bbb" : {
        "header_content" : "Project Conception",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "e98c0aa66453" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>To begin, we researched 12 types of remediation to gain a foundational understanding of the methods and goals used in environmental remediation. Northport, WA has utilized off-site disposal and soil replacement to treat private residences and communal areas, but this remediation solution is expensive and difficult to coordinate. Some remediation techniques that have been commonly used include containment, pump-and-treat, extraction, stabilization/solidification, soil washing, air stripping, precipitation, vitrification, thermal desorption, and biological remediation, among other methods. Below is a summary of the twelve categories of remediation our team looked into derived from the Federal Remediation Techniques Roundtable (FRTR) [4] :</p>\n<ol>\n<li>Air stripping: volatile organic compounds are separated from groundwater by exposing large areas of contaminated water to air. Examples include packed towers, diffused aeration, tray aeration, and spray aeration.</li>\n<li>Biological remediation: bioremediation is a process in which indigenous or inoculated micro-organisms metabolize organic contaminants found in soil and/or groundwater, converting them to less harmful end products.</li>\n<li>Containment: containment treatments prevent or significantly reduce the migration of contaminants in soils or groundwater, necessary whenever contaminated materials are designated to be left in place at a site of remediation. An example of this is a landfill cap.</li>\n<li>Extraction (Chemical): the use of an acid (e.g., hydrochloric acid) or a solvent to dissolve heavy metals.</li>\n<li>Off-site disposal: contaminated material is removed and transported to an off-site treatment or disposal area.&nbsp;</li>\n<li>Phytoremediation: a process that uses plants to remove, transfer, stabilize, and/or destroy organic or inorganic contaminants in soil and sediment.&nbsp;</li>\n<li>Precipitation: this process transforms dissolved contaminants from a liquid into an insoluble solid, facilitating the contaminant's removal from the liquid through sedimentation or filtration. The process usually uses pH adjustment, the addition of a chemical precipitant, and flocculation.</li>\n<li>Pump-and-treat: pump-and-treat technology retrieves groundwater through the use of extraction wells, trenches, or galleries, treats the water in an above-ground treatment system, and subsequently discharges the treated water.</li>\n<li>Soil washing: contaminants adherent to fine soil particles are filtered from bulk soil on the basis of particle size through the use of an aqueous system. The washing liquid may be supplemented with a basic leaching agent, surfactant, pH adjustment, or chelating agent to help remove organics and heavy metals.</li>\n<li>Stabilization/solidification: Contaminants are physically bound or enclosed within a stabilized mass (solidification), or chemical reactions are induced between the stabilizing agent and contaminants to reduce their mobility (stabilization).</li>\n<li>Thermal desorption: Steam/hot air injection or electrical resistance/electromagnetic/fiber optic/radio frequency heating is used to increase the volatilization rate of semi-volatiles and facilitate extraction.</li>\n<li>Vitrification: vitrification uses an electric current to melt soil or other earthen materials at extremely high temperatures to trap most inorganics and destroy organic pollutants by pyrolysis. Inorganic pollutants are incorporated within the vitrified glass and crystalline mass. Water vapor and organic pyrolysis combustion products are captured in a hood, which draws the contaminants into an off-gas treatment system that removes particulates and other pollutants from the gas. The vitrification product is a chemically stable, leach-resistant, glass/crystalline material similar to obsidian or basalt rock. The process destroys and/or removes organic materials. Heavy metals are retained within the molten soil.</li>\n</ol>\n<p>Among the 12 types of remediation we investigated, remediation methods, 4 (pump-and-treat, thermal desorption, air stripping, and precipitation) were unable to be applied in the problem space of Northport and other primary metal smelters due to their mode of contamination was largely non-soil based. An additional 4 (off-site disposal, chemical extraction, soil washing, and vitrification) were deemed to be infeasible due to the large scale of our project. leaving only 4 methods (phytoremediation, biological remediation, stabilization/solidification, and containment) as potential routes of remediation.</p>\n<p>Our team then began a more intensive review of phytoremediation, bioremediation, stabilization, and containment.</p>\n<p>Phytoremediation</p>\n<ul>\n<li>Advantages</li>\n<ul>\n<li>Low-cost, self-propagating.</li>\n</ul>\n<li>Disadvantages</li>\n<ul>\n<li>Potential to be consumed by higher-level tropic organisms, so the choice of plant needs to be precise.&nbsp;</li>\n</ul>\n</ul>\n<p>Bioremediation</p>\n<ul>\n<li>Advantages</li>\n<ul>\n<li>Low-cost, self-propagating.</li>\n<li>Easily cultured and inoculated.</li>\n</ul>\n<li>Disadvantages</li>\n<ul>\n<li><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">Potential to be displaced during variable conditions, intolerant of the cold.</span></li>\n</ul>\n</ul>\n<p>Stabilization/Solidification</p>\n<ul>\n<li>Advantages</li>\n<ul>\n<li>Permanent</li>\n</ul>\n<li>Disadvantages</li>\n<ul>\n<li>Somewhat difficult to scale-up</li>\n<li>Restricts land use (unable to use the land for gardening, playgrounds, etc.)</li>\n</ul>\n</ul>\n<p>Containment</p>\n<ul>\n<li style=\"margin-left:1.5em;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">Advantages</span></li>\n<ul>\n<li style=\"margin-left:3em;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">Easy to scale-up</span></li>\n</ul>\n<li><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\"> Disadvantages</span></li>\n<ul>\n<li><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">Restricts land use (unable to use the land for gardening, playgrounds, etc.)</span></li>\n</ul>\n</ul>\n<p></p>\n<p><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">With this information, we decided that we liked the scalability of the phytoremediation and bioremediation technologies and decided to have a dual focus on phytoremediation and bacterial bioremediation by pursuing <strong>rhizoremediation </strong>since our team was already working on developing a <em>bacterial </em>gene construct. The plant incorporated into this rhizoremediation process would aid in the propagation of our rhizobacteria and help preserve the rhizobacteria during cold winter months with high levels of snowfall.</span></p>\n"
      }
    },
    "contentOrder" : [ "1c91bd81b83", "e11d458f2bbb", "aa94742cf011", "b9379807575", "6ec1a9d9593", "2d2b4658478b", "b2a28f37a0d", "dbb3ae592b62", "59e52bfb1aaf", "e98c0aa66453", "4a76716228", "5d0dd5908b3", "744d181aef", "411b54e4ab" ],
    "hasSidebar" : true
  },
  "Implementation" : {
    "content" : {
      "0e0517da76b" : {
        "header_content" : "Associated Risks and Challenges",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "1e74fb8b0f6" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>We hope that this project can positively impact the lives of Upper Columbia Region residents by decreasing their exposure to arsenite. This would decrease their increased rates of diseases such as Ulcerative Collitis which are correlated to exposure to toxic forms of arsenic and improve their general wellbeing. We also hope that phytotoxicity caused by elevated levels of arsenic in soil [2] would be reduced such that the natural flora could grow uninhibited by these metabolic stresses which reduce plants' natural ability to survive. Finally, along with the diseases that arsenic exposure induces in humans, animals are also susceptible to cancer caused by arsenic exposure [3] and we envision that remediating the soil using native plants to sequester toxic forms of arsenic will reduce animals' exposure and help restore the native environment to the Upper Columbia Region.</p>\n"
      },
      "220042180e3" : {
        "header_content" : "Works Cited",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "6d1645010f69" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>The core of our project begins with a plant that can natively grow in soil in the Upper Columbia Region. After selecting such a plant, we will modify the bacteria in the rhizobium of the plant to sequester toxic forms of arsenic which cause disease and ailment to the residents of the region. To accomplish this goal, we will have to design the bacteria to use proteins which will bind to toxic forms of arsenic such that they are no longer bioavailable in the soil and therefore no longer able to inflict harm on people or the environment. After designing such a protein, we will verify the stability and model the impacts on the cell and surroundings. This will give us confidence in our design and allow us to judiciously perform experiments utilizing our design that further verify the metal binding ability and uptake of our modifed organism. Due to constraints regarding lab access and COVID-19 protocols, it is necessary to focus our efforts on modeling the feasibility of our design rather than relying heavily on experimental verification. Next, after we have created the modified organism which can uptake and sequest arsenic at above average rates, we will need to transform the plant root bacteria to contain our organism. Finally, with this step completed we can begin to test the effects on soil in isolated lab environments by culturing these transformed plants and measuring the arsenic content of the soil. After conducting these experiments and examining the effects on surrounding plants and organisms, we would present our findings to local officials and residents and propose the implementation of our remediation solution. We would continue to incorporate feedback and follow all regulatory guideslines for our project. If residential and governmental support was found for our genetically modified remediation, we would begin planting and testing our system in a small and controlled area of the Upper Columbia Region.&nbsp;</p>\n"
      },
      "96811a98cc2d" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p style=\"margin-left:1cm;\">[1] “Biotechnology Regulations.” USDA APHIS | Biotechnology Regulations, https://www.aphis.usda.gov/aphis/ourfocus/biotechnology/sa_regulations/ct_regulations.&nbsp;</p>\n<p style=\"margin-left:1cm;\">[2] Finnegan, Patrick M, and Weihua Chen. “Arsenic Toxicity: The Effects on Plant Metabolism.” Frontiers in Physiology, Frontiers Research Foundation, 6 June 2012, https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3368394/.&nbsp;</p>\n<p style=\"margin-left:1cm;\">[3] Tokar, Erik J, et al. “Cancer in Experimental Animals Exposed to Arsenic and Arsenic Compounds.” Critical Reviews in Toxicology, U.S. National Library of Medicine, Nov. 2010, https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3076186/.&nbsp;</p>\n<p></p>\n<p></p>\n"
      },
      "c459cd0de55d" : {
        "header_content" : "End Users",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "d83ed063a1cc" : {
        "banner_content" : {
          "bannerText" : "Implementation",
          "imageBlur" : 0,
          "imageLink" : "https://2021.igem.org/wiki/images/5/5e/T--Washington--page_header.png",
          "imageTopX" : 0,
          "imageTopY" : 0,
          "imageZoom" : 100,
          "textColor" : "WHITE",
          "textSize" : 10
        },
        "type" : "BANNER"
      },
      "df7724927aa" : {
        "header_content" : "Proposed Implementation",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "e94990c659d" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">We fully recognize that the use and deployment of our project's engineered organism could result in unintended human health and ecological impacts. The release of our organism into the environment could integrate into, proliferate, and disrupt natural ecosystems. As a result of this, locals in the vicinity of our organism could be directly affected by the organism and its waste products. For example, engineered bacteria may integrate themselves into water supplies and cause water-borne illnesses. Additionally, crop health may be affected by our engineered organism if native rhizobacterial populations are supplanted by our chosen organism. While this is absolutely not our intent, we plan to use extreme measures of caution to avoid all scenarios in which accidental harm could be caused from the release of our project. First, w</span>e recognize that safety poses an enormous challenge for the real world implementation of our project. Thus, in order to set reasonable expectations about the use of our project, we will conduct thorough testing in contained and isolated lab environments to demonstrate the safety of our engineered plants and the associated rhizobacteria before any in situ experiments are ever performed. Moreover, we recognize that thorough discourse with and support from residents and local government is mandatory to progressing with the implementation of our project, as ultimately, we do not want to force our solution to be used in places where it is not desired. Further still, we know that genetically engineered organisms are subject to strict oversight by the FDA, EPA, and USDA in the United States. As such, we plan to fully abide by the Coordinated Framework for Regulation of Biotechnology as established by the US government to oversee the safety of genetically engineered organisms such as our own [1]. Our in lab work will also be overseen by experts such as Dr. <span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Liangcai Gu from the UW Department of Biochemistry, </span>and each participating lab member has received full training on <span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">proper BSL-1 guidelines and safety regulations.</span> Finally, while constructing the proof of concept of our project,<span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"> we have decided to use E. coli as a model organism. If our organism were to be unintentionally released into the environment, it would not be possible for our particular strain of E. coli (K12 for example) to survive outside of lab conditions or to transfer plasmid DNA to other bacteria. In sum, w</span>e are confident that by taking these actions we can fully ensure the safety and positive impact of our solution before proceeding with implementation in soil and affected areas.</p>\n"
      }
    },
    "contentOrder" : [ "d83ed063a1cc", "df7724927aa", "6d1645010f69", "c459cd0de55d", "1e74fb8b0f6", "0e0517da76b", "e94990c659d", "220042180e3", "96811a98cc2d" ],
    "hasSidebar" : false
  },
  "Model" : {
    "content" : {
      "0471a0a71900" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>We wanted to use our model to gain a better understanding of the efficacy of our rhizoremediation. Therefore, we used our single cell model to calculate how much arsenic our bacteria can accumulate, and thus how much arsenic our rhizoremediation system can remove from contaminated soil. The parameters used in these calculations are shown in Table 2 below.</p>\n"
      },
      "04c11b84ba5" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>Our computational goals for RhizoMet consisted of two distinct parts. <span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto;\"> First, we aimed </span>to design computational models of our system to explore different aspects of our project design and to verify the feasibility of our remediation. Due to limited lab access and resources, we also aimed to minimize the number of experiments required to construct a proof of concept of the remediation capabilities of our engineered bacteria. <span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto;\">The second of our computational goals was to modify the protein binding sites of mammalian metallothionein MT-IA such that they consist of As(III) binding sites instead of Zn and Cd binding sites.</span>&nbsp;</p>\n"
      },
      "06c85064fa0" : {
        "exampleImage_imageLink" : "https://2021.igem.org/wiki/images/3/37/T--Washington--Model_Single_Cell_Initial_Conditions_Table.jpg",
        "exampleImage_percentageSize" : 60,
        "exampleImage_subtitle" : "Table 1: Initial conditions of the single cell model",
        "type" : "IMAGE"
      },
      "0ada5c7cb8c5" : {
        "header_content" : "Methodology",
        "header_priority" : 3,
        "type" : "HEADER"
      },
      "0c0656f2a6bb" : {
        "header_content" : "Sensitivity Analysis",
        "header_priority" : 2,
        "type" : "HEADER"
      },
      "0e8bfc0cd20f" : {
        "bannder_content" : {
          "bannerText" : "Model",
          "imageBlur" : 0,
          "imageLink" : "https://2021.igem.org/wiki/images/5/5e/T--Washington--page_header.png",
          "imageTopX" : 49,
          "imageTopY" : 100,
          "imageZoom" : 94,
          "textColor" : "WHITE",
          "textSize" : 10
        },
        "banner_content" : {
          "bannerText" : "Model",
          "imageBlur" : 0,
          "imageLink" : "https://2021.igem.org/wiki/images/5/5e/T--Washington--page_header.png",
          "imageTopX" : 49,
          "imageTopY" : 100,
          "imageZoom" : 94,
          "textColor" : "WHITE",
          "textSize" : 10
        },
        "type" : "BANNER"
      },
      "1be6cc95ac61" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>The results of Figure 18 and Figure 19 show that the binding rate constants had a low sensitivity. We also decided to conduct a parameter scan of ksMT, the synthesis rate for our metallothionein. The results of the parameter scans on ksMT are shown in Figure 20 and Figure 21.</p>\n"
      },
      "217d42321f2" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>We also conducted parameters scans on the rate at which our plasmids were transcripted as well as on what concentration of plasmid was in our cell. These results are shown in Figure 22 below.</p>\n"
      },
      "227f3ebf84" : {
        "header_content" : "Arsenic Accumulation Results",
        "header_priority" : 2,
        "type" : "HEADER"
      },
      "25fd2680bde7" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<pre>NATAA</pre>\n<pre>START</pre>\n<pre>61 A ALLAA</pre>\n<p></p>\n"
      },
      "283531a90a" : {
        "imagesInRow_items" : [ {
          "externalLink" : "",
          "imgAltTag" : "",
          "imgCaption" : "Figure 8: The design of plasmid 1",
          "imgLink" : "https://2021.igem.org/wiki/images/2/26/T--Washington--Model_Plasmid1_Diagram.jpg"
        }, {
          "externalLink" : "",
          "imgAltTag" : "",
          "imgCaption" : "Figure 9: The design of plasmid 2",
          "imgLink" : "https://2021.igem.org/wiki/images/e/e1/T--Washington--Model_Plasmid2_Diagram.jpg"
        }, {
          "externalLink" : "",
          "imgAltTag" : "",
          "imgCaption" : "Figure 10: The design of plasmid 3",
          "imgLink" : "https://2021.igem.org/wiki/images/c/c0/T--Washington--Model_Plasmid3_Diagram.jpg"
        } ],
        "type" : "IMAGES_IN_ROW"
      },
      "2b275403b1bb" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Using these best four mutations, we tested combinations of two mutations on the metallothionein to observe how these mutations would affect the proteins energy and distances. Similarly to the individual mutations, we compared the energies and the distance to the original model prior to design. The combinations of mutations are listed in the top left corner of the image below. The energy and distance results from performing design with two mutations is shown below:</span></p>\n"
      },
      "2ca776b9202b" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Next we generated fragment files. These are files that contain more folding information about the groups of amino acids that appear in the fasta file, which allows Rosetta to sample sections of the sequence rather than sample each residue individually. By predicting the structure of local sequences based on solved proteins, we reduced the sample space in Rosetta. Using a tool developed by the Baker Lab called </span><a href=\"http://robetta.bakerlab.org/\" target=\"_blank\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Robetta</span></a><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">, we submitted the FASTA sequence of our target protein which generates two fragment files, both of which we used.</span><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 0.6em;font-family: Arial;\">13</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Homology modeling also requires a hybridize.xml file, which tells Rosetta the modeling protocol. The hybridize.xml file we used is shown below:</span><br></p>\n"
      },
      "30888d3f0b7" : {
        "accordion_content" : [ {
          "panel" : "```\n<ROSETTASCRIPTS>\n    <TASKOPERATIONS>\n    </TASKOPERATIONS>\n    <SCOREFXNS>\n        <ScoreFunction name=\"stage1\" weights=\"score3\" symmetric=\"0\">\n            <Reweight scoretype=\"atom_pair_constraint\" weight=\"0.25\"/>\n        </ScoreFunction>\n        <ScoreFunction name=\"stage2\" weights=\"score4_smooth_cart\" symmetric=\"0\">\n            <Reweight scoretype=\"atom_pair_constraint\" weight=\"0.25\"/>\n        </ScoreFunction>\n        <ScoreFunction name=\"fullatom\" weights=\"ref2015_cart\" symmetric=\"0\">\n            <Reweight scoretype=\"atom_pair_constraint\" weight=\"0.25\"/>\n        </ScoreFunction>\n    </SCOREFXNS>\n    <FILTERS>\n   </FILTERS>\n    <MOVERS>\n        <Hybridize name=\"hybridize\" stage1_scorefxn=\"stage1\" stage2_scorefxn=\"stage2\" fa_scorefxn=\"fullatom\" batch=\"1\" stage1_increase_cycles=\"1.0\" stage2_increase_cycles=\"1.0\" linmin_only=\"1\">\n            <Fragments three_mers=\"full_model.pdb\" nine_mers=\"full_model.pdb\"/>\n            <Template pdb=\"4mt2_A_thread.pdb\" cst_file=\"AUTO\" weight=\"1.000\" />\n        </Hybridize>\n    </MOVERS>\n    <APPLY_TO_POSE>\n    </APPLY_TO_POSE>\n    <PROTOCOLS>\n        <Add mover=\"hybridize\"/>\n    </PROTOCOLS>\n</ROSETTASCRIPTS>\n```",
          "title" : "hybridize.xml"
        } ],
        "type" : "ACCORDION"
      },
      "352f747f776e" : {
        "imagesInRow_items" : [ {
          "externalLink" : "",
          "imgAltTag" : "",
          "imgCaption" : "Figure 4: Graph of results of smaller concentration species in the single cell model",
          "imgLink" : "https://2021.igem.org/wiki/images/2/26/T--Washington--Model_Single_Cell_Small_Concentration_Results.png"
        }, {
          "externalLink" : "",
          "imgAltTag" : "",
          "imgCaption" : "Figure 5: Graph of results of smaller concentration species over a small time interval.",
          "imgLink" : "https://2021.igem.org/wiki/images/6/68/T--Washington--Model_Single_Cell_Small_Time_Interval_Results.png"
        } ],
        "type" : "IMAGES_IN_ROW"
      },
      "39c5f9c89bce" : {
        "imagesInRow_items" : [ {
          "externalLink" : "",
          "imgAltTag" : "",
          "imgCaption" : "Figure 20: Parameter scan of ksMT. This graph examines the effect of varying ksMT on the concentration of free arsenic in the cell predicted by our model.",
          "imgLink" : "https://2021.igem.org/wiki/images/d/da/T--Washington--Model_PS_ksMT_free_As.png"
        }, {
          "externalLink" : "",
          "imgAltTag" : "",
          "imgCaption" : "Figure 21: Parameter scan of ksMT. This graph examines the effect of varying ksMT on the concentration of total arsenic in the cell.",
          "imgLink" : "https://2021.igem.org/wiki/images/9/92/T--Washington--Model_PS_ksMT_total_As.png"
        } ],
        "type" : "IMAGES_IN_ROW"
      },
      "3b0783facd19" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>The synthesis rate of metallothionein did have a significant effect on the total amount of arsenic sequestered. We had expected that a 30% increase in metallothionein synthesized would lead to a 30% increase in arsenic sequestered, which matched with the results of this parameter scan.</p>\n"
      },
      "3bb76139c4" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>Our model encorporates the kinetics of these processes:</p>\n<p>1) The transcription of both our plasmid and the chromosomal ars operon is controlled by the transcription factor arsR. ArsR is a dimer repressor protein which binds to a piece of DNA called the arsR binding site (ABS) to inhibit transcription. ArsR can bind to two As molecules. When arsR binds to arsenic, its affinity to the ABS is reduced, causing arsR to unbind from the ABS, allowing transcription to proceed. In addition to binding to the ABS, arsR can also temporarily interact with other sections of DNA which we have labled unspecific DNA.</p>\n<p>2) The entrance and exit of As(III) from the cell via GlpF. GlpF is an aquaglyceroporin facilitator that allows As(III) to enter and exit the cell [1]. The net flux of As(III) via GlpF is into the cell.</p>\n<p>3) As(III) exiting the cell via arsB.</p>\n<p>4) The transcription and translation of arsR and arsB from the E. coli chromosome.</p>\n<p>5) The transcription and translation of arsB, GlpF, and MT from our designed protein</p>\n<p>6) The binding of metallothioien to a total of seven arsenic molecules.</p>\n"
      },
      "3bdb7bae8fe1" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>The output grishin alignment files were used to create new PDB files that thread together each template PDB with our target protein’s FASTA sequence. We ran the following command for each template PDB to generate these files:</p>\n<pre>rosetta/main/source/bin/partial_thread.static.linuxgccrelease&nbsp;</pre>\n<pre>-in:file:fasta target.fasta&nbsp;</pre>\n<pre>-in:file:alignment target_template.grishin&nbsp;</pre>\n<pre>-in:file:template_pdb template.pdb</pre>\n"
      },
      "3eb0b764c909" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>The code of the models used for simulating plasmids 1, 2, and 3 are shown below. In plasmid 2, the rate of transcription of the T7 promoter was estimated using work from \"Kinetic modeling and simulation of in vitro transcription by phage T7 RNA polymerase\" by Siemann and colleages [5]. The transcription rate of mcherry was estimated based on a transcription rate of 12 amino acids per second and mcherry being 236 amino acids long [12]. The maturation rate of mcherry was obtained from \"A guide to choosing fluorescent proteins\" by Nathan Shaner, Paul Steinbach, and Roger Tsien [6]. When building the model for plasmid 3, we were not able to find a good parameter for the degradation of mcherry. As such, we decided to analyze the results of the model as it is now without a degradation rate equation. However, the lack of a degradation rate means that our model is likely not as accurate over longer time intervals. In the future, if we wanted to analzye our plasmid 3 model over a longer time interval, we would have to find a suitable parameter for the mcherry degradation rate.</p>\n"
      },
      "4859cf8674a" : {
        "accordion_content" : [ {
          "panel" : "```\nimport tellurium as te\nimport roadrunner\n\nr = te.loada(\"\"\"\nconst exAs3\n             \n# Entry of As3 into cell through Glpf\n\n    exAs3 -> As3; ((nGlpf + Glpf)*kcatGlpf*((exAs3-As3)/(exAs3+As3+((2*kcatGlpf)/kf))))  \n\n# Exit of As3 from cell through ArsB\n\n    As3 -> exAs3; ArsB*kcatArsB*(As3/(As3+KmArsB))   \n             \n# Transcription and degradation of chromosomal mRNA\n    -> mRNAx; ksmRNAx * ABSx\n    mRNAx -> ; kdmRNAx * mRNAx\n\n# Transcription and degradation of plasmid mRNA\n       \n    -> mRNAp ; (ABSp/ABSp_T)*ksmRNAp*Plas\n    mRNAp  ->   ; kdmRNAp * mRNAp             \n             \n# Translation and degradation of proteins\n\n    -> Glpf; ksGlpf * mRNAp\n    Glpf -> ; kdGlpf * Glpf\n\n    -> ArsB ; ksArsB * mRNAx\n    ArsB -> ; kdArsB * ArsB   \n\n    -> MT ; ksMT * mRNAp\n    MT -> ; kdMT * MT     \n    \n    -> ArsR; ksArsR * (mRNAx + mRNAp)\n    ArsR -> ; kdArsR * ArsR\n    \n# As (un)binding to MT\n\n     MT + As3 -> MTAs_1 ; kf * MT * As3 - kf * MTAs_1/K1\n     MTAs_1 + As3 -> MTAs_2 ; kf * MTAs_1 * As3 - kf * MTAs_2/K2\n     MTAs_2 + As3 -> MTAs_3 ; kf * MTAs_2 * As3 - kf * MTAs_3/K3\n     MTAs_3 + As3 -> MTAs_4; kf * MTAs_3* As3 - kf * MTAs_4/K4\n     MTAs_4 + As3 -> MTAs_5; kf * MTAs_4 * As3 - kf * MTAs_5/K5\n     MTAs_5 + As3 -> MTAs_6; kf * MTAs_5 * As3 - kf * MTAs_6/K6\n     MTAs_6 + As3 -> MTAs_7; kf * MTAs_6 * As3 - kf * MTAs_7/K7\n    \n    \n    MTAs_1 -> As3 ; kdMT * MTAs_1\n    MTAs_2 -> As3 + As3 ; kdMT * MTAs_2\n    MTAs_3 -> As3 + As3 + As3; kdMT * MTAs_3\n    MTAs_4 -> As3 + As3 + As3 + As3 ; kdMT * MTAs_4\n    MTAs_5 -> As3 + As3 + As3 + As3 + As3; kdMT * MTAs_5\n    MTAs_6 -> As3 + As3 + As3 + As3 + As3 + As3; kdMT * MTAs_6\n    MTAs_7 -> As3 + As3 + As3 + As3 + As3 + As3 + As3; kdMT * MTAs_7\n    \n# ArsR equations\n\n    # ArsR dimer formation\n    ArsR + ArsR -> ArsR2 ; kf * ArsR^2 - kf * ArsR2/KH\n    \n    # ArsR binding to unspecific DNA\n    U + ArsR -> UArsR ; kf * ArsR * U - kf * UArsR/KB1\n    U + ArsR2 -> UArsR2 ; kf * U * ArsR2 - kf * UArsR2/KB2\n    U + ArsR2As3 -> UArsR2As3 ; kf * U * ArsR2As3 - kf * UArsR2As3/KE1\n    U + ArsR2As3_2 -> UArsR2As3_2 ; kf * U * ArsR2As3_2 - kf * UArsR2As3_2 /KE2\n    \n    # ArsR2 binding to arsenic\n    ArsR2 + As3 -> ArsR2As3 ; kf * ArsR2 * As3 - kf * ArsR2As3/KC1\n    ArsR2As3 + As3 -> ArsR2As3_2 ; kf * ArsR2As3 * As3 - kf * ArsR2As3_2/KC2\n    \n    # ArsR degradation\n    ArsR2 -> ; 0.5 * kdArsR * ArsR2\n    ArsR2As3 -> As3; 0.5 * kdArsR * ArsR2As3\n    ArsR2As3_2 -> As3 + As3; 0.5 * kdArsR * ArsR2As3_2\n    \n    # ArsR binding to ABS\n    ABSx + ArsR2 -> ABSxArsR2 ; kf * ABSx * ArsR2 - kf * ABSxArsR2 / KA2\n    ABSx + ArsR2As3 -> ABSxArsR2As3 ; kf * ABSx * ArsR2As3 - kf * ABSxArsR2As3/KD1\n    ABSx + ArsR2As3_2 -> ABSxArsR2As3_2 ; kf* ABSx *ArsR2As3_2 - kf * ABSxArsR2As3_2/KD2\n    \n    ABSp + ArsR2 -> ABSpArsR2; kf * ABSp * ArsR2 - kf * ABSpArsR2 / KA2\n    ABSp + ArsR2As3 -> ABSpArsR2As3 ; kf * ABSp * ArsR2As3 - kf * ABSpArsR2As3/KD1\n    ABSp + ArsR2As3_2 -> ABSpArsR2As3_2 ; kf * ABSp * ArsR2As3_2 - kf * ABSpArsR2As3_2/KD2\n\n# Initial Conditions\n\n    exAs3 = 1*10^-6; As3 = 0; Glpf = 0\n    ArsB = 0\n    mRNAx = 0 ; ABSx = 1.66*10^-9\n    mRNAp = 0 ; ABSp = 6.64*10^-8; ABSp_T = 6.64*10^-8; Plas = 6.64*10^-8\n    MT = 0\n    ArsR = 1.63397*10^-6\n    MTAs_1 = 0 ; MTAs_2 = 0; MTAs_3 = 0 ; MTAs_4 = 0 ; MTAs_5 = 0; MTAs_6 = 0; MTAs_7 = 0\n    ArsR2 = 0 ; U = 0.0166 ; UArsR = 0; ArsR2As3 = 0  ; ABSxArsR2 = 0\n    ABSpArsR2 = 0; UArsR2 = 0 ; ArsR2As3_2 = 0 \n    ABSxArsR2As3 = 0 ; ABSpArsR2As3 = 0 ; UArsR2As3 = 0 \n    ABSxArsR2As3_2 = 0 ; ABSpArsR2As3_2 = 0 ; UArsR2As3_2 = 0\n\n# Constants\n\n    nGlpf = 33*10^-9\n\n    kcatGlpf = 1 ; kf = 10^6\n    kcatArsB = 1.34   ; KmArsB = 1.68*10^-6\n    ksmRNAx = 1.5*10^-2 ; kdmRNAx = 4.81*10^-3\n    ksmRNAp = 1.5*10^-2  ; kdmRNAp = 7.62*10^-3\n    ksGlpf = 0.043; kdGlpf = 3.07*10^-3\n    ksArsB = 7.33*10^-2 ; kdArsB = 0.00921\n    ksMT = 0.19672; kdMT = 0.00128\n    ksArsR = 7.33*10^-2 ; kdArsR = 3.07*10^-3\n    K1 = 10^12.35; K2 = 10^12.47; K3 = 10^12.52; K4 = 10^12.37; K5 = 10^12.21; K6 = 10^12.05; K7 = 10^11.8\n    KH = 1.59*10^8 ; KB1 = 3.51*10^1 ; KC1= 1.66*10^7 \n    KA2 = 3.33*10^7 ;KB2 = 1.68*10^1; KC2 = 1.66*10^7\n    KD1 = 1.26*10^4 ; KE1= 3.41*10^2 ; KD2 = 1.26*10^4 ; KE2 = 3.41*10^2\n         \n\"\"\")\nm = r.simulate(0,1800,10000,['time','As3','MTAs_7','Glpf','ArsR2As3_2'])\n```",
          "title" : "Plasmid 1 Model Code"
        }, {
          "panel" : "```\nimport tellurium as te\nimport roadrunner\n\nr = te.loada(\"\"\"\nconst exAs3\n             \n# Entry of As3 into cell through Glpf\n\n    exAs3 -> As3; ((nGlpf + Glpf)*kcatGlpf*((exAs3-As3)/(exAs3+As3+((2*kcatGlpf)/kf))))  \n\n# Exit of As3 from cell through ArsB\n\n    As3 -> exAs3; ArsB*kcatArsB*(As3/(As3+KmArsB))   \n             \n# Transcription and degradation of chromosomal mRNA\n    -> mRNAx; ksmRNAx * ABSx\n    mRNAx -> ; kdmRNAx * mRNAx\n\n# Transcription and degradation of plasmid mRNA\n       \n    -> mRNAp ; (Vmax*pT7)/(Kmd+pT7)\n    mRNAp  ->   ; kdmRNAp * mRNAp             \n             \n# Translation and degradation of proteins\n\n    -> Glpf; ksGlpf * mRNAp\n    Glpf -> ; kdGlpf * Glpf\n\n    -> ArsB ; ksArsB * mRNAx\n    ArsB -> ; kdArsB * ArsB   \n\n    -> MT ; ksMT * mRNAp\n    MT -> ; kdMT * MT     \n    \n    -> ArsR; ksArsR * (mRNAx + mRNAp)\n    ArsR -> ; kdArsR * ArsR\n    \n# As (un)binding to MT\n\n     MT + As3 -> MTAs_1 ; kf * MT * As3 - kf * MTAs_1/K1\n     MTAs_1 + As3 -> MTAs_2 ; kf * MTAs_1 * As3 - kf * MTAs_2/K2\n     MTAs_2 + As3 -> MTAs_3 ; kf * MTAs_2 * As3 - kf * MTAs_3/K3\n     MTAs_3 + As3 -> MTAs_4; kf * MTAs_3* As3 - kf * MTAs_4/K4\n     MTAs_4 + As3 -> MTAs_5; kf * MTAs_4 * As3 - kf * MTAs_5/K5\n     MTAs_5 + As3 -> MTAs_6; kf * MTAs_5 * As3 - kf * MTAs_6/K6\n     MTAs_6 + As3 -> MTAs_7; kf * MTAs_6 * As3 - kf * MTAs_7/K7\n    \n    \n    MTAs_1 -> As3 ; kdMT * MTAs_1\n    MTAs_2 -> As3 + As3 ; kdMT * MTAs_2\n    MTAs_3 -> As3 + As3 + As3; kdMT * MTAs_3\n    MTAs_4 -> As3 + As3 + As3 + As3 ; kdMT * MTAs_4\n    MTAs_5 -> As3 + As3 + As3 + As3 + As3; kdMT * MTAs_5\n    MTAs_6 -> As3 + As3 + As3 + As3 + As3 + As3; kdMT * MTAs_6\n    MTAs_7 -> As3 + As3 + As3 + As3 + As3 + As3 + As3; kdMT * MTAs_7\n    \n# ArsR equations\n\n    # ArsR dimer formation\n    ArsR + ArsR -> ArsR2 ; kf * ArsR^2 - kf * ArsR2/KH\n    \n    # ArsR binding to unspecific DNA\n    U + ArsR -> UArsR ; kf * ArsR * U - kf * UArsR/KB1\n    U + ArsR2 -> UArsR2 ; kf * U * ArsR2 - kf * UArsR2/KB2\n    U + ArsR2As3 -> UArsR2As3 ; kf * U * ArsR2As3 - kf * UArsR2As3/KE1\n    U + ArsR2As3_2 -> UArsR2As3_2 ; kf * U * ArsR2As3_2 - kf * UArsR2As3_2 /KE2\n    \n    # ArsR2 binding to arsenic\n    ArsR2 + As3 -> ArsR2As3 ; kf * ArsR2 * As3 - kf * ArsR2As3/KC1\n    ArsR2As3 + As3 -> ArsR2As3_2 ; kf * ArsR2As3 * As3 - kf * ArsR2As3_2/KC2\n    \n    # ArsR degradation\n    ArsR2 -> ; 0.5 * kdArsR * ArsR2\n    ArsR2As3 -> As3; 0.5 * kdArsR * ArsR2As3\n    ArsR2As3_2 -> As3 + As3; 0.5 * kdArsR * ArsR2As3_2\n    \n    # ArsR binding to ABS\n    ABSx + ArsR2 -> ABSxArsR2 ; kf * ABSx * ArsR2 - kf * ABSxArsR2 / KA2\n    ABSx + ArsR2As3 -> ABSxArsR2As3 ; kf * ABSx * ArsR2As3 - kf * ABSxArsR2As3/KD1\n    ABSx + ArsR2As3_2 -> ABSxArsR2As3_2 ; kf* ABSx *ArsR2As3_2 - kf * ABSxArsR2As3_2/KD2\n    \n    ABSp + ArsR2 -> ABSpArsR2; kf * ABSp * ArsR2 - kf * ABSpArsR2 / KA2\n    ABSp + ArsR2As3 -> ABSpArsR2As3 ; kf * ABSp * ArsR2As3 - kf * ABSpArsR2As3/KD1\n    ABSp + ArsR2As3_2 -> ABSpArsR2As3_2 ; kf * ABSp * ArsR2As3_2 - kf * ABSpArsR2As3_2/KD2\n\n# Initial Conditions\n\n    exAs3 = 1*10^-6; As3 = 0; Glpf = 0\n    ArsB = 0\n    mRNAx = 0 ; ABSx = 1.66*10^-9\n    mRNAp = 0 ; pT7 = 1.66*10^-8\n    MT = 0\n    ArsR = 1.63397*10^-6\n    MTAs_1 = 0 ; MTAs_2 = 0; MTAs_3 = 0 ; MTAs_4 = 0 ; MTAs_5 = 0; MTAs_6 = 0; MTAs_7 = 0\n    ArsR2 = 0 ; U = 0.0166 ; UArsR = 0; ArsR2As3 = 0  ; ABSxArsR2 = 0\n    ABSpArsR2 = 0; UArsR2 = 0 ; ArsR2As3_2 = 0 \n    ABSxArsR2As3 = 0 ; ABSpArsR2As3 = 0 ; UArsR2As3 = 0 \n    ABSxArsR2As3_2 = 0 ; ABSpArsR2As3_2 = 0 ; UArsR2As3_2 = 0\n\n# Constants\n\n    nGlpf = 33*10^-9\n\n    kcatGlpf = 1 ; kf = 10^6\n    kcatArsB = 1.34   ; KmArsB = 1.68*10^-6\n    ksmRNAx = 1.5*10^-2 ; kdmRNAx = 4.81*10^-3\n    Vmax = 3*10^-6; Kmd = 6.3*10^-9  ; kdmRNAp = 7.62*10^-3\n    ksGlpf = 0.043; kdGlpf = 3.07*10^-3\n    ksArsB = 7.33*10^-2 ; kdArsB = 0.00921\n    ksMT = 0.19672; kdMT = 0.00128\n    ksArsR = 7.33*10^-2 ; kdArsR = 3.07*10^-3\n    K1 = 10^12.35; K2 = 10^12.47; K3 = 10^12.52; K4 = 10^12.37; K5 = 10^12.21; K6 = 10^12.05; K7 = 10^11.8\n    KH = 1.59*10^8 ; KB1 = 3.51*10^1 ; KC1= 1.66*10^7 \n    KA2 = 3.33*10^7 ;KB2 = 1.68*10^1; KC2 = 1.66*10^7\n    KD1 = 1.26*10^4 ; KE1= 3.41*10^2 ; KD2 = 1.26*10^4 ; KE2 = 3.41*10^2\n\n\n\"\"\")\nm = r.simulate(0,1800,10000,['time','As3','MTAs_7','Glpf','ArsR2As3_2'])\n```",
          "title" : "Plasmid 2 Model Code"
        }, {
          "panel" : "```\nimport tellurium as te\nimport roadrunner\n\nr = te.loada(\"\"\"\nconst exAs3\n             \n# Entry of As3 into cell through Glpf\n\n    exAs3 -> As3; ((nGlpf + Glpf)*kcatGlpf*((exAs3-As3)/(exAs3+As3+((2*kcatGlpf)/kf))))  \n\n# Exit of As3 from cell through ArsB\n\n    As3 -> exAs3; ArsB*kcatArsB*(As3/(As3+KmArsB))   \n             \n# Transcription and degradation of chromosomal mRNA\n    -> mRNAx; ksmRNAx * ABSx\n    mRNAx -> ; kdmRNAx * mRNAx\n\n# Transcription and degradation of plasmid mRNA\n       \n    -> mRNAp ; (ABSp/ABSp_T)*ksmRNAp*Plas\n    mRNAp  ->   ; kdmRNAp * mRNAp             \n             \n# Translation and degradation of proteins\n\n    -> Glpf; ksGlpf * mRNAp\n    Glpf -> ; kdGlpf * Glpf\n\n    -> ArsB ; ksArsB * mRNAx\n    ArsB -> ; kdArsB * ArsB   \n\n    -> MT ; ksMT * mRNAp\n    MT -> ; kdMT * MT     \n    \n    -> ArsR; ksArsR * (mRNAx + mRNAp)\n    ArsR -> ; kdArsR * ArsR\n\n    -> umcherry; ksmcherry * mRNAp\n    umcherry -> mcherry ; kmmcherry * umcherry\n    \n# As (un)binding to MT\n\n     MT + As3 -> MTAs_1 ; kf * MT * As3 - kf * MTAs_1/K1\n     MTAs_1 + As3 -> MTAs_2 ; kf * MTAs_1 * As3 - kf * MTAs_2/K2\n     MTAs_2 + As3 -> MTAs_3 ; kf * MTAs_2 * As3 - kf * MTAs_3/K3\n     MTAs_3 + As3 -> MTAs_4; kf * MTAs_3* As3 - kf * MTAs_4/K4\n     MTAs_4 + As3 -> MTAs_5; kf * MTAs_4 * As3 - kf * MTAs_5/K5\n     MTAs_5 + As3 -> MTAs_6; kf * MTAs_5 * As3 - kf * MTAs_6/K6\n     MTAs_6 + As3 -> MTAs_7; kf * MTAs_6 * As3 - kf * MTAs_7/K7\n    \n    \n    MTAs_1 -> As3 ; kdMT * MTAs_1\n    MTAs_2 -> As3 + As3 ; kdMT * MTAs_2\n    MTAs_3 -> As3 + As3 + As3; kdMT * MTAs_3\n    MTAs_4 -> As3 + As3 + As3 + As3 ; kdMT * MTAs_4\n    MTAs_5 -> As3 + As3 + As3 + As3 + As3; kdMT * MTAs_5\n    MTAs_6 -> As3 + As3 + As3 + As3 + As3 + As3; kdMT * MTAs_6\n    MTAs_7 -> As3 + As3 + As3 + As3 + As3 + As3 + As3; kdMT * MTAs_7\n    \n# ArsR equations\n\n    # ArsR dimer formation\n    ArsR + ArsR -> ArsR2 ; kf * ArsR^2 - kf * ArsR2/KH\n    \n    # ArsR binding to unspecific DNA\n    U + ArsR -> UArsR ; kf * ArsR * U - kf * UArsR/KB1\n    U + ArsR2 -> UArsR2 ; kf * U * ArsR2 - kf * UArsR2/KB2\n    U + ArsR2As3 -> UArsR2As3 ; kf * U * ArsR2As3 - kf * UArsR2As3/KE1\n    U + ArsR2As3_2 -> UArsR2As3_2 ; kf * U * ArsR2As3_2 - kf * UArsR2As3_2 /KE2\n    \n    # ArsR2 binding to arsenic\n    ArsR2 + As3 -> ArsR2As3 ; kf * ArsR2 * As3 - kf * ArsR2As3/KC1\n    ArsR2As3 + As3 -> ArsR2As3_2 ; kf * ArsR2As3 * As3 - kf * ArsR2As3_2/KC2\n    \n    # ArsR degradation\n    ArsR2 -> ; 0.5 * kdArsR * ArsR2\n    ArsR2As3 -> As3; 0.5 * kdArsR * ArsR2As3\n    ArsR2As3_2 -> As3 + As3; 0.5 * kdArsR * ArsR2As3_2\n    \n    # ArsR binding to ABS\n    ABSx + ArsR2 -> ABSxArsR2 ; kf * ABSx * ArsR2 - kf * ABSxArsR2 / KA2\n    ABSx + ArsR2As3 -> ABSxArsR2As3 ; kf * ABSx * ArsR2As3 - kf * ABSxArsR2As3/KD1\n    ABSx + ArsR2As3_2 -> ABSxArsR2As3_2 ; kf* ABSx *ArsR2As3_2 - kf * ABSxArsR2As3_2/KD2\n    \n    ABSp + ArsR2 -> ABSpArsR2; kf * ABSp * ArsR2 - kf * ABSpArsR2 / KA2\n    ABSp + ArsR2As3 -> ABSpArsR2As3 ; kf * ABSp * ArsR2As3 - kf * ABSpArsR2As3/KD1\n    ABSp + ArsR2As3_2 -> ABSpArsR2As3_2 ; kf * ABSp * ArsR2As3_2 - kf * ABSpArsR2As3_2/KD2\n\n# Initial Conditions\n\n    exAs3 = 1*10^-6; As3 = 0; Glpf = 0\n    ArsB = 0\n    mRNAx = 0 ; ABSx = 1.66*10^-9\n    mRNAp = 0 ; ABSp = 6.64*10^-8; ABSp_T = 6.64*10^-8; Plas = 6.64*10^-8\n    MT = 0\n    ArsR = 1.63397*10^-6\n    umcherry = 0; mcherry = 0\n    MTAs_1 = 0 ; MTAs_2 = 0; MTAs_3 = 0 ; MTAs_4 = 0 ; MTAs_5 = 0; MTAs_6 = 0; MTAs_7 = 0\n    ArsR2 = 0 ; U = 0.0166 ; UArsR = 0; ArsR2As3 = 0  ; ABSxArsR2 = 0\n    ABSpArsR2 = 0; UArsR2 = 0 ; ArsR2As3_2 = 0 \n    ABSxArsR2As3 = 0 ; ABSpArsR2As3 = 0 ; UArsR2As3 = 0 \n    ABSxArsR2As3_2 = 0 ; ABSpArsR2As3_2 = 0 ; UArsR2As3_2 = 0\n\n# Constants\n\n    nGlpf = 33*10^-9\n\n    kcatGlpf = 1 ; kf = 10^6\n    kcatArsB = 1.34   ; KmArsB = 1.68*10^-6\n    ksmRNAx = 1.5*10^-2 ; kdmRNAx = 4.81*10^-3\n    ksmRNAp = 1.5*10^-2  ; kdmRNAp = 7.62*10^-3\n    ksGlpf = 0.043; kdGlpf = 3.07*10^-3\n    ksArsB = 7.33*10^-2 ; kdArsB = 0.00921\n    ksMT = 0.19672; kdMT = 0.00128\n    ksArsR = 7.33*10^-2 ; kdArsR = 3.07*10^-3\n    ksmcherry= 0.05085 ; kmmcherry = 0.001111\n    K1 = 10^12.35; K2 = 10^12.47; K3 = 10^12.52; K4 = 10^12.37; K5 = 10^12.21; K6 = 10^12.05; K7 = 10^11.8\n    KH = 1.59*10^8 ; KB1 = 3.51*10^1 ; KC1= 1.66*10^7 \n    KA2 = 3.33*10^7 ;KB2 = 1.68*10^1; KC2 = 1.66*10^7\n    KD1 = 1.26*10^4 ; KE1= 3.41*10^2 ; KD2 = 1.26*10^4 ; KE2 = 3.41*10^2\n\"\"\")\nm = r.simulate(0,3600,10000,['time','As3','MTAs_7','Glpf','ArsR2As3_2','mcherry'])\n```",
          "title" : "Plasmid 3 Model Code"
        } ],
        "type" : "ACCORDION"
      },
      "4a78b0e32f70" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>The resulting plot of plasmid 3 shows that after one hour, mcherry is produced within the cell at a concentration of about 1.2*10<sup>-5</sup> M. This corresponds to about the amount of mcherry that could be used for a fluorescence experiment. As a result, our results indicate that this plasmid could be used if we wanted to adapt our project design to include fluorescent aspects. If we did adapt our project to encorporate a fluorescence based biosensor, then our development of this model could help in future experiments that could benefit from a prediction of the amount of mcherry produced in a given time interval.</p>\n"
      },
      "4d8480517a17" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>Additionally, we also decided to analyze the sensitivity of the binding rate constants of arsenic binding to MT used in the single cell model. The single cell model used seven different MT binding rate constants in the model: K1, K2, K3, K4, K5, K6, and K7.  From the our earlier results of the single cell model, shown in Figures 2, 3, 4, and 5, we knew that most metallothionein quickly becomes fully saturated with arsenic. Thus, the total amount of arsenic bound to metallothionein stays fairly constant once a steady state is reached. The following scans were performed in a range of plus or minus 90% instead of the normal plus of minus 30 percent to reinforce this point. <span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">The results of our parameter scan for each binding rate constant can be seen in Figure 18 below. Additionally, a zoomed in graph of the results of the parameter scan of K1 is shown in Figure 19.</span></p>\n"
      },
      "51114c5c05" : {
        "imagesInRow_items" : [ {
          "externalLink" : "",
          "imgAltTag" : "",
          "imgCaption" : "Figure 23: Parameter scan of exAs3. The graph shows the effect of varying exAs3 on the amount of free arsenic in the cell.",
          "imgLink" : "https://2021.igem.org/wiki/images/d/d5/T--Washington--Model_PS_exAs3_free_As.png"
        }, {
          "externalLink" : "",
          "imgAltTag" : "",
          "imgCaption" : "Figure 24: Parameter scan of exAs3. The graph shows the effect of varying exAs3 on the amount of total arsenic in the cell.",
          "imgLink" : "https://2021.igem.org/wiki/images/9/9f/T--Washington--Model_PS_exAs3_total_As.png"
        } ],
        "type" : "IMAGES_IN_ROW"
      },
      "53d66e1cdfcd" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>The output PDB files from homology modeling do not contain metal ions. Therefore, in order to add constraints on the binding site of the metals to improve their binding specificity, we first aligned the original protein structure, in our case 4MT2 protein, with the best homology model PDB output in PyMOL. Then we copied over the metal ions into the PDB file of the best homology model. This PDB file is what we used to continue protein design.&nbsp;</p>\n<ol>\n<li>Select region to be aligned</li>\n<li>Action (on selection) →  “Align” → “to molecule” → &lt;molecule of choice to be aligned to&gt;</li>\n<li>Select metals of interest to copy → “copy to object” → &lt;molecule of choice to copy molecule to&gt;</li>\n<li>Repeat for each segment of the protein&nbsp;&nbsp;</li>\n</ol>\n<p>Using PyMOL, we performed point mutations on 3 cysteine residues in order to specify the binding sites to conform to Arsenics ideal binding geometry. We mutated cysteine residues 15, 34, and 60 into alanine using the mutagenesis function.</p>\n<blockquote>\tWizard -&gt; Mutagenesis -&gt; Protein</blockquote>\n<p>Due to the pre-existing binding geometry of the metallothionein, several cystines coordinate 2 metals. In order to reduce the number of mutations made to the protein, we decided to mutate the cysteine residues which coordinate with two metals.&nbsp;</p>\n"
      },
      "549cd91fe39a" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>Below contains the terminal command used to run relax on a PDB file:</p>\n<pre>/Volumes/jweeSSD/Rosetta/rosetta_files/main/source/build/src/release/macos/10.13/64/x86/clang</pre>\n<pre><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 10pt;font-family: Helvetica Neue;\">/9.0/static/relax.static.macosclangrelease  -in:file:s S_0003_best_HM_aligned_ARSmod.pdb </span></pre>\n<pre><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 10pt;font-family: Helvetica Neue;\">-constraints:cst_fa_weight 2.0 -constraints:cst_fa_file 08032021_Ar_binding.cst </span></pre>\n<pre><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 10pt;font-family: Helvetica Neue;\">-relax:ramp_constraints false -relax:jump_move -nstruct 10</span></pre>\n"
      },
      "5794c8f15163" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>We want to determine the molecular structure of the Mammalian MT protein as it allows us to determine where the binding sites for the metals are located. After revealing the binding sites, we can study the amino acids that interact with the metals and the potential modifications to binding affinity to Arsenic instead of Cadmium and Zinc. Due to the differences between binding sites for Arsenic, Cadmium, and Zinc, we will simulate point mutations changing the extra coordinating amino acids to non-interactive ones to eliminate the previous interactions. We also want to optimize the binding affinity by simulating point mutations at the sites that will cause the protein and Arsenic to form more stable binding conformations, with the end goal of implementing these mutations in Wetlab to design an Arsenic binding protein with high affinity, allowing better accumulation and removal of arsenic in the environment.&nbsp;</p>\n<p>Modelling protein structure is a complex and difficult problem. Due to the difficulty in lab access during the pandemic, we were not able to use more precise “imaging” techniques, like x-ray crystallography or electron microscopy, to examine its structure (nor do we have the resources to undergo these tests). Therefore, we rely solely on simulations and their energy outputs to understand our protein’s structure. To simulate our protein’s structure, the metal binding, and to mutate our backbone protein, we used a software suite developed at the University of Washington called Rosetta. We chose this platform because its wide range of functions suits our needs, and we can easily get support for it at our university.&nbsp;</p>\n<p>However, simulating the protein’s structure introduces some uncertainty and variability, which is problematic because it is harder for us to predict how exactly our protein and metals bind. There are several ways each atom in the protein can interact with each other, and each of these must be considered since they may influence the overall protein structure. We use energy output as a measure of how close the protein is to its most stable state, but it is difficult to pinpoint the exact model that will lead to the lowest energy conformation.&nbsp;</p>\n<p>During the structure simulation, Rosetta randomly folds the protein one residue at a time, discarding folds that increase the total energy of the protein and keeping ones that decrease the energy. However, depending on how Rosetta initially folds the protein, when it finishes going through the entire sequence, it does not always reach the lowest energy conformation possible. Out of potentially infinite local energy minima there is only one general energy minimum, which is the one we want. When Rosetta tries to minimize the energy, the final fold will likely be one of several local energy minima rather than the lowest energy model that is the most accurate. We can try to find this by generating hundreds of models and analyzing only the few with the lowest energies.&nbsp;</p>\n"
      },
      "596fd9ab9a" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>Without the ability to verify parameter values via Wetlab testing, all our parameters are either directly from literature or are educated guesses dervied from similar parameters in literature. Thus, we needed to perform a sensitivity analysis on our parameters in our single cell model to make sure an error in our parameter estimations would not invalidate our general results. A sensitivity analysis is a simulation in which a parameter is varied by set amounts and the effects of varying the parameter on the results of the model is analyzed. Another word for a sensitivity analysis is a parameter scan. A parameter has a high sensitivity if small changes to the parameter result in large changes to the model. To conduct our sensitivity analysis, we used Tellurium to check different values for each parameter in the single cell model, plotted the results, and checked the concentration of species at steady state. U<span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">nless otherwise stated, we varied each parameter by a range of plus or minus 30%.</span> In our graphs, 50 values of the parameter were linearly interpolated between the range of the scan and each simulated separately. We found a simulation of 100,000 seconds sufficient to provide a visual approximation of steady state.</p>\n<p>Since our project created a modified version of the protein metallothionein, it is difficult to accurately predict related kinetic modeling parameters, like the arsenic binding rate and protein degradation rate. For example, it was difficult for us to determine what degradation of metallothionein to use because the half life of metallothionein can range from less than 3 minutes for monkey and mouse MT to 50 minutes for a fusion MT protein analyzed in the paper \"Bioaccumulation of heavy metals in Escherichia coli expressing an inducible synthetic human metallothionein gene\" by Dr. Romeyer and colleages [4] [13]. The results of our sensitivity analysis on the degradation rate of MT (kdMT) are shown in Figure 14 and Figure 15. In order to analyze the effects of changing parameters on our model, we graphed how variation in kdMT affects the amount of free arsenic in the cell (Figure 14) and how variation in kdMT affects the total arsenic in the cell (Figure 15). The total arsenic in the cell is equal to the amount of free arsenic plus the amount of arsenic bound to MT and arsR in the cell.</p>\n"
      },
      "5a2690d74ec" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>The development our model was based on the paper \"Mechanistic Modeling of Genetic Circuits for ArsR Arsenic Regulation\" by Yves Berset, Davide Merulla, Aurelie Joublin, Vassily Hatzimanikatis, and Jan R. van der Meer [1]. The paper models an arsR based arsenic biosensor in E. coli, and uses many of the same reactions necessary to model our project. Our single cell model is composed of 40 different reaction equations. The equations and rates we modeled are described in the pdf below.</p>\n"
      },
      "5a8ff0ddd73" : {
        "header_content" : "Single Cell Model",
        "header_priority" : 2,
        "type" : "HEADER"
      },
      "5afeaf57fb57" : {
        "exampleImage_imageLink" : "https://2021.igem.org/wiki/images/d/db/T--Washington--Model_Overall_Cell_Diagram.jpg",
        "exampleImage_percentageSize" : 50,
        "exampleImage_subtitle" : "Figure 1: Overview of reactions occurring in our kinetic model.",
        "type" : "IMAGE"
      },
      "5dcdf040705" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>where 61 is the amino acid residue we want to mutate, A is the chain we want to mutate, in our case the MT protein (which can be checked in the pdb file), and ALLAA means “allow all amino acids”. Given which amino acid residue we hope to mutate and the ALLAA command, Rosetta determines what amino acid is best suited in that location to improve the stability of the entire protein. Other commands and protocols can be found on the resfile documentation website, <a href=\"https://www.rosettacommons.org/docs/latest/rosetta_basics/file_types/resfiles\" target=\"_blank\">RosettaCommons</a>.&nbsp;</p>\n<p>The design protocol outputs a PDB file with mutation that Rosetta decides is the best residue for that location. After the design protocol had been performed on all chosen amino acids, we looked at each design mutation in PyMOL and documented what mutations were made. For example, if we compare the sequences from before and after design, we might observe that residue 42 was originally an alanine and we mutated to a glutamate.&nbsp;</p>\n"
      },
      "5e74232d608" : {
        "accordion_content" : [ {
          "panel" : "```\nAtomPair CD 62 SG 50 HARMONIC 2.15 0.5\nAtomPair CD 62 SG 57 HARMONIC 2.00 0.5\nAtomPair CD 62 SG 59 HARMONIC 1.95 0.5\nAtomPair CD 63 SG 33 HARMONIC 2.20 0.5\nAtomPair CD 63 SG 44 HARMONIC 1.95 0.5\nAtomPair CD 63 SG 48 HARMONIC 2.15 0.5\nAtomPair CD 64 SG 37 HARMONIC 1.90 0.5\nAtomPair CD 64 SG 41 HARMONIC 2.20 0.5\nAtomPair CD 64 SG 44 HARMONIC 1.85 0.5\nAtomPair CD 65 SG 36 HARMONIC 2.20 0.5\nAtomPair CD 65 SG 50 HARMONIC 2.05 0.5\nAtomPair CD 65 SG 37 HARMONIC 2.05 0.5\nAtomPair CD 66 SG 7 HARMONIC 2.05 0.5\nAtomPair CD 66 SG 24 HARMONIC 2.00 0.5\nAtomPair CD 66 SG 21 HARMONIC 2.225 0.5\nAtomPair ZN 67 SG 19 HARMONIC 2.15 0.5\nAtomPair ZN 67 SG 24 HARMONIC 2.10 0.35\nAtomPair ZN 67 SG 29 HARMONIC 2.20 0.5\nAtomPair ZN 68 SG 7 HARMONIC 2.15 0.35\nAtomPair ZN 68 SG 13 HARMONIC 2.25 0.5\nAtomPair ZN 68 SG 26 HARMONIC 2.25 0.5\n\nAngle SG 50 CD 62 SG 57 HARMONIC 1.520 0.5\nAngle SG 57 CD 62 SG 59 HARMONIC 1.250 0.4\nAngle SG 50 CD 62 SG 59 HARMONIC 1.536 0.5\nAngle SG 44 CD 63 SG 48 HARMONIC 1.400 0.5\nAngle SG 33 CD 63 SG 44 HARMONIC 1.400 0.5\nAngle SG 33 CD 63 SG 48 HARMONIC 1.380 0.5\nAngle SG 37 CD 64 SG 41 HARMONIC 1.450 0.5\nAngle SG 41 CD 64 SG 44 HARMONIC 1.250 0.5\nAngle SG 37 CD 64 SG 44 HARMONIC 1.536 0.5\nAngle SG 36 CD 65 SG 50 HARMONIC 1.400 0.\nAngle SG 36 CD 65 SG 37 HARMONIC 1.325 0.5\nAngle SG 50 CD 65 SG 37 HARMONIC 1.400 0.5\nAngle SG 24 CD 66 SG 21 HARMONIC 1.510 0.5\nAngle SG 7 CD 66 SG 24 HARMONIC 1.475 0.\nAngle SG 7 CD 66 SG 21 HARMONIC 1.425 0.5\nAngle SG 19 ZN 67 SG 24 HARMONIC 1.400 0.5\nAngle SG 24 ZN 67 SG 29 HARMONIC 1.400 0.5\nAngle SG 19 ZN 67 SG 29 HARMONIC 1.400 0.5\nAngle SG 7 ZN 68 SG 13 HARMONIC 1.400 0.5\nAngle SG 7 ZN 68 SG 26 HARMONIC 1.536 0.5\nAngle SG 13 ZN 68 SG 26 HARMONIC 1.380 0.5\n```",
          "title" : "Constraint file: 08032021_Ar_binding.cst"
        } ],
        "type" : "ACCORDION"
      },
      "5eb6d67ff7e" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>We also observed that several residue locations did not experience mutations, suggesting that the amino acids are already the best at the residue location.&nbsp;</p>\n"
      },
      "65c67d4a700b" : {
        "imagesInRow_items" : [ {
          "externalLink" : "",
          "imgAltTag" : "",
          "imgCaption" : "Figure 16: Parameter scan for kdMT. The graph shows the effect of varying the kdMT parameter by plus or minus 30 percent on the concentration of free arsenic in the cell.",
          "imgLink" : "https://2021.igem.org/wiki/images/a/ae/T--Washington--Model_PS_30_kdMT_free_As3.png"
        }, {
          "externalLink" : "",
          "imgAltTag" : "",
          "imgCaption" : "Figure 17: Parameter scan for kdMT. The graph shows the effect of varying the kdMT parameter by plus or minus 30 percent on the concentration of total arsenic in the cell.",
          "imgLink" : "https://2021.igem.org/wiki/images/0/04/T--Washington--Model_PS_30_kdMT_total_As3.png"
        } ],
        "type" : "IMAGES_IN_ROW"
      },
      "66546411de39" : {
        "header_content" : "Methodology",
        "header_priority" : 3,
        "type" : "HEADER"
      },
      "6863257e0fa" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>Figure 25: Parameter scans for ksGlpf, kdGlpf, and kdmRNAp.</p>\n"
      },
      "6887f8dfb70d" : {
        "pdfViewer_pdfHeightPixel" : 1200,
        "pdfViewer_pdfLink" : "https://2021.igem.org/wiki/images/a/a3/T--Washington--Model_Single_Cell_Model_Equations.pdf",
        "pdfViewer_pdfWidthPercentage" : 75,
        "type" : "PDF_VIEWER"
      },
      "6af4f31faaeb" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>As we were building our model, we had several questions about the parameters used in the \"Mechanistic Modeling of Genetic Circuits for ArsR Arsenic Regulation\" paper, so we reached out to paper author Jan Roelof Van Der Meer [1]. Through our correspondence, we were able to clarify how specific parameters such as the number of GlpF molecules per cell was set as well as what concentration of arsenic were used in their model. Additionally, we were also able recieve guidence about a small error in the paper where the constants of ksB and kdB parameters were interpreted differently in the paper text and the paper's model.&nbsp;</p>\n"
      },
      "6bebeacd789e" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>After building our model, we first decided to examine some of the main results of the single cell model. In order to understand the single cell model, we created plots displaying the behavior of important species in our model over time. These plots can be seen in Figures 2, 3, 4, and 5.</p>\n"
      },
      "6fcabe7937e7" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<h2>Future Improvements</h2>\n"
      },
      "71aceb8d2e0" : {
        "exampleImage_imageLink" : "https://2021.igem.org/wiki/images/5/5a/T--Washington--score_file.png",
        "exampleImage_percentageSize" : 50,
        "exampleImage_subtitle" : "Figure 27: Example of score file. The first column titled \"total_score\" was used to compare energies between different relax models. The rows represent different PDB files. ",
        "type" : "IMAGE"
      },
      "71b8b4b13f7" : {
        "header_content" : "Kinetic Modeling",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "7329806433a7" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>In order to simulate our protein structure, we used a technique in Rosetta called homology modeling. In addition to sequence information for the protein, homology modeling uses template proteins to guide the folding process in Rosetta. The accuracy of the models simulated by Rosetta depends on the similarity of the template structures and the number of gaps in the sequences. The more gaps in the templates, the more Rosetta must construct on its own, leading to a lot more variability in the homology models. Templates with high homology lead to faster convergence of the protein of interest’s structure.</p>\n<p>We preferred homology modeling to Rosetta’s other structure predicting protocol called de novo modeling. Instead of using templates to guide the folding process, de novo starts from just the amino acid sequence and uses Monte Carlo simulations to fold the protein. The individual models are less converged and less accurate than homology models as de novo must start from scratch each time, so this process is generally very inefficient. We recommend 50,000-100,000 models to see convergence, while for homology modeling, we only need about 100-200. However, de novo simulations on supercomputers could be useful if there are no similar structures available for the protein of interest, or if the homology models are suspected of relying too much on the templates.</p>\n<p></p>\n<h6>An overview of the homology modeling:</h6>\n"
      },
      "73cb4c1b17" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>We measured the cysteine residue to metal ion distances and angles using the relaxed PDB with the lowest energy. Using a Python script written by Dr. Frank DiMaio, we measured the distances and collected the data into a spreadsheet.</p>\n<p></p>\n"
      },
      "75d1d084ae3" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>The values of the parameters used in the model are shown in the pdf below. Because we were not able to have access to a lab when working on the model, we were not able to use lab work to obtain any parameter values. As a result, our parameters were either obtained from literature sources or were roughly estimated based on literature information. Some of the most difficult parameters for us to obtain were the synthesis and degradation rates for the proteins in our model. The synthesis rates of GlpF and MT were estimated using a translation rate of 12 amino acids per second. The rate of 12 amino acids per second was selected because it matched well with the translation rate constants from the paper we based our model on, \"Mechanistic Modeling of Genetic Circuits for ArsR Arsenic Regulation\"[1], and it is within the range of translation rates found in the paper, \"Polypeptide-chain-elongation rate in Escherichia coli B/r as a function of growth rate\" by Ry Young and Hans Bremer [2] . Additionally, because we created a new version of metallothionein, there are no literature values that exist that are perfectly applicable for us to estimate the binding rates of our MT to arsenic. As a result, we decided to estimate these parameters based on the binding rates of human MT-IA to zinc [3]. We also had to make an estimation of what the degradation rate of our MT would be. After searching for literature values of the degradation of metallothioneins in E. coli, we found that monkey and mouse MT degrades in E. coli with a half-life of less than 3 minutes and that yeast MT degrades in E. coli with a half-life of 15 minutes [4]. Because our MT was modified based on human MT-IA, we wanted to use a degradation value based on a mammalian MT. Our MT was modified to improve its stability over what might be expected of a wild type mamalian MT in E. coli. As a result, we decided to base our MT degradation off of the average of these two degradation rates and decided to base our degradation rate off of a 9 minute half-life.</p>\n"
      },
      "7809f048f0b3" : {
        "header_content" : "Inclusion of ArsB",
        "header_priority" : 2,
        "type" : "HEADER"
      },
      "7829d51c811" : {
        "header_content" : "Protein Modeling",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "7ccc6ca649c5" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>During the design process, we identified 7 residue locations which may result in energetically beneficial mutations: 5, 8, 42, 45, 49, 53, &amp; 61. We performed design then relax on each of these locations. Then we compared the energies of these mutated proteins to the original model used for design. We also compared the improvement of the protein-metal distances. We aimed for distances to be  2.28 Å, allowing for ranges between 2.23 Å to 2.33 Å. For distances which lay outside of this range, we calculated the amount of deviation which occurred. Then we calculated the average and maximum deviations for each mutation.&nbsp;</p>\n<p>During our first round of design, we observed that residues 5 and 49 formed mutations which caused unfavorable interactions with the Arsenic metal ion. Residue 5C mutated to a D. Residue 49I mutated to an E. To prevent this interaction, we performed design on these using the PIKAA command in the resfile. This process is described in the previous design section. After performing design again on residues 5 and 49, residue 5 resulted in maintaining its original amino acid while residue 49 mutated to a Q.&nbsp;</p>\n<p>Comparing the energetics and improvements in distances, we determined that residues 42, 45, 53, and 61 were the best residue mutations that both stabilize the protein energetically and stabilize the protein-metal interactions via the residue distances. Comparing the average distances for each mutation, all 4 of these residues have an overall decrease in average distance in comparison to the “before design” model. Additionally, comparing the energies of all four of these models, we observe an overall decrease in energy, thus indicating a stabilization of the protein. <span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">The results of the single mutations are shown below:</span></p>\n<p></p>\n"
      },
      "80a8bb9cdd36" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>The results shown in Figure 25 support that variations in ksGlpF and kdGlpF do not have a large impact on the accumulation of arsenic within the cell. The parameter scan of kdmRNAp showed that variation in kdmRNAp did not have a large impact on the free As in the cell. However, variation in kdmRNAp did result in a large variation in the total As3 in the cell. This is likely because increasing kdmRNAp results in a faster degradation rate of our plasmid, which would lead to less MT being produced, which would cause the total amount of arsenic bound to MT to decrease.</p>\n"
      },
      "83ebf05dc2d5" : {
        "header_content" : "Metallothionein Protein Design",
        "header_priority" : 2,
        "type" : "HEADER"
      },
      "84042a224ab5" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<h5>Relax:</h5>\n<p>Following the point mutations, we performed a relax function on the mutated MT protein. The relax function was performed in the command line/terminal. We created 10 relaxed PDB models using -nstruct 10 with a relax weight of 2.0. The relax function requires a constraint file as an input. The constraint file defines the distances and angles between the residues and metal ions that the protein must conform to in order to bind Arsenic. Arsenic requires a bond length of 2.28 Å and angles of 91°, 92°, and 88°.  [14]</p>\n<p>Below contains the code from the finalized constraint file.</p>\n"
      },
      "86650915e2ee" : {
        "pdfViewer_pdfHeightPixel" : 1000,
        "pdfViewer_pdfLink" : "https://2021.igem.org/wiki/images/8/83/T--Washington--Model_Single_Cell_Parameters.pdf",
        "pdfViewer_pdfWidthPercentage" : 75,
        "type" : "PDF_VIEWER"
      },
      "8699a38c99d" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>Figure 18: Graphs showing the results of parameter scans on K1, K2, K3, K4, K5, K6, and K7, which are the binding rate constants for arsenic binding to MT.</p>\n"
      },
      "8794fcb22927" : {
        "imagesInRow_items" : [ {
          "externalLink" : "",
          "imgAltTag" : "",
          "imgCaption" : "Figure 11: Results of the plasmid 1 model. The graph shows the concentrations of As3, MTAs_7, Glpf, and ArsR2As3_2 over time.",
          "imgLink" : "https://2021.igem.org/wiki/images/8/82/T--Washington--Model_Plas1_T7_sim.png"
        }, {
          "externalLink" : "",
          "imgAltTag" : "",
          "imgCaption" : "Figure 12: Results of the plasmid 2 model. The graph shows the concentrations of As3, MTAs_7, Glpf, and ArsR2As3_2 over time.",
          "imgLink" : "https://2021.igem.org/wiki/images/0/0f/T--Washington--Model_Plasmid2_sim_results.png"
        } ],
        "type" : "IMAGES_IN_ROW"
      },
      "8a2226c7662" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Once 10 PDB models were created from relaxing, we took a look at the score.sc file to compare the energetics of the protein models. We used energy values under the \"total_score\" column to compare energetics. </span></p>\n"
      },
      "8dd83c7ced75" : {
        "exampleImage_imageLink" : "https://2021.igem.org/wiki/images/9/9f/T--Washington--homology_modeling.png",
        "exampleImage_percentageSize" : 90,
        "exampleImage_subtitle" : "Figure 26: An overview of the homology modeling process.",
        "type" : "IMAGE"
      },
      "9513138a30d" : {
        "accordion_content" : [ {
          "panel" : "```\n#!/usr/bin/env python\n\"\"\"\nConvert clustal alignment files to grishin for use in rosetta\nAuthor: Ed van Bruggen <edvb@uw.edu>\n\"\"\"\n\nimport sys\nimport argparse\nfrom argparse import RawTextHelpFormatter\n\nparser = argparse.ArgumentParser(description=__doc__, formatter_class=RawTextHelpFormatter)\nparser.add_argument('--file', type=str, required=True,\n                    help='input clustal alignment file')\nparser.add_argument('--target', metavar='POS', type=int, default=1,\n                    help='position of target protein (default: 1)')\nargs = parser.parse_args()\n\naln = open(args.file)\nproteins = []\n\nfor i, line in enumerate(aln):\n    if i == 0 or line == '\\n' or line[0] == ' ':\n        continue\n    words = line.split()\n    skip = 0\n    for protein in proteins:\n        if protein[0] == words[0]:\n            protein[1] += words[1]\n            skip = 1\n            continue\n    if not skip:\n        proteins.append([words[0], words[1]])\n\ntarget = proteins[args.target - 1]\n\nfor protein in proteins:\n    if protein == target:\n        continue\n    grishin = open(target[0] + \"_\" + protein[0] + \".grishin\", \"w\")\n    grishin.write(\"## %s %s_thread\\n#\\nscores from program: 0\\n0 %s\\n0 %s\\n\" %\n                  (target[0], protein[0], target[1], protein[1]))\n```",
          "title" : "clustal_to_grishin.py"
        } ],
        "type" : "ACCORDION"
      },
      "951852666d2" : {
        "exampleImage_imageLink" : "https://2021.igem.org/wiki/images/7/79/T--Washington--Model_PS_K1_zoomed_in.png",
        "exampleImage_percentageSize" : 65,
        "exampleImage_subtitle" : "Figure 19: Zoomed in image of the parameter scan of K1",
        "type" : "IMAGE"
      },
      "9532149b4fc" : {
        "exampleImage_imageLink" : "https://2021.igem.org/wiki/images/b/b4/T--Washington--Model_Plasmid3_plot.png",
        "exampleImage_percentageSize" : 75,
        "exampleImage_subtitle" : "Figure 13: Results of the plasmid 3 model. The graph shows the concentrations of As3, MTAs_7, Glpf, ArsR2As3_2, and mcherry over time.",
        "imagesInRow_items" : [ {
          "externalLink" : "",
          "imgAltTag" : "",
          "imgCaption" : "Figure 16: Plot of results of Plasmid 3 model",
          "imgLink" : "https://2021.igem.org/wiki/images/b/b4/T--Washington--Model_Plasmid3_plot.png"
        } ],
        "type" : "IMAGE"
      },
      "9552ccf2928e" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>The T7 promoter is used for the mass production of proteins, so it was expected that plasmid 2 would have a far higher transcription rate than plasmid 1. However, upon examining the results of the model of plasmid 2, it was found that the concentration of MT with seven arsenic produced by this model was not reasonable for the amount of a protein that could be produced within E. coli. We drew two conclusions from these results. First, we concluded that the transcription rates of the T7 promotor used in our model may be higher than what would naturally occur in E. coli. This is likely because it is difficult to find parameters and models that would well fit our design. The second conclusion that we drew from this is it is likely that encorporating the T7 promoter into our plasmid would indeed mass produce our desired proteins, which would be ideal for any Wetlab experiments that are done that require mass amounts of our desired protein in the cells. However, if our Wetlab finds that many of their E. coli are not surviving well or that they are having difficulty isolating the proteins, then this can be explained by our model results that the T7 promoter may result in the production of too many proteins in the cell. If this occurs, then we would recommend that Wetlab decreases the number of plasmids used in their experiments. The results also indicate the importance of controlling plasmid expression using arsR in our implimented rhizobacteria design. Without controlled expression, the rhizobacteria would produce our proteins even in the absence of As, which would cause the bacteria to use resources to make proteins that are not needed, and this may lead to a decreased survival rate of our bacteria.</p>\n"
      },
      "95b9762b45" : {
        "gallery_content" : [ "https://2021.igem.org/wiki/images/9/99/T--Washington--Model_PS_concentration_of_plasmids_free_As.png", "https://2021.igem.org/wiki/images/9/97/T--Washington--Model_PS_concentration_of_plasmids_total_As.png", "https://2021.igem.org/wiki/images/4/44/T--Washington--Model_PS_plasmid_transcription_free_As.png", "https://2021.igem.org/wiki/images/e/e7/T--Washington--Model_PS_plasmid_transcription_total_As.png" ],
        "type" : "GALLERY"
      },
      "98b6a5fae34" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>From the results of making two mutations, combo5 (highlighted blue) and combo6 (highlighted purple) look the most promising for continuing with a third round of design, increasing the number of mutations made to three mutations. Future work on this protein would include increasing the number of mutations made on the backbone of the protein and observing changes in energies and distances in doing so.&nbsp;</p>\n<p>From our protein modeling work, we can conclude that our Metallothionein protein modeling serves as a proof of concept that improvements in metal binding sites in Metallothioneins to become more specific to certain metals is possible. Despite the challenges that we have encountered through using Rosetta, due to Rosetta’s lack of ability to model protein-metal interactions, we have formulated a modeling procedure to improve the specificity of metal binding sites in proteins.&nbsp;</p>\n<p>Thank you to Dr. Frank DiMaio for his guidance and mentorship with the protein modeling in this years iGEM season!</p>\n"
      },
      "9afaeb900c7f" : {
        "type" : "IMAGE"
      },
      "9b188dab61c" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>Rosetta is unable to recognize the format of this clustal alignment file, so we converted it to a Rosetta-compatible filetype called a Grishin alignment file. The following python script we wrote will accomplish this:</p>\n"
      },
      "9ba5ac91ed1" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>Figure 4 shows the concentration of MT bound to 0 to 6 As as well as the concentration of arsB over time. Figure 5 shows the concentrations of MT bound to zero to 6 MT over a smaller time scale.</p>\n"
      },
      "9ef4e02b9d66" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">We found that changes in the external concentration of As had a larger impact on the amount of sequestered arsenic than the amount of free arsenic in the cell.</span>&nbsp;</p>\n<p>When building the single cell model, we were unsure about the parameters for ksGlpF, kdGlpF, and kdmRNAp. Figure 25 shows the results of parameter scans on these species.</p>\n"
      },
      "a07990e9b7f6" : {
        "gallery_content" : [ "https://2021.igem.org/wiki/images/9/97/T--Washington--Model_PS_mRNAp_total_As.png", "https://2021.igem.org/wiki/images/1/13/T--Washington--Model_PS_kdGlpf_total_As.png", "https://2021.igem.org/wiki/images/a/ab/T--Washington--Model_PS_ksGlpf_free_As3.png", "https://2021.igem.org/wiki/images/8/88/T--Washington--Model_PS_ksGlpf_total_As.png", "https://2021.igem.org/wiki/images/0/05/T--Washington--Model_PS_mRNAp_free_As.png", "https://2021.igem.org/wiki/images/1/1c/T--Washington--Model_PS_kdGlpf_free_As.png" ],
        "type" : "GALLERY"
      },
      "a2378e572c7c" : {
        "header_content" : "Introduction",
        "header_priority" : 2,
        "type" : "HEADER"
      },
      "a4c4adef63f" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>The terminal command used to run the get_metal_dists.py file is below:</p>\n<pre>python get_metal_dists.py S_0003_best_HM_aligned_ARSmod_0009.pdb</pre>\n<p>We performed steps 3-5 numerous times to determine the model with the best constraint distances and angles prior to performing design. Using the best constraint angles and distances, we finalized the constraint file which would continue to be used in future relaxing of the model.&nbsp;</p>\n"
      },
      "a7d8debaeb9" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>Figure 22: Parameter scans of the concentration of plasmids and of the plasmid transcription rate.</p>\n"
      },
      "a83e776c49" : {
        "exampleImage_imageLink" : "https://2021.igem.org/wiki/images/7/7d/T--Washington--design_results.png",
        "exampleImage_percentageSize" : 80,
        "exampleImage_subtitle" : "Figure 29: Energy and distance results from performing design. Comparing the energy, average distance, and maximum distance of the original model before design to the models produced after design.  Models highlighted in yellow were determined to be the best mutations which decreased energies improved distances. ",
        "type" : "IMAGE"
      },
      "a87ace05e06e" : {
        "exampleImage_imageLink" : "https://2021.igem.org/wiki/images/5/5b/T--Washington--Model_As_Accumulation_Table.png",
        "exampleImage_percentageSize" : 65,
        "exampleImage_subtitle" : "Table 2: Soil Based Arsenic Accumulation Parameters",
        "type" : "IMAGE"
      },
      "a9e061fd16e" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>The following equations show how we calculated the minimum and maximum arsenic uptake by our bacteria in a kilogram of soil assuming an unlimited external concentration of arsenic, using minimum and maximum values of our model derived from the parameter scans of the MT degradation rate, our most uncertain parameter.</p>\n<p></p>\n<p>X<sub>min</sub> = Min As uptake (g) = U<sub>min</sub> * (74.9 g As III / mol) * V = <span style=\"font-size: 10pt;font-family: Arial;\">2.42E-18</span></p>\n<p>X<sub>max</sub> = Max As uptake (g) = U<sub>max</sub> * (74.9 g As III / mol) * V = <span style=\"font-size: 10pt;font-family: Arial;\">4.09E-17</span></p>\n<p>Min As uptake in soil (mg As / kg soil) = X<sub>min</sub> * (B / C) * N * (1000 mg / g) = 13.3</p>\n<p>Max As uptake in soil (mg As / kg soil) = X<sub>max</sub> * (B / C) * N * (1000 mg /g) = 255</p>\n"
      },
      "a9f811aa242c" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>From the parameter scans for the degradation rate, we found that while there is a significant impact on the total amount of arsenic sequestered in the cell, the concentration of free arsenic remains relatively constant and appears to mostly converge. This tells us that even if our estimation for this paramter was not accurate, the cell would still be able to sequester some arsenic. Doing another scan with the usual range (plus or minus 30% of the parameter value) showed that the effects of margin-of-error are relatively small. The results of conducting parameter scans with the range of plus or minus 30% on kdMT are shown in Figure 16 and Figure 17.</p>\n"
      },
      "ab6bfd21c49" : {
        "header_content" : "Homology Modeling",
        "header_priority" : 2,
        "type" : "HEADER"
      },
      "ad48a127bc2a" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>The results of modeling plasmids 1 and 2 are shown in Figures 11 and 12.</p>\n"
      },
      "ae6d3cc77570" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>The relax command was performed on all structures experiencing mutations. Only one relaxed model is required so we set -nstruct 1.&nbsp;</p>\n<p>Now we have a set of model which have been designed to incorporate a point mutation, then relaxed. By comparing the protein-metal distances and the energetics of these mutated proteins to the model prior to performing design, we can observe improvements in the stability of the protein and the binding of the metals through these mutations.&nbsp;</p>\n<p>Occasionally, we encountered an unfavorable mutation during the design process. We observed mutations which resulted in Glutamic Acid (E) and Aspartic Acid (D), which are negative residues that formed interactions with the metal ions. To prevent these unfavorable interactions with the metal ions, we performed design on these residue sites again but excluded D and E. Instead of the ALLAA command, we used the PIKAA command which stands for Pick Amino Acid. This specifies which amino acids Rosetta is allowed to use when mutationing the residue site. We use this command in the resfile:</p>\n<pre>NATAA</pre>\n<pre>START</pre>\n<pre>32 A PIKAA ACFGHIKLMNPQRSTVWY</pre>\n<p>After collecting data and identified which mutations were best at decreasing the energy of the model, we tested different combinations of mutations and compared the change in energetic stability.&nbsp;</p>\n"
      },
      "b095bddcdc56" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>In Figure 2, it can be seen that the largest concentration species produced by the model was MT bound to 7 As molecules. This shows that our model predicts that the cell was successfully able to produce MT that are able to accumulate large amounts of arsenic. Additionally, Figure 2 and Figure 3 also show that glpf was expressed beyond the amount normally present in the cell due to its inclusion in our plasmid. These results gave us initial feedback that suggested that our plasmid design would allow bacteria to successfully produce MT and GlpF that would allow the bacteria to accumulate large amounts of arsenic.</p>\n"
      },
      "b6918e6456d6" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>We decided to build our initial kinetic model on the accumulation of arsenic at the level of a single cell. At the time, we were unsure of what plant and rhizobacteria our ultimate project design would use. However, due to having limited lab access due to the COVID-19 pandemic, our team decided early on that any wetlab experiments would be implimented using E. coli. Therefore, in order for our model to support wetlab experiments and for our model to recieve data from wetlab experiments, we decided to develop our model based on E. coli. After developing our project goals and design, we decided to model the kinetics of a plasmid containg the proteins arsR, a transcription factor repressor which represses transcription in the absence of arsenic, GlpF, a transport protein that allows As(III) to enter the cell, and our modified Metallothionein. Additionally, our model incorporated the E. coli chromosome ars operon, which contains arsR, arsB, which is an arsenic efflux pump, and arsC, which is an arsenic reductase enzyme that converts As(V) to As(III). Figure 1 shows an overview of several of the processes in the cell that we attempted to model.</p>\n"
      },
      "bc67c69fcf94" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>To improve our model, we would like to gain more confidence in the parameters used, particularly parameters that were not possible to find in literature, such as the synthesis and degradation rates of our modified MT. In the future, we would like to work with our Wetlab to design experiments that can be used to learn more about several parameters used in our model. Additionally, we would like to use experiments such as metal accumulation assays to examine the accuracy of our model as a whole. If we obtained information on the ability of E.coli inoculated with our plasmid to accumulate arsenic, then we could match the data to what our model predicts.</p>\n<p>Additionally, our implimented project design would likely use a bacteria better suited for rhizoremediation than E.coli. We would like to create another model that is based off the arsenic accumulation proteins naturally present in the rhizobacteria we use. For example, our E. coli based model includes an ars operon containing arsR, arsB, and arsC. Most organisms contain a version of the ars operon, but the exact proteins used differ.</p>\n<p>Another future goal for our modeling is to expand our model to incorporate changes in external arsenic concentrations as well as incorporate more elements of our rhizoremediation implementation into our model. In order to do this, we would like to learn more about how arsenic diffuses into the root cells which would house our rhizobacteria. If we incorporated more elements of the rhizoremediation environment into our model, then our model would more accurately predict the effectiveness of our project design.</p>\n"
      },
      "bdbd720fcbe9" : {
        "exampleImage_imageLink" : "https://2021.igem.org/wiki/images/a/a4/T--Washington--MT_protein_green.png",
        "exampleImage_percentageSize" : 100,
        "type" : "IMAGE"
      },
      "be98c34ff812" : {
        "accordion_content" : [ {
          "panel" : "```\nimport tellurium as te\nimport roadrunner\n\nr = te.loada(\"\"\"\nconst exAs3\n             \n# Entry of As3 into cell through Glpf\n\n    exAs3 -> As3; ((nGlpf + Glpf)*kcatGlpf*((exAs3-As3)/(exAs3+As3+((2*kcatGlpf)/kf))))  \n\n# Exit of As3 from cell through ArsB\n\n    As3 -> exAs3; ArsB*kcatArsB*(As3/(As3+KmArsB))   \n             \n# Transcription and degradation of chromosomal mRNA\n    -> mRNAx; ksmRNAx * ABSx\n    mRNAx -> ; kdmRNAx * mRNAx\n\n# Transcription and degradation of plasmid mRNA\n       \n    -> mRNAp ; (ABSp/ABSp_T)*ksmRNAp*Plas\n    mRNAp  ->   ; kdmRNAp * mRNAp             \n             \n# Translation and degradation of proteins\n\n    -> Glpf; ksGlpf * mRNAp\n    Glpf -> ; kdGlpf * Glpf\n\n    -> ArsB ; ksArsB * mRNAx\n    ArsB -> ; kdArsB * ArsB   \n\n    -> MT ; ksMT * mRNAp\n    MT -> ; kdMT * MT     \n    \n    -> ArsR; ksArsR * (mRNAx + mRNAp)\n    ArsR -> ; kdArsR * ArsR\n    \n# As (un)binding to MT\n\n     MT + As3 -> MTAs_1 ; kf * MT * As3 - kf * MTAs_1/K1\n     MTAs_1 + As3 -> MTAs_2 ; kf * MTAs_1 * As3 - kf * MTAs_2/K2\n     MTAs_2 + As3 -> MTAs_3 ; kf * MTAs_2 * As3 - kf * MTAs_3/K3\n     MTAs_3 + As3 -> MTAs_4; kf * MTAs_3* As3 - kf * MTAs_4/K4\n     MTAs_4 + As3 -> MTAs_5; kf * MTAs_4 * As3 - kf * MTAs_5/K5\n     MTAs_5 + As3 -> MTAs_6; kf * MTAs_5 * As3 - kf * MTAs_6/K6\n     MTAs_6 + As3 -> MTAs_7; kf * MTAs_6 * As3 - kf * MTAs_7/K7\n    \n    \n    MTAs_1 -> As3 ; kdMT * MTAs_1\n    MTAs_2 -> As3 + As3 ; kdMT * MTAs_2\n    MTAs_3 -> As3 + As3 + As3; kdMT * MTAs_3\n    MTAs_4 -> As3 + As3 + As3 + As3 ; kdMT * MTAs_4\n    MTAs_5 -> As3 + As3 + As3 + As3 + As3; kdMT * MTAs_5\n    MTAs_6 -> As3 + As3 + As3 + As3 + As3 + As3; kdMT * MTAs_6\n    MTAs_7 -> As3 + As3 + As3 + As3 + As3 + As3 + As3; kdMT * MTAs_7\n\n    \n# ArsR equations\n\n    # ArsR dimer formation\n    ArsR + ArsR -> ArsR2 ; kf * ArsR^2 - kf * ArsR2/KH\n    \n    # ArsR binding to unspecific DNA\n    U + ArsR -> UArsR ; kf * ArsR * U - kf * UArsR/KB1\n    U + ArsR2 -> UArsR2 ; kf * U * ArsR2 - kf * UArsR2/KB2\n    U + ArsR2As3 -> UArsR2As3 ; kf * U * ArsR2As3 - kf * UArsR2As3/KE1\n    U + ArsR2As3_2 -> UArsR2As3_2 ; kf * U * ArsR2As3_2 - kf * UArsR2As3_2 /KE2\n    \n    # ArsR2 binding to arsenic\n    ArsR2 + As3 -> ArsR2As3 ; kf * ArsR2 * As3 - kf * ArsR2As3/KC1\n    ArsR2As3 + As3 -> ArsR2As3_2 ; kf * ArsR2As3 * As3 - kf * ArsR2As3_2/KC2\n    \n    # ArsR degradation\n    ArsR2 -> ; 0.5 * kdArsR * ArsR2\n    ArsR2As3 -> As3; 0.5 * kdArsR * ArsR2As3\n    ArsR2As3_2 -> As3 + As3; 0.5 * kdArsR * ArsR2As3_2\n    \n    # ArsR binding to ABS\n    ABSx + ArsR2 -> ABSxArsR2 ; kf * ABSx * ArsR2 - kf * ABSxArsR2 / KA2\n    ABSx + ArsR2As3 -> ABSxArsR2As3 ; kf * ABSx * ArsR2As3 - kf * ABSxArsR2As3/KD1\n    ABSx + ArsR2As3_2 -> ABSxArsR2As3_2 ; kf* ABSx *ArsR2As3_2 - kf * ABSxArsR2As3_2/KD2\n    \n    ABSp + ArsR2 -> ABSpArsR2; kf * ABSp * ArsR2 - kf * ABSpArsR2 / KA2\n    ABSp + ArsR2As3 -> ABSpArsR2As3 ; kf * ABSp * ArsR2As3 - kf * ABSpArsR2As3/KD1\n    ABSp + ArsR2As3_2 -> ABSpArsR2As3_2 ; kf * ABSp * ArsR2As3_2 - kf * ABSpArsR2As3_2/KD2\n\n# Initial Conditions\n\n    exAs3 = 1*10^-6; As3 = 0; Glpf = 0\n    ArsB = 0\n    mRNAx = 0 ; ABSx = 1.66*10^-9\n    mRNAp = 0 ; ABSp = 6.64*10^-8; ABSp_T = 6.64*10^-8; Plas = 6.64*10^-8\n    MT = 0\n    ArsR = 1.63397*10^-6\n    MTAs_1 = 0 ; MTAs_2 = 0; MTAs_3 = 0 ; MTAs_4 = 0 ; MTAs_5 = 0; MTAs_6 = 0; MTAs_7 = 0\n    ArsR2 = 0 ; U = 0.0166 ; UArsR = 0; ArsR2As3 = 0  ; ABSxArsR2 = 0\n    ABSpArsR2 = 0; UArsR2 = 0 ; ArsR2As3_2 = 0 \n    ABSxArsR2As3 = 0 ; ABSpArsR2As3 = 0 ; UArsR2As3 = 0 \n    ABSxArsR2As3_2 = 0 ; ABSpArsR2As3_2 = 0 ; UArsR2As3_2 = 0\n\n# Constants\n\n    nGlpf = 33*10^-9\n\n    kcatGlpf = 1 ; kf = 10^6\n    kcatArsB = 1.34   ; KmArsB = 1.68*10^-6\n    ksmRNAx = 1.5*10^-2 ; kdmRNAx = 4.81*10^-3\n    ksmRNAp = 1.5*10^-2  ; kdmRNAp = 7.62*10^-3\n    ksGlpf = 0.043; kdGlpf = 3.07*10^-3\n    ksArsB = 7.33*10^-2 ; kdArsB = 0.00921\n    ksMT = 0.19672; kdMT = 0.00128\n    ksArsR = 7.33*10^-2 ; kdArsR = 3.07*10^-3\n    K1 = 10^12.35; K2 = 10^12.47; K3 = 10^12.52; K4 = 10^12.37; K5 = 10^12.21; K6 = 10^12.05; K7 = 10^11.8\n    KH = 1.59*10^8 ; KB1 = 3.51*10^1 ; KC1= 1.66*10^7 \n    KA2 = 3.33*10^7 ;KB2 = 1.68*10^1; KC2 = 1.66*10^7\n    KD1 = 1.26*10^4 ; KE1= 3.41*10^2 ; KD2 = 1.26*10^4 ; KE2 = 3.41*10^2\n\n\"\"\")\n\nm = r.simulate(0,15000,10000,['time','As3','Glpf','MTAs_7'])\n\n\n```",
          "title" : "Single Cell Model Code"
        } ],
        "type" : "ACCORDION"
      },
      "c2a29200878" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>The result of modeling plasmid 3 is shown in Figure 13.</p>\n"
      },
      "c9219ec6b5" : {
        "header_content" : "Operon Design Results",
        "header_priority" : 2,
        "type" : "HEADER"
      },
      "cfd72faa4dfa" : {
        "header_content" : "Protein Modeling Results",
        "header_priority" : 2,
        "type" : "HEADER"
      },
      "d10e81b830" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>The end goal of protein modeling is to design a Metallothionein protein that has increased binding affinity to Arsenic. We can do this by taking our model and analyzing the interactions between the protein and the metal. In Rosetta, due to the differences in optimal binding sites for Arsenic versus the cadmium and zinc that the human Metallothionein naturally binds to, we first simulated point mutations changing the extra coordinating amino acids, specifically cysteines residues, to non-interactive alanine residues to eliminate the previous amino acid-metal interactions and allow better arsenic binding. Cadmium and Zinc coordinating geometries require 4 cysteine residues in a tetrahedral shape. Arsenic’s coordinating geometry requires 3 cysteine residues, also in a tetrahedral shape, the 4th location containing a lone pair of electrons. The mutation into alanine residue, the side chain is a hydrogen molecule, which will also decrease the energy of the structure of the backbone protein. Then we inserted point mutations in the amino acid sequence of the protein and simulate different combinations of mutations to find a conformation with the lowest energy. This energy state indicates the strongest binding between protein and metal, which would increase the effectiveness of arsenic accumulation from the environment.</p>\n<p></p>\n<h6>Overview of Protein Design:</h6>\n<ol>\n<li>Align metals and copy to best homology model pdb file</li>\n<li>Make point mutations (Cys -&gt; Ala)&nbsp;</li>\n<li>Relax 10x with constraint file</li>\n<li>Measure energies via score file</li>\n<li>Measure protein-metal distances</li>\n<li>Repeat steps 3-5 until best contraints for constaint file are determined&nbsp;</li>\n<li>Design on the lowest energy model from relax at residues that may improve the overall energetics of the model</li>\n<li>Relax all designed pdb models</li>\n<li>Measure energies and distances&nbsp;</li>\n<li>Choose the best mutations that decrease energy and improve distances.</li>\n</ol>\n"
      },
      "d14c08d97e0f" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>Upon comparing Figure 6 and Figure 7, it was clear that the presence or absence of arsB had little effect on the concentrations of important species in our model. The concentrations of As3, MT, and MTAs_7 are almost identical between our model with arsR and our model without ArsR. As a result, we were able to see that removing arsB had a minimal effect on the overall accumulation of As, thus we advised our Wetlab that it was not necessary to eliminate arsB from the E. coli chromosome. By making these models, we were able to save Wetlab experimental time as we were able to confirm that the presence of arsB would not interfere with any experiements they conduct, such as metal tolerance assays or metal accumulation assays. Additionally, these models were able to influence our project design, as after making these models, we were able to determine that we do not need to use bacteria without arsenic efflux pumps, such as arsB, for our project.</p>\n"
      },
      "d14e8d61dfc4" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<h5>Design:</h5>\n<p>For our project, we mutated one residue at a time and analyzed their energy scores compared to the energy of the original. After we mutated each residue individually (and checked for the positions that actually changed), we looked for the models that decreased the energy the most. We then used PyMOL to take a closer look at what was going on with the protein. Sometimes residues will mutate but end up adding additional unfavorable interaction with the metals. Thus, we eliminated these models from potential candidates to implement in Wetlab. Then we identified the specific residues that allowed lower energy and better stability and tried different combinations of the best mutations to see if we could decrease the energy further.</p>\n<p>After improving the binding geometry of Arsenic into the protein, we then improved the overall stability and energetics of the protein model. We created various mutations along the backbone of the MT protein to determine which mutations allow for the best improvement in energy. Mutations were created one position at a time to better evaluate the effect of each change to the whole structure. This was accomplished using a resfile, which outlines the mutation protocol for Rosetta. In the file, we specified which residues we wanted to mutate by their location, followed by a command indicating which amino acids we wanted to exclude from mutating at that position. For example,&nbsp;</p>\n"
      },
      "d37900f45af0" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>Observe the similarities between the graphs for the scans of plasmid concentration, transcription rate, and the metallothionein synthesis rate above. Though perhaps intuitive, this showed us that the relationships between the impact of changes in plasmid related parameters and metallothionein related parameters are roughly proportional and 1:1. This tells us that metallothionein is the significant contributing factor to the amount of arsenic sequestered.</p>\n<p>Another important parameter in our model was the external concentration of arsenic; that is, the concentration of arsenic in the environment. As a result, we decided to conduct a parameter scan on exAs3. The results are shown in Figure 23 and Figure 24.&nbsp;</p>\n"
      },
      "da11457b3ec" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Through our simulations, we found that one E. coli cell in our system could sequester between </span>2.42E-18<span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"> and </span>4.09E-17<span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"> grams of As III, assuming the external concentration of arsenic was unlimited. This amounts to between 13.3 and 255 milligrams of As III removed from a kg of soil with unlimited concentrations of As III. This conversion is shown in the figure above. We attribute the high variation of this range to the uncertainty brought from the degradation and synthesis rates of our custom MT protein which we cannot experimentally derive. We also recognize that the assumption of unlimited external arsenic has a large effect on the true remediation potential. However, while the result is a broad range, we believe that the minimum value represented, 13.3 mg of As remediated from a kg of soil, is still enough to have a profound impact on the wellbeing of surrounding residents living in arsenic contaminated soils. This is shown by the fact that the soil in Northport contains a range of 14.5 and 67 mg of arsenite per kg of soil. Conservatively removing 13.3 mg would represent a roughly 20% improvement in the worst case, and a roughly 91% improvement in the best case of the Northport soil concentrations. Therefore, our model predictions give us confidence that even the minimum amount of arsenic that we predict we could remediate from Northport’s soil would be a significant improvement on the health of their residents and the surrounding environment.</span></p>\n"
      },
      "db24f3dfea5b" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>After we assembled all these files, the only thing left to do was to run homology modeling using the following command:</p>\n<pre>rosetta/main/source/bin/rosetta_scripts.static.linuxgccrelease&nbsp;</pre>\n<pre>-in:file:fasta target.fasta&nbsp;</pre>\n<pre>-parser:protocol hybridize.xml&nbsp;</pre>\n<pre>-default_max_cycles 200&nbsp;</pre>\n<pre>-dualspace&nbsp;</pre>\n<pre>-nstruct number_of_models</pre>\n<p>The number of models generated can be altered with the nstruct option: we generated 100-200 models and our top models began to converge.</p>\n<p>A score file is produced when homology modeling is finished, which contains numbers used to determine which models have the lowest energy. This protocol uses an older, lower-resolution version of the score function. To compare the homology scores to the ligand docking models we made in the next step, we ran the following command to convert the score:</p>\n<pre>rosetta/main/source/bin/score_jd2.static.linuxgccrelease&nbsp;</pre>\n<pre>-s *.pdb&nbsp;</pre>\n<pre>-beta_cart</pre>\n<p>Finally, we sorted the scores in the score file from lowest energy to highest energy with the following command:</p>\n<pre>sort -r score.sc &gt; sorted.sc</pre>\n<p>We used our best 10% of models with the lowest energy scores to run ligand docking on. We opened these models in PyMOL, a visualization software developed by Schödinger. to visually analyze their structure.</p>\n<p></p>\n"
      },
      "dc92e4f752" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>The initial conditions of several species used in the single cell model are shown in Table 1 below. Not included in the table are the species whose initial conditions were equal to zero. The initial conditions for the following species are all equal to 0 M :</p>\n<p>As3, Glpf, and ArsB: the arsenic inside of the cell, the glpf produced by our plasmid, and the arsenic efflux pump ArsB.</p>\n<p>mRNAx and mRNAp: the mRNA produced by the chromosome and by the plasmid respectively.</p>\n<p>MT, MTAs_1, MTAs_2, MTAs_3, MTAs_4, MTAs_5, MTAs_6, and MTAs_7: MT bound to zero to seven arsenic molecules.</p>\n<p>ArsR2, ArsR2As3, and ArsR2As3_2: the dimer verison of arsR, dimer arsR bound to 1 As, and dimer arsR bound to 2 As.</p>\n<p>UArsR, UArsR2, UArsR2As3, and UArsR2As3_2: monomer arsR <span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto;\">bound to unspecific parts of DNA</span> , dimer arsR <span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto;\">bound to unspecific parts of DNA</span> , arsR bound to 1 As <span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto;\">bound to unspecific parts of DNA</span> , and arsR bound to 2 As bound to unspecific parts of DNA.</p>\n<p>ABSxArsR2, ABSxArsR2As3, and ABSxArsR2As3_2: dimer arsR bound to the arsenic binding site (ABS) on the chromosome, dimer arsR bound to 1 As bound to the ABS on the chromosome, and dimer arsR bound to 2 As bound to the ABS on the chromosome.</p>\n<p>ABSpArsR2, ABSpArsR2As3, and ABSpArsR2As3_2: dimer arsR bound to the ABS on the plasmid, dimer arsR bound to 1 As bound to the ABS on the plasmid, and dimer arsR bound to 2 As bound to the ABS on the plasmid.</p>\n"
      },
      "dd332a60b5" : {
        "gallery_content" : [ "https://2021.igem.org/wiki/images/2/29/T--Washington--Model_Single_Cell_Large_Concentration_Results.png", "https://2021.igem.org/wiki/images/2/26/T--Washington--Model_Single_Cell_Small_Concentration_Results.png", "https://2021.igem.org/wiki/images/9/9e/T--Washington--Model_Single_Cell_Medium_Concentration_Results.png", "https://2021.igem.org/wiki/images/6/68/T--Washington--Model_Single_Cell_Small_Time_Interval_Results.png" ],
        "imagesInRow_items" : [ {
          "externalLink" : "",
          "imgAltTag" : "",
          "imgCaption" : "Figure 2: Graph of the results of larger concentration species in the single cell model.",
          "imgLink" : "https://2021.igem.org/wiki/images/2/29/T--Washington--Model_Single_Cell_Large_Concentration_Results.png"
        }, {
          "externalLink" : "",
          "imgAltTag" : "",
          "imgCaption" : "Figure 3: Graph of the results of medium concentration species in the single cell model",
          "imgLink" : "https://2021.igem.org/wiki/images/9/9e/T--Washington--Model_Single_Cell_Medium_Concentration_Results.png"
        } ],
        "type" : "IMAGES_IN_ROW"
      },
      "e13efed01e75" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>The computational modeling for our project is centered around kinetic modeling. In kinetic modeling, the rates of different reactions within a system are used to predict the how concentrations of species in the model vary over time. After determining the rates of reactions within a system, a computer program is used to integrate the reaction rates into models which can predict how concentrations vary over time. For conducting our kinetic modeling, we decided to utilze the python environment Tellurium, which is designed for modeling biological networks. As we were learning how to use Tellurium, our team's project direction was shifting. Our team originally planned on designing a probiotic supplement which used bacteria to absorb lead in the gut, then switched to accumulating arsenic and lead in water, and then ultimately switched project designs to accumulating arsenic in soil. It was at this time that we started to build our initial kinetic model.</p>\n"
      },
      "e45a21f8b278" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>While designing the plasmid operon, our Wetlab was interested in whether knocking out the gene ArsB, which is naturally present in the chromosome of E. coli, would increase the accumulation of arsenic in the cell. ArsB functions as an arsenic efflux pump, so its function works against our project design of wanting to accumulate arsenic within bacteria. As a result, our Wetlab wanted to know if it would be valuable to spend time elimintating the arsB gene from our bacteria. In order to test this, we created a version of our single cell model in which the gene for arsB on the chromosome was eliminated and no arsB was present in the cell. The result of our original single cell model is shown in Figure 8 and the result of our model without arsB is shown in Figure 9.</p>\n"
      },
      "e9787bd0528e" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>The code for our model is shown below. Our code utilizes the python environment Tellurium. As we were learning to use Tellurium, we noted how there were few resources online on how to use Tellurium. As a result, we decided to make a tutorial video that introduces people how to build a basic model in the Tellurium. The education page of our wiki contains the tutorial video we created. If you would like to learn more about how to use Tellurium, then please watch our video on the Education page.</p>\n"
      },
      "ee023492b" : {
        "accordion_content" : [ {
          "panel" : "```\nimport sys,os\nimport argparse\nimport numpy\n\natom_dtype = numpy.dtype( [\n    (\"atomname\", numpy.unicode_, 4),\n    (\"resname\", numpy.unicode_, 3),\n    (\"chnid\", numpy.unicode_, 1),\n    (\"resid\", numpy.int32),\n    (\"X\", numpy.float64, 3),\n    (\"elt\", numpy.unicode_, 2),\n] )\n\nmetals=['LI','BE','NA','MG','AL','K','CA','V','CR','MN','FE','CO','NI','CU','ZN','GA','RB','SR','Y','ZR','MO','RU','RH','PD','AG','CD','IN','SN','SB','CS','BA','LA','HF','TA','W','RE','OS','IR','PT','AU','HG','TL','PB','CE','PR','SM','EU','GD','TB','HO','ER','YB','LU','PA','U']\nDISTCLOSE = 3.0\n\n\"\"\"\npdb reader\n\"\"\"\ndef parse_pdb(pdbfile):\n    allatoms = []\n    for line in pdbfile:\n        if line[:4] == 'ATOM' or line[:6] == \"HETATM\":\n            split_line = (\n                line[12:16], line[17:20], line[21], line[22:26], \n                (line[30:38], line[38:46], line[46:54]), line[76:78]\n            )\n            if (line[76:78] != ' H'):\n                allatoms.append(split_line)\n    \n    return (numpy.array(allatoms, dtype=atom_dtype))\n\n\"\"\"\nmain\n\"\"\"\nif __name__ == \"__main__\":\n    parser = argparse.ArgumentParser(description='Symmetric alignment from pointgroups.')\n    parser.add_argument('pdb', help='Input PDB file')\n    args = parser.parse_args()\n\n    with open(args.pdb) as pdbfile:\n        pdb = parse_pdb( pdbfile )\n\n    metalmask = numpy.array([x in metals for x in pdb['elt']])\n    metals = pdb[ metalmask ]\n    nonmetals = pdb[ numpy.logical_not(metalmask) ]\n\n    dists = numpy.sqrt( numpy.sum( numpy.square( metals['X'][:,None,:] - nonmetals['X'][None,:,:] ), axis=-1 ) )\n    contacts = (dists<DISTCLOSE).nonzero()\n\n    for (i,j) in zip(contacts[1],contacts[0]):\n        print (\n            nonmetals[i]['resid'],nonmetals[i]['resname'],nonmetals[i]['atomname'],':',\n            metals[j]['resid'],metals[j]['resname'],metals[j]['atomname'],'  d =',\n            dists[j,i]\n        )\n```",
          "title" : "get_metal_dists.py"
        } ],
        "type" : "ACCORDION"
      },
      "f0520ffbe0a3" : {
        "imagesInRow_items" : [ {
          "externalLink" : "",
          "imgAltTag" : "",
          "imgCaption" : "Figure 14: Sensitivity analysis for kdMT. The graph shows the effect of varying the parameter kdMT on the concentration of free arsenic in the cell.",
          "imgLink" : "https://2021.igem.org/wiki/images/6/6e/T--Washington--Model_PS_kdMT_Free_As3.png"
        }, {
          "externalLink" : "",
          "imgAltTag" : "",
          "imgCaption" : "Figure 15: Sensitivity analysis for kdMT. The graph shows the effect of varying the parameter kdMT on the concentration of total arsenic in the cell.",
          "imgLink" : "https://2021.igem.org/wiki/images/2/2a/T--Washington--Model_PS_kdMT_total_As3.png"
        } ],
        "type" : "IMAGES_IN_ROW"
      },
      "f1e64aad476" : {
        "imagesInRow_items" : [ {
          "externalLink" : "",
          "imgAltTag" : "",
          "imgCaption" : "Figure 6: As3, MT, and MTAs_7 concentrations over time produced by the model with arsB",
          "imgLink" : "https://2021.igem.org/wiki/images/f/f4/T--Washington--Model_With_ArsB.png"
        }, {
          "externalLink" : "",
          "imgAltTag" : "",
          "imgCaption" : "Figure 7: As3, MT, and MTAs_7 concentrations over time produced by the model without arsB",
          "imgLink" : "https://2021.igem.org/wiki/images/5/5d/T--Washington--Model_No_ArsB.png"
        } ],
        "type" : "IMAGES_IN_ROW"
      },
      "f5d1c950b" : {
        "header_content" : "Works Cited",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "f77055a20a1f" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>Homology modeling requires a FASTA file which is used to find the template structures, fragment files, and is used in the folding simulation. The format of a FASTA file is as follows:</p>\n<pre><span style=\"color: rgb(0,0,0);\">&gt;protein_name</span></pre>\n<pre><span style=\"color: rgb(0,0,0);\">Amino acid sequence</span></pre>\n<p>In addition to the amino acid sequence, homology modeling uses template PDB files of proteins that are similar in sequence to our input sequence. These proteins are likely to have a similar structure to our input protein since they have a similar amino acid sequence. Therefore, we can use these structures to generalize the protein structure before running modeling for faster convergence.</p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">To obtain these template PDB files, we used a tool </span><span style=\"color: rgb(0,0,0);background-color: rgb(245,245,245);font-size: 12pt;font-family: Roboto, sans-serif;\">developed by Zimmermann et al. called</span> <a href=\"https://toolkit.tuebingen.mpg.de/tools/hhpred\" target=\"_blank\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">HH_search</span></a><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">. We then  downloaded 2-5 templates and homologues with the lowest e-values and the fewest gaps in the sequence. Some of the downloaded templates contained extra chains or information that would interfere with our modeling, so we extracted the chain we wanted on each template with a python script built into Rosetta called clean_pdb.py. </span>The command to run the script is:</p>\n<pre>python2 rosetta/tools/protein_tools/scripts/clean_pdb.py protein.pdb chain_id</pre>\n<p>Running this python script produces a FASTA file along with the clean PDB file. To predict structure based on the templates, Rosetta needs an aligned file with the target FASTA file and the newly generated FASTA files for the template PDBs. We used a tool developed by Madeira et al. called <a href=\"https://www.ebi.ac.uk/Tools/msa/clustalo/\" target=\"_blank\">Clustal Omega</a> to align the se FASTA files and combine them all into a single file.12 We realized after a few tries that the target FASTA needs to be first in the output file, or later steps would compare the wrong sequences to each other. To ensure this, on the website we listed the target FASTA first and under parameters, set order to “input.”&nbsp;</p>\n<p></p>\n"
      },
      "f9a8cd8867" : {
        "gallery_content" : [ "https://2021.igem.org/wiki/images/c/cb/T--Washington--Model_PS_K4.png", "https://2021.igem.org/wiki/images/f/f1/T--Washington--Model_PS_K7.png", "https://2021.igem.org/wiki/images/1/1c/T--Washington--Model_PS_K5.png", "https://2021.igem.org/wiki/images/d/dc/T--Washington--Model_PS_K2.png", "https://2021.igem.org/wiki/images/a/ac/T--Washington--Model_PS_K6.png", "https://2021.igem.org/wiki/images/9/95/T--Washington--Model_PS_K1.png", "https://2021.igem.org/wiki/images/a/ac/T--Washington--Model_PS_K3.png" ],
        "type" : "GALLERY"
      },
      "fb8f9de1f7b1" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>[1] Berset, Y., Merulla, D., Joublin, A., Hatzimanikatis, V., &amp; van der Meer, J. R. (2017). Mechanistic Modeling of Genetic Circuits for ArsR Arsenic Regulation. <em>ACS synthetic biology</em>,<em> 6</em>(5), 862-874.&nbsp;</p>\n<p>[2] Young, R., &amp; Bremer, H. (1976). Polypeptide-chain-elongation rate in Escerichia coli B/r as a function of growth rate. <em>The Biochemical journal</em>,<em> 160</em>(2), 185-194.</p>\n<p>[3] Pinter, T. B., &amp; Stillman, M. J. (2014). The zinc balance: competitive zinc metalation of carbonic anhydrase and metallothionein 1A. <em>Biochemistry</em>,<em> 53</em>(39), 6276-6285.</p>\n<p>[4] Berka, T., Shatzman, A., Zimmerman, J., Strickler, J., &amp; Rosenberg, M. (1988). Efficient expression of the yeast metallothionein gene in Escherichia coli. Journal of bacteriology, 170(1), 21-26.</p>\n<p>[5] Arnold, S., Siemann, M., Scharnweber, K., Werner, M., Baumann, S. and Reuss, M. (2001), Kinetic modeling and simulation of in vitro transcription by phage T7 RNA polymerase. Biotechnol. Bioeng., 72: 548-561.&nbsp;</p>\n<p>[6] Shaner, N. C., Steinbach, P. A., &amp; Tsien, R. Y. (2005). A guide to choosing fluorescent proteins. Nature methods, 2(12), 905-909.</p>\n<p>[7] Mashimo, K., Nagata, Y., Kawata, M., Iwasaki, H., &amp; Yamamoto, K. (2004). Role of the RuvAB protein in avoiding spontaneous formation of deletion mutations in the Escherichia coli K-12 endogenous tonB gene. Biochemical and biophysical research communications, 323(1), 197-203.</p>\n<p>[8]  Soil Bacteria - NSW Department of Primary Industries. https://www.dpi.nsw.gov.au/_data/assets/pdf_file/0017/41642/Soil_bacteria.pdf</p>\n<p>[9] Knudsen, G. R. (2010). Bacteriology of Soils and Plants. In Topley &amp; Wilson's Micobiology and Microbial Infections (eds B.W. Mahy, V.t. Meulen, S.P. Borriello, P.R. Murray, G. Funke, S.H. Kaufmann, M.W. Steward, W.G. Merz, R.J. Hay, F. Cox, D. Wakelin, S.H. Gillespie, D.D. Despommier, S.P. Borriello, P.R. Murray and G. Funke).</p>\n<p>[10] UniProt. UniProtKB- P0AER0 (GLPF_ECOLI). https://www.uniprot.org/uniprot/P0AER0</p>\n<p>[11] <span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">UniProt. UniProtKB - P04731 (MT1A_Human). </span>https://www.uniprot.org/uniprot/P04731</p>\n<p>[12] UniProt. UnitProtKB- X5DSL3 (X5DSL3_ANAMA). https://www.uniprot.org/uniprot/X5DSL3</p>\n<p>[13] Romeyer, F., Jacobs, F., Masson, L., Hanna, Z., &amp; Brousseau, R. (1988). Bioaccumulation of heavy metals in Escherichia coli expressing an inducible synthetic human metallothionein gene. Journal of Biotechnology, 8(3), 207-220.</p>\n<p>[14] Touw, D. S., Nordman, C. E., Stuckey, J. A., &amp; Pecoraro, V. L. (2007). Identifying important structural characteristics of arsenic resistance proteins by using designed three-stranded coiled coils. <em>Proc Natl Acad Sci USA. </em>29:<span style=\"color: rgb(51,51,51);background-color: rgb(255,255,255);font-size: 12px;font-family: Open Sans\", HelveticaNeue, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\">11969-11974</span></p>\n"
      },
      "fba26d3a8fd" : {
        "header_content" : "Kinetic Modeling Results",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "fc27b37bef56" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p>As we were developing our project, we wanted to examine effects of different operon and plasmid designs on the cell. We decided to attempt to model three different plasmids. The design of these plasmids is shown in Figure 8, Figure 9, and Figure 10. Plasmid 1, shown in Figure 8, is similar to our single cell model, so our plasmid 1 model was made to be a copy of our single cell model. Plasmid 2, shown in Figure 9, has a different promoter than plasmid 1. Plasmid 1 uses a Pars promoter, which is the same promoter used in our single cell model that is controlled by arsR. Plasmid 2 instead uses a T7 promoter which is not controlled by arsR, but is instead consitutively expressed at a high level of expression. Plasmid 3, shown in Figure 10, uses a Pars promoter similarly to plasmid 1, however, the gene for mcherry, a red fluorescent protein, was added to the plasmid.&nbsp;</p>\n"
      },
      "fcab924baafa" : {
        "exampleImage_imageLink" : "https://2021.igem.org/wiki/images/d/db/T--Washington--2mutations.png",
        "exampleImage_percentageSize" : 80,
        "exampleImage_subtitle" : "Figure 30: Energy and distance results from making two mutations on one model from the mutations chosen in Figure 29. ",
        "type" : "IMAGE"
      },
      "fdd6df6df55" : {
        "exampleImage_imageLink" : "https://2021.igem.org/wiki/images/4/4c/T--Washington--residues_before_design.png",
        "exampleImage_percentageSize" : 35,
        "exampleImage_subtitle" : "Figure 28: Mutations made through design. First column shows locations of residues which design was performed including its original animo acid. Second column shows the mutations which Rosetta determined to stabilize the protein. Third column shows whether the new mutation is interacting with the metal ion. ",
        "type" : "IMAGE"
      }
    },
    "contentOrder" : [ "0e8bfc0cd20f", "04c11b84ba5", "71b8b4b13f7", "e13efed01e75", "5a8ff0ddd73", "b6918e6456d6", "5afeaf57fb57", "3bb76139c4", "5a2690d74ec", "6887f8dfb70d", "dc92e4f752", "06c85064fa0", "75d1d084ae3", "86650915e2ee", "6af4f31faaeb", "e9787bd0528e", "be98c34ff812", "fba26d3a8fd", "6bebeacd789e", "dd332a60b5", "b095bddcdc56", "352f747f776e", "9ba5ac91ed1", "7809f048f0b3", "e45a21f8b278", "f1e64aad476", "d14c08d97e0f", "c9219ec6b5", "fc27b37bef56", "283531a90a", "3eb0b764c909", "4859cf8674a", "ad48a127bc2a", "8794fcb22927", "9552ccf2928e", "c2a29200878", "9532149b4fc", "4a78b0e32f70", "0c0656f2a6bb", "596fd9ab9a", "f0520ffbe0a3", "a9f811aa242c", "65c67d4a700b", "4d8480517a17", "f9a8cd8867", "8699a38c99d", "951852666d2", "1be6cc95ac61", "39c5f9c89bce", "3b0783facd19", "217d42321f2", "95b9762b45", "a7d8debaeb9", "d37900f45af0", "51114c5c05", "9ef4e02b9d66", "a07990e9b7f6", "6863257e0fa", "80a8bb9cdd36", "227f3ebf84", "0471a0a71900", "a87ace05e06e", "a9e061fd16e", "da11457b3ec", "6fcabe7937e7", "bc67c69fcf94", "7829d51c811", "bdbd720fcbe9", "a2378e572c7c", "5794c8f15163", "ab6bfd21c49", "7329806433a7", "8dd83c7ced75", "0ada5c7cb8c5", "f77055a20a1f", "9b188dab61c", "9513138a30d", "3bdb7bae8fe1", "2ca776b9202b", "30888d3f0b7", "db24f3dfea5b", "83ebf05dc2d5", "d10e81b830", "9afaeb900c7f", "66546411de39", "53d66e1cdfcd", "84042a224ab5", "5e74232d608", "549cd91fe39a", "8a2226c7662", "71aceb8d2e0", "73cb4c1b17", "ee023492b", "a4c4adef63f", "d14e8d61dfc4", "25fd2680bde7", "5dcdf040705", "fdd6df6df55", "5eb6d67ff7e", "ae6d3cc77570", "cfd72faa4dfa", "7ccc6ca649c5", "a83e776c49", "2b275403b1bb", "fcab924baafa", "98b6a5fae34", "f5d1c950b", "fb8f9de1f7b1" ],
    "hasSidebar" : false
  },
  "Notebook" : {
    "content" : {
      "1743319ed889" : {
        "bannder_content" : {
          "bannerText" : "Notebook",
          "imageBlur" : 0,
          "imageLink" : "https://2021.igem.org/wiki/images/5/5e/T--Washington--page_header.png",
          "imageTopX" : 49,
          "imageTopY" : 66,
          "imageZoom" : 100,
          "textColor" : "WHITE",
          "textSize" : 10
        },
        "banner_content" : {
          "bannerText" : "Notebook",
          "imageBlur" : 0,
          "imageLink" : "https://2021.igem.org/wiki/images/5/5e/T--Washington--page_header.png",
          "imageTopX" : 49,
          "imageTopY" : 66,
          "imageZoom" : 100,
          "textColor" : "WHITE",
          "textSize" : 10
        },
        "type" : "BANNER"
      },
      "1c0260115f5b" : {
        "pdfViewer_pdfHeightPixel" : 1200,
        "pdfViewer_pdfLink" : "https://2021.igem.org/wiki/images/7/70/T--washington--Wetlab_Notebook.pdf",
        "pdfViewer_pdfWidthPercentage" : 100,
        "type" : "PDF_VIEWER"
      },
      "9808599aa17" : {
        "header_content" : "Wetlab Notebook",
        "header_priority" : 1,
        "type" : "HEADER"
      }
    },
    "contentOrder" : [ "1743319ed889", "9808599aa17", "1c0260115f5b" ],
    "hasSidebar" : true
  },
  "Parts" : {
    "content" : {
      "537e6b395f" : {
        "header_content" : "Parts",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "59b82e0a046" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<h5 style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;font-family: Arial;\">Basic parts:</span></h5>\n<p><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;font-family: Arial;\">1. Modified MTIA: </span><a href=\"http://parts.igem.org/Part:BBa_K4023000\" target=\"_blank\"><span style=\"color: rgb(0,123,255);background-color: transparent;font-size: 16px;font-family: Arial;\">BBa_K4023000</span></a>&nbsp;</p>\n<p><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;font-family: Arial;\">2. Optimized glpF: </span><a href=\"http://parts.igem.org/Part:BBa_K4023001\" target=\"_blank\"><span style=\"color: rgb(0,123,255);background-color: transparent;font-size: 16px;font-family: Arial;\">BBa_K4023001</span></a>&nbsp;</p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;font-family: Arial;\">3. RBS: </span><a href=\"http://parts.igem.org/Part:BBa_K4023002\" target=\"_blank\"><span style=\"color: rgb(0,123,255);background-color: transparent;font-size: 16px;font-family: Arial;\">BBa_K4023002</span></a>&nbsp;</p>\n<p></p>\n<h5><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 1.25rem;\">Composite parts: </span></h5>\n<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">1. glpF-rbs-Modified MTIA: </span><a href=\"http://parts.igem.org/Part:BBa_K4023003\" target=\"_blank\"><span style=\"color: rgb(0,123,255);background-color: transparent;font-size: 16px;\">BBa_K4023003</span></a>&nbsp;</p>\n"
      },
      "a71812e15d8" : {
        "header_content" : "Overview",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "c5d9e93dd93b" : {
        "type" : "WYSIWYG_EDITOR",
        "wysiwyg_content" : "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">This year, we initially intended to work on the accumulation of Arsenic from a human gut environment. Hence, we chose to work with a mammalian protein, MTIA human metallothionien protein, and used </span><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;font-family: Arial;\">4MT2 rat metallothionein protein as a template model. Despite our eventual decision to tackle environmental pollution, the mammalian protein modeling serves as a proof of concept for modifications made in metallothionein proteins. </span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;font-family: Arial;\">This year we created 3 basic parts and 1 composite part (that is an amalgamation of the 3 basic parts) to verify the efficacy of the modified metallothionien protein. All the parts created are codon optimized for expression in E.coli and can be readily cloned into expression vectors for applications in any other project.</span></p>\n"
      },
      "da25746b2c" : {
        "banner_content" : {
          "bannerText" : "Parts",
          "imageBlur" : 0,
          "imageLink" : "https://2021.igem.org/wiki/images/5/5e/T--Washington--page_header.png",
          "imageTopX" : 0,
          "imageTopY" : 93,
          "imageZoom" : 100,
          "textColor" : "WHITE",
          "textSize" : 10
        },
        "type" : "BANNER"
      }
    },
    "contentOrder" : [ "da25746b2c", "a71812e15d8", "c5d9e93dd93b", "537e6b395f", "59b82e0a046" ],
    "hasSidebar" : true
  },
  "Results" : {
    "content" : {
      "4f0e5669b6e" : {
        "banner_content" : {
          "bannerText" : "Results",
          "imageBlur" : 0,
          "imageLink" : "https://2021.igem.org/wiki/images/5/5e/T--Washington--page_header.png",
          "imageTopX" : 0,
          "imageTopY" : 0,
          "imageZoom" : 100,
          "textColor" : "WHITE",
          "textSize" : 10
        },
        "type" : "BANNER"
      },
      "987ad1964e24" : {
        "grid_layout" : {
          "gridLayout" : [ [ 1 ], [ 0 ] ],
          "widgets" : [ {
            "content" : {
              "exampleImage_imageLink" : "https://2021.igem.org/wiki/images/6/6f/T--Washington--Metal_Tolerance_Data.png",
              "exampleImage_percentageSize" : 80,
              "exampleImage_subtitle" : "Metal Tolerance Results"
            },
            "type" : "IMAGE"
          }, {
            "content" : {
              "wysiwyg_content" : "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>Through running the metal tolerance assay of the modified MT bacteria and the WT-MT to Arsenite concentrations, the viabilities were calculated and graphed below.</strong></span>&nbsp;</p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">The absorbance measured at OD600 was gathered and calculated in terms of concentration to determine the viabilities. The bacteria were plotted with their viability against the different concentrations of Arsenic that were incubated for 20 hours overnight. The X axis plots the Arsenite concentrations in mM and the Y axis plots the viability in %. There is a clear trend showing as the Arsenite concentration increased, the bacteria viability decreased. There seems to be a significant drop in viability at 4mM of Arsenite. The data we calculated is as expected in a decreasing trend of viability. </span>&nbsp;</p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">The modified protein didn’t decrease in tolerance in comparison to our Wild Type Metallothioneins and had similar tolerance according to the trends. This means that we are on the right track to getting our accurate results since there was no decrease in tolerance. Something interesting that was also observed is that all bacteria with GlpF increased in tolerance compared to without GlpF. This was surprising because we expected Arsenic to not be sequestered by Metalothionein. However, since there could be Metallothionein limiting and due to the influx of Arsenic into the E. coli, the tolerance could have increased. This result was unexpected and will warrant further investigation. Overall, the modified protein did not decrease in metal tolerance and shows that our team is on the right track to getting a higher metal tolerance. </span>&nbsp;</p>\n"
            },
            "type" : "WYSIWYG_EDITOR"
          } ]
        },
        "type" : "GRID_LAYOUT"
      },
      "a8f12742f8c" : {
        "grid_layout" : {
          "gridLayout" : [ [ 0, 1 ] ],
          "widgets" : [ {
            "content" : {
              "exampleImage_imageLink" : "https://2021.igem.org/wiki/images/9/9d/T--Washington--SDS_PAGE.png",
              "exampleImage_percentageSize" : 80,
              "exampleImage_subtitle" : "SDS PAGE Gel"
            },
            "type" : "IMAGE"
          }, {
            "content" : {
              "wysiwyg_content" : "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>The result of the SDS PAGE is presented on the left.</strong></span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">The size of glpF protein is approximately 28kDa whereas MTs are around 6kDa. From the gel, MTs are found in all 6 lanes, indicating that the 6 cultures of bacteria containing 6 different plasmids all managed to express MTs successfully. A similar trend is observed for glpF. This is expected as while only 3 bacteria cultures contains the bicistronic gene, glpF is an intrinsic protein in <em>E.coli</em> and hence would be expressed regardless. Thus going forward, we could perform western blot to determine if the proteins are being overexpressed. </span></p>\n"
            },
            "type" : "WYSIWYG_EDITOR"
          } ]
        },
        "type" : "GRID_LAYOUT"
      },
      "c93becb0b41" : {
        "header_content" : "Metal Tolerance",
        "header_priority" : 1,
        "type" : "HEADER"
      },
      "caa380762dc3" : {
        "header_content" : "SDS PAGE",
        "header_priority" : 1,
        "type" : "HEADER"
      }
    },
    "contentOrder" : [ "4f0e5669b6e", "caa380762dc3", "a8f12742f8c", "c93becb0b41", "987ad1964e24" ],
    "hasSidebar" : true
  }
}
