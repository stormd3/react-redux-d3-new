import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { generateRandomData } from '../../actionCreators/data'

import LeftBar from '../presentationals/LeftBar'
import TopBar from '../presentationals/TopBar'

class Home extends React.Component {
  render() {
    const { children, routing, handleRefresh } = this.props

    return (
      <div>
        <div className="top-bar">
          <TopBar handleRefresh={handleRefresh}/>
        </div>
        <div className="left-bar">
          <div className="fixed-left-bar">
            <LeftBar pathname={routing.locationBeforeTransitions.pathname}/>
          </div>
        </div>
        <div className="right-content">
          {children}
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  data: PropTypes.object.isRequired,
  routing: PropTypes.object.isRequired,
  handleRefresh: PropTypes.func.isRequired,
  children: PropTypes.node
}

export default connect(
  state => ({
    data: state.data,
    routing: state.routing
  }),
  dispatch => ({
    handleRefresh: () => dispatch(generateRandomData())
  })
)(Home)
