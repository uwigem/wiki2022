import React from 'react';
import { PlainText } from "../ContentWidgets/PlainText/PlainText";
import { PlainTextEditor } from "../ContentWidgets/PlainText/PlainTextEditor";
import { Stub } from '../ContentWidgets/_Stub/Stub';

type ContentMappingType = {
    [idx: string]: {
        widget: React.FC,
        editor: React.FC
    }
}

export enum WidgetTypes {
    PLAIN_TEXT = "PLAIN_TEXT",
    STUB = "STUB"
}

export const ContentMapping: ContentMappingType = {
    PLAIN_TEXT: {
        widget: PlainText,
        editor: PlainTextEditor
    },
    STUB: {
        widget: Stub,
        editor: Stub
    }
}