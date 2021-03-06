import { Component } from 'react'
import PropTypes from 'prop-types'
import { DateTime } from 'luxon'
import { Router } from '../shared/routes'
import { getTrending } from '../shared/lib/service.Canillitapp'


import Layout from '../shared/components/Layout'
import Meta from '../shared/components/Meta'
import TrendingCard from '../shared/components/TrendingCard'
import Grid from '../shared/components/Grid'
import Title from '../shared/components/Title'
import Divider from '../shared/components/Divider'
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

  static async getInitialProps({ query }) {
    const { date } = query
    let today = DateTime.utc().setZone('UTC-3').toFormat('y-LL-dd')
    if (date) {
      today = date
    }

    const stories = await getTrending(today, 12)
    return {
      stories,
      today,
    }
  }

  componentDidMount() {
    window.requestAnimationFrame(() => window.scrollTo(0, 0))
  }

  cardClick = (e, keyword, data) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || (e.nativeEvent && e.nativeEvent.which === 2)) {
      // Proceed as usual for new tab / new window shortcut
      return
    }
    e.preventDefault();
    const { today } = this.props

    const dataString = encodeURIComponent(JSON.stringify(data))
    window.viewTransition = data
    Router.push(
      `/keyword?keyword=${keyword}&date=${today}&data=${dataString}`,
      `/keyword/${keyword}/${today}`,
    )
  }

  render() {
    const { stories, today } = this.props
    const { keywords, news } = stories
    const currentDate = DateTime.utc().setZone('UTC-3').startOf('day')
    const trendingDate = DateTime.fromISO(`${today}T00:00-03:00`)
    const diff = trendingDate.diff(currentDate, 'days').toObject()

    let dateText
    if (!diff.hasOwnProperty('days') || diff.days === 0) {
      dateText = 'Hoy'
    } else if (diff.days && diff.days === -1) {
      dateText = 'Ayer'
    } else {
      dateText = trendingDate.setLocale('es-ES').toFormat('d LLL y').replace('.', '')
    }

    return (
      <Layout>
        <Meta />
        <Container>
          <Title>{dateText}</Title>
          <Divider />
          <Grid>
            { keywords.map(keyword => (
              <a
                key={keyword}
                href={`/keyword/${keyword}/${today}`}
                onClick={(e) => { this.cardClick(e, keyword, news[keyword]) }}
                style={{ width: '100%', display: 'flex' }}
              >
                <TrendingCard keyword={keyword} data={news[keyword]} />
              </a>
            ))}
          </Grid>
        </Container>
      </Layout>
    )
  }
}
