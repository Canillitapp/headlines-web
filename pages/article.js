import { Component } from 'react'
import PropTypes from 'prop-types'
import { Router } from '../shared/routes'

import { getArticle } from '../shared/lib/service.Canillitapp'
import Meta from '../shared/components/Meta'
import GlobalStyles from '../shared/components/GlobalStyles'
import IframePreview from '../shared/components/IframePreview'

export default class Keyword extends Component {
  static propTypes = {
    article: PropTypes.object,
    source: PropTypes.string,
    asPath: PropTypes.string.isRequired,
  }

  static defaultProps = {
    article: null,
    source: null,
  }

  static async getInitialProps({ query, asPath }) {
    const { id, source } = query

    const article = await getArticle(id)
    return {
      article,
      source,
      asPath,
    }
  }

  componentDidMount() {
    const { article, source } = this.props
    if (!source) {
      window.location.replace(article.url)
      return
    }
    Router.prefetch('/')
  }

  closeIframe = () => {
    Router.push('/')
  }

  render() {
    const { article, asPath } = this.props

    return (
      <div>
        <Meta
          title={`${article.title} | ${article.source_name}`}
          image={article.img_url}
          url={asPath}
        />
        <GlobalStyles />
        <IframePreview
          url={article.url}
          article={article}
          sourcename={article.source_name}
          onClose={this.closeIframe}
        />
      </div>
    )
  }
}
