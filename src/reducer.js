/* @flow */
import { OPEN_MODAL, CLOSE_MODAL, DESTROY } from './actionTypes'
import type { ModalsReducerState, ModalActions } from './types'

export const NAME = 'modals'

// Initial State
export const initialState = {
  modalType: null,
  modalParams: {}
}

// Reducer
export default function modals (state: ModalsReducerState = initialState, action: ?ModalActions): ModalsReducerState {
  const { type, payload = {} } = action || {}
  switch (type) {
    case OPEN_MODAL:
      return {
        ...state,
        modalType: payload.modalType,
        modalParams: payload.modalParams || {}
      }

    case DESTROY:
    case CLOSE_MODAL:
      return {
        ...state,
        modalType: null,
        modalParams: {}
      }

    default:
      return state
  }
}
