import { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Container extends PureComponent {
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
      <div className="Container">
        {children}
        <style jsx>{`
          .Container {
            width: 100%;
            padding: 10px;
            box-sizing: border-box;
          }
          @media screen and (min-width: 480px) {
            .Container {
              padding: 20px;
            }
          }
          @media screen and (min-width: 1024px) {
            .Container {
              max-width: 1108px;
            }
          }
        `}</style>
      </div>
    )
  }
}
