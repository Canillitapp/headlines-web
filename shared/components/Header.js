import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, Router } from '../routes';
import Button from './Button'
import Nav from './Nav'
import MobileNav from './MobileNav'
import Modal from './Modal'

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
    menuOpen: false,
  }

  focusInput = React.createRef();

  handleSearchOpen = () => {
    this.setState({
      searchOpen: !this.state.searchOpen,
    })

    // this.focusInput.current.focus();
  }

  handleMenuClick = () => {
    this.setState({
      menuOpen: !this.state.menuOpen,
    })
  }

  handleSearchSubmit = (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || (e.nativeEvent && e.nativeEvent.which === 2)) {
      // Proceed as usual for new tab / new window shortcut
      return
    }
    e.preventDefault();

    const search = e.target.searchTerm.value;

    Router.push(
      `/search?search=${search}`,
      `/search/${search}`,
    )

    this.setState({
      searchOpen: false,
      menuOpen: false,
    })
  }

  render() {
    const { nobutton, noNav } = this.props
    return (
      <header className={`${noNav ? 'transparent' : ''}`}>
        <div className="top-nav">
          <div className="inner-wrapper">
            {!nobutton &&
              <Link route="/download">
                <a className="download-app-btn">
                  <Button>DESCARGAR APP</Button>
                </a>
              </Link>
            }
            <Link route="/">
              <a className="logo">
                <img alt="Canillita App" src="/static/icon.png" />
              </a>
            </Link>
            { !noNav &&
              <button className="toggle-search" onClick={this.handleSearchOpen}>
                <img src="/static/search.svg" alt="" />
              </button>
            }
            { !noNav &&
              <button className="toggle-menu" onClick={this.handleMenuClick}>
                <img src="/static/icon-menu.svg" alt="" />
              </button>
            }
          </div>
        </div>
        { !noNav && this.state.menuOpen
          ? <MobileNav handleSearchSubmit={this.handleSearchSubmit} />
          : null }
        { !noNav ? <Nav handleSearchSubmit={this.handleSearchSubmit} /> : null }
        {!noNav && this.state.searchOpen
          ? <Modal
            handleSearchSubmit={this.handleSearchSubmit}
            handleSearchOpen={this.handleSearchOpen}
          />
          : null }
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

          @media screen and (min-width: 1025px) {
            header {
              padding: 0;
              margin-bottom: 24px;
            }
          }

          header.transparent,
          header.transparent .inner-wrapper {
            background-color: transparent;
          }

          header.transparent .top-nav {
            border-bottom: 0;
          }

          header .inner-wrapper {
            position: relative;
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 100%;
            justify-content: space-between;
            margin: 0 auto;
            background-color: white;
            z-index: 10;
          }

          @media screen and (min-width: 1025px) {
            header .inner-wrapper {
              max-width: 1108px;
              padding: 0 20px;
            }
          }

          .top-nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            border-bottom: 1px solid #eee;
            padding: 15px 20px;
          }

          @media screen and (min-width: 769px) {
            .top-nav {
              width: 100%;
              border-bottom: 0;
            }
          }

          @media screen and (min-width: 1025px) {
            .top-nav {
              padding: 24px 0px;
            }
          }

          .download-app-btn {
            display: none;
          }

          @media screen and (min-width: 769px) {
            .download-app-btn {
              display: block;
            }
          }

          .logo {
            display: flex;
            flex: 0 0 45px;
            height: 45px;
            margin-right: 20px;
          }

          @media screen and (min-width: 769px) {
            .logo{
              flex: 0 0 55px;
              height: 55px;
              margin-right: 0;
              margin-left: -115px;
            }
          }

          .logo img {
            width: 100%;
            height: auto;
          }

          @media screen and (min-width: 768px) {
            nav > ul li {
              flex: 1 1 auto;
            }

            nav > ul > li:not(:last-child) {
              margin-right: 14px;
            }
          }

          .toggle-search {
            display: none;
            width: 25px;
            height: 25px;
            cursor: pointer;
            background-color: transparent;
          }

          .toggle-menu {
            display: block;
            width: 25px;
            height: 25px;
            cursor: pointer;
            background-color: transparent;
          }

          @media screen and (min-width: 769px) {
            .toggle-search {
              display: block;
            }

            .toggle-menu {
              display: none;
            }
          }

          .toggle-search:focus,
          .toggle-menu:focus {
            outline: none;
          }
        `}</style>
      </header>
    )
  }
}
