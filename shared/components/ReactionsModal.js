import React, { Component } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import reactions from '../../shared/lib/reactions';

export default class ReactionGroup extends Component {
  static propTypes = {
    handleCloseModal: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    ReactModal.setAppElement('#__next');
  }

  render() {
    return (
      <ReactModal isOpen={this.props.isOpen} contentLabel="Reactions Modal" className="Modal">
        <div className="ModalHeader">
          <span onClick={this.props.handleCloseModal} className="close" role="button" tabIndex={0}>
            ✕
          </span>
          <h3 className="title">Reacciones</h3>
        </div>
        <div className="ModalBody">
          <div className="ReactionsContainer">
            {reactions.map(r => (
              <span className="Reaction">{r}</span>
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
                padding: 20px;
                top: 50%;
                left: 50%;
                margin: 0 auto;
                max-height: 500px;
                transform: translate(-50%, -50%);
                width: 678px;
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
              justify-content: center;
              border: 1px solid #f0f0f0;
              border-radius: 5px;
              padding: 5px 10px;
              display: inline-block;
              font-size: 26px;
              height: 38px;
              line-height: 28px;
              margin-right: 5px;
              margin-bottom: 5px;
              max-width: 48px;
            }

            .ReactionsContainer {
              display: flex;
              flex-wrap: wrap;
            }
          `}
        </style>
      </ReactModal>
    );
  }
}
