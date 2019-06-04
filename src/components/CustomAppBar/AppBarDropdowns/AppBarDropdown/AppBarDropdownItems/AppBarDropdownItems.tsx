import React from 'react';
import { NavbarType } from '../../../../_data/NavbarData/NavbarData';
import './AppBarDropdownItems.css';
import MenuItem from '@material-ui/core/MenuItem';

type AppBarDropdownItemsProps = {
    pageTitle: string,
    navbarItem: NavbarType,
    setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>
    dropdownItemNames: string[]
    a: () => void,
    name: string
}

export const AppBarDropdownItems: React.FC<AppBarDropdownItemsProps> = ({
    pageTitle, navbarItem, setAnchorEl, dropdownItemNames, a, name
}) => {

    /**
         * Gets the link of the matching name for the menu item. Special case for "home"
         * @param index index of the matching link from name 
         */
    const getLink: (index: number) => string = (index: number) => {
        let link = `${name}${navbarItem.links[index]}`;
        if (navbarItem.key === "home") {
            link = navbarItem.links[index];
        }
        return link;
    }

    return <>
        {navbarItem.names.map((name: string, index: number) => {
            return <MenuItem
                className={"appbar-dropdown-items"}
                component="a"
                href={getLink(index)}
                disabled={pageTitle === navbarItem.links[index]}
                key={name}
                onClick={() => { a(); setAnchorEl(null); }}
            // value={index}
            >
                {name}
            </MenuItem>
        })}
    </>
}