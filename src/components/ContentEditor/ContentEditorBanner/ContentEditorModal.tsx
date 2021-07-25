import Modal from 'react-bootstrap/Modal';
import React, {useState} from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import './ContentEditorModal.css';

type NewPageModalProps = {
	show: boolean,
	callback: (s: boolean, name: string) => Promise<void>,
	close: () => void
}

export const NewPageModal = (props: NewPageModalProps) => {
	const [show, setShow] = useState<boolean>(props.show);
	const [sidebar, setSidbar] = useState<boolean>(false);
	const [newPageInput, setNewPageInput] = useState<string>("")

	const handleClose = () => {
		setShow(false);
		props.close();
	}

	return <>
		<Modal className="new-page-modal"
			show={show}
			onHide={handleClose}
			size="xl"
			>
				<Modal.Header closeButton>
					<Modal.Title>Add New Page</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<section className="page-name-section">
						<h3>Page Name</h3>
						<FormControl>
							<InputLabel>Page Name</InputLabel>
							<Input value={newPageInput} onChange={e =>
								setNewPageInput(e.target.value)} />
						</FormControl>
					</section>
					<section className="page-setting-section">
						<h3>Page Setting</h3>
						<FormControlLabel
								control={
									<Checkbox checked={sidebar}
										onChange={e => {
											setSidbar(e.target.checked)
										}} />
								}
								label="Has Sidebar"
							/>
					</section>
				</Modal.Body>
				<Modal.Footer>
				<Button variant="contained"
				 	color="primary" 
					onClick={() => {props.callback(sidebar, newPageInput)}}
					>
					Submit
				</Button>
				</Modal.Footer>
			</Modal>
	</>
}