import { PureComponent } from 'react'
import PropTypes from 'prop-types'

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
        <header>
          <button onClick={onClose}>X</button>
          <span>{sourcename}</span>
        </header>

        <iframe
          title={sourcename}
          allowFullScreen="true"
          allow="geolocation"
          src={url}
        />
        <style jsx>{`
          .Iframe {
            position: fixed;
            width: 100%;
            height: 100%;
            background: white;
            z-index: 10;
          }
          iframe {
            width: 100%;
            height: 100%;
            border: 0;
            background: white;
            display: block;
          }

        `}</style>
      </div>
    )
  }
}
