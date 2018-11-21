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
            grid-template-columns: 1fr;
            grid-column-gap: 30px;
            grid-row-gap: 35px;
          }
          @media screen and (min-width: 480px) {
            .Grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media screen and (min-width: 1024px) {
            .Grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
        `}</style>
      </div>
    )
  }
}
