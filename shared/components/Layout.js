import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'
import { UserContext } from '../contexts/UserContext'
import { ReactionsContext } from '../contexts/ReactionsContext'
import UserModal from './UserModal'
import ReactionsModal from './ReactionsModal'

import Header from './Header'
import GlobalStyles from './GlobalStyles'

const ProgressBar = dynamic(import('./Progress'), {
  ssr: false,
  loading: () => null,
})

function Layout({ children, nobutton, noNav }) {
  const [userState] = useContext(UserContext)
  const [reactionsState] = useContext(ReactionsContext)

  return (
    <div className="Layout">
      <ProgressBar />
      <Header nobutton={nobutton} noNav={noNav} />
      { children }
      <UserModal isOpen={userState.loginModal} />
      <ReactionsModal isOpen={reactionsState.modalOpen} />
      <GlobalStyles />
      <style jsx>{`
        .Layout {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  nobutton: PropTypes.bool,
  noNav: PropTypes.bool,
}

Layout.defaultProps = {
  nobutton: false,
  noNav: false,
}

export default Layout
