import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from '../routes'

import Button from './Button'
import Container from './Container'

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
        <Container>
          <Link route="/">
            <a className="logo">
              <img alt="Canillita App" src="/static/icon.png" />
            </a>
          </Link>
          { !nobutton &&
            <Link route="/download">
              <a>
                <Button>Descargar App</Button>
              </a>
            </Link>
          }
        </Container>

        <style jsx>{`
          header {
            display: flex;
            padding: 20px;
            align-items: center;
            width: 100%;
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
