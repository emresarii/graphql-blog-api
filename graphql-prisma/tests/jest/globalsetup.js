require('babel-register')
require('@babel/polyfill/noConflict')
const server = require('../../src/server.js').default

module.exports = async () => {
    global.globalServer = await server.start({ port: 4000})
}