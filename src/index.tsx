import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { detect } from 'detect-browser';
import { ContentEditor } from './components/ContentEditor/ContentEditor';


/**
 * Index handles configuration as well as being the main injection point for the application
 * 
 * Last Modified
 * William Kwok
 * July 17, 2019
 */

////////////////////////////////////////////////////////////////////////////////////////////////////
//////// CONFIG ////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

// COMMENT/UNCOMMENT BELOW TO ENABLE OR DISABLE FIREBASE TO THE PROJECT
import firebase from 'firebase';
import 'firebase/app'
import 'firebase/messaging';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: "AIzaSyBkr6jirFdzkMofucO2z_KzN13hMDeWkVI",
	authDomain: "uwigem-wikis.firebaseapp.com",
	databaseURL: "https://uwigem-wikis.firebaseio.com",
	projectId: "uwigem-wikis",
	storageBucket: "uwigem-wikis.appspot.com",
	messagingSenderId: "131891776719",
	appId: "1:131891776719:web:0bf2382aec94dcdf"
};
firebase.initializeApp(firebaseConfig);
// let firebase = null;
// firebase.auth().signInWithPopup(provider);

// ENTER THE CURRENT iGEM SEASON YEAR AS IN THE iGEM WIKI LINK (eg 2019.igem.org)
let currYear = 2019;

// ENTER THE UNIX EPOCH MILLISECOND TIMESTAMP FOR JUNE 14 OF THE YEAR AFTER `currYear`
// AS ON https://www.epochconverter.com/
let correctYearUnixEpochMS = 1592092800000;

// SET THE PAGE TITLE IF YOU WANT TO CHANGE IT
document.title = "Washington iGEM";

////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * The code below will detect the browser and notify the user if they are on an unsupported browser
 */
const browser = detect();
const notSupportedMessage = (browser: string) => {
	alert(`${browser.toUpperCase()} is not entirely supported by Team Washington's Team Wiki. For best performance please use Firefox or Google Chrome! 
    
    You may continue to use the site, but please note that there will be bugs and poor performance. Sorry for any inconvenience, and thank you!`)
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

/**
 * The code below will ensure the user is at the correct year.
 */
const currAccessDate = Date.now();

// Ensure that people are at the correct year. 
if (currAccessDate > correctYearUnixEpochMS) {
	let yearAsDate = new Date(currAccessDate);
	let year = yearAsDate.getFullYear();

	if (Number(year) <= currYear) {
		year = currYear + 1;
	}
	alert(`You are currently viewing our ${year - 1} project.
    
Check out our ${year} project over at the link below!

http://${year}.igem.org/Team:Washington.`)
}

/**
 * Render the app into the root element, and provide if the browser is IE or Edge into the props
 * In the future, you may want to change this prop to the browser name instead, or extend it to
 * work with browsers that are behind, such as Safari.
 */
ReactDOM.render(<App IEOREDGE={IEOREDGE} currYear={currYear} firebase={firebase} ContentEditor={ContentEditor} />, document.getElementById('root'));
