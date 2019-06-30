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
    noNav: PropTypes.bool,
  }

  static defaultProps = {
    nobutton: false,
    noNav: false,
  }
  render() {
    const { nobutton, noNav } = this.props
    return (

      <div className="Layout">
        <ProgressBar />
        <Header nobutton={nobutton} noNav={noNav} />
        { this.props.children }
        <GlobalStyles />
        <style jsx>{`
          .Layout {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `}</style>
      </div>

    )
  }
}
