import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FacebookProvider, LoginButton } from 'react-facebook';
import { ContextConsumer } from '../../shared/components/ContextProvider';
import AddReactionButton from './AddReactionButton';

export default class AddReaction extends Component {
  static propTypes = {
    handleOpenModal: PropTypes.func.isRequired,
    newsId: PropTypes.number.isRequired,
  };

  render() {
    return (
      <ContextConsumer>
        {({ state, actions }) =>
          (state.userId ? (
            <AddReactionButton
              handleClick={() => {
                actions.setNewsId(this.props.newsId);
                this.props.handleOpenModal();
              }}
            />
          ) : (
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
                <AddReactionButton handleClick={() => {}} />
              </LoginButton>
            </FacebookProvider>
          ))
        }
      </ContextConsumer>
    );
  }
}
