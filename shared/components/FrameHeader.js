import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BackButton from './BackButton';
import LinkIcon from './LinkIcon';

export default class FrameHeader extends Component {
  static propTypes = {
    sourcename: PropTypes.string,
    url: PropTypes.string,
    onClose: PropTypes.func,
  };

  static defaultProps = {
    sourcename: '',
    url: '',
    onClose: () => {},
  };

  render() {
    const { onClose, sourcename, url } = this.props;
    return (
      <header>
        <div className="left">
          <BackButton onClick={onClose} />
        </div>

        <span>{sourcename}</span>

        <div className="right">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <LinkIcon />
          </a>
        </div>
        <style jsx>
          {`
            header {
              background: #f9fafc;
              height: 60px;
              display: flex;
              justify-content: center;
              align-items: center;
              position: relative;
              box-shadow: 0 0px 10px 2px rgba(0, 0, 0, 0.25);
            }

            .left {
              position: absolute;
              top: 0;
              left: 0;
              padding-left: 10px;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .right {
              position: absolute;
              top: 0;
              right: 0;
              padding-right: 10px;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          `}
        </style>
      </header>
    );
  }
}
