const env = process.env.NODE_ENV || 'development'
const isDev = env !== 'production'

module.exports = {
  baseApi: process.env.API_URL || 'https://api-stg.dokku.canillitapp.com',
  facebook: {
    appId: process.env.FB_APP_ID || 328910507818769,
  },
  env,
  isDev,
  isProd: !isDev,
  noSSL: process.env.NO_SSL || false,
  imgPrefix: process.env.IMG_PREFIX || '',
}
