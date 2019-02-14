export const forceSecureUrl = url => url.replace(/^http:\/\//i, 'https://')

export const getFullDomain = (url) => {
  const match = url.match(/:\/\/(.[^/:]+)/i)

  if (match != null && match.length > 1 && typeof match[1] === 'string' && match[1].length > 0) {
    return match[1]
  }

  return null
}

export const getDomain = (url) => {
  const match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i)

  if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
    return match[2]
  }

  return null
}

export const newsCategories = [
  { id: 1, key: 'Política' },
  { id: 2, key: 'Internacionales' },
  { id: 3, key: 'Tecnología' },
  { id: 4, key: 'Espectáculos' },
];

export const sourcesWithSSL = [
  'diarioregistrado.com',
  'infobae.com',
  'clarin.com',
  // 'iprofesional.com',
  'lanacion.com.ar',
  'pagina12.com.ar',
  // 'perfil.com',
  // 'telam.com.ar',
  'tn.com.ar',
]

export const sourceSupportsSSL = (url) => {
  const domain = getDomain(url)
  return sourcesWithSSL.includes(domain)
}

export const checkSecureUrl = (url) => {
  const domain = getDomain(url)
  if (sourcesWithSSL.includes(domain)) {
    return forceSecureUrl(url)
  }
  return url
}

export const calcTimeWithOffset = (offset) => {
  const d = new Date()
  const utc = d.getTime() + (d.getTimezoneOffset() * 60000)
  const time = new Date(utc + (3600000 * offset))
  return time
}

export const stringToSlug = (input) => {
  let str = input
  str = str.replace(/^\s+|\s+$/g, '') // trim
  str = str.toLowerCase()

  // remove accents, swap ñ for n, etc
  const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:'
  const to = 'aaaaeeeeiiiioooouuuunc------'

  for (let i = 0, l = from.length; i < l; i += 1) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-') // collapse dashes

  return str
}

export const createArticleSlug = data => `${data.news_id}-${stringToSlug(getDomain(data.url))}-${stringToSlug(data.title)}`
