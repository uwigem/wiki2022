import { createContext } from 'react';

type WindowWidthProps = {
    windowWidth: Number
}

export const WindowWidthContext = createContext<WindowWidthProps>({
    windowWidth: 0
});