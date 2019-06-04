import React from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import "./Footbar.css";
import { FootbarIcon } from './FootbarIcon/FootbarIcon';
import { FootbarItems, FootbarItem } from '../data/FootbarData/FootbarData';

type FootbarProps = {
    a: () => void
}

/**
 * Footbar is the component that sits at the bottom of every web page.
 * 
 * The page should be more than 100vh long which is mandated by a style within App.tsx
 */
export const Footbar: React.FC<FootbarProps> = ({ a }) => {
    let items: FootbarItem[] = FootbarItems;

    return <div className="footbar-styles">
        <Grid fluid>
            <Row center="xs" middle="xs" style={{ height: "30vh" }}>
                {items.map((item: FootbarItem) => {
                    return item.logo ? <FootbarIcon logo link={item.link} a={a} /> :
                        <FootbarIcon icon={item.icon} link={item.link} a={a} />
                })}
            </Row>
        </Grid>
    </div>
}

