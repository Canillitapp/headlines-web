const Winston = require('winston')

const createLogger = () => new Winston.Logger({
  transports: [
    new Winston.transports.Console({
      level: 'info',
      timestamp: () => new Date().toString(),
      json: true,
    }),
  ],
})

module.exports = createLogger
