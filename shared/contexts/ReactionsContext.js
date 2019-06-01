import React, { useState } from 'react'
import PropTypes from 'prop-types'

const defaultState = {
  articleId: null,
  modalOpen: false,
  cached: [],
}

const ReactionsContext = React.createContext(defaultState)

const ReactionsProvider = ({ children }) => {
  const [state, setState] = useState(defaultState)

  console.log('ReactionState', state)

  const addToCache = (id, storyReaction) => {
    console.log('addToCache', id, storyReaction)
    const reactions = [...state.cached]
    const index = reactions.findIndex(e => e.id === id);
    if (index === -1) {
      reactions.push({
        id,
        reactions: storyReaction,
      });
    } else {
      reactions[index] = {
        id,
        reactions: storyReaction,
      };
    }
    console.log('Added To Cache', reactions)
    setState({
      ...state,
      cached: reactions,
    })
  }


  return (
    <ReactionsContext.Provider value={{
      state,
      setState,
      addToCache,
    }}
    >
      {children}
    </ReactionsContext.Provider>
  );
}

ReactionsProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ReactionsContext, ReactionsProvider }
