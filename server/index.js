const next = require('next')
const helmet = require('helmet')
const http2 = require('spdy')
const express = require('express')
const compression = require('compression')

const sharedRoutes = require('../shared/routes')
const Winston = require('./lib/logger')()

class Server {
  static async start() {
    try {
      Winston.info('Starting server')

      const isDev = process.env.NODE_ENV !== 'production'
      const isProd = !isDev

      const port = parseInt(process.env.PORT, 10) || 3000

      const server = express()
      const app = next({ dev: isDev })
      const handler = sharedRoutes.getRequestHandler(app)

      await app.prepare()

      if (isProd) {
        // Enable compression on production
        server.use(compression({ threshold: 0 }))
      }

      // Enable different security policies through helmet
      server.use(helmet())

      server.get('*', async (req, res) => {
        const { route } = sharedRoutes.match(req.url)

        if (!route) {
          // Nextjs assets or static route
          return handler(req, res)
        }

        Winston.info('Entering route: ', req.url)
        return handler(req, res)
      })

      const options = {
        spdy: {
          plain: true,
          ssl: false,
        },
      }

      http2.createServer(options, server).listen(port, (error) => {
        if (error) {
          Winston.error(`Ups, something went wrong: ${error}`)
        }

        Winston.info(`Ready on http://localhost:${port}`)
      })
    } catch (error) {
      Winston.error(`Ups, something went wrong: ${error}`)
    }
  }
}

module.exports = Server;
