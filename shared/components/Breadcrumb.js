import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { parse as dateParse, format as dateFormat, isToday as dateIsToday, isYesterday as dateIsYesterday } from 'date-fns'
import esLocale from 'date-fns/locale/es'
import { Link } from '../routes'

export default class Breadcrumb extends Component {
  static propTypes = {
    date: PropTypes.string.isRequired,
    keyword: PropTypes.string.isRequired,
  }

  render() {
    const { date, keyword } = this.props

    let dateText
    let link = `/${date}`
    const dateUnix = dateParse(date)
    if (dateIsToday(dateUnix)) {
      dateText = 'Hoy'
      link = '/'
    } else if (dateIsYesterday(dateUnix)) {
      dateText = 'Ayer'
    } else {
      dateText = dateFormat(dateUnix, 'D MMM', { locale: esLocale })
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
            font-size: 38px;
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
