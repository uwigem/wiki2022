import React from 'react';
// import './Team.css';
import { ContentSingularData } from '../../_data/ContentSingularData';

export type Person = {
    firstName: string,
    lastName: string,
    position: string,
    bio: string,
    github: string,
    linkedin: string
}

/**
 * Team Page
 * 
 * Last Modified
 * Allison Lee
 * September 18, 2019
 */
export const TeamPage: React.FC<ContentSingularData> = ({
    teamPage_content
}) => {
    if (!teamPage_content) {
        return <></>
    }
    return <>
        {/* <div className="container">
            {teamPage_content.map(function(person) {
                return <div className="person">{person.firstName}</div>
            })}
        </div> */}
    </>
}