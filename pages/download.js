import { Component } from 'react'

import Layout from '../shared/components/Layout'
import Meta from '../shared/components/Meta'

export default class Download extends Component {
  componentDidMount() {
    window.requestAnimationFrame(() => window.scrollTo(0, 0))
  }

  render() {
    return (
      <Layout nobutton>
        <Meta />
        <div className="container">
          <div className="content">
            <div className="box">
              <h1>Canillitapp</h1>
              <p>Descargá la app y enterate de todo lo que está sucediendo al instante.</p>
              <div className="buttons">
                <a href="https://itunes.apple.com/ar/app/canillitapp/id1148447560?l=en&mt=8">
                  <img src="/static/app-store-badge.png" alt="App Store" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.headlinesreact&hl=es_419">
                  <img className="google" src="/static/google-play-badge.png" alt="Google Play" />
                </a>
              </div>
            </div>
          </div>
          <div className="screens">
            <img src="/static/screen_iphone.png" alt="Canillitapp para iOS" />
            {/* <img src="/static/screen_android.png" alt="Canillitapp para Android" /> */}
          </div>
        </div>
        <style jsx>{`
          :global(body, html) {
            min-height: 100%;
            height: 100%;
          }

          :global(body > div:first-child, #__next, #__next > div, #__next > div > div) {
            height: 100%;
          }

          @media screen and (min-width: 480px) {
            :global(header) {
              position: absolute;
              z-index: 5;
            }
          }

          .container {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            max-width: 1440px;
          }

          .content {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .box {
            padding: 0 20px;
          }

          h1 {
            font-size: 42px;
          }

          p {
            padding: 10px 0;
            font-size: 18px;
            line-height: 1.2em;
          }

          .screens {
            flex: 1;
            position: relative;
            overflow: hidden;
          }

          :global(.Layout:before) {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0%;
            width: 100%;
            height: 50%;

            background: linear-gradient(-90deg, #EE7475 0, #F09470 100%);
            -webkit-clip-path: polygon(0 50%, 100% 25%, 100% 100%, 0 100%);
            clip-path: polygon(0 50%, 100% 25%, 100% 100%, 0 100%);
          }

          .screens img {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          }

          @media screen and (min-width: 480px) {
            .container {
              flex-direction: row;
            }

            :global(.Layout:before) {
              -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 25% 100%);
              clip-path: polygon(0 0, 100% 0, 100% 100%, 25% 100%);
              left: 45%;
              width: 55%;
              height: 100%;
            }
            
            .screens img {
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }

          .buttons {
            display: flex;
            align-items: center;
          }

          .buttons img {
            height: 40px;
            margin-left: 5px;
          }
        `}</style>
      </Layout>
    )
  }
}
