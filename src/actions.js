import {
  OPEN_MODAL,
  CLOSE_MODAL
} from './actionTypes'

export function openModal (modalType, modalParams = {}) {
  return { type: OPEN_MODAL, payload: { modalType, modalParams } }
}

export function closeModal () {
  return { type: CLOSE_MODAL }
}
