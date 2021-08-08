import React, { useState, useContext } from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { ContentData, VERSION } from '../../_data/Data';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { MAIN_PAGE } from '../../_data/Constants';
import { EnvironmentContext } from '../../../contexts/EnvironmentContext/EnvironmentContext';
import { printContent } from '../ContentPrinter/ContentPrinter';
import {NewPageModal} from './ContentEditorModal';
import './ContentEditorBanner.css';

type ContentEditorBannerProps = {
	pageToEdit: string | null,
	setPageToEdit: React.Dispatch<React.SetStateAction<string | null>>,
	contentData: ContentData,
  setisDeletingPage: React.Dispatch<React.SetStateAction<boolean>>,
	currYear: number
}

enum VersionAttr {
    major = 0,
    minor = 1,
    bug = 2
}

/**
 * ContentEditorBanner is the editor banner that appears at the top of the editor page. It shows
 * the user what page is currently being edited, allows the user to select a different page to edit,
 * allows the user to select if the page has a sidebar or not, and also allows the user to create
 * new pages.
 *
 * Last Modified
 * Jennifer Tao
 * August 7, 2021
 */
export const ContentEditorBanner: React.FC<ContentEditorBannerProps> = ({
	pageToEdit,
	setPageToEdit,
	contentData,
  setisDeletingPage,
	currYear }) => {
	const { firebase } = useContext(EnvironmentContext);
	const [newPageInput, setNewPageInput] = useState<string>("")
	const [modal, setModal] = useState(false);


	if (!firebase) {
		return <></>
	}

	// DO_NOT_CLICK is currently my quick method of making sure people are on the latest version
	const version = (contentData && contentData.DO_NOT_CLICK && contentData.DO_NOT_CLICK["MISC"]) || VERSION;
    // version -> [major, minor, bug]
	const minor = version.split(".")[VersionAttr.minor];
	const cMinor = VERSION.split(".")[VersionAttr.minor];
	if (minor !== cMinor) {
		alert("Please update your editor version by clearing cache/cookies and refreshing");
	}

	const submitCallback = async (s: boolean, name: string) => {
		
		let newPageInputRef = firebase.database()
			.ref(`${currYear}/ContentData/${name}`);
		let snap = await newPageInputRef.once('value');
		console.log(snap);
		if (!snap.val()) {
			newPageInputRef.set({
				hasSidebar: s
			});
			setPageToEdit(name);
			setNewPageInput("");
			firebase.database()
				.ref(`${currYear}/ContentData/${pageToEdit}/hasSidebar`)
				.set(s);
			setModal(false);
		}
	}

	return <div className="content-editor-banner">
		<Grid className="content-editor-container">
			<Row className="content-editor-title">
				<Col md={1}>
					<div className="content-editor-icon"></div>
				</Col>
				<Col md={6}>
					<Row><h2>Washington iGEM Web Editor</h2></Row>
					<Row><p>Boosts your efficiency and efforts on creating Wikis</p></Row>
				</Col>
				<Col mdOffset={3} md={2}>
					<Button
						className="content-editor-button"
						variant="contained"
						onClick={() => {
							printContent(contentData);
						}}
					>
						Debug
					</Button>
				</Col>
			</Row>
			<Row className="content-editor-page-editing">
				<Col md={3}>
					{pageToEdit && <p className="content-editor-label">You are currently editing page </p>}
					{!pageToEdit && <p className="content-editor-label">Please select a page to edit</p>}
				</Col>
				<Col md={2}>
					<FormControl className="content-editor-formcontrol">
						<Select
							value={pageToEdit || ""}
							onChange={(e) => {
								setPageToEdit(e.target.value as string);
							}}>
							{Object.keys(contentData).map(contentDataKey => {
								return <MenuItem key={contentDataKey} value={contentDataKey}>
									{contentDataKey === MAIN_PAGE ? "Main page" : contentDataKey}
								</MenuItem>
							})}
						</Select>
					</FormControl>
				</Col>
				<Col md={1}>
					{pageToEdit &&
							<FormControlLabel className="content-editor-checkbox"
								control={
									<Checkbox 
										checked={contentData[pageToEdit].hasSidebar}
										color="default"
										onChange={e => {
											firebase.database()
												.ref(`${currYear}/ContentData/${pageToEdit}/hasSidebar`)
												.set(e.target.checked);
										}} />
								}
								label="Sidebar"
							/>
						}
				</Col>
				<Col mdOffset={2} md={4}>
					<Button
						className="content-editor-button"
						style={{ marginLeft: '1rem'}}
						disabled={pageToEdit === null}
						variant="contained"
						onClick={() => setisDeletingPage(true)}
					>
						Delete Page
					</Button>
					<Button
						className="content-editor-button"
						color="primary"
						variant="contained"
						onClick={() => {
							setModal(true);
						}}
					>
						Add New Page
					</Button>
				</Col>
			</Row>
		</Grid>
		{
            // if there is something being displayed, show the project modal
            modal ?
                <NewPageModal 
					show={true}
                    callback={submitCallback}
					close={() => {setModal(false)}}
                />
                :
                null
        }
	</div>
}