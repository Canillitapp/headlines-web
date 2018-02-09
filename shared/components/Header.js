import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from '../routes'

import Button from './Button'

export default class Header extends Component {
  static propTypes = {
    nobutton: PropTypes.bool,
  }

  static defaultProps = {
    nobutton: false,
  }
  render() {
    const { nobutton } = this.props
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

        <style jsx>{`
          header {
            display: flex;
            padding: 10px 5px;
            align-items: center;
            width: 100%;
          }

          @media screen and (min-width: 480px) {
            header {
              padding: 20px;
            }
          }
          @media screen and (min-width: 1024px) {
            header {
              max-width: 1440px;
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
        `}</style>
      </header>

    )
  }
}
