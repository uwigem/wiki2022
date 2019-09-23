import React from 'react';
import { PlainText } from '../ContentWidgets/PlainText/PlainText';
import { PlainTextEditor } from '../ContentWidgets/PlainText/PlainTextEditor';
import { Stub, StubEditor } from '../ContentWidgets/_Stub/Stub';
import { ContentSingularData } from '../_data/ContentSingularData';
import { ExampleImage } from '../ContentWidgets/ExampleImage/ExampleImage';
import { ExampleImageEditor } from '../ContentWidgets/ExampleImage/ExampleImageEditor';
import { PdfViewer } from '../ContentWidgets/PdfViewer/PdfViewer';
import { PdfViewerEditor } from '../ContentWidgets/PdfViewer/PdfViewerEditor';
import { Video } from '../ContentWidgets/Video/Video';
import { VideoEditor } from '../ContentWidgets/Video/VideoEditor';
import { ImagesInRow } from '../ContentWidgets/ImagesInRow/ImagesInRow';
import { ImagesInRowEditor } from '../ContentWidgets/ImagesInRow/ImagesInRowEditor';
import { Separator } from '../ContentWidgets/Separator/Separator';
import { SeparatorEditor } from '../ContentWidgets/Separator/SeparatorEditor';


export type WidgetEditorProps = {
	originalContent: ContentSingularData,
	editedContent: ContentSingularData,
	setEditedContentOnChange: (keyToChange: string, valueToChange: any) => void
}

type ContentMappingType = {
	[idx: string]: {
		widget: React.FC<ContentSingularData>,
		editor: React.FC<WidgetEditorProps>
	}
}

export enum WidgetTypes {
	PLAIN_TEXT = "PLAIN_TEXT",
	STUB = "STUB",
	EXAMPLE_IMAGE = "EXAMPLE_IMAGE",
	SEPARATOR = "SEPARATOR",
	IMAGES_IN_ROW = "IMAGES_IN_ROW",
	PDF_VIEWER = "PDF_VIEWER",
	VIDEO = "VIDEO"
}

export const ContentMapping: ContentMappingType = {
	PLAIN_TEXT: {
		widget: PlainText,
		editor: PlainTextEditor
	},
	STUB: {
		widget: Stub,
		editor: StubEditor
	},
	EXAMPLE_IMAGE: {
		widget: ExampleImage,
		editor: ExampleImageEditor
	},
	IMAGES_IN_ROW: {
		widget: ImagesInRow,
		editor: ImagesInRowEditor
	},
	SEPARATOR: {
		widget: Separator,
		editor: SeparatorEditor
	},
	PDF_VIEWER: {
		widget: PdfViewer,
		editor: PdfViewerEditor
	},
	VIDEO: {
		widget: Video,
		editor: VideoEditor
	},
}
