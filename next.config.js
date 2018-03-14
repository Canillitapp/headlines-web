const withOffline = require('next-offline')

module.exports = withOffline({
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: /.*(png|jpg|gif|svg)/,
        handler: 'cacheFirst',
      },
      {
        urlPattern: /https:\/\/api.canillitapp.com\/.+/,
        handler: 'networkFirst',
      },
    ],
  },
})
