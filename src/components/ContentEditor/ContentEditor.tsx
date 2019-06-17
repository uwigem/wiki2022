import React, { useState } from 'react';
import { ContentData } from '../_data/Data';
import 'firebase/database';
import 'firebase/auth';
import { useAuth } from '../../hooks/useAuth';

type ContentEditorProps = {
    contentData: ContentData,
}

export const ContentEditor: React.FC<ContentEditorProps> = ({ contentData }) => {
    const [userLoading, setUserLoading] = useState<boolean>(true);
    const user = useAuth(setUserLoading);

    console.log(user, userLoading);
    return <>

    </>
}