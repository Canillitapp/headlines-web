import React, { useState } from 'react'
import PropTypes from 'prop-types'

const ReactionsContext = React.createContext([{}, () => {}]);

const ReactionsProvider = ({ children }) => {
  const [state, setState] = useState({
    articleId: null,
    modalOpen: false,
  });

  return (
    <ReactionsContext.Provider value={[state, setState]}>
      {children}
    </ReactionsContext.Provider>
  );
}

ReactionsProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ReactionsContext, ReactionsProvider }
