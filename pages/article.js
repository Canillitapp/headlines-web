import { Component } from 'react'
import PropTypes from 'prop-types'
import { Router } from '../shared/routes'

import { getArticle } from '../shared/lib/service.Canillitapp'
import Meta from '../shared/components/Meta'
import Iframe from '../shared/components/Iframe'
import GlobalStyles from '../shared/components/GlobalStyles'

export default class Keyword extends Component {
  static propTypes = {
    article: PropTypes.object,
  }

  static defaultProps = {
    article: null,
  }

  static async getInitialProps({ query, asPath }) {
    const { slug } = query
    const id = slug.split('-')[0]

    const article = await getArticle(id)
    return {
      article,
      asPath,
    }
  }

  closeIframe = () => {
    Router.push('/')
  }

  render() {
    const { article } = this.props

    return (
      <div>
        <Meta />
        <GlobalStyles />
        <Iframe
          url={article.url}
          sourcename={article.source_name}
          onClose={this.closeIframe}
        />
      </div>
    )
  }
}
