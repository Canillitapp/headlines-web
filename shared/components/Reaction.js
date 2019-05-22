import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Reaction extends Component {
  static propTypes = {
    emoji: PropTypes.string,
    amount: PropTypes.number,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    emoji: '',
    amount: 0,
    onClick: () => {},
  }

  render() {
    const { emoji, amount, onClick } = this.props
    return (
      <div className="Reaction" onClick={onClick} role="button">
        {emoji} {amount}
        <style jsx>{`
          .Reaction {
            border: 1px solid #F0F0F0;
            border-radius: 5px;
            padding: 2px 10px;
            display: inline-block;
            font-size: 14px;
            margin-right: 5px;
          }
        `}
        </style>
      </div>

    )
  }
}
