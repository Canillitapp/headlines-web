const withOffline = require('next-offline')

module.exports = withOffline({
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: /.*(png|jpg|gif|svg|jpeg)/,
        handler: 'cacheFirst',
      },
      {
        urlPattern: /https:\/\/api.canillitapp.com\/.+/,
        handler: 'networkFirst',
      },
      {
        urlPattern: /\/keyword\/(.*)\/(.*)/,
        handler: 'networkFirst',
      },
      {
        urlPattern: /\/article\/(.*)/,
        handler: 'networkFirst',
      },
      {
        urlPattern: /\/(\d*)-(\d*)-(\d*)/,
        handler: 'networkFirst',
      },
      {
        urlPattern: /\//,
        handler: 'networkFirst',
      },
    ],
  },
})
