/* @flow */
import * as actionTypes from './actionTypes'
import { openModal, closeModal } from './actions'
import reducer, { NAME } from './reducer'
import ModalSwitcher from './ModalSwitcher'

export {
  NAME,
  actionTypes,
  openModal,
  closeModal,
  reducer,
  ModalSwitcher
}
