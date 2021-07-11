import React, { useState, useContext } from 'react';
import './DeletionModal.css';
import { EnvironmentContext } from '../../../contexts/EnvironmentContext/EnvironmentContext';

type DeletionModalProps = {
	pageToEdit: string | null,
	setPageToEdit: React.Dispatch<React.SetStateAction<string | null>>,
	isDeletingPage: boolean,
  setisDeletingPage: React.Dispatch<React.SetStateAction<boolean>>,
  currYear: number
}

/**
 * DeletionModal is the modal that appears when deleting a page. It requires the user to type in the
 * name of the currently edited page and the text 'DELETE' in order to delete the page. After
 * deleting a page, the modal displays a success message. The user is able to click an x icon or
 * button to exit the modal.
 *
 * Last Modified
 * Jaden Stetler
 * June 26, 2021
 */
 export const DeletionModal: React.FC<DeletionModalProps> = ({
	pageToEdit,
	setPageToEdit,
	isDeletingPage,
	setisDeletingPage,
  currYear}) => {
  const { firebase } = useContext(EnvironmentContext);
  const [pageToDelete, setPageToDelete] = useState<string>('');
  const [deleteConfirmation, setDeleteConfirmation] = useState<string>('');
  const [hasAttemptedDelete, setHasAttemptedDelete] = useState<boolean>(false);
  const [isConfirmedPage, setIsConfirmedPage] = useState<boolean>(false);
  const [isConfirmedDelete, setIsConfirmedDelete] = useState<boolean>(false);
  const closeModal = function () {
    setHasAttemptedDelete(false);
    setIsConfirmedPage(false);
    setIsConfirmedDelete(false);
    setisDeletingPage(false);
    setPageToDelete('');
    setDeleteConfirmation('');
  }

  if (!firebase) {
		return <></>
	}

  if (isConfirmedPage && isConfirmedDelete) {
    // Page has been successfully deleted and success delete modal should be displayed
    return <div id='deletion-modal'>
      <article id='deletion-modal-content'>
        <section id='deletion-modal-header'>
          <span>Success</span>
          <span id='deletion-close' onClick={closeModal}>
            &times;
          </span>
        </section>
        <section id='deletion-modal-success'>
          <p id='check'>&#10004;</p>
          <p>You just deleted {pageToDelete}.</p>
        </section>
        <section id='deletion-modal-footer'>
        <button id='delete-ok-btn' onClick={closeModal}>OK</button>
        </section>
      </article>
    </div>
  } else if (isDeletingPage) {
    // Page is currently being deleted and delete modal should be displayed
    // Set input for page to delete confirmation with error message as necessary
    let pageInput: object;
    if (hasAttemptedDelete && !isConfirmedPage) {
      pageInput = <>
        <input className='error-input'
        value={pageToDelete}
        onChange={event => setPageToDelete(event.target.value)} />
        <p className='error-message'>
          &#9432; You have entered invalid information. Please try again.
        </p>
      </>
    } else {
      pageInput = <input value={pageToDelete}
        onChange={event => setPageToDelete(event.target.value)} />
    }

    // Set input for 'DELETE' confirmation with error message as necessary
    let deleteInput: object;
    if (hasAttemptedDelete && !isConfirmedDelete) {
      deleteInput = <>
        <input
        className='error-input'
        value={deleteConfirmation}
        onChange={event => setDeleteConfirmation(event.target.value)} />
        <p className='error-message'>
          &#9432; You have entered invalid information. Please try again.
        </p>
      </>
    } else {
      deleteInput = <input
      value={deleteConfirmation}
      onChange={event => setDeleteConfirmation(event.target.value)} />
    }

    return <div id='deletion-modal'>
      <article id='deletion-modal-content'>
        <section id='deletion-modal-header'>
          <span>Deletion Request</span>
          <span id='deletion-close' onClick={closeModal}>
            &times;
          </span>
        </section>
        <section id='deletion-modal-body'>
          <h1>
            <span id='caution-symbol'>&#9888;</span>
            Please Notice:
          </h1>
          <p id='delete-warning'>
            Once you confirm, all of the data for this page will be <strong>permanently </strong>
            deleted.
          </p>
          <label>
            Type
            <strong>
                {" " + pageToEdit + " "}
            </strong>
            to confirm the page that you are going to delete:
          </label>
          {pageInput}
          <label>
            Type DELETE to double confirm that you are&nbsp;
            <span className='underline'>deleting</span>
            &nbsp;this page:
          </label>
          {deleteInput}
        </section>
        <section id='deletion-modal-footer'>
          <button id='delete-cancel-btn' onClick={closeModal}>Cancel</button>
          {/* Deletes page when the delete button is clicked and inputs are correct */}
          <button id='delete-ok-btn' onClick={() => {
            let isCorrectPage: boolean = pageToDelete === pageToEdit;
            let isCorrectDelete: boolean = deleteConfirmation === 'DELETE';
            setIsConfirmedPage(isCorrectPage);
            setIsConfirmedDelete(isCorrectDelete);
            setHasAttemptedDelete(true);
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
        </section>
      </article>
    </div>
  } else {
    // Page is not currently being deleted
    return <></>
  }
}