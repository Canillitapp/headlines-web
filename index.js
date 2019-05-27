const config = require('./config')
const Server = require('./server')
const Winston = require('./server/lib/logger')()

if (config.env === 'development' && !config.noSSL) {
  // Start a secure HTTPS server with an selfsigned certificate
  // This is useful for local development
  // Set NO_SSL environment variable to force no SSL
  const pem = require('pem')
  Winston.info(`Starting secure HTTPS server`)
  pem.createCertificate({ days: 1, selfSigned: true }, function (err, keys) {
    if (err) {
      throw err
    }
    Server.start({ ssl: keys })
  })
} else {
  // Start HTTP server
  Winston.info(`Starting HTTP server`)
  Server.start()
}
