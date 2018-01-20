import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

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
        <Head>
          <title key="title">Canillita App</title>
          <meta key="viewport" name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header nobutton={nobutton} />
        { this.props.children }
        <GlobalStyles />
      </div>

    )
  }
}
