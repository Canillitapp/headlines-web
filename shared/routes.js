const routes = require('next-routes')()

routes
  .add('index', '/')
  .add('keyword', '/keyword/:keyword/:date')
  .add('article', '/article/:id')

module.exports = routes
