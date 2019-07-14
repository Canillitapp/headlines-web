import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Fingerprint2 from 'fingerprintjs2'

const UserContext = React.createContext([{}, () => {}]);

const UserProvider = (props) => {
  const [state, setState] = useState({
    device: null,
    loginModal: false,
  })

  const getDeviceFingerprint = async () => {
    const data = await Fingerprint2.getPromise()
    const values = data.map(component => component.value)
    const fingerprint = Fingerprint2.x64hash128(values.join(''), 31)
    return fingerprint
  }

  const setDeviceFingerprint = async () => {
    const fingerprint = await getDeviceFingerprint()
    setState(currentState => ({
      ...currentState,
      device: {
        id: fingerprint,
      },
    }))
  }

  useEffect(() => {
    if (window.requestIdleCallback) {
      setDeviceFingerprint()
    } else {
      setTimeout(() => {
        setDeviceFingerprint()
      }, 500)
    }
  }, [])

  return (
    <UserContext.Provider value={[state, setState]}>
      {props.children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { UserContext, UserProvider }
