import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
  }

  static defaultProps = {
    onClick: null,
    children: null,
  }

  render() {
    const { children } = this.props
    return (
      <button {...this.props}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" /></svg>
        <span>{children}</span>
        <style jsx>{`
          button {
            background: transparent;
            cursor: pointer;
            outline: 0;
            border: 0;
            padding: 5px;
            display: flex;
            align-items: center;
            font-size: 16px;
          }
          svg {
            margin-right: 6px;
          }
        `}
        </style>
      </button>

    )
  }
}
