import 'isomorphic-unfetch'
import config from '../../config'

export const reqUrlBuild = url => `${config.apiUrl}${url}`

export const getTrending = (date, amount = 10) => new Promise((async (resolve, reject) => {
  try {
    const res = await fetch(reqUrlBuild(`/trending/${date}/${amount}`))
    const articles = await res.json()
    resolve(articles)
  } catch (err) {
    reject(err)
  }
}))

export const getLatest = date => new Promise((async (resolve, reject) => {
  try {
    const res = await fetch(reqUrlBuild(`/latest/${date}`))
    const articles = await res.json()
    resolve(articles)
  } catch (err) {
    reject(err)
  }
}))

export const getSearch = term => new Promise((async (resolve, reject) => {
  try {
    const res = await fetch(reqUrlBuild(`/search/${term}`))
    const articles = await res.json()
    resolve(articles)
  } catch (err) {
    reject(err)
  }
}))
