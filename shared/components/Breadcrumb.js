import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DateTime } from 'luxon'
import { Link } from '../routes'

export default class Breadcrumb extends Component {
  static propTypes = {
    date: PropTypes.string.isRequired,
    keyword: PropTypes.string.isRequired,
  }

  render() {
    const { date, keyword } = this.props

    const link = `/${date}`
    const currentDate = DateTime.utc().setZone('UTC-3').startOf('day')
    const trendingDate = DateTime.fromISO(date).startOf('day')
    const diff = trendingDate.diff(currentDate, ['days'])

    let dateText
    if (!diff.values.days) {
      dateText = 'Hoy'
    } else if (diff.values.days === -1) {
      dateText = 'Ayer'
    } else {
      dateText = trendingDate.setLocale('es').toFormat('d MMM yy').replace('.', '')
    }

    return (

      <div className="Breadcrumb">
        <Link route={link}><a>{dateText}</a></Link>
        <svg fill="#424242" height="40" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
        <h2>{keyword}</h2>
        <style jsx>{`
          .Breadcrumb {
            margin-bottom: 20px;
          }
          
          a {
            color: #424242;
          }
          
          a:hover {
            color: #000;
          }

          .Breadcrumb, h2 {
            font-size: 28px;
            font-weight: 600;
            text-transform: capitalize;
          }

          h2 {
            margin: 0;
            display: inline-block;
          }

          svg {
            vertical-align: middle;
          }

          @media screen and (min-width: 480px) {
            .Breadcrumb, h2 {
              font-size: 52px;
            }
            
          }
        `}</style>
      </div>

    )
  }
}
