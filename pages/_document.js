import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="es">
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui" />
          <meta name="theme-color" content="#FF7C55" />
          <link rel="manifest" href="/static/manifest.json" />

          <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />

          <link rel="apple-touch-icon" sizes="152x152" href="/static/apple-touch-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/static/apple-touch-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/static/apple-touch-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/static/apple-touch-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/static/apple-touch-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/static/apple-touch-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/static/apple-touch-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="57x57" href="/static/apple-touch-icon-57x57.png" />

          <meta name="google-site-verification" content="ms56wIKsIzcCIvyYKTcArQiLKX2JJHnUZg6b8IwGawQ" />
          <link rel="manifest" href="static/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
