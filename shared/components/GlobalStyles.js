import React, { Component } from 'react'

import vars from '../variables'

export default class GlobalStyles extends Component {
  render() {
    return (

      <div>
        <style jsx global>{`
          * {
            margin: 0;
            padding: 0;
            border: 0;
            list-style: none;
            box-sizing: border-box;
          }

          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
            background: ${vars.colors.white};
          }

          a {
            text-decoration: none;
          }

          #__next > div > div {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `}</style>
      </div>

    )
  }
}
