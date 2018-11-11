import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FacebookProvider, LoginButton } from 'react-facebook';
import AddReactionButton from './AddReactionButton';
import withContext from '../hocs/withContext';

class AddReaction extends Component {
  static propTypes = {
    handleOpenModal: PropTypes.func.isRequired,
    newsId: PropTypes.number.isRequired,
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { state, actions } = this.props;
    return state.userId ? (
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
    );
  }
}

export default withContext(AddReaction);
