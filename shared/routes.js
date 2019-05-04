const routes = require('next-routes')()

routes
  .add('download', '/download')
  .add('search', '/search')
  .add('test', '/test')
  .add('keyword', '/keyword/:keyword/:date')
  .add('category', '/category/:category([0-9])')
  .add('category-slug', '/category/:slug-:category([0-9])', 'category')
  .add('popular', '/popular')
  .add('article', '/article/:id')
  .add('index', '/')
  .add('archive', '/:date', 'index')

module.exports = routes
