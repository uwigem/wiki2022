import React from 'react';
import { ContentSingularData } from '../../_data/ContentSingularData';
import './PdfViewer.css';

/**
 * Showing an embedded pdf window
 *
 * Last Modified
 * Max Zhou
 * July 15, 2019
 */
export const PdfViewer: React.FC<ContentSingularData> = ({
    pdfViewer_pdfLink, pdfViewer_pdfWidthPercentage, pdfViewer_pdfHeightPixel
}) => {
    if (!pdfViewer_pdfLink ||
        !pdfViewer_pdfWidthPercentage ||
        !pdfViewer_pdfHeightPixel) {
        return <></>;
    }

    let pdfStyle = {
        width: pdfViewer_pdfWidthPercentage + "%",
        height: pdfViewer_pdfHeightPixel + "px"
    };

    return <embed
        className="pdf-viewer-pdf"
        src={pdfViewer_pdfLink}
        type="application/pdf"
        style={pdfStyle} />
}