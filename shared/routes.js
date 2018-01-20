const routes = require('next-routes')()

routes
  .add('download', '/')
  .add('index', '/browse')
  .add('keyword', '/keyword/:keyword/:date')
  .add('article', '/article/:id')

module.exports = routes
