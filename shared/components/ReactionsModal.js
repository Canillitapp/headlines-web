import React, { useContext } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import reactions from '../../shared/lib/reactions';
import { ReactionsContext } from '../contexts/ReactionsContext'
import { UserContext } from '../contexts/UserContext'
import { addReaction as serviceAddReaction } from '../lib/service.Canillitapp';

Modal.setAppElement('#__next');

function ReactionsModal({ isOpen }) {
  const [reactionsState, setReactionsState] = useContext(ReactionsContext)
  const [user, setUser] = useContext(UserContext)

  const handleClose = () => {
    setReactionsState({
      ...reactionsState,
      modalOpen: false,
      articleId: null,
    })
  }

  const addReaction = async (reaction) => {
    await serviceAddReaction(reaction, user.profile.id, reactionsState.articleId)
    handleClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Login"
      onRequestClose={handleClose}
      className="Modal"
    >
      <div className="ModalHeader">
        <span onClick={handleClose} className="close" role="button" tabIndex={0} role="button">
            ✕
        </span>
        <h3 className="title">Reacciones</h3>
      </div>
      <div className="ModalBody">
        <div className="ReactionsContainer">
          {reactions.map(r => (
            <span
              key={r}
              role="button"
              tabIndex={0}
              className="Reaction"
              onClick={() => addReaction(r)}
              role="button"
            >
              {r}
            </span>
            ))}
        </div>
      </div>
      <style jsx>
        {`
            :global(.Modal) {
              position: absolute;
              border: 1px solid rgb(204, 204, 204);
              background: rgb(255, 255, 255);
              overflow: auto;
              border-radius: 4px;
              outline: none;
              top: 20px;
              bottom: 20px;
              left: 20px;
              right: 20px;
              padding: 20px 7px;
            }
            @media screen and (min-width: 1024px) {
              :global(.Modal) {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                right: auto;
                bottom: auto;
                width: 625px;
                max-height: 500px;
              }
            }
            .ModalBody {
              padding: 20px 0;
            }
            .ModalHeader {
              display: flex;
            }
            .ModalHeader .close {
              position: absolute;
              top: 20px;
              left: 20px;
              font-size: 20px;
            }
            .ModalHeader .title {
              flex-grow: 1;
              text-align: center;
            }
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
            }
            .ReactionsContainer {
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
