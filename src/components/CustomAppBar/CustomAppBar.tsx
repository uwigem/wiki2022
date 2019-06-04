import React, { useState, useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
// import { AppBarMenuList } from './components/AppBarMenuList/AppBarMenuList';
import { IconButton } from '@material-ui/core';
// import { Sidebar } from './components/Sidebar/Sidebar'
import './CustomAppBar.css';
import { WindowWidthContext } from '../../contexts/WindowWidthContext';
import { AppBarLogo } from './AppBarLogo/AppBarLogo';

const minWidth = 768;

type CustomAppBarProps = {
    name: string,
    pageTitle: string,
    a: () => void
}

/**
 * CustomAppBar is the application bar that (currently) uses MaterialUI
 */
export const CustomAppBar: React.FC<CustomAppBarProps> = ({ name, pageTitle, a }) => {
    const [sidebarEnabled, setSidebarEnabled] = useState<boolean>(false);
    const [minimized, setMinimized] = useState<boolean>(false);
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    const { windowWidth } = useContext(WindowWidthContext);

    return <>
        <div className={"appbar"}>
            <AppBar className={"mui-appbar"}>
                <Toolbar>
                    <AppBarLogo />
                </Toolbar>
            </AppBar>
        </div>
    </>
}