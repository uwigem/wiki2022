import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import { detect } from 'detect-browser';
const browser = detect();

////////////////////////////////////////////////////////////////////////////////////////////////////
//////// CONFIG ////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

// ENTER THE CURRENT iGEM SEASON YEAR AS IN THE iGEM WIKI LINK (eg 2019.igem.org)
let currYear = 2019;

// ENTER THE UNIX EPOCH MILLISECOND TIMESTAMP FOR JUNE 14 OF THE YEAR AFTER `currYear`
// AS ON https://www.epochconverter.com/
let correctYearUnixEpochMS = 1592092800000;

// SET THE PAGE TITLE IF YOU WANT TO CHANGE IT
document.title = "Washington iGEM";

////////////////////////////////////////////////////////////////////////////////////////////////////

const notSupportedMessage = (browser: string) => {
    alert(`${browser.toUpperCase()} is not entirely supported by Team Washington's Team Wiki. For best performance please use Firefox or Google Chrome! 
    
    You may continue to use the site, but please note that there will be bugs and poor performance. Sorry for any inconvenience, and thank you!`)
}

const currAccessDate = Date.now();

// Ensure that people are at the correct year. Unix epoch time here is for June 14, 2020
// 1592092800000
if (currAccessDate > correctYearUnixEpochMS) {
    let yearAsDate = new Date(currAccessDate);
    let year = yearAsDate.getFullYear();

    // Triple check.
    if (Number(year) <= currYear) {
        year = currYear + 1;
    }
    alert(`You are currently viewing our 2018 project.
    
Check out our ${year} project over at the link below!

http://${year}.igem.org/Team:Washington.`)
}

let IEOREDGE = false;

switch (browser && browser.name) {
    case 'edge':
        IEOREDGE = true;
        if (browser && browser.name) {
            notSupportedMessage(browser.name);
        }
        break;
    case 'ie':
        IEOREDGE = true;
        if (browser && browser.name) {
            notSupportedMessage(browser.name);
        };
        break;
    default:
        IEOREDGE = false;
        break;
}


ReactDOM.render(<App IEOREDGE={IEOREDGE} />, document.getElementById('root'));