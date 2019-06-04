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
}

export const AppBarDropdown: React.FC<AppBarDropdownProps> = ({ name, pageTitle, navbarItem, a }) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);



    return <div className={"appbar-dropdown"}>
        <Button
            variant="text"
            aria-owns={anchorEl ? "appbar-menu" : undefined}
            aria-haspopup={true}
            onClick={(e) => { setAnchorEl(e.currentTarget) }}
            className={"appbar-dropdown-button"}
        >
            {navbarItem.title}
        </Button>
        <Menu
            id="appbar-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            keepMounted
            onClose={() => { setAnchorEl(null) }}
            anchorOrigin={{
                vertical: 45,
                horizontal: "left"
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "left"
            }}
            getContentAnchorEl={null}
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