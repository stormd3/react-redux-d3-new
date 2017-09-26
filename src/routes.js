import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import PropTypes from 'prop-types'

import Home from './components/containers/Home'
import DashboardZero from './components/containers/DashboardZero'
import DashboardOne from './components/containers/DashboardOne'
import DashboardTwo from './components/containers/DashboardTwo'

class Routes extends React.Component {
  constructor() {
    super()

    // Configure routes here as this solves a problem with hot loading where
    // the routes are recreated each time. (Not useful here because we do not have ho reloading)
    this.routes = (
      <Route path="/" component={Home}>
        <Route component={DashboardZero} />
        <Route path="dashboard-one" component={DashboardOne}/>
        <Route path="dashboard-two" component={DashboardTwo}/>
      </Route>
    )
  }

  render() {
    return (
      <Router>
        {this.routes}
      </Router>
    )
  }
}

export default Routes
