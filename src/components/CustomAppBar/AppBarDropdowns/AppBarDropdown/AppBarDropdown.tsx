import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { NavbarType } from '../../../_data/NavbarData/NavbarData';
import Menu from '@material-ui/core/Menu';
import './AppBarDropdown.css';
import { AppBarDropdownItemsForwardRefs } from './AppBarDropdownItems/AppBarDropdownItems';

type AppBarDropdownProps = {
    a: () => void,
    name: string,
    pageTitle: string,
    navbarItem: NavbarType,
    currAnchor: HTMLElement | null,
    setCurrAnchor: (curr: HTMLElement | null) => void
}

/**
 * AppBarDropdown is the dropdown for a single dropdown component in the navigation bar
 *
 * Last Modified
 * Jaden Stetler
 * October 17, 2021
 */
export const AppBarDropdown: React.FC<AppBarDropdownProps> = ({
    name,
    pageTitle,
    navbarItem,
    a,
    currAnchor,
    setCurrAnchor }) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const updateAnchorEl = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | null) => {
        if (e === null) {
            setAnchorEl(null);
            setCurrAnchor(null);
        } else {
            setAnchorEl(e.currentTarget);
            setCurrAnchor(e.currentTarget);
        }
    }
    const isMenuOpen: boolean = anchorEl !== null && anchorEl === currAnchor;

    return <div className={"appbar-dropdown"}>
        <Button
            variant="text"
            aria-owns={isMenuOpen ? "appbar-menu" : undefined}
            aria-haspopup={true}
            onClick={updateAnchorEl}
            onMouseEnter={updateAnchorEl}
            className={"appbar-dropdown-button"}
        >
            {navbarItem.title}
        </Button>
        <Menu
            id="appbar-menu"
            anchorEl={anchorEl}
            open={isMenuOpen}
            keepMounted
            onClose={() => { updateAnchorEl(null) }}
            anchorOrigin={{
                vertical: 58,
                horizontal: "left"
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "left"
            }}
            getContentAnchorEl={null}
            style={{ zIndex: 1000 }} /* Needs to be less than AppBar (1100 px) */
        >
            <AppBarDropdownItemsForwardRefs
                pageTitle={pageTitle}
                navbarItem={navbarItem}
                setAnchorEl={setAnchorEl}
                dropdownItemNames={navbarItem.names}
                a={a}
                name={name} />
        </Menu>
    </div>
}