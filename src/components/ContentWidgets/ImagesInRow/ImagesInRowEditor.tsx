import React, { useState } from 'react';
import { WidgetEditorProps } from '../../ContentMapping/ContentMapping';
import './ImagesInRow.css';
import { Button, TextField } from '@material-ui/core';
import { ImgRowItem } from './ImagesInRow';

/**
 * Diplays an editor to create/edit an ImageInRow widget
 *
 * Last Modified
 * Nitesh Chetry
 * July 26, 2019
 */
export const ImagesInRowEditor: React.FC<WidgetEditorProps> = ({
    editedContent,
    setEditedContentOnChange
}) => {
    const [imgLinkText, changeImgLinkText] = useState("");
    const [imgCaptionText, changeCaptionText] = useState("");
    const [imgAltTagText, changeImgAltTagText] = useState("");
    const [externalLink, changeExternalLink] = useState("");
    const [emptyImgLinkSubmitted, switchEmptyImgLinkSubmitted] = useState(false);
    const [emptyCaptionAndAltTagSubmitted, switchEmptyCaptionAndAltTagSubmitted] = useState(false);
    let pictureCaptionPairs: ImgRowItem[] = editedContent.imagesInRow_items || [];

    const addImage = (imgLinkText: string, imgCaptionText: string, imgAltTagText: string,
        externalLink: string) => {
        if (imgLinkText !== "" && (imgCaptionText !== "" || imgAltTagText !== "")) {
            pictureCaptionPairs.push({
                imgLink: imgLinkText,
                imgCaption: imgCaptionText,
                imgAltTag: imgAltTagText,
                externalLink: externalLink
            });
            setEditedContentOnChange("imagesInRow_items", pictureCaptionPairs);
            changeImgLinkText("");
            changeCaptionText("");
            changeImgAltTagText("");
            changeExternalLink("");
        }
    }

    const renderEmptyImageLinkError = () => {
        return <>
            <h4 className="error-message"> Image Link must not be empty</h4>
            {/** image link text field following empty input */}<TextField
                error
                required
                fullWidth
                label="Image Link"
                className="text-field"
                value={imgLinkText}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    changeImgLinkText(e.target.value);
                }}
                variant="outlined"
                margin="dense"
                multiline
            />
        </>
    }

    const renderEmptyCaptionOrAltTextError = () => {
        return <>
            <h4 className="error-message">
                Either Caption or Alternative Text must not be empty
            </h4>
            {/** caption text field following invalid input */}<TextField
                error
                fullWidth
                label="Caption"
                className="text-field"
                value={imgCaptionText}
                onChange={
                    (e: React.ChangeEvent<HTMLInputElement>) => {
                        changeCaptionText(e.target.value);
                    }}
                variant="outlined"
                margin="dense"
                multiline
            />
            {/** alt text field following invalid input */}<TextField
                error
                fullWidth
                label="Alternative Text"
                helperText="Describes image for vision-impaired users (defaults to caption)"
                className="text-field"
                value={imgAltTagText}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    changeImgAltTagText(e.target.value);
                }}
                variant="outlined"
                margin="dense"
                multiline
            />
        </>
    }


    if (!pictureCaptionPairs) {
        return <></>;
    }
    return <>
        <h3> Add New Image </h3>
        {emptyImgLinkSubmitted ?
            renderEmptyImageLinkError() :
            <>
                {/** default image link text field */}<TextField
                    fullWidth
                    required
                    label="Image Link"
                    className="text-field"
                    value={imgLinkText}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        changeImgLinkText(e.target.value);
                    }}
                    variant="outlined"
                    margin="dense"
                    multiline
                />
            </>
        }
        {emptyCaptionAndAltTagSubmitted ?
            renderEmptyCaptionOrAltTextError() :
            <>
                {/** default caption text field */}<TextField
                    fullWidth
                    label="Caption"
                    className="text-field"
                    value={imgCaptionText}
                    onChange={
                        (e: React.ChangeEvent<HTMLInputElement>) => {
                            changeCaptionText(e.target.value);
                        }}
                    variant="outlined"
                    margin="dense"
                    multiline
                />
                {/** default alt text field */}<TextField
                    fullWidth
                    label="Alternative Text"
                    helperText="Describes image for vision-impaired users (defaults to caption)"
                    className="text-field"
                    value={imgAltTagText}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        changeImgAltTagText(e.target.value);
                    }}
                    variant="outlined"
                    margin="dense"
                    multiline
                />
            </>
        }
        {/** external link text field on opened on image or caption click*/}<TextField
            fullWidth
            label="External Link"
            helperText="defaults to image link"
            className="text-field"
            value={externalLink}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                changeExternalLink(e.target.value);
            }}
            variant="outlined"
            margin="dense"
            multiline
        />
        <Button
            variant="outlined"
            color="primary"
            onClick={e => {
                switchEmptyImgLinkSubmitted(imgLinkText === "");
                switchEmptyCaptionAndAltTagSubmitted(imgCaptionText === "" && imgAltTagText === "");
                addImage(imgLinkText, imgCaptionText, imgAltTagText, externalLink);
            }}
        >
            Add Image
        </Button>
        <h3> Preview </h3>
        <div className="img-row">
            {pictureCaptionPairs.map((pair: ImgRowItem, index: number) => (
                <div className="img-row-item" key={index}>
                    <figure>
                        <a href={pair.externalLink ? pair.externalLink : pair.imgLink} >
                            <img className="img-row-image" src={pair.imgLink} alt={pair.imgAltTag ? pair.imgAltTag :
                                pair.imgCaption}
                            />
                            <figcaption className="img-row-caption">{pair.imgCaption}</figcaption>
                        </a>
                    </figure>
                    <Button
                        id="delete-button"
                        variant="outlined"
                        onClick={() => {
                            pictureCaptionPairs.splice(index, 1);
                            setEditedContentOnChange(
                                "imagesInRow_items",
                                pictureCaptionPairs
                            );
                        }}
                    >
                        Delete
                    </Button>
                </div>
            ))}
        </div>
    </>
};
