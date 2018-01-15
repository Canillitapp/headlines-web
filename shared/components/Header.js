import React, { Component } from 'react'
import { Link } from '../routes'

import Button from './Button'

export default class Header extends Component {
  render() {
    return (

      <header>
        <Link route="/">
          <a className="logo">
            <img alt="Canillita App" src="/static/icon.png" />
          </a>
        </Link>
        <Link route="/download">
          <a>
            <Button>Descargar App</Button>
          </a>
        </Link>

        <style jsx>{`
          header {
            display: flex;
            padding: 20px;
            align-items: center;
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
