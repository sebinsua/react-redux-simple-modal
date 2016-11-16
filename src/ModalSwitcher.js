import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { closeModal } from './actions'
import { REDUCER_NAME } from './reducer'

export class ModalSwitcher extends Component {

  static propTypes = {
    modals: PropTypes.object.isRequired,
    modalType: PropTypes.string,
    modalParams: PropTypes.object,
    closeModal: PropTypes.func.isRequired
  }

  componentWillUnmount () {
    const { closeModal } = this.props
    closeModal()
  }

  render () {
    const {
      modals,
      modalType,
      modalParams = {},
      closeModal,
      ...remainingProps
    } = this.props

    const ModalToDisplay = modals[modalType]
    if (ModalToDisplay) {
      return (
        <ModalToDisplay
          modalType={modalType}
          modalParams={modalParams}
          closeModal={closeModal}
          {...remainingProps}
        />
      )
    }

    return null
  }

}

export function mapStateToProps (state, { reducerKey = REDUCER_NAME } = {}) {
  const {
    [reducerKey]: {
      modalType,
      modalParams = {}
    }
  } = state
  return {
    modalType,
    modalParams
  }
}

export function mapDispatchToProps (dispatch) {
  return bindActionCreators({ closeModal }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalSwitcher)
