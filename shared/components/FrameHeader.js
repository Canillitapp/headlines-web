import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class FrameHeader extends Component {
  static propTypes = {
    sourcename: PropTypes.string,
    onClose: PropTypes.func,
  }

  static defaultProps = {
    sourcename: 'La Nacion',
    onClose: () => {},
  }

  render() {
    const { onClose, sourcename } = this.props
    return (

      <header>
        <div className="left">
          <button onClick={onClose}>X</button>
        </div>
        <span>{sourcename}</span>
        <style jsx>{`
          header {
            background: #F9FAFC;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
          }
          
          .left {
            position: absolute;
            top: 0;
            left: 0;
            padding-left: 10px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          button {
            border: 1px solid #EF8981;
            height: 42px;
            width: 42px;
            display: block;
            border-radius: 42px;
            background: transparent;
            font-size: 18px;
            text-align: center;
          }
        `}
        </style>

      </header>

    )
  }
}
