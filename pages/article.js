import { Component } from 'react'
import PropTypes from 'prop-types'
import { Router } from '../shared/routes'

import { getArticle } from '../shared/lib/service.Canillitapp'
import Iframe from '../shared/components/Iframe'

export default class Keyword extends Component {
  static propTypes = {
    article: PropTypes.object,
  }

  static defaultProps = {
    article: null,
  }

  static async getInitialProps({ query }) {
    const { id } = query

    const article = await getArticle(id)
    return {
      article,
    }
  }

  closeIframe = () => {
    Router.push('/')
  }

  render() {
    const { article } = this.props

    return (
      <div>
        <Iframe
          url={article.url}
          sourcename={article.source_name}
          onClose={this.closeIframe}
        />
      </div>
    )
  }
}
