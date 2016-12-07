/* @flow */
import {
  OPEN_MODAL,
  CLOSE_MODAL,
  DESTROY
} from './actionTypes'

import type {
  OpenModalAction,
  CloseModalAction,
  DestroyModalsAction,
  KeyValueObject
} from './types'

export function openModal (modalType: string, modalParams: ?KeyValueObject): OpenModalAction {
  return { type: OPEN_MODAL, payload: { modalType, modalParams: modalParams || {} } }
}

export function closeModal (...args: Array<void>): CloseModalAction {
  return { type: CLOSE_MODAL }
}

export function destroy (...args: Array<void>): DestroyModalsAction {
  return { type: DESTROY }
}
