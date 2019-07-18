import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './CustomAppBar.css';
import { EnvironmentContext } from '../../contexts/EnvironmentContext/EnvironmentContext';
import { AppBarLogo } from './AppBarLogo/AppBarLogo';
import { AppBarDropdowns } from './AppBarDropdowns/AppBarDropdowns';
import { AppBarSideDrawer } from './AppBarSideDrawer/AppBarSideDrawer';

const minWidth = 768;

type CustomAppBarProps = {
    name: string,
    pageTitle: string,
    a: () => void
}

/**
 * CustomAppBar is the application bar that (currently) uses MaterialUI
 * 
 * Last Modified
 * William Kwok
 * July 17, 2019
 */
export const CustomAppBar: React.FC<CustomAppBarProps> = ({ name, pageTitle, a }) => {
    const { windowWidth } = useContext(EnvironmentContext);
    let minimized = windowWidth < minWidth;

    return <>
        <div className={"appbar"}>
            <AppBar className={"mui-appbar"}>
                <Toolbar>
                    <AppBarLogo />
                    {!minimized && <AppBarDropdowns name={name} pageTitle={pageTitle} a={a} />}
                    {minimized && <AppBarSideDrawer />}
                </Toolbar>
            </AppBar>
        </div>
    </>
}