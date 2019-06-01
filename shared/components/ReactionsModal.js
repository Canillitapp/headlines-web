import React, { useContext } from 'react';

import PropTypes from 'prop-types';
import reactions from '../../shared/lib/reactions';
import { ReactionsContext } from '../contexts/ReactionsContext'
import { UserContext } from '../contexts/UserContext'
import { addReaction as serviceAddReaction } from '../lib/service.Canillitapp'
import Modal from './Modal'

function ReactionsModal({ isOpen }) {
  const {
    state: reactionsState,
    setState: setReactionsState,
    addToCache,
    addUserReaction,
  } = useContext(ReactionsContext)
  const [user] = useContext(UserContext)

  const handleClose = () => {
    setReactionsState(state => ({
      ...state,
      modalOpen: false,
    }))
  }

  const addReaction = async (reaction) => {
    const updatedStory = await serviceAddReaction(
      reaction,
      user.profile.id,
      reactionsState.articleId,
    )
    addToCache(reactionsState.articleId, updatedStory.reactions)
    addUserReaction(reactionsState.articleId, reaction)
    handleClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      title="Seleccionar Reaccion"
      handleClose={handleClose}
    >
      <div className="ReactionsContainer">
        {reactions.map(r => (
          <span
            key={r}
            role="button"
            tabIndex={0}
            className="Reaction"
            onClick={() => addReaction(r)}
          >
            {r}
          </span>
            ))}
      </div>
      <style jsx>
        {`
            .Reaction {
              text-align: center;
              justify-content: center;
              border: 1px solid #f0f0f0;
              border-radius: 5px;
              padding: 5px 10px;
              display: inline-block;
              font-size: 26px;
              height: 38px;
              line-height: 28px;
              width: 48px;
              cursor: pointer;
            }
            .ReactionsContainer {
              overflow: auto;
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              justify-content: space-between;
              flex-basis: 48px;
              height: 600px;
            }
          `}
      </style>
    </Modal>
  )
}

ReactionsModal.propTypes = {
  isOpen: PropTypes.bool,
}

ReactionsModal.defaultProps = {
  isOpen: false,
}

export default ReactionsModal;
