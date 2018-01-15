import { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Card from './Card'

export default class TrendingCard extends PureComponent {
  static propTypes = {
    keyword: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.object),
  }

  static defaultProps = {
    keyword: null,
    data: {},
  }

  render() {
    const {
      keyword,
      data,
    } = this.props

    const amount = data.length

    const articlesWithImage = data.filter(item => (item.img_url && item.img_url !== ''))

    const firstArticle = articlesWithImage[0]
    const firstTitle = firstArticle.title

    return (
      <Card
        keyword={keyword}
        amount={amount}
        title={firstTitle}
        date={firstArticle.date}
        sourcename={firstArticle.source_name}
        img={firstArticle.img_url}
      />
    )
  }
}
