import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Profile } from 'react-facebook'

const UserContext = React.createContext([{}, () => {}]);

const UserProvider = (props) => {
  // const [initialized, setInitialized] = useState(false)
  const [state, setState] = useState({
    profile: null,
    loginModal: false,
  })

  return (
    <UserContext.Provider value={[state, setState]}>
      <Profile>
        {({ profile }) => {
            if (profile !== state.profile) {
              setState({ ...state, profile })
            }
            return []
          }}
      </Profile>
      {props.children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { UserContext, UserProvider }
