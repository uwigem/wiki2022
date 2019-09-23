import { WidgetTypes } from '../ContentMapping/ContentMapping';

export type ContentSingularData = {
    plainText_content?: string;
    exampleImage_imageLink?: string;
    exampleImage_percentageSize?: number;
    [idx: string]: any;
    separator_width?: number;
    separator_color?: { r: number; g: number; b: number };
}