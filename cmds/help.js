const { description } = require('../package.json')
const cmd = 'ip2l'
const helper = `
To start the CLI:
  ${cmd}

USAGE:
  ${cmd} [IP ADDRESS] [OPTIONS]

OPTIONS:
  -h, --help            Prints help information
  --continentCode       Two-letter continent code
  --countryCode         Two-letter country code ISO 3166-1 alpha-2
  --regionCode          Region/state short code (FIPS or ISO)
  --isp                 ISP name
  -o, --org             Organization name
  -l, --loc             Latitude and longitude
  -z, --zip             ZIP code
  -t, --timezone        City timezone
  -v, --version         Prints version information

SUB COMMANDS:
  me                    Get your IP address information
`

module.exports = (args) => {
  if (args.version) {
    require('./version')(args)
    return
  }

  require('./version')(args)
  console.log(description)
  console.log(helper)
}