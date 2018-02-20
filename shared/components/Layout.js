import React, { Component } from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'

import Header from './Header'
import GlobalStyles from './GlobalStyles'

const ProgressBar = dynamic(import('./Progress'), {
  ssr: false,
  loading: () => null,
})


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

      <div className="Layout">
        <ProgressBar />
        <Header nobutton={nobutton} />
        { this.props.children }
        <GlobalStyles />
      </div>

    )
  }
}
