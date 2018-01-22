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
    asPath: PropTypes.string.isRequired,
  }

  static defaultProps = {
    article: null,
  }

  static async getInitialProps({ query, asPath }) {
    const { id } = query

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
    const { article, asPath } = this.props

    return (
      <div>
        <Meta title={`${article.title} | ${article.source_name}`} url={asPath} />
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
