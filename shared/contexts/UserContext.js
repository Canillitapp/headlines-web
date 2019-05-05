import React, { useState, useContext, useEffect } from 'react'
import { FacebookContext, Profile } from 'react-facebook'

const UserContext = React.createContext([{}, () => {}]);

const UserProvider = (props) => {
  const [initialized, setInitialized] = useState(false)
  const fb = useContext(FacebookContext)
  const [state, setState] = useState({
    profile: null,
    loginModal: false,
  })

  // const a = useContext(Profile)
  // console.log('UserProvider', a)
  useEffect(() => {
    if (!initialized) {
      setInitialized(true)
      console.log('UserProvider -- INIT')
      if (typeof window !== 'undefined') {
        console.log('UserProvider', fb)
      //   fb.getLoginStatus(function(response) {
      //     console.log('FB status changed!', response)
      // });
        // console.log(Profile)
      }
    }

    // console.log('UserProvider-a', a)
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

export { UserContext, UserProvider }
