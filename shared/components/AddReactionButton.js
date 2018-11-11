import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddReactionButton extends Component {
  static propTypes = {
    handleClick: PropTypes.func.isRequired,
  };
  render() {
    return (
      <div
        className="AddReactionButton"
        onClick={this.props.handleClick}
        role="button"
        tabIndex={0}
      >
        <img src="/static/add-reaction.svg" alt="Add Reaction" />
        <style jsx>
          {`
            .AddReactionButton {
              border: 1px solid #f0f0f0;
              border-radius: 5px;
              padding: 3px 10px;
              display: inline-block;
              height: 30px;
              background-color: #fff;
              cursor: pointer;
            }
          `}
        </style>
      </div>
    );
  }
}
