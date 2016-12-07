/* @flow */
import { OPEN_MODAL, CLOSE_MODAL, DESTROY } from './actionTypes'
import reducer, { initialState } from './reducer'

import type {
  OpenModalAction,
  CloseModalAction,
  DestroyModalsAction
} from './types'

test('reducer sets up initialState', () => {
  expect(reducer(undefined))
    .toEqual(initialState)
})

test('reducer handles OPEN_MODAL', () => {
  const openModalAction: OpenModalAction = { type: OPEN_MODAL, payload: { modalType: 'ADD_GRID_MODAL', modalParams: { gridId: 1 } } }
  expect(reducer({ modalType: null, modalParams: {} }, openModalAction))
    .toEqual({ modalType: 'ADD_GRID_MODAL', modalParams: { gridId: 1 } })
})

test('reducer handles CLOSE_MODAL', () => {
  const closeModalAction: CloseModalAction = { type: CLOSE_MODAL }
  expect(reducer({ modalType: 'ADD_GRID_MODAL', modalParams: { gridId: 1 } }, closeModalAction))
    .toEqual({ modalType: null, modalParams: {} })
})

test('reducer handles DESTROY', () => {
  const destroyModalsAction: DestroyModalsAction = { type: DESTROY }
  expect(reducer({ modalType: 'ADD_GRID_MODAL', modalParams: { gridId: 1 } }, destroyModalsAction))
    .toEqual({ modalType: null, modalParams: {} })
})
