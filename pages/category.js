import { Component } from 'react'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'

import { getCateg } from '../shared/lib/service.Canillitapp'

import Layout from '../shared/components/Layout'
import Meta from '../shared/components/Meta'
import Row from '../shared/components/Row'
import Title from '../shared/components/Title'
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
    const stories = await getCateg(category)
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
    const categoryNames = ['Política', 'Internacionales', 'Tecnología', 'Espectáculos']
    return (
      <Layout>
        <Meta title={category} url="3" />
        <Container>
          <Title>{categoryNames[category - 1]}</Title>
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