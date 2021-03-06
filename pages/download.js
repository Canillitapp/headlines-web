import { Component } from 'react'

import Layout from '../shared/components/Layout'
import Meta from '../shared/components/Meta'

export default class Download extends Component {
  componentDidMount() {
    window.requestAnimationFrame(() => window.scrollTo(0, 0))
  }

  render() {
    return (
      <Layout nobutton noNav>
        <Meta />
        <span className="dot-1"></span>
        <span className="dot-2"></span>
        <span className="dot-3"></span>
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
            <img src="/static/iphonex_screen.png" alt="Canillitapp para iOS" />
            <img src="/static/ipad-pro-screen.png" alt="Canillitapp para iOS" />
            {/* <img src="/static/screen_android.png" alt="Canillitapp para Android" /> */}
          </div>
        </div>
        <style jsx>{`
          :global(body, html) {
            min-height: 100%;
            height: 100%;
          }

          :global(body > div:first-child, #__next, #__next > div) {
            position: relative;
            height: 100%;
            overflow: hidden;
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
            max-width: 1108px;
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
            margin: 0 0 12px;
            padding: 0 0 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            font-size: 48px;
            font-weight: 400;
            color: #3B4359;
            letter-spacing: 0;
            text-align: left;
          }

          p {
            margin: 0 0 30px;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            font-size: 16px;
            line-height: 1.2em;
            letter-spacing: 0;
            text-align: left;
            color: #3B4359;
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
            background-image: linear-gradient(-50deg, #FF6173 0%, #FF9366 100%);            -webkit-clip-path: polygon(0 50%, 100% 25%, 100% 100%, 0 100%);
            clip-path: polygon(0 50%, 100% 25%, 100% 100%, 0 100%);
          }

          .screens img {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            max-width: 275px;
          }

          .screens img:nth-child(2) {
            display: none;
          }

          @media screen and (min-width: 480px) {
            .dot-1 {
              position: absolute;
              top: 20vw;
              right: 47vw;
              width: 25px;
              height: 25px;
              border-radius: 50%;
              background-image: linear-gradient(-90deg, #FF6173 0%, #FF9366 100%);
            }

            .dot-2 {
              position: absolute;
              bottom: 5vw;
              right: 44vw;
              width: 64px;
              height: 64px;
              border-radius: 50%;
              background-image: linear-gradient(-134deg, #FF6173 2%, #FF9366 100%);
            }

            .dot-3 {
              position: absolute;
              top: 6vw;
              right: 12vw;
              width: 81px;
              height: 81px;
              border-radius: 50%;
              background-image: linear-gradient(134deg,#FF9366 2%,#FF6173 100%);
            }

            .container {
              flex-direction: row;
            }

            h1 {
              font-size: 70px;
            }

            p {
              font-size: 24px;
            }

            :global(.Layout:before) {
              width: 60vw;
              height: 100%;
              left: 45%;
              -webkit-clip-path: polygon(0 0, 100% 0%, 100% 100%, 58% 100%);
              clip-path: polygon(0 0, 100% 0%, 100% 100%, 32vw 100%)
            }

            .screens img:nth-child(1) {
              top: 64%;
              left: 28%;
              max-width: 180px;
              transform: translate(-50%, -50%);
              z-index: 3;
              // opacity: 0;
              // animation: reveal .75s ease-out 1s forwards;
            }

            .screens img:nth-child(2) {
              display: block;
              top: 50%;
              left: 60%;
              max-width: 350px;
              transform: translate(-50%, -50%);
              z-index: 2;
              // opacity: 0;
              // animation: reveal .75s ease-out .75s forwards;
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

          @keyframes reveal {
            from {
              opacity: 0;
            }

            to {
              opacity: 1;
            }
          }
        `}</style>
      </Layout>
    )
  }
}
