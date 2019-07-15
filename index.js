const fs = require('fs')
const config = require('./config')
const Server = require('./server')
const Winston = require('./server/lib/logger')()

if (config.env === 'development' && !config.noSSL) {
  // Start a secure HTTPS server with an selfsigned certificate
  // This is useful for local development
  // Set NO_SSL environment variable to force no SSL

  // eslint-disable-next-line global-require, import/no-extraneous-dependencies
  const pem = require('pem')
  Winston.info('Starting secure HTTPS server')

  const certsTempFile = './.certs.tmp'
  // If exists, use self signed stored certs
  if (fs.existsSync(certsTempFile)) {
    try {
      const keys = JSON.parse(fs.readFileSync(certsTempFile))
      Server.start({ ssl: keys })
      return
    } catch (err) {
      throw err
    }
  }

  // Create temporal self signed certs for local development
  pem.createCertificate({ days: 1, selfSigned: true }, (err, keys) => {
    if (err) {
      throw err
    }
    fs.writeFileSync(certsTempFile, JSON.stringify(keys))
    Server.start({ ssl: keys })
  })
} else {
  // Start HTTP server
  Winston.info('Starting HTTP server')
  Server.start()
}
