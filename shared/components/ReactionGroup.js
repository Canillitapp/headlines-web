import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Reaction from './Reaction'
import { UserContext } from '../contexts/UserContext'
import { ReactionsContext } from '../contexts/ReactionsContext'
import { addReaction as serviceAddReaction } from '../lib/service.Canillitapp'


function ReactionGroup({ id, reactions }) {
  const [user] = useContext(UserContext)
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
    if (user.device) {
      const updatedStory = await serviceAddReaction(reaction, user.device.id, id)
      addToCache(id, updatedStory.reactions)
      addUserReaction(id, reaction)
    }
  }

  const handleReactionModalOpen = (e) => {
    e.stopPropagation()
    if (user.device) {
      setReactionsState(state => ({
        ...state,
        modalOpen: true,
        articleId: id,
      }))
    }
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
      <Reaction
        emoji={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" style={{ fill: '#c3c3c3' }}><path d="M8.55,3A8.44,8.44,0,1,0,17,11.47,8.43,8.43,0,0,0,8.55,3Zm0,15.5a7.07,7.07,0,1,1,7.06-7.07A7.07,7.07,0,0,1,8.55,18.54Z" /><path d="M9.55,14.9a3.7,3.7,0,0,0,3.56-2.73.78.78,0,0,0-.77-1H6.75a.78.78,0,0,0-.77,1A3.71,3.71,0,0,0,9.55,14.9Z" /><path d="M19.4,2.35H17.63V.58a.5.5,0,0,0-.14-.35.48.48,0,0,0-.34-.14h-.33a.48.48,0,0,0-.48.48V2.35H14.55a.48.48,0,0,0-.46.48v.35a.49.49,0,0,0,.46.46h1.76V5.4a.55.55,0,0,0,.14.37.5.5,0,0,0,.37.14h.33a.49.49,0,0,0,.49-.48V3.64H19.4a.49.49,0,0,0,.49-.46V2.83A.48.48,0,0,0,19.4,2.35Z" /><circle cx="6.73" cy="8.7" r="1.29" /><circle cx="12.65" cy="8.7" r="1.29" /></svg>
      }
        amount={null}
        onClick={handleReactionModalOpen}
      />
      <style jsx>{`
        .ReactionGroup {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
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
