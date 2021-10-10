import React, { useState } from 'react';
import NavbarData, { NavbarType } from '../../_data/NavbarData/NavbarData';
import { AppBarDropdown } from './AppBarDropdown/AppBarDropdown';
type AppBarDropdownProps = {
    name: string,
    pageTitle: string,
    a: () => void
}

/**
 * AppBarDropdowns are the dropdown items in the navigation bar. It grabs the list of categories
 * from the NavbarData class and renders them
 *
 * Last Modified
 * Jaden Stetler
 * October 10, 2021
 */
export const AppBarDropdowns: React.FC<AppBarDropdownProps> = ({ name, pageTitle, a }) => {
    const [currAnchor, setCurrAnchor] = useState<HTMLElement | null>(null);

    return <>
        {NavbarData.getData().map((navbarItem: NavbarType) => {
            return <AppBarDropdown
                key={navbarItem.key}
                a={a}
                name={name}
                pageTitle={pageTitle}
                navbarItem={navbarItem}
                currAnchor={currAnchor}
                setCurrAnchor={setCurrAnchor}
            />
        })}
    </>
}