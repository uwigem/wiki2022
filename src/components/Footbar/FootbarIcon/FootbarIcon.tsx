import React, { useState, useContext } from 'react';
import { Col } from 'react-flexbox-grid';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FootbarIcon.css';
import { WindowWidthContext } from '../../../contexts/WindowWidthContext';
import { Logo } from './Logo/Logo';

//@ts-ignore
import Zoom from 'react-reveal/Zoom';


type FootbarIconProps = {
    icon?: IconDefinition,
    logo?: boolean,
    link: string,
    a: () => void
}

export const FootbarIcon: React.FC<FootbarIconProps> = ({ icon, logo, link, a }) => {
    const [hover, setHover] = useState<boolean>(false);
    const { windowWidth } = useContext(WindowWidthContext);

    const minimized: boolean = windowWidth < 420;

    return <Zoom clear cascade duration={1000}><Col>
        <a onClick={a} href={link}
            onMouseEnter={() => { setHover(true) }}
            onMouseLeave={() => { setHover(false) }}>
            {logo && <><Logo minimized={minimized} hover={hover} /></>}
            {!logo &&
                <FontAwesomeIcon icon={icon as IconDefinition}
                    className={`footbar-icon ${hover ? "footbar-icon-hover" :
                        "footbar-icon-nonhover"}`}
                    size={minimized ? "1x" : "2x"}
                />
            }
        </a>
    </Col></Zoom>

}