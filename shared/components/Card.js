import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { format as dateFormat, isToday as dateIsToday } from 'date-fns'
import cc from 'classcat'

export default class Card extends PureComponent {
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

  constructor(props) {
    super(props)
    this.state = {
      imageFailed: false,
    }
  }

  componentDidMount() {
    this.loadImage()
  }

  loadImage = () => {
    const { img } = this.props
    if (!img || img === 'null') {
      this.setState({
        imageFailed: true,
      })
      return
    }

    const image = new Image()
    image.onerror = () => {
      this.setState({
        imageFailed: true,
      })
    }
    image.src = this.props.img
  }

  render() {
    const { imageFailed } = this.state
    const {
      keyword,
      amount,
      title,
      date,
      sourcename,
      img,
    } = this.props

    const dateUnix = new Date(date * 1000)
    let cardDate
    if (dateIsToday(dateUnix)) {
      cardDate = dateFormat(dateUnix, 'HH:mm')
    } else {
      cardDate = dateFormat(dateUnix, 'HH-mm DD-MM-YYYY')
    }

    let pictureStyle = {}
    if (img && img !== 'null' && !imageFailed) {
      pictureStyle = { backgroundImage: `url('${img}')` }
    }

    return (
      <div className="Card" {...this.props}>
        <div className={cc(['picture', { failed: imageFailed }])} style={pictureStyle}>
          { amount &&
            <div className="amount">{amount} Noticias</div>
          }
          { keyword &&
            <div className="keyword">{keyword}</div>
          }
        </div>
        <div className="content">
          <h3 className="title">{title}</h3>
          <div className="timeAndSource">
            <span className="time">{cardDate}</span>
            <span className="spacer">|</span>
            <span className="source">{sourcename}</span>
          </div>
        </div>

        <style jsx>{`
          .Card {
            border-radius: 5px;
            background: white;
            box-shadow: 0 20px 40px -14px rgba(0,0,0,0.25);
            overflow: hidden;
            cursor: pointer;
            transition: all ease 150ms;
            width: 100%;
          }

          .Card:hover {
            box-shadow: 0 25px 40px -14px rgba(0,0,0,0.25);
            transform: translateY(-5px);
          }

          .picture {
            height: 200px;
            max-width: 100%;
            position: relative;
            overflow: hidden;
            background: #F0F0F0;
            background-size: cover;
          }

          .picture.failed {
            background-image: url('/static/img_placeholder.png');
            background-size: 90px 74px;
            background-repeat: no-repeat;
            background-position: 50% 50%;
          }

          .picture img {
            width: 100%;
          }

          .amount {
            position: absolute;
            top: 0;
            right: 0;
            background: rgba(252,75,99,0.60);
            color: white;
            text-transform: uppercase;
            padding: 4px 14px;
            border-radius: 0 0 0 5px;
            font-size: 14px;
          }

          .keyword {
            position: absolute;
            bottom: 0;
            left: 0;
            background: rgba(0,0,0,0.60);
            color: white;
            padding: 0 10px;
            font-size: 42px;
            text-transform: capitalize;
          }

          .content {
            padding: 10px 20px;
            color: black;
          }

          .title {
            font-size: 18px;
            font-weight: 300;
            min-height: 63px;
          }

          .timeAndSource {
            margin-top: 10px;
            font-weight: 500;
          }

          .spacer {
            margin: 0 4px;
          }

      `}</style>
      </div>
    )
  }
}
