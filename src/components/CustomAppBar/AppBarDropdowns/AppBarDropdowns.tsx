import React from 'react';
import NavbarData, { NavbarType } from '../../_data/NavbarData/NavbarData';
import { AppBarDropdown } from './AppBarDropdown/AppBarDropdown';
type AppBarDropdownProps = {
    name: string,
    pageTitle: string,
    a: () => void
}
export const AppBarDropdowns: React.FC<AppBarDropdownProps> = ({ name, pageTitle, a }) => {
    return <>
        {NavbarData.getData().map((navbarItem: NavbarType) => {
            return <AppBarDropdown
                key={navbarItem.key}
                a={a}
                name={name}
                pageTitle={pageTitle}
                navbarItem={navbarItem}
            />
        })}
    </>
}