import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func,
  }

  static defaultProps = {
    onClick: null,
  }

  render() {
    return (
      <button {...this.props}>
        <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
        <style jsx>{`
          button {
            background: transparent;
            cursor: pointer;
            outline: 0;
            border: 0;
            display: flex;
            align-items: center;
            font-size: 16px;
          }

          svg {
            margin: 6px 0px 16px 6px;
          }
        `}
        </style>
      </button>

    )
  }
}
