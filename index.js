const minimist = require('minimist')

module.exports = () => {
  const args = minimist(process.argv.slice(2))
  let cmd = args._[0] || 'help'

  switch (cmd) {
    case 'help':
      require('./cmds/help')(args)
      break
    case 'version':
      require('./cmds/version')(args)
      break
    case 'me':
      require('./cmds/me')(args)
      break
    default:
      require('./cmds/main')(cmd, args)
      break
  }
}