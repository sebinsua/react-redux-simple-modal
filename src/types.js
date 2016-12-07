/* @flow */
import type { Component, Element } from 'react'
import type { Dispatch as ReduxDispatch, ActionCreator as ReduxActionCreator } from 'redux'
import type { Connector as ReactReduxConnector } from 'react-redux'

// React
type FunctionComponent<P> = (props: P) => ?Element<any>
type ClassComponent<D, P, S> = Class<Component<D, P, S>>
type ReactComponent<D, P, S> = FunctionComponent<P> | ClassComponent<D, P, S>

// Misc
type KeyValueObject = { [key: string]: any }

// Reducer
type ModalsReducerState = {
  modalType: ?string,
  modalParams: KeyValueObject
}

// Actions
type FluxStandardAction<T, P> = {
  type: string,
  error?: boolean,
  payload?: P
}
type OpenModalAction = FluxStandardAction<'@simple-modal/OPEN', {
  modalType: string,
  modalParams: KeyValueObject
}>
type CloseModalAction = FluxStandardAction<'@simple-modal/CLOSE', void>
type DestroyModalsAction = FluxStandardAction<'@simple-modal/DESTROY', void>
type ModalActions = OpenModalAction | CloseModalAction | DestroyModalsAction

export type {
  ModalsReducerState,
  ModalActions,
  OpenModalAction,
  CloseModalAction,
  DestroyModalsAction,
  KeyValueObject,
  ReactComponent,
  ReduxDispatch,
  ReduxActionCreator,
  ReactReduxConnector
}
