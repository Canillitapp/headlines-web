import React, { useState } from 'react';

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

export { ReactionsContext, ReactionsProvider }
