import { Component } from 'react'
import PropTypes from 'prop-types'
import { format as dateFormat } from 'date-fns'
import { Link } from '../shared/routes'

import { getTrending } from '../shared/lib/service.Canillitapp'

import TrendingCard from '../shared/components/TrendingCard'

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
      <div>
        { keywords.map(keyword => (
          <Link route={`/keyword/${keyword}/${today}`} key={keyword} params={{ test: true }}>
            <a>
              <TrendingCard keyword={keyword} data={news[keyword]} />
            </a>
          </Link>
        ))}
      </div>
    )
  }
}
