import React, { useState, useContext } from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { ContentData } from '../../_data/Data';
import './ContentEditorBanner.css';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { MAIN_PAGE } from '../../_data/Constants';
import { EnvironmentContext } from '../../../contexts/EnvironmentContext/EnvironmentContext';
import { printContent } from '../ContentPrinter/ContentPrinter';

type ContentEditorBannerProps = {
	pageToEdit: string | null,
	setPageToEdit: React.Dispatch<React.SetStateAction<string | null>>,
	contentData: ContentData,
	currYear: number
}

/**
 * ContentEditorBanner is the editor banner that appears at the top of the editor page. It shows
 * the user what page is currently being edited, allows the user to select a different page to edit,
 * allows the user to select if the page has a sidebar or not, and also allows the user to create
 * new pages. 
 * 
 * Last Modified
 * William Kwok
 * July 17, 2019
 */
export const ContentEditorBanner: React.FC<ContentEditorBannerProps> = ({
	pageToEdit,
	setPageToEdit,
	contentData,
	currYear }) => {
	const { firebase } = useContext(EnvironmentContext);
	const [newPageInput, setNewPageInput] = useState<string>("")

	if (!firebase) {
		return <></>
	}

	return <div className="content-editor-banner">
		<Grid>
			<Row>
				<Col md={4}>
					<Row><h3>Washington iGEM Editor</h3></Row>
					<Row>
						<Button
							variant="contained"
							color="primary"
							onClick={() => {
								printContent(contentData);
							}}
						>
							Print Data
						</Button>
					</Row>
				</Col>
				<Col md={4}>
					{pageToEdit && <p>You are editing the <span
						className="content-editor-page-editing">/{pageToEdit === MAIN_PAGE ?
							"" : pageToEdit}</span> page.</p>}
					{!pageToEdit && <p>Please select a page to edit</p>}
					<FormControl className="content-editor-formcontrol">
						<InputLabel>Select a page to edit</InputLabel>
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
				<Col md={4} className="content-editor-banner-separation">
					<Row>
						<Col md={6}>
							<p>Create a new page</p>
							<FormControl>
								<InputLabel>URL of new page</InputLabel>
								<Input value={newPageInput} onChange={e =>
									setNewPageInput(e.target.value)} />
							</FormControl>
						</Col>
						<Col md={6} className="content-editor-banner-separation">
							<Row>
								<Button variant="contained" color="primary"
									onClick={async () => {
										let newPageInputRef = firebase.database()
											.ref(`${currYear}/ContentData/${newPageInput}`);
										let snap = await newPageInputRef.once('value');
										if (!snap.val()) {
											newPageInputRef.set({
												hasSidebar: false
											});
											setPageToEdit(newPageInput);
											setNewPageInput("");
										}
									}}>Submit</Button>
							</Row>
							<Row>
								{pageToEdit &&
									<FormControlLabel
										control={
											<Checkbox checked={contentData[pageToEdit].hasSidebar}
												onChange={e => {
													firebase.database()
														.ref(`${currYear}/ContentData/${pageToEdit}/hasSidebar`)
														.set(e.target.checked);
												}} />
										}
										label="Has sidebar?"
									/>
								}
							</Row>
						</Col>
					</Row>
				</Col>
			</Row>
		</Grid>
	</div>
}