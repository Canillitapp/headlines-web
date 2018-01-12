import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { format as dateFormat } from 'date-fns'

export default class Header extends PureComponent {
  static propTypes = {
    keyword: PropTypes.string,
    amount: PropTypes.number,
    title: PropTypes.string,
    date: PropTypes.number,
    sourcename: PropTypes.string,
    img: PropTypes.string,
  }

  static defaultProps = {
    keyword: null,
    title: '',
    date: null,
    sourcename: '',
    amount: null,
    img: '',
  }

  render() {
    const {
      keyword,
      amount,
      title,
      date,
      sourcename,
      img,
    } = this.props

    return (
      <div className="Card" {...this.props}>
        <div className="picture">
          { amount &&
            <div className="amount">{amount} Noticias</div>
          }
          { keyword &&
            <div className="keyword">{keyword}</div>
          }
        </div>
        <div className="content">
          <h3>{title}</h3>
          <span className="time">{dateFormat(new Date(date * 1000), 'YYYY-MM-DD')}</span> | <span className="source">{sourcename}</span>
        </div>

        <style jsx>{`
          .Card {
            box-shadow: 0 5px 0px 0 rgba(0, 0, 0, 0.15);
            border-radius: 5px;
            background: white;
          }

          .picture {
            height: 200px;
            background-image: url(${img});
            background-size: cover;
            position: relative;
          }

          .amount {
            position: absolute;
            top: 0;
            right: 0;
            background: red;
            color: white;
            text-transform: uppercase;
            padding: 0 10px;
          }

          .keyword {
            position: absolute;
            bottom: 0;
            left: 0;
            background: black;
            color: white;
            text-transform: uppercase;
            padding: 0 10px;
          }
      `}</style>
      </div>
    )
  }
}
