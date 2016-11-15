import React from 'react'
import { shallow } from 'enzyme'

import { mapStateToProps, ModalContainer } from './ModalContainer'

function TestModal1 () {
  return <span>Test Modal 1</span>
}

function TestModal2 () {
  return <span>Test Modal 2</span>
}

const props = {
  modals: {
    'TEST_MODAL_1': TestModal1,
    'TEST_MODAL_2': TestModal2
  },
  modalType: null,
  modalParams: null
}

test('mapStateToProps() generates valid props', () => {
  const state = {
    modals: {
      modalType: 'TEST_MODAL',
      modalParams: {
        id: 1
      }
    }
  }
  expect(mapStateToProps(state))
    .toEqual({
      modalType: state.modals.modalType,
      modalParams: state.modals.modalParams
    })
})

test('ModalContainer does not show a modal by default', () => {
  const component = shallow(<ModalContainer {...props} />)

  expect(component.find(TestModal1).length)
    .toBe(0)

  expect(component.find(TestModal2).length)
    .toBe(0)
})

test('ModalContainer can show TestModal1', () => {
  const component = shallow(<ModalContainer {...props} modalType='TEST_MODAL_1' />)

  expect(component.find(TestModal1).length)
    .toBe(1)
})

test('ModalContainer can show TestModal2', () => {
  const component = shallow(<ModalContainer {...props} modalType='TEST_MODAL_2' />)

  expect(component.find(TestModal2).length)
    .toBe(1)
})

test('ModalContainer can send modalParams into Modal', () => {
  const component = shallow(<ModalContainer {...props} modalType='TEST_MODAL_1' modalParams={{ id: 3 }} />)

  expect(component.find(TestModal1).length)
    .toBe(1)

  expect(component.find(TestModal1).prop('modalParams'))
    .toEqual({ id: 3 })
})
