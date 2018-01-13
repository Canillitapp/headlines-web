import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    return (

      <div>

        { this.props.children }
        <style jsx global>{`
          * {
            margin: 0;
            padding: 0;
            border: 0;
            list-style: none;
            box-sizing: border-box;
          }

          body {
            background: #F9FAFC;
          }
        `}
        </style>

      </div>

    )
  }
}
