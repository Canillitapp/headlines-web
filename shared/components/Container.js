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
            padding: 5px;
          }
          @media screen and (min-width: 480px) {
            .Container {
              padding: 20px;
            }
          }
          @media screen and (min-width: 1024px) {
            .Container {
              max-width: 1440px;
            }
          }
        `}</style>
      </div>
    )
  }
}