'use strict'

// Requires
const connect = require('connect')
const config = require('./config')

// Server
const app = connect()

// Middlewares

// Use our local one
// app.use(require('./serve-static').bind(null, config.staticPath))

// Use a custom made one
app.use(require('serve-static')(config.staticPath))
app.use(require('serve-index')(config.staticPath))

// Do our fallback
app.use(function (req, res) {
	res.statusCode = 404
	res.end('404 Not Found. 🙁 \n')
})


// Listen
app.listen(8000)
