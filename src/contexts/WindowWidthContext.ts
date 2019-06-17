import { createContext } from 'react';

type WindowWidthProps = {
    windowWidth: Number
}

/**
 * WindowWidthContext will house the window's width as a context that can be passed down throughout 
 * the application through a Provider.
 * 
 * Last Modified
 * William Kwok
 * June 16, 2019
 */
export const WindowWidthContext = createContext<WindowWidthProps>({
    windowWidth: 0
});