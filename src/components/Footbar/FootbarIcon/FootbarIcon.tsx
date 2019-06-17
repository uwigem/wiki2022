import React, { useState } from 'react';
import { Col } from 'react-flexbox-grid';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FootbarIcon.css';
import { Logo } from './Logo/Logo';

// The following is TS Ignored because it does not have any typescript types
//@ts-ignore
import Zoom from 'react-reveal/Zoom';

type FootbarIconProps = {
    icon?: IconDefinition,
    logo?: boolean,
    link: string,
    minimized: boolean,
    a: () => void
}

/**
 * FootbarIcon is a single icon that appears in the footbar
 * 
 * The team logo is an icon
 * 
 * Last Modified
 * William Kwok
 * June 16, 2019
 */
export const FootbarIcon: React.FC<FootbarIconProps> = ({ minimized, icon, logo, link, a }) => {
    const [hover, setHover] = useState<boolean>(false);

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