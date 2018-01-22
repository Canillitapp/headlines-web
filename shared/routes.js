const routes = require('next-routes')()

routes
  .add('index', '/')
  .add('download', '/download')
  .add('keyword', '/keyword/:keyword/:date')
  .add('article', '/article/:slug')

module.exports = routes
