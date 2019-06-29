import 'isomorphic-unfetch'
import qs from 'query-string'
import config from '../../config'

export const reqUrlBuild = url => `${config.baseApi}${url}`

export const getTrending = (date, amount = 6) => new Promise((async (resolve, reject) => {
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

export const getCategory = category => new Promise((async (resolve, reject) => {
  try {
    const res = await fetch(reqUrlBuild(`/news/category/${category}`))
    const articles = await res.json()
    resolve(articles)
  } catch (err) {
    reject(err)
  }
}))

export const getPopular = () => new Promise((async (resolve, reject) => {
  try {
    const res = await fetch(reqUrlBuild('/popular'))
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

export const getArticle = id => new Promise((async (resolve, reject) => {
  try {
    const res = await fetch(reqUrlBuild(`/news/${id}`))
    const article = await res.json()
    resolve(article)
  } catch (err) {
    reject(err)
  }
}))

export const addReaction = (reaction, userId, newsId) => new Promise((async (resolve, reject) => {
  try {
    const res = await fetch(reqUrlBuild(`/reactions/${newsId}`), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      },
      body: qs.stringify({
        reaction,
        user_id: userId,
        source: 'web',
      }),
    })
    const article = await res.json()
    resolve(article)
  } catch (err) {
    reject(err)
  }
}))
