import { WidgetTypes } from '../ContentMapping/ContentMapping';
import { ImgRowItem } from '../ContentWidgets/ImagesInRow/ImagesInRow';

export type ContentSingularData = {
	plainText_content?: string
	exampleImage_imageLink?: string
	exampleImage_percentageSize?: number
	[idx: string]: any
	imagesInRow_items?: ImgRowItem[]
	separator_width?: number
	separator_color?: { r: number; g: number; b: number }
}