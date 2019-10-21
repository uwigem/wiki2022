import React, { useState } from 'react';
import { WidgetEditorProps } from '../../ContentMapping/ContentMapping';
import { Button, TextField } from '@material-ui/core';
import './ImageCarousel.css';
import Carousel from 'react-bootstrap/Carousel';
import { CarouselImagesContent, CarouselSettings, EMPTY_CAROUSEL_SETTINGS } from './ImageCarousel';

/**
 * Diplays an editor to create/edit an ImageCarousel widget
 *
 * Last Modified
 * Nitesh Chetry
 * October 30, 2019
 */
export const ImageCarouselEditor: React.FC<WidgetEditorProps> = ({
	editedContent,
	setEditedContentOnChange
}) => {
	let carouselSettings: CarouselSettings = editedContent.carousel_settings || EMPTY_CAROUSEL_SETTINGS;
	let carouselImages: CarouselImagesContent[] = editedContent.carousel_imagesContents || [];
	const [imgLinkText, changeImgLinkText] = useState("");
	const [imgCaptionText, changeCaptionText] = useState("");
	const [imgAltTagText, changeImgAltTagText] = useState("");
	const [emptyImgLinkSubmitted, switchEmptyImgLinkSubmitted] = useState(false);
	const [emptyCaptionAndAltTagSubmitted, switchEmptyCaptionAndAltTagSubmitted] = useState(false);


	const addImage = (imgLinkText: string, imgCaptionText: string, imgAltTagText: string) => {
		if (imgLinkText !== "" && (imgCaptionText !== "" || imgAltTagText !== "")) {
			carouselImages.push({
				imgLink: imgLinkText,
				imgCaption: imgCaptionText,
				imgAltTag: imgAltTagText
			});
			setEditedContentOnChange("carousel_imagesContents", carouselImages);
			changeImgLinkText("");
			changeCaptionText("");
			changeImgAltTagText("");
		}
	}

	const renderEmptyImageLinkError = () => {
		return <>
			<h4> Image Link must not be empty</h4>
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


	if (!carouselImages) {
		return <></>;
	}
	return <>
		<h3> Carousel Settings </h3>
		<form>
			<label>
				Show Bottom Indicator:
          		<input
					name="showIndicator"
					type="checkbox"
					checked={carouselSettings.showIndicators}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						carouselSettings.showIndicators = e.target.checked;
						setEditedContentOnChange("carousel_settings", carouselSettings);
					}} />
			</label>
		</form>
		<form>
			<label>
				Show Side Controls:
          		<input
					name="showControls"
					type="checkbox"
					checked={carouselSettings.showControls}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						carouselSettings.showControls = e.target.checked;
						setEditedContentOnChange("carousel_settings", carouselSettings);
					}} />
			</label>
		</form>
		<form>
			<label>
				Show Captions:
          		<input
					name="showCaptions"
					type="checkbox"
					checked={carouselSettings.showCaptions}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						carouselSettings.showCaptions = e.target.checked;
						setEditedContentOnChange("carousel_settings", carouselSettings);
					}} />
			</label>
		</form>
		{/** input for height of carousel */}<TextField
			label="Height (em)"
			className="text-field"
			value={carouselSettings.height}
			onChange={
				(e: React.ChangeEvent<HTMLInputElement>) => {
					carouselSettings.height = Number(e.target.value);
					setEditedContentOnChange("carousel_settings", carouselSettings);
				}}
			variant="outlined"
			margin="dense"
			multiline
		/>
		{/** input for width of carousel */}<TextField
			label="Width (em)"
			className="text-field"
			value={carouselSettings.width}
			onChange={
				(e: React.ChangeEvent<HTMLInputElement>) => {
					carouselSettings.width = Number(e.target.value);
					setEditedContentOnChange("carousel_settings", carouselSettings);
				}}
			variant="outlined"
			margin="dense"
			multiline
		/>

		{/** input for text size of carousel's caption */}<TextField
			label="Caption Font Size (%)"
			className="text-field"
			value={carouselSettings.fontSize}
			onChange={
				(e: React.ChangeEvent<HTMLInputElement>) => {
					carouselSettings.fontSize = Number(e.target.value);
					setEditedContentOnChange("carousel_settings", carouselSettings);
				}}
			variant="outlined"
			margin="dense"
		/>
		{/** input to change how long carousel satys at a time */}<TextField
			label="Stay Time per Slide (ms)"
			className="text-field"
			value={carouselSettings.interval}
			onChange={
				(e: React.ChangeEvent<HTMLInputElement>) => {
					carouselSettings.interval = Number(e.target.value);
					setEditedContentOnChange("carousel_settings", carouselSettings);
				}}
			variant="outlined"
			margin="dense"
		/>
		<h2> ** Always save carousel settings ** </h2>
		<Button
			variant="outlined"
			color="primary"
			onClick={e => { setEditedContentOnChange("carousel_settings", carouselSettings); }}
		>
			Save Carousel Settings
        </Button>
		<h3> Preview </h3>
		<Carousel
			indicators={carouselSettings.showIndicators}
			controls={carouselSettings.showControls}
			interval={carouselSettings.interval}
			style={{
				maxWidth: `${carouselSettings.width}em`,
			}}
		>
			{carouselImages.map((carouselImage: CarouselImagesContent, index) => (

				<Carousel.Item key={index}>
					{/** TODO: Fix buggy delete: deleted items come back unless widget is saved */}
					<Button
						id="delete-button"
						variant="outlined"
						onClick={() => {
							carouselImages.splice(index, 1);
							setEditedContentOnChange(
								"carousel_imagesContents",
								carouselImages
							);
						}
						}
					>
						Delete
					</Button>
					<img
						className="d-block w-100 carousel-img"
						src={carouselImage.imgLink}
						alt={carouselImage.imgAltTag ? carouselImage.imgAltTag : carouselImage.imgCaption}
						style={{ height: `${carouselSettings.height}em` }}
					/>
					{carouselSettings.showCaptions ? (
						<Carousel.Caption>
							<p style={{ fontSize: `${carouselSettings.fontSize}%` }} >{carouselImage.imgCaption}</p>
						</Carousel.Caption>
					) :
						<></>}

				</Carousel.Item>
			))}
		</Carousel>
		<h3> Add New Image </h3>
		{
			emptyImgLinkSubmitted ?
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
		{
			emptyCaptionAndAltTagSubmitted ?
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
		<Button
			variant="outlined"
			color="primary"
			onClick={e => {
				switchEmptyImgLinkSubmitted(imgLinkText === "");
				switchEmptyCaptionAndAltTagSubmitted(imgCaptionText === "" && imgAltTagText === "");
				addImage(imgLinkText, imgCaptionText, imgAltTagText);
			}}
		>
			Add Image
        </Button>
	</>
};
