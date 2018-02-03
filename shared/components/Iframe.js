import { PureComponent } from 'react'
import PropTypes from 'prop-types'

import FrameHeader from './FrameHeader'

export default class Iframe extends PureComponent {
  static propTypes = {
    url: PropTypes.string,
    onClose: PropTypes.func,
    sourcename: PropTypes.string,
  }

  static defaultProps = {
    url: '',
    onClose: () => {},
    sourcename: '',
  }


  render() {
    const {
      url,
      onClose,
      sourcename,
    } = this.props

    return (
      <div className="Iframe">
        <FrameHeader onClose={onClose} sourcename={sourcename} url={url} />
        <div className="iframeContainer">
          <iframe
            title={sourcename}
            allowFullScreen="true"
            allow="geolocation"
            src={url}
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
          }

          .iframeContainer {
            -webkit-overflow-scrolling: touch !important;
            overflow: scroll !important;
            width: 100%;
            height: 100%;
          }

          iframe {
            width: 100%;
            height: 100%;
            display: block;
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
