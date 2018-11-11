import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Reaction extends Component {
  static propTypes = {
    emoji: PropTypes.string,
    amount: PropTypes.number,
  };

  static defaultProps = {
    emoji: null,
    amount: 0,
  };

  render() {
    const { emoji, amount } = this.props;
    return (
      <div className="Reaction">
        {emoji} {amount}
        <style jsx>
          {`
            .Reaction {
              border: 1px solid #f0f0f0;
              border-radius: 5px;
              padding: 2px 10px;
              display: inline-block;
              font-size: 14px;
              height: 30px;
              line-height: 28px;
              white-space: pre;
            }
          `}
        </style>
      </div>
    );
  }
}
