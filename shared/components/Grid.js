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
      <div className="Grid">
        {children}
        <style jsx>{`
          .Grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
            grid-gap: 30px;
          }
        `}</style>
      </div>
    )
  }
}
