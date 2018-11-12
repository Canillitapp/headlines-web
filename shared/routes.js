const routes = require('next-routes')()

routes
  .add('download', '/download')
  .add('keyword', '/keyword/:keyword/:date')
  .add('category', '/category/:category')
  .add('article', '/article/:id')
  .add('index', '/')
  .add('archive', '/:date', 'index')

module.exports = routes

