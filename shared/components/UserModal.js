import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'
import { LoginButton, FacebookContext } from 'react-facebook'
import { UserContext } from '../contexts/UserContext'

Modal.setAppElement('#__next');

function UserModal({ isOpen }) {
  const [user, setUser] = useContext(UserContext)
  const facebook = useContext(FacebookContext)

  const handleClose = () => {
    setUser({ ...user, loginModal: false })
  }

  const handleLogout = () => {
    facebook.api.logout()
  }

  const handleFBLogin = (data) => {
    if (user.onLoginAddReaction) {
      user.onLoginAddReaction(data.profile.id)
    }

    setUser({
      ...user,
      profile: data.profile,
      tokenDetail: data.tokenDetail,
      loginModal: false,
    })
  }

  const handleFBError = (error) => {
    console.log(error)
  }

  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Login"
      onRequestClose={handleClose}
      className="Modal"
    >
      <span onClick={handleClose}>Close</span>Test
      <LoginButton
        onCompleted={handleFBLogin}
        onError={handleFBError}
      >
        Login with Facebook
      </LoginButton>
      <span onClick={handleLogout}>Logout</span>
    </Modal>
  )
}

UserModal.propTypes = {
  isOpen: PropTypes.bool,
}

UserModal.defaultProps = {
  isOpen: false,
}

export default UserModal;
