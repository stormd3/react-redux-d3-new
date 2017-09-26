import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { generateRandomData } from '../../actionCreators/data'

import LeftBar from '../presentationals/LeftBar'
import TopBar from '../presentationals/TopBar'

class Home extends React.Component {
  render() {
    const { children, handleRefresh } = this.props

    return (
      <div>
        <div className="top-bar">
          <TopBar handleRefresh={handleRefresh}/>
        </div>
        <div className="left-bar">
          <div className="fixed-left-bar">
            <LeftBar/>
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
  handleRefresh: PropTypes.func.isRequired,
  children: PropTypes.node
}

export default connect(
  state => ({
    data: state.data
  }),
  dispatch => ({
    handleRefresh: () => dispatch(generateRandomData())
  })
)(Home)
