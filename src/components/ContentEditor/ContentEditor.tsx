import React, { useState } from 'react';
import { ContentData, ContentHashMapping } from '../_data/Data';
import 'firebase/database';
import 'firebase/auth';
import { useAuth } from '../../hooks/useAuth';
import './ContentEditor.css';
import { ContentEditorBanner } from './ContentEditorBanner/ContentEditorBanner';
import { WidgetEditor } from './WidgetEditor/WidgetEditor';

type ContentEditorProps = {
    contentData: ContentData,
    currYear: number
}

/**
 * ContentEditor is the main content editor PAGE. It shows the editing banner that allows users to
 * select a page to edit, and also generates the widget editing components. It handles the logic 
 * for updating the data on firebase as well as the buttons to generate the new components.
 * 
 * Last Modified
 * William Kwok
 * June 22, 2019
 */
export const ContentEditor: React.FC<ContentEditorProps> = ({ contentData, currYear }) => {
    const [userLoading, setUserLoading] = useState<boolean>(true);
    const [pageToEdit, setPageToEdit] = useState<string | null>(null);
    const user = useAuth(setUserLoading);

    if (!userLoading && contentData) {
        return <>
            <ContentEditorBanner contentData={contentData}
                pageToEdit={pageToEdit}
                setPageToEdit={setPageToEdit}
                currYear={currYear} />
            {contentData &&
                pageToEdit &&
                contentData[pageToEdit] &&
                <>
                    {/** Force TS to not throw errors, because we check if it is defined */}
                    {contentData[pageToEdit].contentOrder &&
                        contentData[pageToEdit].content &&
                        (contentData[pageToEdit].contentOrder as string[]).map(contentHash => {
                            let content = (contentData[pageToEdit].content as ContentHashMapping)[contentHash];
                            return <>
                                <WidgetEditor content={content} />
                            </>
                        })}

                </>}
        </>
    } else {
        return <>Loading</>
    }
}

/**
 * https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
 * 
 * generateHash creates a random hash value that we will be using for generating keys to store
 * content on firebase. This hash is inserted into an array to determine the order of the content. 
 * For our specific use case, here are the following requirements and reasoning:
 * 
 *      - We do not have to support older browsers. Because this is an internal part of the program
 *        for Washington iGEM members, we just enforce them to use newer browsers when editing.
 * 
 *      - Because we anticipate there to be < 100 items on the page, we don't have to generate huge
 *        values. We only need to generate things where the chance of collision is near impossible.
 *        Therefore, I have chosen _15_ to  be the length of the string we generate. 
 * 
 * Last Modified
 * William Kwok
 * June 22, 2019
 */
const generateHash: () => string = () => {
    // Change this to change the length of the string generated. Reconsider if you have to ever 
    // change this, though.
    const lengthOfGeneratedHash = 15;

    let randomInt8s = new Uint8Array(lengthOfGeneratedHash / 2);
    window.crypto.getRandomValues(randomInt8s);
    return randomInt8s.reduce((accumulator, randomInt) => {
        return accumulator + ('0' + randomInt.toString(16)).substr(2)
    }, "")
}