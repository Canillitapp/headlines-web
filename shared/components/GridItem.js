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
            flex: 1;
            flex-basis: 100%;
            padding: 10px;
            display: flex;
          }
          @media screen and (min-width: 480px) {
            .GridItem {
              flex-basis: 50%;
            }
          }
          @media screen and (min-width: 1024px) {
            .GridItem {
              flex-basis: 33%;
            }
          }
        `}</style>
      </div>
    )
  }
}
