const ip = require('ip')

module.exports = (args) => {
  const address = ip.address()
  require('./main')(address)
}