import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

export function ModalContainer ({
  modals,
  modalType,
  modalParams = {}
}) {
  const ModalToDisplay = modals[modalType]
  return ModalToDisplay ? <ModalToDisplay modalType={modalType} modalParams={modalParams} /> : null
}

ModalContainer.propTypes = {
  modals: PropTypes.object.isRequired,
  modalType: PropTypes.string,
  modalParams: PropTypes.object
}

export function mapStateToProps ({
  modals: {
    modalType,
    modalParams = {}
  }
}) {
  return {
    modalType,
    modalParams
  }
}

export default connect(mapStateToProps)(ModalContainer)
