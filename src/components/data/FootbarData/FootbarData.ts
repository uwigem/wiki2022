import { faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, IconDefinition } from '@fortawesome/free-solid-svg-icons';

export type FootbarItem = {
    icon?: IconDefinition,
    link: string,
    alt: string,
    logo?: boolean
}

/**
 * FootbarItems is the data structure for the items in the footbar
 */
export const FootbarItems: FootbarItem[] = [
    {
        icon: faFacebook,
        link: "https://www.facebook.com/WashingtoniGEM/",
        alt: "Washington iGEM Facebook"
    },
    {
        icon: faInstagram,
        link: "https://www.instagram.com/washington_igem/",
        alt: "Washington iGEM Instagram"
    },
    {
        logo: true,
        link: 'http://2018.igem.org/Team:Washington',
        alt: "Team Washington"
    },
    {
        icon: faGithub,
        link: "https://github.com/uwigem",
        alt: 'Washington iGEM Github'
    },
    {
        icon: faEnvelope,
        link: "mailto:uwigem@uw.edu",
        alt: 'Washington iGEM Email'
    }
];