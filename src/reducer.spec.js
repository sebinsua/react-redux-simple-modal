/* @flow */
import { OPEN_MODAL, CLOSE_MODAL, DESTROY } from './actionTypes'
import reducer, { initialState } from './reducer'

test('reducer sets up initialState', () => {
  expect(reducer(undefined, { type: 'ANY_ACTION' }))
    .toEqual(initialState)
})

test('reducer handles OPEN_MODAL', () => {
  expect(reducer({ modalType: null, modalParams: {} }, { type: OPEN_MODAL, payload: { modalType: 'ADD_GRID_MODAL', modalParams: { gridId: 1 } } }))
    .toEqual({ modalType: 'ADD_GRID_MODAL', modalParams: { gridId: 1 } })
})

test('reducer handles CLOSE_MODAL', () => {
  expect(reducer({ modalType: 'ADD_GRID_MODAL', modalParams: { gridId: 1 } }, { type: CLOSE_MODAL }))
    .toEqual({ modalType: null, modalParams: {} })
})

test('reducer handles DESTROY', () => {
  expect(reducer({ modalType: 'ADD_GRID_MODAL', modalParams: { gridId: 1 } }, { type: DESTROY }))
    .toEqual({ modalType: null, modalParams: {} })
})
