import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { LoginButton, FacebookContext } from 'react-facebook'
import { UserContext } from '../contexts/UserContext'
import Modal from './Modal'

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
      title="Ingresar"
      handleClose={handleClose}
    >
        <LoginButton
          onCompleted={handleFBLogin}
          onError={handleFBError}>
          <span className="facebook-login">
            <span className="facebook-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216 216" className="_5h0m" color="#FFFFFF"><path fill="#FFFFFF" d="
            M204.1 0H11.9C5.3 0 0 5.3 0 11.9v192.2c0 6.6 5.3 11.9 11.9
            11.9h103.5v-83.6H87.2V99.8h28.1v-24c0-27.9 17-43.1 41.9-43.1
            11.9 0 22.2.9 25.2 1.3v29.2h-17.3c-13.5 0-16.2 6.4-16.2
            15.9v20.8h32.3l-4.2 32.6h-28V216h55c6.6 0 11.9-5.3
            11.9-11.9V11.9C216 5.3 210.7 0 204.1 0z"></path></svg>
            </span>
            <span className="facebook-login-text">Identificarse con Facebook</span>
          </span>
        </LoginButton>
      <style jsx>{`
        .facebook-login {
          padding: 8px 10px;
          background-color: #4267b2;
          color: #FFFFFF;
          border-radius: 4px;
          font-family: Helvetica, Arial, sans-serif;
          letter-spacing: .25px;
          text-decoration: none;
          font-size: 16px;
          line-height: 24px;
          transition-duration: 300ms;
          transition-timing-function: ease-in-out;
        }
        
        .facebook-login-text {
          padding: 0 14px;
        }
        
        .facebook-icon>svg {
          display: inline-block;
          vertical-align: middle;
          width: 24px;
          height: 24px;
          box-sizing: border-box;
        }
        
        .facebook-login:hover {
          background-color: #365899;
          transition-property: background-color;
          transition-duration: 150ms;
          transition-timing-function: ease-in-out;
        }
        
        .facebook-login:active {
            background-color: #577fbc;
            transition-duration: 40ms;
            transition-property: background-color, box-shadow;
            box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.2);
          }
      `}</style>
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
