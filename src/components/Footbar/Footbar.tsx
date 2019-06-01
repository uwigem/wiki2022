import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Grid, Row } from 'react-flexbox-grid';
import "./Footbar.css";

// @ts-ignore
import Zoom from 'react-reveal/Zoom';
import { FootbarIcon } from './FootbarIcon/FootbarIcon';
import { WindowWidthContext } from '../../contexts/WindowWidthContext';

type FootbarProps = {
    a: () => void
}

/**
 * Footbar is the component that sits at the bottom of every web page.
 * 
 * The page should be more than 100vh long which is mandated by a style within App.tsx
 */
export const Footbar: React.FC<FootbarProps> = ({ a }) => {
    const { windowWidth } = useContext(WindowWidthContext);

    let items = [
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

    return <div className="footbar-styles">
        <Grid fluid>
            <Row center="xs" middle="xs" style={{ height: "30vh" }}>
                <Zoom clear cascade duration={1000}>
                    {items.map(item => {
                        return item.logo ? <FootbarIcon logo link={item.link} a={a} /> :
                            <FootbarIcon icon={item.icon} link={item.link} a={a} />
                    })}
                </Zoom>
            </Row>
        </Grid>
    </div>
}

