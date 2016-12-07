/* @flow */
import { OPEN_MODAL, CLOSE_MODAL, DESTROY } from './actionTypes'
import { openModal, closeModal, destroy } from './actions'

test('openModal should create OPEN_MODAL action', () => {
  const expectedAction = { type: OPEN_MODAL, payload: { modalType: 'TEST_MODAL', modalParams: { gridId: 1 } } }
  expect(openModal('TEST_MODAL', { gridId: 1 }))
    .toEqual(expectedAction)
})

test('closeModal should create CLOSE_MODAL action', () => {
  const expectedAction = { type: CLOSE_MODAL }
  expect(closeModal())
    .toEqual(expectedAction)
})

test('closeModal should create DESTROY action', () => {
  const expectedAction = { type: DESTROY }
  expect(destroy())
    .toEqual(expectedAction)
})
