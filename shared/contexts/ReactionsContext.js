import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const defaultState = {
  articleId: null,
  modalOpen: false,
  cached: [],
  userReactions: [],
}

const ReactionsContext = React.createContext(defaultState)

const ReactionsProvider = ({ children }) => {
  const [state, setState] = useState(defaultState)

  const loadLocalStorage = () => {
    if (typeof localStorage !== 'undefined') {
      try {
        const local = JSON.parse(localStorage.getItem('ReactionsCache'))
        setState(prevState => ({
          ...prevState,
          ...local,
        }))
      } catch (e) {
        // No cache loaded
      }
    }
  }

  const saveLocalStorage = () => {
    if (typeof localStorage !== 'undefined') {
      const { cached, userReactions } = state
      localStorage.setItem('ReactionsCache', JSON.stringify({ cached, userReactions }))
    }
  }

  useEffect(() => { loadLocalStorage() }, []);
  useEffect(() => { saveLocalStorage() }, [state]);

  const addToCache = (id, storyReaction) => {
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

    setState(prevState => ({
      ...prevState,
      cached: reactions,
    }))
  }

  const hasUserReacted = (id, reaction, index = false) => {
    const { userReactions } = state
    const userReactedIndex = userReactions.findIndex(r => r.id === id && r.reaction === reaction)
    if (index) return userReactedIndex
    return userReactedIndex !== -1
  }

  const addUserReaction = (id, reaction) => {
    const userReactions = [...state.userReactions]
    const userReactedIndex = hasUserReacted(id, reaction, true)

    if (userReactedIndex !== -1) {
      // Remove reaction
      userReactions.splice(userReactedIndex, 1)
    }

    if (userReactedIndex === -1) {
      // Add reaction
      userReactions.push({ id, reaction })
    }

    setState(prevState => ({
      ...prevState,
      userReactions,
    }))
  }


  return (
    <ReactionsContext.Provider value={{
      state,
      setState,
      addToCache,
      addUserReaction,
      hasUserReacted,
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
