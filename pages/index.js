import { Component } from 'react'
import PropTypes from 'prop-types'
import { format as dateFormat } from 'date-fns'
import { Router } from '../shared/routes'

import { getTrending } from '../shared/lib/service.Canillitapp'
import { calcTimeWithOffset } from '../shared/lib/utils'

import Layout from '../shared/components/Layout'
import Meta from '../shared/components/Meta'
import TrendingCard from '../shared/components/TrendingCard'
import Grid from '../shared/components/Grid'
import GridItem from '../shared/components/GridItem'
import Title from '../shared/components/Title'
import Container from '../shared/components/Container'

export default class Index extends Component {
  static propTypes = {
    stories: PropTypes.object,
    today: PropTypes.string,
  }

  static defaultProps = {
    stories: { keywords: [], news: {} },
    today: '2018-01-01',
  }

  static async getInitialProps() {
    const today = dateFormat(calcTimeWithOffset(-3), 'YYYY-MM-DD')
    const stories = await getTrending(today, 10)
    return {
      stories,
      today,
    }
  }

  cardClick = (e, keyword, data) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || (e.nativeEvent && e.nativeEvent.which === 2)) {
      // Proceed as usual for new tab / new window shortcut
      return
    }
    e.preventDefault();
    const { today } = this.props

    const dataString = encodeURIComponent(JSON.stringify(data))
    window.b = data
    window.a = dataString
    Router.push(
      `/keyword?keyword=${keyword}&date=${today}&data=${dataString}`,
      `/keyword/${keyword}/${today}`,
    )
  }

  render() {
    const { stories, today } = this.props
    const { keywords, news } = stories

    return (
      <Layout>
        <Meta />
        <Container>
          <Title>Hoy</Title>
          <Grid>
            { keywords.map(keyword => (
              <GridItem key={keyword}>
                <a
                  href={`/keyword/${keyword}/${today}`}
                  onClick={(e) => { this.cardClick(e, keyword, news[keyword]) }}
                  style={{ width: '100%', display: 'flex' }}
                >
                  <TrendingCard keyword={keyword} data={news[keyword]} />
                </a>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Layout>
    )
  }
}
