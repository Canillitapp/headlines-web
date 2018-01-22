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

    const articlesWithImage = data.filter(item => (item.img_url && item.img_url !== '' && item.img_url.includes('https')))

    let firstArticle
    if (articlesWithImage.length !== 0) {
      firstArticle = articlesWithImage.shift()
    } else {
      firstArticle = data.shift()
    }

    return (
      <Card
        keyword={keyword}
        amount={amount}
        title={firstArticle.title}
        date={firstArticle.date}
        sourcename={firstArticle.source_name}
        img={firstArticle.img_url}
      />
    )
  }
}
