const env = process.env.NODE_ENV || 'development'
const isDev = env !== 'production'

module.exports = {
  baseApi: process.env.API_URL || 'https://api-stg.dokku.canillitapp.com',
  env,
  isDev,
  isProd: !isDev,
  noSSL: process.env.NO_SSL || false,
}
