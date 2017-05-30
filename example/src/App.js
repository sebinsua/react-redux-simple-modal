import React from 'react'
import { connect } from 'react-redux'
import { ModalSwitcher, openModal } from 'react-redux-simple-modal'

import { ExampleModal, OtherExampleModal } from './modals'
import { EXAMPLE_MODAL, OTHER_EXAMPLE_MODAL } from './modals/constants'

const ExamplePage = ({ openModal }) => (
  <div className='example-page'>
    <ModalSwitcher
      modals={{
        [EXAMPLE_MODAL]: ExampleModal,
        [OTHER_EXAMPLE_MODAL]: OtherExampleModal
      }}
    />
    <button onClick={openModal.bind(null, EXAMPLE_MODAL)}>
      Open Example Modal
    </button>
    <button onClick={openModal.bind(null, OTHER_EXAMPLE_MODAL)}>
      Open Other Example Modal
    </button>
  </div>
)

export default connect(null, { openModal })(ExamplePage)
