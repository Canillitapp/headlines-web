import { Component } from 'react'

import Layout from '../shared/components/Layout'

export default class Download extends Component {
  render() {
    return (
      <Layout>
        Download
        <div className="buttons">
          <a href="https://itunes.apple.com/ar/app/canillitapp/id1148447560?l=en&mt=8">
            <img src="/static/app-store-badge.svg" alt="App Store" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.headlinesreact&hl=es_419">
            <img className="google" src="/static/google-play-badge.png" alt="Google Play" />
          </a>
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
