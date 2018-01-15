import React, { Component } from 'react'

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
            background: #F9FAFC;
          }

          a {
            text-decoration: none;
          }
        `}</style>
      </div>

    )
  }
}
