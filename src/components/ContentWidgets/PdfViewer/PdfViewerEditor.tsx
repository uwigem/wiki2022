import React from 'react';
import { WidgetEditorProps } from '../../ContentMapping/ContentMapping';
import './PdfViewer.css';

/**
 * Let the user create an embedded pdf by providing a link
 * and specifying width percentage and height in pixels.
 *
 * Last Modified
 * Max Zhou
 * July 15, 2019
 */

export const PdfViewerEditor: React.FC<WidgetEditorProps> = ({
    originalContent,
    editedContent,
    setEditedContentOnChange
}) => {
    let pdfLink: string = editedContent.pdfViewer_pdfLink || "";
    let pdfWidthPercentage: number = editedContent.pdfViewer_pdfWidthPercentage || 0;
    let pdfHeightPixel: number = editedContent.pdfViewer_pdfHeightPixel || 0;

    return <>
        <embed
        className="pdf-viewer-pdf"
        src={pdfLink}
        type="application/pdf"
        style={{
            width: pdfWidthPercentage + "%",
            height: pdfHeightPixel + "px"
        }} />
        <br />
        <h3>PDF Link</h3>
        <input type="text" value={pdfLink} onChange={(e) => setEditedContentOnChange("pdfViewer_pdfLink", e.target.value)} />
        <h3>PDF Width Percentage</h3>
        <input type="text" value={pdfWidthPercentage} onChange={(e) => setEditedContentOnChange("pdfViewer_pdfWidthPercentage", Math.min(100, Number(e.target.value)))} />
        <h3>PDF Height in Pixels</h3>
        <input type="text" value={pdfHeightPixel} onChange={(e) => setEditedContentOnChange("pdfViewer_pdfHeightPixel", Number(e.target.value))} />
    </>;
}