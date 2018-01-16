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

export const sourcesWithSSL = [
  'diarioregistrado.com',
  'infobae.com',
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
