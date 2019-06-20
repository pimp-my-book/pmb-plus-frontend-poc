// index.js entry for our handler?

const sls = require('serverless-http')
const binaryMimeTypes = require('./binaryMimeTypes')

const server = require('./server')
module.exports.server = sls(Server, {
    binary: binaryMimeTypes
})