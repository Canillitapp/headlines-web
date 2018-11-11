import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FacebookProvider, LoginButton } from 'react-facebook';
import { ContextConsumer } from '../../shared/components/ContextProvider';

export default class AddReaction extends Component {
  static propTypes = {
    handleOpenModal: PropTypes.func.isRequired,
    newsId: PropTypes.number.isRequired,
  };

  render() {
    return (
      <ContextConsumer>
        {({ actions }) => (
          <FacebookProvider appId="2128983184030816">
            <LoginButton
              role="button"
              tabIndex={0}
              className="LoginButton"
              scope="email"
              onCompleted={(data) => {
                if (data.profile.id) {
                  actions.setNewsId(this.props.newsId);
                  actions.setUserId(data.profile.id);
                  this.props.handleOpenModal();
                }
              }}
            >
              <div className="AddReaction">
                <img src="/static/add-reaction.svg" alt="Add Reaction" />
                <style jsx>
                  {`
                    :global(.LoginButton) {
                      background-color: #fff;
                    }
                    .AddReaction {
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
            </LoginButton>
          </FacebookProvider>
        )}
      </ContextConsumer>
    );
  }
}
