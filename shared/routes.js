const routes = require('next-routes')();

routes
  .add('fb', '/fb')
  .add('download', '/download')
  .add('keyword', '/keyword/:keyword/:date')
  .add('article', '/article/:id')
  .add('index', '/')
  .add('archive', '/:date', 'index');

module.exports = routes;
