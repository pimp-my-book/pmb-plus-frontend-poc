// THis is the server to allow us to render the next app
//lets get this to work

const express = require('express')
const path = require('path')
const dev = process.env.NODE_ENV !== 'production'
const next = require('next')
const pathMatch = require('path-match')
const app = next({dev})
const handle = app.getRequestHandler()
const {parse} = require('url')

const server = express()
const route = pathMatch()
server.use('/_next', express.static(path.join(__dirname, '.next')))
server.get('/', (req, res) => app.render(req, res , '/'))
server.get('*', (req, res) => handle(req, res))

module.exports = server