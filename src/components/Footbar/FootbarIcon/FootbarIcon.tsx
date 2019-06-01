import React, { useState } from 'react';
import { Col } from 'react-flexbox-grid';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FootbarIcon.css';

type FootbarIconProps = {
    icon?: IconDefinition,
    logo?: boolean,
    link: string,
    a: () => void
}

export const FootbarIcon: React.FC<FootbarIconProps> = ({ icon, logo, link, a }) => {
    const [hover, setHover] = useState<boolean>(false);

    if (logo) {
        return <Col>LOGO</Col>
    } else {
        return <Col>
            <a onClick={a} href={link}
                onMouseEnter={() => { setHover(true) }}
                onMouseLeave={() => { setHover(false) }}>
                <FontAwesomeIcon icon={icon as IconDefinition}
                    className={`footbar-icon ${hover ? "footbar-icon-hover" : "footbar-icon-nonhover"}`}
                />
            </a>
        </Col>
    }
}