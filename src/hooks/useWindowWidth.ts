import { useEffect, useState } from 'react';

/**
 * useWindowWidth is the hook that will grab the window's width. It is currently used in App.tsx to
 * grab the window width and listen for changes, and update the WindowWithContext.
 * 
 * Last Modified
 * William Kwok
 * June 16, 2019
 */
export const useWindowWidth = () => {
    const [width, setWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        });
    }, [])

    return width;
}