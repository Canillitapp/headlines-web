import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import GlobalStyles from './GlobalStyles'

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    nobutton: PropTypes.bool,
  }

  static defaultProps = {
    nobutton: false,
  }
  render() {
    const { nobutton } = this.props
    return (

      <div>
        <Header nobutton={nobutton} />
        { this.props.children }
        <GlobalStyles />
      </div>

    )
  }
}
