import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

Modal.setAppElement('#__next')

const ModalTemplate = ({
  children, title, isOpen, handleClose, description, icon,
}) => (
  <Modal
    isOpen={isOpen}
    contentLabel={title}
    onRequestClose={handleClose}
    shouldFocusAfterRender={false}
    className="Modal"
    style={{
        overlay: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        // content: {
        // }
      }}
  >
    <div className="ModalContainer">
      <div className="ModalHeader">
        <span className="icon">
          <div className="iconAlign">{icon}</div>
        </span>
        <button className="close" onClick={handleClose}>
          <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.938 10.994l8.646-8.646A1.374 1.374 0 1 0 19.64.403L10.994 9.05 2.347.403A1.374 1.374 0 1 0 .403 2.348l8.646 8.646L.403 19.64a1.374 1.374 0 1 0 1.944 1.943l8.647-8.646 8.646 8.646a1.37 1.37 0 0 0 1.944 0 1.374 1.374 0 0 0 0-1.944l-8.646-8.645z"
              fill="#B3B3B3"
              fillRule="nonzero"
            />
          </svg>
        </button>
        <h3 className="title">{title}</h3>
        <p>{description}</p>
      </div>
      <div className="ModalContent">
        {children}
      </div>
      <style jsx>
        {`
          :global(.ReactModal__Body--open) {
            overflow: hidden;
          }

          :global(.Modal) {
            background: white;
            border: 1px solid #F0F0F0;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 20px 20px -14px rgba(0,0,0,0.25);

            max-width: 540px;
            min-width: 320px;
            max-height: 90%;
            margin: 0 20px;
            overflow: hidden;
          }

          .icon {
            background-color: #EDEDED;
            width: 60px;
            height: 60px;
            border-radius: 60px; 
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
          }

          .iconAlign {
            font-size: 30px;
            line-height: 1px;
          }

          .ModalContent {
            margin: 30px 0;
            max-height: 400px;
            overflow: auto;
          }

          .ModalHeader {
            position: relative;
          }

          .ModalHeader .close {
            background: transparent;
            position: absolute;
            font-size: 20px;
            cursor: pointer;
            top: 0;
            right: 0;
          }

          .ModalHeader .title {
            flex-grow: 1;
          }

          .ModalHeader p {
            margin-top: 10px;
            color: #82899E;
          }
        `}
      </style>
    </div>
  </Modal>
)


ModalTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
  description: PropTypes.string,
  icon: PropTypes.any,
}

ModalTemplate.defaultProps = {
  title: '',
  isOpen: false,
  handleClose: () => {},
  description: '',
  icon: '',
}

export default ModalTemplate
