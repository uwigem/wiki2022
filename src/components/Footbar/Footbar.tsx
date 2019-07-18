import React, { useContext } from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import "./Footbar.css";
import { FootbarIcon } from './FootbarIcon/FootbarIcon';
import { FootbarItems, FootbarItem } from '../_data/FootbarData/FootbarData';
import { EnvironmentContext } from '../../contexts/EnvironmentContext/EnvironmentContext';

type FootbarProps = {
    a: () => void
}

/**
 * Footbar is the component that sits at the bottom of every web page.
 * 
 * The page should be more than 100vh long which is mandated by a style within App.tsx
 * 
 * Last Modified
 * William Kwok
 * July 17, 2019
 */
export const Footbar: React.FC<FootbarProps> = ({ a }) => {
    let items: FootbarItem[] = FootbarItems;
    const { windowWidth } = useContext(EnvironmentContext);

    const minimized: boolean = windowWidth < 420;

    return <div className="footbar-styles">
        <Grid fluid>
            <Row center="xs" middle="xs" style={{ height: "30vh" }}>
                {items.map((item: FootbarItem) => {
                    return item.logo ? <FootbarIcon key={item.key}
                        minimized={minimized}
                        logo
                        link={item.link}
                        a={a} /> :
                        <FootbarIcon
                            key={item.key}
                            minimized={minimized}
                            icon={item.icon}
                            link={item.link}
                            a={a} />
                })}
            </Row>
        </Grid>
    </div>
}

