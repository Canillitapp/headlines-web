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
