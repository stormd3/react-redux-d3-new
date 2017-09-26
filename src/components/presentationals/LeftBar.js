import React from 'react'
import PropTypes from 'prop-types'

import { Nav, NavItem } from 'react-bootstrap'

const LeftBar = ({ pathname }) => (
  <Nav bsStyle="pills" stacked>
    <NavItem eventKey={1} active={pathname === '/'} >Home</NavItem>
    <NavItem eventKey={2} active={pathname === '/dashboard-one'} >Dashboard1</NavItem>
    <NavItem eventKey={3} active={pathname === '/dashboard-two'} >Dashboard2</NavItem>
  </Nav>
)

LeftBar.propTypes = {
  pathname: PropTypes.string.isRequired
}

export default LeftBar
