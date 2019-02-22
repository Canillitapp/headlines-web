import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cc from 'classcat'

export default class Button extends Component {
  static propTypes = {
    children: PropTypes.node,
    softRadius: PropTypes.bool,
    fullWidth: PropTypes.bool,
  }

  static defaultProps = {
    children: null,
    softRadius: false,
    fullWidth: false,
  }

  render() {
    const {
      children,
      softRadius,
      fullWidth,
    } = this.props
    return (

      <button className={cc({ softRadius, fullWidth })}>
        {children}
        <style jsx>{`
          button {
            background: transparent;
            border: 2px solid #FC4B63;
            border-radius: 50px;
            padding: 10px 16px;
            font-size: 12px;
            font-weight: 600;
            color: #FC4B63;
            cursor: pointer;
            outline: 0;
          }
          button.softRadius {
            border-radius: 10px;
          }
          button.fullWidth {
            width: 100%;
          }
        `}
        </style>

      </button>

    )
  }
}
