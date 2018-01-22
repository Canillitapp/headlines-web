import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

export default class Meta extends Component {
  static propTypes = {
    title: PropTypes.string,
  }

  static defaultProps = {
    title: 'Canillitapp',
  }
  render() {
    const { title } = this.props

    return (

      <Head>
        <title key="title">Canillita App</title>

        <meta name="og:site_name" content="Canillitapp" />
        <meta name="og:title" content="Canillitapp" />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://canillitapp.com" />
        <meta name="og:image" content="https://ybsurvzkbn.localtunnel.me/static/ogimage.png" />
        <meta name="og:description" content="Encuentra las noticias más relevantes del día y las agrupa para que estés enterado sobre lo que está pasando en pocos minutos." />

        <meta name="twitter:title" content="Canillitapp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@canillitapp" />
        <meta name="twitter:description" content="Encuentra las noticias más relevantes del día y las agrupa para que estés enterado sobre lo que está pasando en pocos minutos." />
        <meta name="twitter:url" content="https://canillitapp.com" />
        <meta name="twitter:image" content="https://ybsurvzkbn.localtunnel.me/static/ogimage.png" />
      </Head>

    )
  }
}
