import { Component } from 'react'
import PropTypes from 'prop-types'

import vars from '../shared/variables'
import { getArticle } from '../shared/lib/service.Canillitapp'

export default class Thumb extends Component {
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


  render() {
    const { article } = this.props

    return (
      <div className="Thumb">
        <h1>{article.title}</h1>
        <style jsx>{`
          :global(*) {
            margin: 0;
            padding: 0;
            border: 0;
            list-style: none;
            box-sizing: border-box;
          }

          :global(body) {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
            background: ${vars.colors.white};
          }

          .Thumb {
            position: relative;  
          }
          h1 {

          }
        `}</style>
      </div>
    )
  }
}
