/* @flow */
import { OPEN_MODAL, CLOSE_MODAL, DESTROY } from './actionTypes'
import type { KeyValueObject, FSA } from './typings'

export const NAME = 'modals'

type ModalsReducerState = {
  modalType: ?string,
  modalParams: KeyValueObject
}

// Initial State
export const initialState = {
  modalType: null,
  modalParams: {}
}

// Reducer
export default function modals (state: ModalsReducerState = initialState, action: FSA): ModalsReducerState {
  const { type, payload = {} } = action
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
