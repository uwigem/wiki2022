import { PlainTextData } from '../ContentWidgets/PlainText/PlainText';
import { StubData } from '../ContentWidgets/_Stub/Stub';

export type ContentSingularData = {
    type: string
} & (StubData | PlainTextData) 