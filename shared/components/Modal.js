import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

Modal.setAppElement('#__next')

const ModalTemplate = ({
  children, title = '', isOpen, handleClose,
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
        <span
          onClick={handleClose}
          className="close"
          role="button"
          tabIndex={0}
        >
        x
        </span>
        <h3 className="title">{title}</h3>
      </div>
      <div className="ModalContent">
        {children}
      </div>
      <style jsx>
        {`
          :global(.Modal) {
            background: white;
            border: 1px solid #F0F0F0;
            border-radius: 5px;
            padding: 10px;
            box-shadow: 0 20px 20px -14px rgba(0,0,0,0.25);

            max-width: 90%;
            min-width: 320px;
            max-height: 90%;
            overflow: hidden;
          }
            .ModalContent {
              padding: 20px 0;
            }
            .ModalHeader {
              display: flex;
              position: relative;
            }
            .ModalHeader .close {
              position: absolute;
              font-size: 20px;
              cursor: pointer;
            }
            .ModalHeader .title {
              flex-grow: 1;
              text-align: center;
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
}

ModalTemplate.defaultProps = {
  title: '',
  isOpen: false,
  handleClose: () => {},
}

export default ModalTemplate
