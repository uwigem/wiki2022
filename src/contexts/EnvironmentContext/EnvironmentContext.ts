import { createContext } from 'react';

type Environment = {
    windowWidth: Number,
    firebase: typeof import('firebase') | null
}

/**
 * Environment is a bunch of variables that can be accessed from anywhere within the application by
 * using its context.
 * 
 * Last Modified
 * William Kwok
 * July 17, 2019
 */
export const EnvironmentContext = createContext<Environment>({
    windowWidth: 0,
    firebase: null
});