import React, { useState, useContext } from 'react';
import { ContentData } from '../_data/Data';
import { useAuth } from '../../hooks/useAuth';
import './ContentEditor.css';
import { ContentEditorBanner } from './ContentEditorBanner/ContentEditorBanner';
import { WidgetEditor } from './WidgetEditor/WidgetEditor';
import { AddNewWidgetButton } from './AddNewWidgetButton/AddNewWidgetButton';
import { WidgetTypes } from '../ContentMapping/ContentMapping';
import { ContentSingularData } from '../_data/ContentSingularData';
import { HistoryTypes } from '../_debug/EditorHistory';
import { EnvironmentContext } from '../../contexts/EnvironmentContext/EnvironmentContext';

export type ContentEditorProps = {
	contentData: ContentData,
	currYear: number
}

/**
 * ContentEditor is the main content editor PAGE. It shows the editing banner that allows users to
 * select a page to edit, and also generates the widget editing components. It handles the logic 
 * for updating the data on firebase as well as the buttons to generate the new components.
 * 
 * Last Modified
 * William Kwok
 * July 17, 2019
 * 
 * TODO: 
 *  - Make "select a page to modify" message more prominent
 *  - Make loading message a spinner instead
 *  - Factor the onClicks inside AddNewWidgetButton to a static function that takes in parameters
 */
export const ContentEditor: React.FC<ContentEditorProps> = ({ contentData, currYear }) => {
	const [userLoading, setUserLoading] = useState<boolean>(true);
	const [pageToEdit, setPageToEdit] = useState<string | null>(null);
	const { firebase } = useContext(EnvironmentContext);
	const user = useAuth(firebase, setUserLoading);

	if (!firebase) {
		return <></>
	}

	const deleteWidget = async (contentHash: string) => {
		console.log(contentHash);
		if (contentData && pageToEdit && contentData[pageToEdit]) {
			let contentOrderNew: string[] = [...contentData[pageToEdit].contentOrder!];
			let currHashIndex = contentOrderNew.indexOf(contentHash);
			if (currHashIndex !== -1) {
				contentOrderNew.splice(currHashIndex, 1);
			}

			try {
				await firebase.database().ref(`${currYear}/ContentData/${pageToEdit}/contentOrder`).set(contentOrderNew);
				await firebase.database().ref(`${currYear}/ContentData/${pageToEdit}/content/${contentHash}`).remove();
				await firebase.database().ref(`${currYear}/EditHistory/${pageToEdit}/${contentHash}`).push({
					type: HistoryTypes.DELETE,
					timestamp: firebase.database.ServerValue.TIMESTAMP,
					deletor: (user && user.email) || "Unknown user"
				});
			} catch (e) {
				console.log(e);
			}
		}
	}

	if (!userLoading && contentData) {
		return <>
			<ContentEditorBanner contentData={contentData}
				pageToEdit={pageToEdit}
				setPageToEdit={setPageToEdit}
				currYear={currYear} />
			{(contentData &&
				pageToEdit &&
				contentData[pageToEdit]) ?
				<>
					{/** Force TS to not throw errors, because we check if it is defined */}
					{contentData[pageToEdit].contentOrder &&
						contentData[pageToEdit].content &&
						contentData[pageToEdit].contentOrder!.map((contentHash, index) => {
							let content = contentData[pageToEdit].content![contentHash];
							return <React.Fragment key={contentHash}>
								<AddNewWidgetButton onClick={async () => {
									// spread operation to CLONE the array rather than directly modify.
									let contentOrderToAdd: string[] = [...contentData[pageToEdit].contentOrder!];
									let newKey = generateHash();
									contentOrderToAdd.splice(index, 0, newKey);
									let contentOnFirebase: ContentSingularData = {
										type: WidgetTypes.STUB
									}
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
								}} />
								<WidgetEditor
									user={user}
									content={content}
									contentHash={contentHash}
									currYear={currYear}
									pageToEdit={pageToEdit}
									deleteWidget={deleteWidget} />
							</React.Fragment>
						})}
					<AddNewWidgetButton onClick={async () => {
						let contentOrderToAdd: string[] = (contentData[pageToEdit].contentOrder && [...contentData[pageToEdit].contentOrder!]) || [];
						let newKey = generateHash();
						contentOrderToAdd.push(newKey);
						let contentOnFirebase: ContentSingularData = {
							type: WidgetTypes.STUB
						}
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
					}} />
				</> :
				<>
					Please select a page to modify above
                </>
			}
		</>
	} else {
		return <>Loading</>
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