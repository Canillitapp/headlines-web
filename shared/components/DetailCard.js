import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { DateTime } from 'luxon'
import cc from 'classcat'

import ReactionGroup from './ReactionGroup'
import Button from './Button'

export default class DetailCard extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    date: PropTypes.number,
    sourcename: PropTypes.string,
    img: PropTypes.string,
    reactions: PropTypes.array,
    url: PropTypes.string,
  }

  static defaultProps = {
    title: '',
    date: null,
    sourcename: '',
    img: '',
    reactions: [],
    url: '',
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
      title,
      date,
      sourcename,
      img,
      reactions,
      url,
    } = this.props

    const dateObj = DateTime.fromMillis(date * 1000)
    const cardDate = dateObj.toFormat("d 'de' LLLL yyyy, HH:mm")

    let pictureStyle = {}
    if (img && img !== 'null' && !imageFailed) {
      pictureStyle = { backgroundImage: `url('${img}')` }
    }

    return (
      <div className="DetailCard" {...this.props}>
        <div className="content">
          <div className={cc(['picture', { failed: imageFailed }])} style={pictureStyle} />
          <h3 className="title">{title}</h3>
        </div>
        <div className="timeAndSource">
          <span className="source">{sourcename}</span>
          <span className="spacer"></span>
          <span className="time">{cardDate}</span>
        </div>
        <div className="Reactions">
          <ReactionGroup reactions={reactions} />
        </div>
        <div className="Action">
          <a href={url}><Button softRadius fullWidth>Leer noticia</Button></a>
        </div>

        <style jsx>{`
          .DetailCard {
            background: white;
            overflow: hidden;
            width: 100%;
            border: 1px solid #F0F0F0;
            border-radius: 5px;
            padding: 10px;
          }

          .picture {
            width: 120px;
            min-height: 40px;
            display: block;
            position: relative;
            background: #F0F0F0;
            background-size: cover;
            border-radius: 5px;
            flex-shrink: 0;
            margin-right: 10px;
          }

          .picture.failed {
            background-image: url('/static/img_placeholder.png');
            background-size: 90px 74px;
            background-repeat: no-repeat;
            background-position: 50% 50%;
          }

          .content {
            padding: 10px;
            color: black;
            display: flex;
            // flex-direction: DetailCard;
            justify-content: space-between;
          }

          .title {
            font-size: 16px;
            font-weight: 300;
          }

          .timeAndSource {
            padding: 0 10px;
            color: #777777;
            font-size: 13px;
          }

          .spacer {
            margin: 0 2px;
          }
          
          .Reactions {
            text-align: right;
            padding: 0 10px;
          }

          .Action {
            padding: 10px;
          }

          @media screen and (min-width: 480px) {
            .picture {
              height: 120px;
              width: 200px;
            }

            .content {
              padding: 15px;
            }

            .timeAndSource {
              padding: 0 15px;
            }

            .Reactions {
              padding: 0 15px;
            }

            .Action {
              padding: 10px 15px;
            }

            .title {
              font-size: 20px;
              font-weight: 300;
            }
          }

      `}</style>
      </div>
    )
  }
}
