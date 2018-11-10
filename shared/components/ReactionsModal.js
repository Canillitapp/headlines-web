import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ReactionGroup extends Component {
  static propTypes = {
    handleCloseModal: PropTypes.func.isRequired,
  };

  onClose = () => {
    this.props.handleCloseModal();
  };

  render() {
    return (
      <div className="Modal">
        Modal
        <span role="button" onClick={this.onClose} tabIndex={0}>
          Close
        </span>
        <style jsx>
          {`
            .Modal {
              margin-top: 10px;
              display: flex;
            }
          `}
        </style>
      </div>
    );
  }
}
