import React, { Component } from 'react';
import PropTypes from 'prop-types'

class SearchField extends Component {
  static propTypes = {
    handleSearchSubmit: PropTypes.func,
  }

  static defaultProps = {
    handleSearchSubmit: '',
  }
  render() {
    const { handleSearchSubmit } = this.props;
    return (
      <div className="search-block">
        <form onSubmit={handleSearchSubmit}>
          <div className="input-wrapper">
            <input placeholder="Buscar noticias" type="text" name="searchTerm" />
          </div>
          {/* <button className="search-submit-btn" type="submit"></button> */}
        </form>
        <style jsx>{`
          .search-block {
            width: 100%;
            padding: 14px 0;
            border-bottom: 1px solid #EEEEEE;
          }

          @media screen and (min-width: 769px) {
            .search-block {
              border-bottom: none;
            }
          }

          .search-block form {
            max-width: 1108px;
            display: flex;
            margin: 0 auto;
            padding: 0 20px;
          }

          .search-block .input-wrapper {
            position: relative;
            width: 100%;
          }

          @media screen and (min-width: 769px) {
            .search-block .input-wrapper {
              max-width: 780px;
              margin: 0 auto;
              border-bottom: 1px solid #eee;
              padding: 16px 0;
            }
          }

          .search-block .input-wrapper:before {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            width: 20px;
            height: 20px;
            background: url('/static/search.svg') center center no-repeat;
            background-size: contain;
            transform: translateY(-50%);
          }

          @media screen and (min-width: 769px) {
            .search-block .input-wrapper:before {
              width: 25px;
              height: 25px;
            }
          }

          .search-block form input[type="text"] {
            position: relative;
            display: block;
            width: 100%;
            padding-left: 30px;
            background: transparent;
            font-weight: 500;
            font-size: 16px;
            color: #2222228;
          }

          @media screen and (min-width: 769px) {
            .search-block form input[type="text"] {
              padding-left: 35px;
              font-size: 24px;
            }
          }

          .search-block form input[type="text"]:focus,
          .search-block .search-submit-btn:focus {
            outline: none;
          }

          .search-block .search-submit-btn {
            width: 76px;
            height: auto;
            background: url(/static/right-chevron.svg) center center no-repeat;
            background-color: #FC4B63;
            background-size: 25px;
          }

          .search-block .search-submit-btn:hover,
          .search-block .search-submit-btn:focus,
          .search-block .search-submit-btn:active {
            opacity: .7;
            cursor: pointer;
          }
        `}
        </style>
      </div>
    );
  }
}

export default SearchField;
