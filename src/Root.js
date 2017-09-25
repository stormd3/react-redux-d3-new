import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import Routes from './routes'

class Root extends React.Component {
  render() {
    const { store, history } = this.props

    return (
      <Provider store={store}>
        <Routes history={history}/>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root
