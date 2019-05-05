import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, Router } from '../routes';
// import Link from 'next/link';
import vars from '../variables'

import Button from './Button'
import Nav from './Nav'

// import { Router } from '../routes';

export default class Header extends Component {
  static propTypes = {
    nobutton: PropTypes.bool,
    noNav: PropTypes.bool,
  }

  static defaultProps = {
    nobutton: false,
    noNav: false,
  }

  state = {
    searchOpen: false,
  }

  focusInput = React.createRef();

  handleSearch = () => {
    this.setState({
      searchOpen: !this.state.searchOpen,
    })

    this.focusInput.current.focus();
  }

  handleSearchSubmit = (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || (e.nativeEvent && e.nativeEvent.which === 2)) {
      // Proceed as usual for new tab / new window shortcut
      return
    }
    e.preventDefault();

    const search = e.target.searchTerm.value;

    this.setState({
      searchOpen: !this.state.searchOpen,
    })

    Router.push(
      `/search?search=${search}`,
      `/search/${search}`,
    )
  }

  render() {
    const { nobutton, noNav } = this.props
    return (

      <header className={`${noNav ? 'transparent' : ''}`}>
        <div className="inner-wrapper">
          <div className="top-nav">
            <Link route="/">
              <a className="logo">
                <img alt="Canillita App" src="/static/icon.png" />
              </a>
            </Link>
            { !nobutton &&
              <Link route="/download">
                <a>
                  <Button>DESCARGAR APP</Button>
                </a>
              </Link>
            }
          </div>
          { !noNav &&
            <Nav />
          }
          { !noNav &&
            <button className="toggle-search" onClick={this.handleSearch}>
              <img src="/static/search.svg" alt="" />
            </button>
          }
        </div>
        {!noNav &&
          <div className={`search-block ${this.state.searchOpen ? 'open' : ''}`}>
            <form onSubmit={this.handleSearchSubmit}>
              <input ref={this.focusInput} placeholder="Buscar noticias" type="text" name="searchTerm" />
              <button className="search-submit-btn" type="submit"></button>
            </form>
          </div>
        }
        <style jsx>{`
          header {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            align-items: center;
            background-color: white;
            box-shadow: 0 2px 2px -6px #cecece;
          }

          @media screen and (min-width: 1200px) {
            header {
              margin-bottom: 24px;
            }
          }

          header.transparent {
            background-color: transparent;
          }

          header.transparent .top-nav {
            border-bottom: 0;
          }

          header .inner-wrapper {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            justify-content: space-between;
            margin: 0 auto;
            background-color: white;
            z-index: 10;
          }

          @media screen and (min-width: 1200px) {
            header .inner-wrapper {
              flex-direction: row;
              max-width: 1108px;
              padding: 20px;
            }
          }

          .top-nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            border-bottom: 1px solid #eee;
            padding: 15px;
          }

          @media screen and (min-width: 1200px) {
            .top-nav {
              max-width: 220px;
              width: auto;
              padding: 0;
              border-bottom: 0;
            }
          }

          .logo {
            display: flex;
            flex: 0 0 45px;
            height: 45px;
            margin-right: 20px;
          }

          @media screen and (min-width: 768px) {
            .logo{
              flex: 0 0 55px;
              height: 55px;
            }
          }

          .logo img {
            width: 100%;
            height: auto;
          }

          nav {
            width: 100%;
            padding: 15px 0;
            overflow: scroll;
          }

          @media screen and (min-width: 1024px) {
            nav {
              width: auto;
              padding: 0;
            }
          }

          nav > ul {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 6px;
            grid-row-gap: 6px;
          }

          nav > ul li {
            flex: 1 1 45%;
          }

          @media screen and (min-width: 768px) {
            nav > ul li {
              flex: 1 1 auto;
            }

            nav > ul > li:not(:last-child) {
              margin-right: 14px;
            }
          }


          nav > ul > li > a {
            display: flex;
            justify-content: center;
            padding: 8px 14px;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 0.19px;
            color: white;
            transition: color .25s ease-in;
          }

          nav > ul > li > a:hover,
          nav > ul > li > a:focus {
            color: ${vars.colors.coralPink};
            transition: color .25s ease-out;
          }

          .toggle-search {
            width: 25px;
            height: 25px;
            cursor: pointer;
          }

          .search-block {
            position: absolute;
            flex: 1 0 100%;
            width: 100%;
            bottom: 0px;
            background-color: white;
            box-shadow: 0 6px 8px -6px rgba(128, 128, 132, 0.1);
            opacity: 0;
            transition: all .45s ease-out;
            z-index: 0;
          }

          .search-block.open {
            bottom: -80px;
            opacity: 1;
            transition: all .35s ease-in;
          }

          .search-block form {
            max-width: 1108px;
            display: flex;
            margin: 0 auto;
            padding: 0 20px;
          }

          .search-block form input[type="text"] {
            flex: 1 0 auto;
            padding: 8px 0;
            margin: 14px 15px;
            border-bottom: 1px solid #eee;
            background: transparent;
            font-size: 30px;
            color: #2222228;
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
        `}</style>
      </header>
    )
  }
}
