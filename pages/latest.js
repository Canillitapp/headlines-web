import { Component } from 'react'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'


import { getLatest } from '../shared/lib/service.Canillitapp'

import Layout from '../shared/components/Layout'
import Meta from '../shared/components/Meta'
import Row from '../shared/components/Row'
import Breadcrumb from '../shared/components/Breadcrumb'
import Container from '../shared/components/Container'


ReactGA.initialize('UA-112879486-1')

export default class Latest extends Component {
  static propTypes = {
    stories: PropTypes.arrayOf(PropTypes.object),
    keyword: PropTypes.string,
    date: PropTypes.string,
    asPath: PropTypes.string.isRequired,
  }

  static defaultProps = {
    stories: [],
    keyword: null,
    date: null,
  }

  static async getInitialProps({ query, asPath }) {
    const { date } = query

    const stories = await getLatest(date, 12)
    return {
      stories,
      asPath,
    }
  }

  componentDidMount() {
    window.requestAnimationFrame(() => window.scrollTo(0, 0))
  }

  openLink = (e, data) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || (e.nativeEvent && e.nativeEvent.which === 2)) {
      // Proceed as usual for new tab / new window shortcut
      return
    }
    e.preventDefault()

    ReactGA.pageview(`/article/${data.news_id}`)
    Object.assign(document.createElement('a'), { target: '_blank', href: data.url }).click();
  }

  render() {
    const {
      stories,
      keyword,
      asPath,
      date,
    } = this.props

    return (
      <Layout>
        <Meta title="Todas las noticias" url={asPath} />
        <Container>
          <Breadcrumb keyword={keyword} date={date} />

          { stories.map(article => (
            <a
              key={article.news_id}
              href={`${article.url}`}
              onClick={e => this.openLink(e, article)}
              style={{ width: '100%', display: 'flex' }}
            >
              <Row
                id={article.news_id}
                title={article.title}
                date={article.date}
                sourcename={article.source_name}
                img={article.img_url}
                reactions={article.reactions}
                url={article.url}
              />
            </a>
          ))}
        </Container>
      </Layout>
    )
  }
}
