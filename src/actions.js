/* @flow */
import {
  OPEN_MODAL,
  CLOSE_MODAL,
  DESTROY
} from './actionTypes'

import type { KeyValueObject } from './typings'

export type FSA = {
  type: string,
  error?: boolean,
  payload?: KeyValueObject
}

export function openModal (modalType: string, modalParams: ?KeyValueObject = {}): FSA {
  return { type: OPEN_MODAL, payload: { modalType, modalParams } }
}

export function closeModal (...args: Array<void>): FSA {
  return { type: CLOSE_MODAL }
}

export function destroy (...args: Array<void>): FSA {
  return { type: DESTROY }
}
