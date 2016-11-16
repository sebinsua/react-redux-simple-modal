# `react-redux-simple-modal`
> A simple modal for React.

## Install

```sh
npm install --save react-redux-simple-modal
```

## Example

```js
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { ModalSwitcher, openModal } from 'react-redux-simple-modal'

import ExampleModal from './ExampleModal'
import OtherExampleModal from './OtherExampleModal'
import { EXAMPLE_MODAL, OTHER_EXAMPLE_MODAL } from './constants'

const ExamplePage = ({ openModal }) => (
  <div className="example-page">
    <ModalSwitcher
      modals={{
        [EXAMPLE_MODAL]: ExampleModal,
        [OTHER_EXAMPLE_MODAL]: OtherExampleModal
      }}
    />
    <button onClick={openModal.bind(null, EXAMPLE_MODAL)}>Open Example Modal</button>
    <button onClick={openModal.bind(null, OTHER_EXAMPLE_MODAL)}>Open Other Example Modal</button>
  </div>
)

ExamplePage.propTypes = {
  openModal: PropTypes.func.isRequired
}

export default connect(
  null,
  { openModal }
)(ExamplePage)
```
