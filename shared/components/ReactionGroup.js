import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Reaction from './Reaction'
import { UserContext } from '../contexts/UserContext'
import { ReactionsContext } from '../contexts/ReactionsContext'
import { addReaction as serviceAddReaction } from '../lib/service.Canillitapp'


function ReactionGroup({ id, reactions }) {
  const [user, setUser] = useContext(UserContext)
  const {
    state: reactionsState,
    setState: setReactionsState,
    addToCache,
    addUserReaction,
    hasUserReacted,
  } = useContext(ReactionsContext)

  const cacheReactions = reactionsState.cached.find(reaction =>
    reaction.id === id)

  let parsedReactions = reactions

  if (cacheReactions) {
    parsedReactions = cacheReactions.reactions
  }


  const orderByAmount = (a, b) => {
    if (a.amount < b.amount) {
      return 1
    }
    if (a.amount > b.amount) {
      return -1
    }
    return 0
  }
  const ordered = parsedReactions.sort(orderByAmount)

  const addReaction = async (reaction) => {
    if (user.profile) {
      const updatedStory = await serviceAddReaction(reaction, user.profile.id, id)
      addToCache(id, updatedStory.reactions)
      addUserReaction(id, reaction)
      return
    }
    setUser({
      ...user,
      loginModal: true,
      onLoginAddReaction: async (userId) => {
        const updatedStory = await serviceAddReaction(reaction, userId, id)
        addToCache(id, updatedStory.reactions)
        addUserReaction(id, reaction)
      },
    })
  }

  const handleReactionModalOpen = (e) => {
    e.stopPropagation()
    if (user.profile) {
      setReactionsState(state => ({
        ...state,
        modalOpen: true,
        articleId: id,
      }))
      return
    }

    setUser({
      ...user,
      loginModal: true,
      onLoginAddReaction: async () => {
        setReactionsState(state => ({
          ...state,
          modalOpen: true,
        }))
      },
    })
  }

  return (
    <div className="ReactionGroup">
      { ordered.map(({ reaction, amount }) => (
        <Reaction
          key={reaction}
          emoji={reaction}
          amount={amount}
          active={hasUserReacted(id, reaction)}
          onClick={(e) => {
            e.stopPropagation();
            addReaction(reaction)
          }}
        />
      ))}
      <Reaction emoji="➕" amount={null} onClick={handleReactionModalOpen} />
      <style jsx>{`
        .ReactionGroup {
          margin-top: 10px;
        }

        // .ReactionGroup :global(div) {
        //   margin-right: 5px;
        // }
      `}
      </style>
    </div>
  )
}

ReactionGroup.propTypes = {
  id: PropTypes.number.isRequired,
  reactions: PropTypes.array,
}

ReactionGroup.defaultProps = {
  reactions: [],
}

export default ReactionGroup
