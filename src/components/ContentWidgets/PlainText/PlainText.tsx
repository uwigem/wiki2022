import React from 'react';
import { ContentSingularData } from '../../_data/ContentSingularData';

/**
 * PlainText is a plain text widget to act as an example widget
 * 
 * Last Modified
 * William Kwok
 * June 16, 2019
 */
export const PlainText: React.FC<ContentSingularData> = ({ plainText_content }) => {
    return <>{plainText_content}</>
}
