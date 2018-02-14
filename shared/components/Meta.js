import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import ReactGA from 'react-ga'

export default class Meta extends Component {
  static propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    image: PropTypes.string,
  }

  static defaultProps = {
    title: null,
    url: null,
    image: null,
  }

  componentDidMount() {
    ReactGA.initialize('UA-112879486-1')
    ReactGA.pageview(`${window.location.pathname}`)
  }

  render() {
    const { title, url, image } = this.props

    let seoTitle = 'Canillitapp'
    if (title) {
      seoTitle = `${title} | Canillitapp`
    }

    let seoUrl = 'https://canillitapp.com'
    if (url) {
      seoUrl += url
    }

    let seoImage = 'https://canillitapp.com/static/ogimage.png'
    if (image) {
      seoImage = image
    }

    return (

      <Head>
        <title key="title">{seoTitle}</title>

        <meta name="og:site_name" content="Canillitapp" />
        <meta name="og:title" content={seoTitle} />
        <meta name="og:type" content="website" />
        <meta name="og:url" content={seoUrl} />
        <meta name="og:image" content={seoImage} />
        <meta name="og:description" content="Encuentra las noticias más relevantes del día y las agrupa para que estés enterado sobre lo que está pasando en pocos minutos." />

        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@canillitapp" />
        <meta name="twitter:description" content="Encuentra las noticias más relevantes del día y las agrupa para que estés enterado sobre lo que está pasando en pocos minutos." />
        <meta name="twitter:url" content={seoUrl} />
        <meta name="twitter:image" content={seoImage} />

        <meta key="viewport" name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#FF7C55" />

        <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
      </Head>

    )
  }
}
