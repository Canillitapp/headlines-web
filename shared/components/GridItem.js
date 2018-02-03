import { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Grid extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  }

  static defaultProps = {
    children: <div />,
  }

  render() {
    const {
      children,
    } = this.props

    return (
      <div className="GridItem">
        {children}
        <style jsx>{`
          .GridItem {
            padding: 10px;
            display: flex;
          }
        `}</style>
      </div>
    )
  }
}
