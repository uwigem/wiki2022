import { faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, IconDefinition } from '@fortawesome/free-solid-svg-icons';

export type FootbarItem = {
    icon?: IconDefinition,
    link: string,
    alt: string,
    logo?: boolean,
    key: string
}

/**
 * FootbarItems is the data structure for the items in the footbar
 */
export const FootbarItems: FootbarItem[] = [
    {
        icon: faFacebook,
        link: "https://www.facebook.com/WashingtoniGEM/",
        alt: "Washington iGEM Facebook",
        key: "facebook"
    },
    {
        icon: faInstagram,
        link: "https://www.instagram.com/washington_igem/",
        alt: "Washington iGEM Instagram",
        key: "instagram"
    },
    {
        logo: true,
        link: 'http://2018.igem.org/Team:Washington',
        alt: "Team Washington",
        key: "logo"
    },
    {
        icon: faGithub,
        link: "https://github.com/uwigem",
        alt: 'Washington iGEM Github',
        key: "github"
    },
    {
        icon: faEnvelope,
        link: "mailto:uwigem@uw.edu",
        alt: 'Washington iGEM Email',
        key: "email"
    }
];