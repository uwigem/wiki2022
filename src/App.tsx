import React, { useState, useEffect } from 'react';
import './App.css';
import Data, { ContentData, ContentPageData } from './components/data/Data';

// comment out for production build
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
let firebasePassIn = firebase;

// uncomment this for the production build
// let firebasePassIn: any = null;

window.addEventListener("unload", function () { });

const App: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [contentData, setContentData] = useState<ContentPageData>(Data.getContentData("BLANK"));

    let debugURL = "/Attributions";
    let name = "https://2019.igem.org/Team:Washington";
    let imgsToPrefetch: string[] = Data.getImgsToPrefetch();
    let imgsLoaded = 0;
    let pageTitle = debugURL;
    let debugMode = true;

    /**
     * Prefetch images will grab images to load in the background after the page has loaded
     */
    const prefetchImagesWaveTwo = () => {

    }

    /**
     * Prefetch images will grab images to load in the background after the page has loaded
     */
    const prefetchImages = () => {
        imgsToPrefetch.forEach((imgURL: string) => {
            const img = new Image();
            img.src = imgURL;
            img.onload = () => {
                imgsLoaded++;
                if (imgsLoaded === imgsToPrefetch.length) {
                    prefetchImagesWaveTwo();
                }
            }
        })
    }

    /**
     * Upon component mount, this effect determines if it is currently on the live website or not.
     * It sets the `pageTitle` to be `debugURL` if not live, or the text after `"Team:Washington"`
     * in the URL.
     * 
     * eg "2019.igem.org/Team:Washington/Design" -> "/Design"
     */
    useEffect(() => {
        prefetchImages();
        let splitTitle = window.location.href.split("igem");
        if (splitTitle.length === 2) {
            pageTitle = splitTitle[1].split("Team:Washington")[1];
            debugMode = false;
        }
        setLoading(false);
        let dataRef: firebase.database.Reference | null = null;
        if (firebasePassIn) {
            dataRef = firebasePassIn.database().ref("/");
            dataRef.on("value", (snap) => {
                setContentData(snap.val() as ContentPageData);
            });

            return () => {
                if (dataRef) {
                    dataRef.off();
                }
            }
        } else {
            setContentData(Data.getContentData(pageTitle))
        }
    }, []);

    /**
     * Sets the loading state to true. This is used for in between pages. This function MUST be sent
     * down as a prop to ALL the pages, so the appropriate loading procedure takes place.
     * 
     * @example `From now on, we will pass it down like this`
     *   <CustomView a={this.displayLoadingMessage} />
     *   // in CustomView:
     *   render() {
     *       let a = this.props.a;
     *       return (
     *           <div>   
     *               <ChildView a={a} />
     *               <a href="_____" onClick={a} />
     *           </div>
     *       )
     *   }
     */
    const displayLoadingMessage = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }

}


export default App;
