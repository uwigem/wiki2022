import React from 'react';
import { PlainText } from '../ContentWidgets/PlainText/PlainText';
import { PlainTextEditor } from '../ContentWidgets/PlainText/PlainTextEditor';
import { Stub, StubEditor } from '../ContentWidgets/_Stub/Stub';
import { ContentSingularData } from '../_data/ContentSingularData';
import { ExampleImage } from '../ContentWidgets/ExampleImage/ExampleImage';
import { ExampleImageEditor } from '../ContentWidgets/ExampleImage/ExampleImageEditor';
import { Banner } from '../ContentWidgets/Banner/Banner';
import { BannerEditor } from '../ContentWidgets/Banner/BannerEditor';
import { TabView } from '../ContentWidgets/TabView/TabView';
import { TabViewEditor } from '../ContentWidgets/TabView/TabViewEditor';
import { PdfViewer } from '../ContentWidgets/PdfViewer/PdfViewer';
import { PdfViewerEditor } from '../ContentWidgets/PdfViewer/PdfViewerEditor';
import { Video } from '../ContentWidgets/Video/Video';
import { VideoEditor } from '../ContentWidgets/Video/VideoEditor';
import { ImagesInRow } from '../ContentWidgets/ImagesInRow/ImagesInRow';
import { ImagesInRowEditor } from '../ContentWidgets/ImagesInRow/ImagesInRowEditor';
import { Separator } from '../ContentWidgets/Separator/Separator';
import { SeparatorEditor } from '../ContentWidgets/Separator/SeparatorEditor';
import { Gallery } from '../ContentWidgets/Gallery/Gallery';
import { GalleryEditor } from '../ContentWidgets/Gallery/GalleryEditor';

import { WYSIWYGEditor } from '../ContentWidgets/WYSIWYG/WYSIWYGEditor';
import { WYSIWYGWidget } from '../ContentWidgets/WYSIWYG/WYSIWYGWidget';
import { Accordion } from '../ContentWidgets/Accordion/Accordion';
import { AccordionEditor } from '../ContentWidgets/Accordion/AccordionEditor';

export type WidgetEditorProps = {
	originalContent: ContentSingularData,
	editedContent: ContentSingularData,
	setEditedContentOnChange: (keyToChange: string, valueToChange: any) => void
}

type ContentMappingType = {
	[idx: string]: {
		widget: React.FC<ContentSingularData>,
		editor: React.FC<WidgetEditorProps>
		displayName: string,
		widgetCategory: WidgetCategories
	}
}

export enum WidgetCategories {
	Display = "Display",
	Media = "Media",
	Text = "Text"
}

export enum WidgetTypes {
	PLAIN_TEXT = "PLAIN_TEXT",
	STUB = "STUB",
	EXAMPLE_IMAGE = "EXAMPLE_IMAGE",
	TAB_VIEW = "TAB_VIEW",
	SEPARATOR = "SEPARATOR",
	IMAGES_IN_ROW = "IMAGES_IN_ROW",
	PDF_VIEWER = "PDF_VIEWER",
	VIDEO = "VIDEO",
	GALLERY = "GALLERY",
	WYSIWYG_EDITOR = "WYSIWYG_EDITOR",
	BANNER = "BANNER",
	ACCORDION = "ACCORDION"
}

export const ContentMapping: ContentMappingType = {
	// PLAIN_TEXT: {
	// 	widget: PlainText,
	// 	editor: PlainTextEditor,
	// 	displayName: "Plain Text",
	// 	widgetCategory: WidgetCategories.Text
	// },
	STUB: {
		widget: Stub,
		editor: StubEditor,
		displayName: "Stub",
		widgetCategory: WidgetCategories.Display
	},
	TAB_VIEW: {
		widget: TabView,
		editor: TabViewEditor,
		displayName: "Tab View",
		widgetCategory: WidgetCategories.Display
	},
	IMAGES_IN_ROW: {
		widget: ImagesInRow,
		editor: ImagesInRowEditor,
		displayName: "Images in Row",
		widgetCategory: WidgetCategories.Media
	},
	SEPARATOR: {
		widget: Separator,
		editor: SeparatorEditor,
		displayName: "Seperator",
		widgetCategory: WidgetCategories.Display
	},
	PDF_VIEWER: {
		widget: PdfViewer,
		editor: PdfViewerEditor,
		displayName: "PDF Viewer",
		widgetCategory: WidgetCategories.Media
	},
	VIDEO: {
		widget: Video,
		editor: VideoEditor,
		displayName: "Video",
		widgetCategory: WidgetCategories.Media
	},
	GALLERY: {
		widget: Gallery,
		editor: GalleryEditor,
		displayName: "Gallery",
		widgetCategory: WidgetCategories.Media
	},
	WYSIWYG_EDITOR: {
		widget: WYSIWYGWidget,
		editor: WYSIWYGEditor,
		displayName: "Rich Text Editor",
		widgetCategory: WidgetCategories.Text
	},
	BANNER: {
		widget: Banner,
		editor: BannerEditor,
		displayName: "Banner",
		widgetCategory: WidgetCategories.Display
	},
	ACCORDION: {
		widget: Accordion,
		editor: AccordionEditor,
		displayName: "Accordion",
		widgetCategory: WidgetCategories.Display
	}
}
