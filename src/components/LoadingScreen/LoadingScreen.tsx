import React from 'react';
import './LoadingScreen.css';

/**
 * LoadingScreen is the page that appears when the page is loading
 */
export const LoadingScreen: React.FC = () => {
    return <div className={"loading-screen-outer"}>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /> {/** TODO: Change this to CSS */}
        <h1 className={"loading-screen-heading"}>Page loading</h1>
        <div className="sk-circle">
            <div className="sk-circle1 sk-child"></div>
            <div className="sk-circle2 sk-child"></div>
            <div className="sk-circle3 sk-child"></div>
            <div className="sk-circle4 sk-child"></div>
            <div className="sk-circle5 sk-child"></div>
            <div className="sk-circle6 sk-child"></div>
            <div className="sk-circle7 sk-child"></div>
            <div className="sk-circle8 sk-child"></div>
            <div className="sk-circle9 sk-child"></div>
            <div className="sk-circle10 sk-child"></div>
            <div className="sk-circle11 sk-child"></div>
            <div className="sk-circle12 sk-child"></div>
        </div>
    </div>
}