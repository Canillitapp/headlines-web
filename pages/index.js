import { Component } from 'react'
import PropTypes from 'prop-types'
import { format as dateFormat } from 'date-fns'
import { Link } from '../shared/routes'

import { getTrending } from '../shared/lib/service.Canillitapp'

import Layout from '../shared/components/Layout'
import TrendingCard from '../shared/components/TrendingCard'
import Grid from '../shared/components/Grid'

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
    const today = dateFormat(new Date(), 'YYYY-MM-DD')
    const stories = await getTrending(today, 10)
    return {
      stories,
      today,
    }
  }

  render() {
    const { stories, today } = this.props
    const { keywords, news } = stories

    return (
      <Layout>
        <Grid>
          { keywords.map(keyword => (
            <Link key={keyword} route={`/keyword/${keyword}/${today}`}>
              <a>
                <TrendingCard keyword={keyword} data={news[keyword]} />
              </a>
            </Link>
          ))}
        </Grid>
      </Layout>
    )
  }
}
