import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Reaction from './Reaction'

export default class ReactionGroup extends Component {
  static propTypes = {
    reactions: PropTypes.array,
  }

  static defaultProps = {
    reactions: [],
  }

  orderByAmount = (a, b) => {
    if (a.amount < b.amount) {
      return 1
    }
    if (a.amount > b.amount) {
      return -1
    }
    return 0
  }

  render() {
    const { reactions } = this.props
    const ordered = reactions.sort(this.orderByAmount)

    return (
      <div className="ReactionGroup">
        { ordered.map(({ reaction, amount }) => (
          <Reaction key={reaction} emoji={reaction} amount={amount} />
        ))}
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
}
