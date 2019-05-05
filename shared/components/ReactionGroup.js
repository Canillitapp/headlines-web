import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Reaction from './Reaction'
import { UserContext } from '../contexts/UserContext'
import { addReaction as serviceAddReaction } from '../lib/service.Canillitapp'


function ReactionGroup({ id, reactions }) {
  const [user, setUser] = useContext(UserContext)
  const orderByAmount = (a, b) => {
    if (a.amount < b.amount) {
      return 1
    }
    if (a.amount > b.amount) {
      return -1
    }
    return 0
  }
  const ordered = reactions.sort(orderByAmount)

  const addReaction = async (reaction) => {
    if (user.profile) {
      await serviceAddReaction(reaction, user.profile.id, id)
      return
    }
    setUser({
      ...user,
      loginModal: true,
      onLoginAddReaction: async (userId) => {
        console.log('Add reaction after login', reaction, userId, id)
        await serviceAddReaction(reaction, userId, id)
      },
    })
  }

  const handleReactionModalOpen = () => {
    // TODO: Open modal or Login
  }

  return (
    <div className="ReactionGroup">
      { ordered.map(({ reaction, amount }) => (
        <Reaction
          key={reaction}
          emoji={reaction}
          amount={amount}
          onClick={() => { addReaction(reaction) }}
        />
      ))}
      <Reaction emoji="➕" amount={null} onClick={handleReactionModalOpen} />
      <style jsx>{`
        .ReactionGroup {
          margin-top: 10px;
        }

        .ReactionGroup :global(div) {
          margin-right: 5px;
        }
      `}
      </style>
    </div>
  )
}

ReactionGroup.propTypes = {
  id: PropTypes.number,
  reactions: PropTypes.array,
}

ReactionGroup.defaultProps = {
  reactions: [],
}

export default ReactionGroup
