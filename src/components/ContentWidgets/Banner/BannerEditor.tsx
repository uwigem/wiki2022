import React from 'react';
import { WidgetEditorProps } from '../../ContentMapping/ContentMapping';
import { Color, EMPTY_BANNER } from './BannerConstants';
import { Banner } from './Banner';
import './Banner.css';

export const BannerEditor: React.FC<WidgetEditorProps> = ({
  editedContent,
  setEditedContentOnChange
}) => {
    const bannerContent = editedContent.banner_content || EMPTY_BANNER;
    const isWhite = bannerContent.textColor === Color.WHITE;

    return <> 
        <div className="banner-editor">
            <div>
                <p>Banner Name </p>
                <input type="text" 
                    value={bannerContent.bannerText}
                    onChange={(e) => {
                        bannerContent.bannerText = e.target.value;
                        setEditedContentOnChange("banner_content", bannerContent)}}>
                </input>
            </div>
            <div>
                <p>Text Size </p>
                <input 
                    type="number"
                    min="0"
                    value={bannerContent.textSize}
                    onChange={(e) => {
                        bannerContent.textSize = Number(e.target.value);
                        setEditedContentOnChange("banner_content", bannerContent)}}
                ></input>
            </div>

            <div className="banner-radio-div">
                <p>Text Color </p>
                <label>
                    <input
                        type="radio"
                        value={Color.WHITE}
                        checked={isWhite}
                        onChange={(e) => {
                            bannerContent.textColor = e.target.value;
                            setEditedContentOnChange("banner_content", bannerContent)
                        }}
                    />
                    White
                    </label>
                <label>
                    <input
                        type="radio"
                        name="react-tips"
                        value={Color.BLACK}
                        checked={!isWhite}
                        onChange={(e) => {
                            bannerContent.textColor = e.target.value;
                            setEditedContentOnChange("banner_content", bannerContent)
                        }}
                    />
                    Black
                </label>
            </div>

            <div className="banner-slider-y">
                <p style={{display: "block"}}>Image Corner Top-left Y: {bannerContent.imageTopY}%</p>
                <input type="range" min="0" max="100" 
                    defaultValue={String(bannerContent.imageTopY)}
                    onChange={(e) => {bannerContent.imageTopY = Number(e.target.value)}}
                    onMouseUp={() => {
                        setEditedContentOnChange("banner_content", bannerContent)}}>
                </input>
            </div>

            <div className="banner-slider-x">
                <p>Image Corner Top-left X {bannerContent.imageTopX}%</p>
                <div>
                    <input type="range" min="0" max="100" 
                        defaultValue={String(bannerContent.imageTopX)}
                        onChange={(e) => {bannerContent.imageTopX = Number(e.target.value)}}
                        onMouseUp={() => {
                            setEditedContentOnChange("bannder_content", bannerContent)}}>
                    </input>     
                </div>
                <div>
                    <p>Image Link </p>
                    <input type="text" 
                        value={bannerContent.imageLink}
                        onChange={(e) => {
                            bannerContent.imageLink = e.target.value;
                            setEditedContentOnChange("banner_content", bannerContent)}}>
                    </input>
                </div>
                    <p>Image Blur </p>
                    <input 
                        type="number"
                        min="0"
                        value={bannerContent.imageBlur}
                        onChange={(e) => {
                            bannerContent.imageBlur = Number(e.target.value);
                            setEditedContentOnChange("banner_content", bannerContent)}}>
                    </input>
                <div>
                    <p>Image Zoom </p> 
                    <input 
                        type="number"
                        value={bannerContent.imageZoom}
                        onChange={(e) => {
                            bannerContent.imageZoom = Number(e.target.value);
                            setEditedContentOnChange("banner_content", bannerContent)}}>
                    </input>
                    <p>%</p>
                </div>
            </div>  
        </div>
        <div className="banner-preview">
            <Banner banner_content={bannerContent}></Banner>
        </div>
    </>
}