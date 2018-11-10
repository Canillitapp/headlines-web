import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FacebookProvider, LoginButton } from 'react-facebook';

export default class AddReaction extends Component {
  static propTypes = {
    handleOpenModal: PropTypes.func.isRequired,
  };

  handleResponse = () => {
    this.props.handleOpenModal();
  };

  render() {
    return (
      <FacebookProvider appId="2128983184030816">
        <LoginButton scope="email" onCompleted={this.handleResponse}>
          <div className="AddReaction" onClick={this.onAddReactionClick} role="button" tabIndex={0}>
            <img src="/static/add-reaction.svg" alt="Add Reaction" />
            <style jsx>
              {`
                .AddReaction {
                  border: 1px solid #f0f0f0;
                  border-radius: 5px;
                  padding: 3px 10px;
                  display: inline-block;
                  height: 30px;
                }
              `}
            </style>
          </div>
        </LoginButton>
      </FacebookProvider>
    );
  }
}
