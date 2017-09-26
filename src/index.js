//import { browserHistory } from 'react-router'
//import { syncHistoryWithStore } from 'react-router-redux'
import ReactDOM from 'react-dom'
import React from 'react'

import Root from './Root'
import configureStore from './store/configureStore'

// const store = configureStore(browserHistory)
const store = configureStore()

//const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(<Root store={store} />, document.getElementById('app'))
