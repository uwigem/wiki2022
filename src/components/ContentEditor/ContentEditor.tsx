import React, { useState } from 'react';
import { ContentData } from '../_data/Data';
import 'firebase/database';
import 'firebase/auth';
import { useAuth } from '../../hooks/useAuth';
import './ContentEditor.css';
import { ContentEditorBanner } from './ContentEditorBanner/ContentEditorBanner';

type ContentEditorProps = {
    contentData: ContentData,
    currYear: number
}

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
        </>
    } else {
        return <>Loading</>
    }
}