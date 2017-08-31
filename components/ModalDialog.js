import { Component } from 'react'
import { ModalContainer, ModalDialog } from 'react-modal-dialog'

const ModalDialogComponent = ({ show }) => {
  return (
    <div>
    {
      show &&
      <ModalContainer>
        <ModalDialog>
          <h1>Testing</h1>
        </ModalDialog>
      </ModalContainer>
    }
    </div>
  )
} 

export default ModalDialogComponent