import { createStore, applyMiddleware } from 'redux'
//import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import rootReducer from '../reducers/rootReducer'

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

export default function configureStore() {
  // thunkMiddleware is not useful here because we do not have async action
  return createStore(
    rootReducer,
    applyMiddleware(...middleware)
  )
}
