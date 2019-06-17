import React, { forwardRef } from 'react';
import { NavbarType } from '../../../../_data/NavbarData/NavbarData';
import './AppBarDropdownItems.css';
import MenuItem from '@material-ui/core/MenuItem';

type AppBarDropdownItemsProps = {
    pageTitle: string,
    navbarItem: NavbarType,
    setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>
    dropdownItemNames: string[]
    a: () => void,
    name: string,
}

/** 
 * Doing various pieces of wizardry in this file. See these two links to understand what I'm doing.
 * It's very difficult to explain but basically material ui screws up with using custom components
 * for `MenuItems`, which is what I do when I set the `component` prop to `a`. It can be remedied
 * by messing with the `innerRef` props, but I can only do that if I forward the `ref` with React's
 * `forwardRef` function. In order to get the props easily, I have the prop types `extend`ing the 
 * props from earlier to make an addition. 
 *   
 * https://github.com/mui-org/material-ui/issues/15903
 * https://stackoverflow.com/questions/41385059/possible-to-extend-types-in-typescript
 */
interface AppBarDropdownItemsPropsWithRef extends AppBarDropdownItemsProps {
    innerRef: React.Ref<any>
}

export const AppBarDropdownItemsForwardRefs = forwardRef((props: AppBarDropdownItemsProps, ref) => {
    return <AppBarDropdownItems {...props} innerRef={ref} />
})

/**
 * AppBarDropdownItems is the individual menu item when the dropdown is clicked on
 * 
 * Last Modified
 * William Kwok
 * June 16, 2019
 */
export const AppBarDropdownItems: React.FC<AppBarDropdownItemsPropsWithRef> = ({
    pageTitle, navbarItem, setAnchorEl, dropdownItemNames, a, name, innerRef
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
                innerRef={innerRef}
                component="a"
                href={getLink(index)}
                disabled={pageTitle === navbarItem.links[index]}
                key={name}
                onClick={() => { a(); setAnchorEl(null); }}
            >
                {name}
            </MenuItem>
        })}
    </>
}