import { Component } from 'react'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'

import { getCategory } from '../shared/lib/service.Canillitapp'
import { newsCategories } from '../shared/lib/utils'

import Layout from '../shared/components/Layout'
import Meta from '../shared/components/Meta'
import Row from '../shared/components/Row'
import Title from '../shared/components/Title'
import Divider from '../shared/components/Divider'
import Container from '../shared/components/Container'


ReactGA.initialize('UA-112879486-1')

export default class Category extends Component {
  static propTypes = {
    stories: PropTypes.arrayOf(PropTypes.object),
    category: PropTypes.string,
  }

  static defaultProps = {
    stories: [],
    category: null,
  }

  static async getInitialProps({ query }) {
    const { category } = query
    const stories = await getCategory(category)
    return {
      stories,
      category,
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
    const { stories, category } = this.props

    return (
      <Layout>
        <Meta title={newsCategories[category - 1].key} url="3" />
        <Container>
          <Title>{newsCategories[category - 1].key}</Title>
          <Divider />
          {stories.map(article => (
            <Row
              key={article.news_id}
              id={article.news_id}
              title={article.title}
              date={article.date}
              sourcename={article.source_name}
              img={article.img_url}
              reactions={article.reactions}
              url={article.url}
              onContentClick={this.openLink}
            />
          ))}
        </Container>
      </Layout>
    )
  }
}
