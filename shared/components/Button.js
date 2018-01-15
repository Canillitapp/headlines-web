import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Button extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  static defaultProps = {
    children: null,
  }

  render() {
    const { children } = this.props
    return (

      <button>
        {children}
        <style jsx>{`
          button {
            background: transparent;
            border: 1px solid #FC4B63;
            border-radius: 50px;
            padding: 10px 20px;
            text-transform: uppercase;
            font-size: 14px;
            font-weight: 600;
            color: #FC4B63;
            cursor: pointer;
          }
        `}
        </style>

      </button>

    )
  }
}
