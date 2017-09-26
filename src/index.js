
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
//import reducer from './reducers'
//import App from './containers/App'
import Root from './Root'
import rootReducer from './reducers/rootReducer'

import Home from './components/containers/Home'
import DashboardOne from './components/containers/DashboardOne'
import LeftBar from './components/presentationals/LeftBar'
import LeftBarSimple from './components/presentationals/LeftBarSimple'
import Routes from './routes'

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
)

render(
  <Provider store={store}>
    <LeftBarSimple />
  </Provider>,
  document.getElementById('app')
)
