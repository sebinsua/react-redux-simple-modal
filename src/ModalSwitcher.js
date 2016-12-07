/* @flow */
import { createElement, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { destroy, closeModal } from './actions'

import { NAME } from './reducer'

import type { KeyValueObject, React$Component, Dispatch, ActionCreator, FSA } from './typings'

type ModalSwitcherProps = {
  modals: { [key: string]: React$Component<*, *, *> },
  modalType: string,
  modalParams: KeyValueObject,
  closeModal: ActionCreator<FSA, void>,
  destroy: ActionCreator<FSA, void>
}

export class ModalSwitcher extends Component {

  props: ModalSwitcherProps

  componentWillUnmount () {
    const { destroy } = this.props
    destroy()
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
    return ModalToDisplay ? createElement(ModalToDisplay, { modalType, modalParams, closeModal, ...remainingProps }) : null
  }

}

export function mapStateToProps (state: KeyValueObject, { reducerKey = NAME }: KeyValueObject = {}) {
  if (!(reducerKey in state)) {
    throw new Error(`${reducerKey} was not found in state but is required by ModalSwitcher. Please check your root reducer to ensure it has been setup correctly.`)
  }
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

export function mapDispatchToProps (dispatch: Dispatch<FSA>) {
  return bindActionCreators({ closeModal, destroy }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalSwitcher)
