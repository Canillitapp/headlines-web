import 'isomorphic-unfetch'

export const reqUrlBuild = (url) => {
  const apiUrl = 'api.canillitapp.com'
  let protocol = 'https'
  if (typeof window !== 'object') {
    // Use HTTP on backend since SSL is getting some errors on node
    // UNABLE_TO_VERIFY_LEAF_SIGNATURE error
    protocol = 'http'
  }
  return `${protocol}://${apiUrl}${url}`
}

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

export const getArticle = id => new Promise((async (resolve, reject) => {
  try {
    const res = await fetch(reqUrlBuild(`/news/${id}`))
    const article = await res.json()
    resolve(article)
  } catch (err) {
    reject(err)
  }
}))
