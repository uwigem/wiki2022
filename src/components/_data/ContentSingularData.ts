import { BannerContent } from '../ContentWidgets/Banner/Banner';
import { Tab } from '../ContentWidgets/TabView/TabView';
import { ImgRowItem } from '../ContentWidgets/ImagesInRow/ImagesInRow';
import { AccordionPageProps } from '../ContentWidgets/Accordion/Accordion'

export type ContentSingularData = {
	[idx: string]: any
	banner_content?: BannerContent
	accordion_content?: AccordionPageProps[]
	plainText_content?: string
	exampleImage_imageLink?: string
	exampleImage_percentageSize?: number
	pdfViewer_pdfLink?: string
	pdfViewer_pdfWidthPercentage?: number
	pdfViewer_pdfHeightPixel?: number
	video_videoLink?: string
	video_videoWidthPercentage?: number
	imagesInRow_items?: ImgRowItem[]
	separator_width?: number | string
	separator_color?: { r: number; g: number; b: number }
	tabView_content?: Tab[]
	gallery_content?: string[]
	wysiwyg_content?: string
}