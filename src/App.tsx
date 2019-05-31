import React, { useState, useEffect } from 'react';
import './App.css';
import Data from './components/data/Data';

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

    let debugURL = "/Attributions";
    let name = "https://2019.igem.org/Team:Washington";
    let data: Data = new Data();
    let imgsToPrefetch: string[] = data.getImgsToPrefetch();
    let imgsLoaded = 0;
    let pageTitle = debugURL;
    let debugMode = true;

    /**
     * Upon component mount, this effect determines if it is currently on the live website or not.
     * It sets the `pageTitle` to be `debugURL` if not live, or the text after `"Team:Washington"`
     * in the URL.
     * 
     * eg "2019.igem.org/Team:Washington/Design" -> "/Design"
     */
    useEffect(() => {
        let splitTitle = window.location.href.split("igem");
        if (splitTitle.length === 2) {
            pageTitle = splitTitle[1].split("Team:Washington")[1];
            debugMode = false;
        }
        setLoading(false);
    }, [])

    const prefetchImagesWaveTwo = () => {

    }

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


}


export default App;
