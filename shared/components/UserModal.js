import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { LoginButton } from 'react-facebook'
import { UserContext } from '../contexts/UserContext'
import Modal from './Modal'

function UserModal({ isOpen }) {
  const [user, setUser] = useContext(UserContext)

  const handleClose = () => {
    setUser({ ...user, loginModal: false })
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
      title="Necesitamos que te loguees"
      description="Para que puedas reaccionar con emojis en las noticias necesitamos saber quién sos."
      icon={
        <svg width="16" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.29 8.002h-.373v-1.74c0-3.22-2.554-5.91-5.748-5.967a12.929 12.929 0 0 0-.349 0C4.627.353 2.072 3.042 2.072 6.262v1.74H1.7c-.573 0-1.04.592-1.04 1.322v8.731c0 .73.467 1.327 1.04 1.327h12.59c.573 0 1.04-.597 1.04-1.327v-8.73c0-.731-.467-1.323-1.04-1.323zm-5.116 5.679v2.638a.563.563 0 0 1-.555.558H7.371a.563.563 0 0 1-.556-.558V13.68a1.57 1.57 0 0 1-.464-1.13c0-.836.647-1.555 1.47-1.588.087-.004.261-.004.348 0 .822.033 1.47.752 1.47 1.589 0 .441-.172.84-.465 1.129zm2.292-5.679H4.523v-1.74c0-1.918 1.559-3.504 3.472-3.504 1.912 0 3.471 1.586 3.471 3.504v1.74z"
            fill="#005CFF"
            fillRule="nonzero"
          />
        </svg>
      }
      handleClose={handleClose}
    >
      <div>
        <LoginButton
          onCompleted={handleFBLogin}
          onError={handleFBError}
        >
          <span className="facebook-login">
            <span className="facebook-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216 216" className="_5h0m" color="#FFFFFF"><path
              fill="#FFFFFF"
              d="
              M204.1 0H11.9C5.3 0 0 5.3 0 11.9v192.2c0 6.6 5.3 11.9 11.9
              11.9h103.5v-83.6H87.2V99.8h28.1v-24c0-27.9 17-43.1 41.9-43.1
              11.9 0 22.2.9 25.2 1.3v29.2h-17.3c-13.5 0-16.2 6.4-16.2
              15.9v20.8h32.3l-4.2 32.6h-28V216h55c6.6 0 11.9-5.3
              11.9-11.9V11.9C216 5.3 210.7 0 204.1 0z"
            ></path></svg>
            </span>
            <span className="facebook-login-text">Identificarse con Facebook</span>
          </span>
        </LoginButton>
      </div>
      <style jsx>{`
        .facebook-login {
          display: inline-block;
          padding: 14px 10px;
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
