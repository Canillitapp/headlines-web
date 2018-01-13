import { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Grid extends PureComponent {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.node),
  }

  static defaultProps = {
    children: [],
  }

  render() {
    const {
      children,
    } = this.props

    return (
      <div className="Grid">
        {children.map(item => <div key={item.key} className="Item">{item}</div>)}
        <style jsx>{`
          .Grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            padding: 20px;
          }
          
          .Item {
            flex: 1;
            flex-basis: 50%;
            padding: 10px;
          }
        `}</style>
      </div>
    )
  }
}
