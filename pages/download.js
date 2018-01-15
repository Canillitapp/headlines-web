import { Component } from 'react'

import Layout from '../shared/components/Layout'

export default class Download extends Component {
  render() {
    return (
      <Layout>
        Download
        <div className="buttons">
          <img src="/static/app-store-badge.svg" alt="App Store" />
          <img className="google" src="/static/google-play-badge.png" alt="Google Play" />
        </div>
        <style jsx>{`
          .buttons {
            display: flex;
            align-items: center;
          }
          .buttons img {
            height: 34px;
          }
          .buttons img.google {
            height: 50px;
          }
        `}</style>
      </Layout>
    )
  }
}
