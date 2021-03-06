import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cc from 'classcat'

export default class Reaction extends Component {
  static propTypes = {
    emoji: PropTypes.any,
    amount: PropTypes.number,
    active: PropTypes.bool,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    emoji: '',
    amount: 0,
    active: false,
    onClick: () => {},
  }

  render() {
    const {
      emoji, amount, onClick, active,
    } = this.props
    return (
      <div className={cc(['Reaction', { active }])} onClick={onClick} role="button" tabIndex={0}>
        <div className="ReactionData">{emoji} {amount}</div>
        <style jsx>{`
          .Reaction {
            border: 1px solid #F0F0F0;
            border-radius: 5px;
            margin-top: 10px;
            padding: 2px 10px;
            font-size: 14px;
            margin-right: 5px;
            user-select: none;
            vertical-align: bottom;
            cursor: pointer;

            display: flex;
            justify-content: center;
            flex-direction: column;
            
          }
          .active {
            border: 1px solid #FF6473;
          }
        `}
        </style>
      </div>

    )
  }
}
