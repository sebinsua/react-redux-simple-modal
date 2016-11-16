import { OPEN_MODAL, CLOSE_MODAL } from './actionTypes'

export const REDUCER_NAME = 'modals'

// Initial State
export const initialState = {
  modalType: null,
  modalParams: {}
}

// Reducer
export default function modals (state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modalType: action.payload.modalType,
        modalParams: action.payload.modalParams || {}
      }

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
