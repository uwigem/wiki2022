import firebase from 'firebase';
import { WidgetTypes } from '../ContentMapping/ContentMapping';
import { ContentSingularData } from '../_data/ContentSingularData';
import { ContentData } from '../_data/Data';
import { HistoryTypes } from '../_debug/EditorHistory';

export function addWidget(
        contentData: ContentData,
        pageToEdit: string,
        index: number,
        currYear: number,
        user: firebase.User | null) {
    // spread operation to CLONE the array rather than directly modify.
    let contentOrderToAdd: string[] = [...contentData[pageToEdit].contentOrder!];
    let newKey = generateHash();
    contentOrderToAdd.splice(index, 0, newKey);
    return (widgetType: WidgetTypes) => {
        const firebaseContent: ContentSingularData = {
            type: widgetType
        }
        createWidget(currYear, pageToEdit, newKey, contentOrderToAdd, user, firebaseContent);
    };
}

async function createWidget(
    currYear: number,
    pageToEdit: string,
    newKey: string,
    contentOrderToAdd: string[],
    user: firebase.User | null,
    contentOnFirebase: ContentSingularData) {
    try {
        // Set the content first, then the order. If it fails to add the
        // content then it won't add it to the order.
        await firebase.database().ref(`${currYear}/ContentData/${pageToEdit}/content/${newKey}`).set(contentOnFirebase);
        await firebase.database().ref(`${currYear}/ContentData/${pageToEdit}/contentOrder`).set(contentOrderToAdd);
        await firebase.database().ref(`${currYear}/EditHistory/${pageToEdit}/${newKey}`).push({
            type: HistoryTypes.CREATION,
            timestamp: firebase.database.ServerValue.TIMESTAMP,
            creator: (user && user.email) || "Unknown user"
        });
    } catch (e) {
        console.log(e);
    }
}

/**
 * https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
 *
 * generateHash creates a random hash value that we will be using for generating keys to store
 * content on firebase. This hash is inserted into an array to determine the order of the content.
 * For our specific use case, here are the following requirements and reasoning:
 *
 *      - We do not have to support older browsers. Because this is an internal part of the program
 *        for Washington iGEM members, we just enforce them to use newer browsers when editing.
 *
 *      - Because we anticipate there to be < 100 items on the page, we don't have to generate huge
 *        values. We only need to generate things where the chance of collision is near impossible.
 *        Therefore, I have chosen _24_ to be the length of the string we generate.
 *
 *      - They only need to be unique to the page.
 *
 * Last Modified
 * William Kwok
 * June 22, 2019
 */
 const generateHash: () => string = () => {
	// Change this to change the length of the string generated. Reconsider if you have to ever
	// change this, though.
	const lengthOfGeneratedHash = 24;

	let randomInt8s = new Uint8Array(lengthOfGeneratedHash / 2);
	window.crypto.getRandomValues(randomInt8s);
	return randomInt8s.reduce((accumulator, randomInt) => {
		return accumulator + ('0' + randomInt.toString(16)).substr(2)
	}, "")
}