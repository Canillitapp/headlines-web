import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Router, Link } from '../routes'
import vars from '../variables';

import Button from './Button'
import Nav from './Nav'

export default class Header extends Component {
  static propTypes = {
    nobutton: PropTypes.bool,
    noNav: PropTypes.bool,
  }

  static defaultProps = {
    nobutton: false,
    noNav: false,
  }

  categoryClick = (e, category) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || (e.nativeEvent && e.nativeEvent.which === 2)) {
      // Proceed as usual for new tab / new window shortcut
      return
    }

    e.preventDefault();

    Router.push(
      `/category?category=${category}`,
      `/category/${category}`,
    )
  }

  popularClick = (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || (e.nativeEvent && e.nativeEvent.which === 2)) {
      // Proceed as usual for new tab / new window shortcut
      return
    }

    e.preventDefault();

    Router.push(
      '/popular',
      '/popular',
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
        </div>
        <style jsx>{`
          header {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            align-items: center;
            background-color: white;
            margin-bottom: 24px;
            box-shadow: 0 2px 2px -6px #cecece;
          }

          header.transparent {
            background-color: transparent;
          }

          header.transparent .top-nav {
            border-bottom: 0;
          }

          header .inner-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            margin: 0 auto;
            width: 100%;
            padding: 15px 15px 24px;
          }

          @media screen and (min-width: 1024px) {
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
            padding-bottom: 15px;
          }

          @media screen and (min-width: 1024px) {
            .top-nav {
              max-width: 220px;
              width: auto;
              padding-bottom: 0;
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
            padding-top: 24px;
            margin-left: auto;
          }

          @media screen and (min-width: 1024px) {
            nav {
              width: auto;
              padding-top: 0;
            }
          }

          nav > ul {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 6px;
            grid-row-gap: 6px;
            // display: flex;
            // flex-wrap: wrap;
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
            padding: 7px 5px;
            border: 2px solid ${vars.colors.coralPink};
            border-radius: 3px;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 0.19px;
            color: ${vars.colors.coralPink};
            transition: color .25s ease-in;
          }

          nav > ul > li > a:hover,
          nav > ul > li > a:focus {
            color: ${vars.colors.coralPink};
            transition: color .25s ease-out;
          }
        `}</style>
      </header>
    )
  }
}
