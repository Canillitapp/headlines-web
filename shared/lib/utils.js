export const forceSecureUrl = url => url.replace(/^http:\/\//i, 'https://')

export const getDomain = (url) => {
  const match = url.match(/:\/\/(.[^/:]+)/i)

  if (match != null && match.length > 1 && typeof match[1] === 'string' && match[1].length > 0) {
    return match[1]
  }

  return null
}
