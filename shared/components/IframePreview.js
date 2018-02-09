import { PureComponent } from 'react'
import PropTypes from 'prop-types'

import DetailCard from './DetailCard'
import CloseButton from './CloseButton'

export default class Iframe extends PureComponent {
  static propTypes = {
    article: PropTypes.object.isRequired,
    onClose: PropTypes.func,
  }

  static defaultProps = {
    onClose: () => {},
  }


  render() {
    const {
      onClose,
      article,
    } = this.props

    return (
      <div className="Iframe">
        <div className="container">
          <div className="Action">
            <CloseButton onClick={onClose} />
          </div>
          <DetailCard
            url={article.url}
            title={article.title}
            date={article.date}
            sourcename={article.source_name}
            img={article.img_url}
            reactions={article.reactions}
          />
        </div>
        <style jsx>{`
          .Iframe {
            position: fixed;
            top: 0;
            width: 100%;
            height: 100%;
            background: white;
            z-index: 10;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(-90deg, #EE7475 0, #F09470 100%);
          }

          .container {
            max-width: 480px;
            padding: 20px;
          }

          .Action {
            display: flex;
            justify-content: flex-end;
          }

          :global(body) {
            margin: 0;
            padding: 0;
            overflow: hidden;
          }
          
        `}</style>
      </div>
    )
  }
}
