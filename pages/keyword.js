import { Component } from 'react'
import PropTypes from 'prop-types'
import { Router } from '../shared/routes'

import { getTrending } from '../shared/lib/service.Canillitapp'
import { checkSecureUrl, sourceSupportsSSL } from '../shared/lib/utils'

import Layout from '../shared/components/Layout'
import Iframe from '../shared/components/Iframe'
import Row from '../shared/components/Row'
import Title from '../shared/components/Title'
import Container from '../shared/components/Container'

export default class Keyword extends Component {
  static propTypes = {
    stories: PropTypes.arrayOf(PropTypes.object),
    keyword: PropTypes.string,
    date: PropTypes.string,
    url: PropTypes.object,
  }

  static defaultProps = {
    stories: [],
    keyword: null,
    date: null,
    url: {},
  }

  static async getInitialProps({ query }) {
    const { keyword, date, data } = query

    if (keyword && date) {
      // TODO: Catch incorrect params
      const decodedKeyword = decodeURIComponent(keyword)

      if (data) {
        const stories = JSON.parse(decodeURI(data))
        return {
          stories,
          keyword: decodedKeyword,
          date,
        }
      }

      const allStories = await getTrending(date, 10)
      const stories = allStories.news[decodedKeyword]

      return {
        stories,
        keyword: decodedKeyword,
        date,
      }
    }

    return {}
  }

  constructor(props) {
    super(props)

    const { keyword, date } = props
    this.state = {
      iframe: {
        open: false,
        content: null,
      },
      keyword,
      date,
    }
  }

  componentWillReceiveProps(nextProps) {
    const { query } = nextProps.url

    if (query.id) {
      this.setState({
        iframe: {
          open: true,
          content: query,
        },
      })
    }

    if (!query.id) {
      this.setState({
        iframe: {
          open: false,
          content: null,
        },
      })
    }
  }

  openIframe = (e, data) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || (e.nativeEvent && e.nativeEvent.which === 2)) {
      // Proceed as usual for new tab / new window shortcut
      return
    }
    e.preventDefault()

    const id = data.news_id

    if (!sourceSupportsSSL(data.url)) {
      Object.assign(document.createElement('a'), { target: '_blank', href: data.url }).click();
      return
    }

    Router.push(
      `/keyword?id=${id}&url=${data.url}&source_name=${data.source_name}`,
      `/article/${id}`,
      { shallow: true },
    )
  }

  closeIframe = () => {
    const { keyword, date } = this.state
    Router.push(
      `/keyword?keyword=${keyword}&date=${date}`,
      `/keyword/${keyword}/${date}`,
      { shallow: true },
    )
  }

  render() {
    const { stories, keyword } = this.props
    const { iframe } = this.state

    return (
      <Layout>
        { iframe.open &&
          <Iframe
            url={checkSecureUrl(iframe.content.url)}
            sourcename={iframe.content.source_name}
            onClose={this.closeIframe}
          />
        }
        <Container>
          <Title>{keyword}</Title>

          { stories.map(article => (
            <a
              key={article.news_id}
              href={`/article/${article.news_id}`}
              onClick={e => this.openIframe(e, article)}
              style={{ width: '100%', display: 'flex' }}
            >
              <Row
                title={article.title}
                date={article.date}
                sourcename={article.source_name}
                img={article.img_url}
                reactions={article.reactions}
              />
            </a>
          ))}
        </Container>
      </Layout>
    )
  }
}
