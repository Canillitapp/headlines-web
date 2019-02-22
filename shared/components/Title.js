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
            font-weight: 400;
            font-size: 32px;
            margin-bottom: 20px;
            text-transform: capitalize;
          }
          @media screen and (min-width: 480px) {
            .Title {
              font-size: 52px;
            }
          }
        `}</style>
      </div>
    )
  }
}
