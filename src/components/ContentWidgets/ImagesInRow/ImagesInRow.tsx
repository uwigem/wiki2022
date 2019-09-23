import React from 'react';
import { ContentSingularData } from '../../_data/ContentSingularData';
import './ImagesInRow.css';

export type ImgRowItem = {
    imgLink: string;
    imgCaption: string;
    imgAltTag: string;
    externalLink: string;
}

/**
 * Displays a row of images and corresponding captions
 *
 * Last Modified
 * Nitesh Chetry
 * July 26, 2019
 */
export const ImagesInRow: React.FC<ContentSingularData> = ({
    imagesInRow_items
}) => {
    if (!imagesInRow_items) {
        return <></>;
    }
    return <>
        <div className="img-row">
            {imagesInRow_items.map((pair: ImgRowItem, index: number) => (
                <div className="img-row-item" key={index}>
                    <figure>
                        <a href={pair.externalLink ? pair.externalLink : pair.imgLink} >
                            <img className="img-row-image" src={pair.imgLink} alt={pair.imgAltTag ? pair.imgAltTag :
                                pair.imgCaption}
                            />
                            <figcaption className="img-row-caption">{pair.imgCaption}</figcaption>
                        </a>
                    </figure>
                </div>
            ))}
        </div>
    </>
};
