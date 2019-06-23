import React from 'react';
import { WidgetEditorProps } from '../../ContentMapping/ContentMapping';

export type StubData = {
}

/**
 * Stub is an empty piece that is used when a widget is first created
 * 
 * Last Modified
 * William Kwok
 * June 22, 2019
 */
export const Stub: React.FC<StubData> = () => {
    return <>
        Please select a widget type above.
    </>
}

/**
 * StubEditor is an empty piece that is used when a widget is first created
 * 
 * Last Modified
 * William Kwok
 * June 22, 2019
 */
export const StubEditor: React.FC<WidgetEditorProps> = () => {
    return <>
        Please select a widget type above.
    </>
}