import { Component } from 'react'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'


import { getSearch } from '../shared/lib/service.Canillitapp'

import Layout from '../shared/components/Layout'
import Meta from '../shared/components/Meta'
import Row from '../shared/components/Row'
import Breadcrumb from '../shared/components/Breadcrumb'
import Container from '../shared/components/Container'


ReactGA.initialize('UA-112879486-1')

export default class Search extends Component {
  static propTypes = {
    stories: PropTypes.arrayOf(PropTypes.object),
    term: PropTypes.string,
    date: PropTypes.string,
    asPath: PropTypes.string.isRequired,
  }

  static defaultProps = {
    stories: [],
    term: null,
    date: null,
  }

  static async getInitialProps({ query, asPath }) {
    const { term, date, data } = query

    if (term && date) {
      // TODO: Catch incorrect params
      const decodedTerm = decodeURIComponent(term)

      if (data) {
        let stories
        try {
          stories = JSON.parse(decodeURI(data))
        } catch (err) {
          stories = window.viewTransition
        }

        return {
          stories,
          term: decodedTerm,
          date,
          asPath,
        }
      }

      const stories = await getSearch(term)
      // const stories = allStories.news[decodedTerm]

      return {
        stories,
        term: decodedTerm,
        date,
        asPath,
      }
    }

    return {}
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
      term,
      asPath,
      date,
    } = this.props

    return (
      <Layout>
        <Meta title={term} url={asPath} />
        <Container>
          <Breadcrumb term={term} date={date} />
          <h1>{term}</h1>
          {stories.map(article => (
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
