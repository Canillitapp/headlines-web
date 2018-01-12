import { Component } from 'react'
import PropTypes from 'prop-types'

import { getTrending } from '../shared/lib/service.Canillitapp'

import Card from '../shared/components/Card'
import Iframe from '../shared/components/Iframe'

export default class Keyword extends Component {
  static propTypes = {
    stories: PropTypes.arrayOf(PropTypes.object),
  }

  static defaultProps = {
    stories: [],
  }

  static async getInitialProps({ query }) {
    const { keyword, date } = query

    // TODO: Catch incorrect params
    const decodedKeyword = decodeURI(keyword)

    const allStories = await getTrending(date, 10)
    const stories = allStories.news[decodedKeyword]

    return {
      stories,
      keyword: decodedKeyword,
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      iframe: {
        open: false,
        content: null,
      },
    }
  }

  openIframe = (data) => {
    this.setState({
      iframe: {
        open: true,
        content: data,
      },
    })
  }

  closeIframe = () => {
    this.setState({
      iframe: {
        open: false,
        content: null,
      },
    })
  }

  render() {
    const { stories } = this.props
    const { iframe } = this.state

    return (
      <div>
        { iframe.open &&
          <Iframe
            url={iframe.content.url}
            sourcename={iframe.content.source_name}
            onClose={this.closeIframe}
          />
        }
        { stories.map(article => (
          <Card
            onClick={() => this.openIframe(article)}
            key={article.news_id}
            title={article.title}
            date={article.date}
            sourcename={article.source_name}
            img={article.img_url}
          />
        ))}
      </div>
    )
  }
}
