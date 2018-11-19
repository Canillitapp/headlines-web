import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Router, Link } from '../routes'
import vars from '../variables';

import Button from './Button'

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
  render() {
    const { nobutton, noNav } = this.props
    return (

      <header>
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
        { !noNav &&
          <nav>
            <ul>
              <li>
                <Link route="/">
                  <a>
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <a
                  href={'/category/4'}
                  onClick={(e) => { this.categoryClick(e, 4) }}
                >
                  Espectáculos
                </a>
              </li>
              <li>
                <a
                  href={'/category/3'}
                  onClick={(e) => { this.categoryClick(e, 3) }}
                >
                  Tecnología
                </a>
              </li>
              <li>
                <a
                  href={'/category/2'}
                  onClick={(e) => { this.categoryClick(e, 2) }}
                >
                  Internacionales
                </a>
              </li>
              <li>
                <a
                  href={'/category/1'}
                  onClick={(e) => { this.categoryClick(e, 1) }}
                >
                  Política
                </a>
              </li>
            </ul>
          </nav>
        }
        <style jsx>{`
          header {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            padding: 10px;
            align-items: center;
          }

          @media screen and (min-width: 480px) {
            header {
              padding: 20px;
            }
          }
          @media screen and (min-width: 1024px) {
            header {
              max-width: 1108px;
            }
          }

          .logo {
            display: block;
            width: 60px;
            heigth: 60px;
            margin-right: 20px;
          }

          .logo img {
            width: 60px;
            height: auto;
          }

          nav {
            width: 100%;
            padding-top: 32px;
            margin-left: auto;
          }

          @media screen and (min-width: 1024px) {
            nav {
              width: auto;
              padding-top: 0;
            }
          }

          nav > ul {
            display: flex;
            flex-wrap: wrap;
          }

          nav > ul li {
            flex: 1 1 45%;
          }

          @media screen and (min-width: 768px) {
            nav > ul li {
              flex: 1 1 auto;
            }
          }

          nav > ul > li:not(:last-child) {
            margin-right: 14px;
          }

          nav > ul > li > a {
            font-size: 16px;
            font-weight: 600;
            letter-spacing: 0.19px;
            color: #3B4359;
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
