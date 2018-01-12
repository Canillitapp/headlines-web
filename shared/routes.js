const routes = require('next-routes')()

routes
  .add('index', '/')
  .add('keyword', '/keyword/:keyword/:date')

module.exports = routes
