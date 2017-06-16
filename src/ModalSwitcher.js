/* @flow */
import { createElement, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { destroy, closeModal } from './actions'

import { NAME } from './reducer'

import type {
  KeyValueObject,
  ReactComponent,
  ReduxDispatch,
  ReduxActionCreator,
  ReactReduxConnector,
  ModalActions,
  CloseModalAction,
  DestroyModalsAction
} from './types'

type Modals = { [key: string]: ReactComponent<*, *, *> }

type ModalSwitcherProps = {
  modals: Modals,
  modalType?: string,
  modalParams?: KeyValueObject,
  closeModal: ReduxActionCreator<CloseModalAction, void>,
  destroy: ReduxActionCreator<DestroyModalsAction, void>
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

    const ModalToDisplay = modalType ? modals[modalType] : null
    return ModalToDisplay ? createElement(ModalToDisplay, { modalType, modalParams, closeModal, ...remainingProps }) : null
  }
}

export function mapStateToProps (state: KeyValueObject, { reducerKey = NAME, modals, ...ownProps }: KeyValueObject) {
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
    modalParams,
    modals,
    ...ownProps
  }
}

export function mapDispatchToProps (dispatch: ReduxDispatch<ModalActions>) {
  return bindActionCreators({ closeModal, destroy }, dispatch)
}

const connector: ReactReduxConnector<{ modals: Modals }, ModalSwitcherProps> = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connector(ModalSwitcher)
