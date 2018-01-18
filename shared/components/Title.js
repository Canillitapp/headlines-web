import { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Title extends PureComponent {
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
      <div className="Title">
        {children}
        <style jsx>{`
          .Title {
            font-weight: 600;
            font-size: 42px;
            margin-bottom: 20px;
          }
          @media screen and (min-width: 480px) {
            .Title {
              font-size: 52px;
            }
          }
          @media screen and (min-width: 1024px) {
            .Title {
              // flex-basis: 33%;
            }
          }
        `}</style>
      </div>
    )
  }
}
