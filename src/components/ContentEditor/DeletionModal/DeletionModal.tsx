import React, { useState, useContext } from 'react';
import './DeletionModal.css';
import { EnvironmentContext } from '../../../contexts/EnvironmentContext/EnvironmentContext';

type DeletionModalProps = {
	pageToEdit: string | null,
	setPageToEdit: React.Dispatch<React.SetStateAction<string | null>>,
	isDeleting: boolean,
  setIsDeleting: React.Dispatch<React.SetStateAction<boolean>>,
  currYear: number
}

/**
 * DeletionModal is the modal that appears when deleting a page. It requires the user to type in the
 * name of the currently edited page and the text 'DELETE' in order to delete the page. After
 * deleting a page, the modal displays a success message. The user is able to click an x icon or
 * cancel button to exit the modal.
 *
 * Last Modified
 * Jaden Stetler
 * June 26, 2021
 */
 export const DeletionModal: React.FC<DeletionModalProps> = ({
	pageToEdit,
	setPageToEdit,
	isDeleting,
	setIsDeleting,
  currYear}) => {
  const { firebase } = useContext(EnvironmentContext);
  const [pageToDelete, setPageToDelete] = useState<string>('');
  const [deleteConfirmation, setDeleteConfirmation] = useState<string>('');
  const [isAttemptedDelete, setIsAttemptedDelete] = useState<boolean>(false);
  const [isConfirmedPage, setIsConfirmedPage] = useState<boolean>(false);
  const [isConfirmedDelete, setIsConfirmedDelete] = useState<boolean>(false);
  const closeModal = () => {
    setIsAttemptedDelete(false);
    setIsConfirmedPage(false);
    setIsConfirmedDelete(false);
    setIsDeleting(false);
    setPageToDelete('');
    setDeleteConfirmation('');
  }

  if (!firebase) {
		return <></>
	}

  if (isConfirmedPage && isConfirmedDelete) {
    return <div id='deletion-modal'>
      <div id='deletion-modal-content'>
        <div id='deletion-modal-header'>
          <span>Success</span>
          <span id='deletion-close' onClick={closeModal}>
            &times;
          </span>
        </div>
        <div id='deletion-modal-success'>
          <p id='check'>&#10004;</p>
          <p>You just deleted {pageToDelete}.</p>
        </div>
        <div id='deletion-modal-footer'>
        <button id='delete-ok-btn' onClick={closeModal}>OK</button>
        </div>
      </div>
    </div>
  } else if (isDeleting) {
    // Set input for page deletion confirmation and display error as necessary
    let pageInput: any;
    if (isAttemptedDelete && !isConfirmedPage) {
      pageInput = <>
        <input className='error-input' value={pageToDelete} onChange={event => setPageToDelete(event.target.value)} />
        <p className='red'>&#9432; You have entered invalid information. Please try again.</p>
      </>
    } else {
      pageInput = <input value={pageToDelete} onChange={event => setPageToDelete(event.target.value)} />
    }

    // Set input for delete confirmation and display error as necessary
    let deleteInput: any;
    if (isAttemptedDelete && !isConfirmedDelete) {
      deleteInput = <>
        <input className='error-input' value={deleteConfirmation} onChange={event => setDeleteConfirmation(event.target.value)} />
        <p className='red'>&#9432; You have entered invalid information. Please try again.</p>
      </>
    } else {
      deleteInput = <input value={deleteConfirmation} onChange={event => setDeleteConfirmation(event.target.value)} />
    }

    return <div id='deletion-modal'>
      <div id='deletion-modal-content'>
        <div id='deletion-modal-header'>
          <span>Deletion Request</span>
          <span id='deletion-close' onClick={closeModal}>
            &times;
          </span>
        </div>
        <div id='deletion-modal-body'>
          <h2>
            <span id='caution-symbol'>&#9888;</span>
            Please Notice:
          </h2>
          <p>
            Once you confirm, all of the data for this page will be <strong>permanently </strong>
            deleted.
          </p>
          <label>Type {pageToEdit} to confirm the page that you are going to delete:</label>
          {pageInput}
          <label>
            Type DELETE to double confirm that you are&nbsp;
            <span className='underline'>deleting</span>
            &nbsp;this page:
          </label>
          {deleteInput}
        </div>
        <div id='deletion-modal-footer'>
          <button id='delete-cancel-btn' onClick={closeModal}>Cancel</button>
          <button id='delete-ok-btn' onClick={() => {
            let isCorrectPage: boolean = pageToDelete === pageToEdit;
            let isCorrectDelete: boolean = deleteConfirmation === 'DELETE';
            setIsConfirmedPage(isCorrectPage);
            setIsConfirmedDelete(isCorrectDelete);
            setIsAttemptedDelete(true);
            if (isCorrectPage && isCorrectDelete) {
              console.log('deleting');
              setPageToEdit(null);
              firebase.database()
              .ref(`${currYear}/ContentData/${pageToDelete}`)
              .remove();
            }
          }}>
            OK
          </button>
        </div>
      </div>
    </div>
  } else {
    return <></>
  }
}