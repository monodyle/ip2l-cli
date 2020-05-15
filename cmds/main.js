const ipRegex = require('ip-regex')
const api = require('../utils')
const ora = require('ora')

module.exports = async (address, args) => {
  if (!ipRegex({ exact: true }).test(address)) {
    console.log(
      `\x1b[31mError: \x1b[33m"${address}"\x1b[0m is not a valid IP address.`
    )
    return
  }

  const spinner = ora().start()

  try {
    const response = await api(address)
    spinner.stop()

    if (response.status === 'fail') {
      console.log(
        `\x1b[31mError: \x1b[33m${
          response.query ? response.query + ' ' : ''
        }\x1b[0m${response.message}.`
      )
    } else {
      console.log(`\x1b[34mIP Address: \x1b[33m${address}\x1b[0m`)
      console.log(
        `Continent: ${response.continent_name} ${
          args.continentCode ? response.continent_code : ''
        }`
      )
      console.log(
        `Country: ${response.country_name} ${
          args.countryCode ? response.country_code2 : ''
        }`
      )
      console.log(`Region: ${response.state_prov}`)
      console.log(`City: ${response.city}`)

      if (args.isp) console.log(`ISP: ${response.isp}`)
      if (args.z || args.zip) console.log(`ISP: ${response.zipcode}`)
      if (args.o || args.org) console.log(`Organization: ${response.organization}`)
      if (args.l || args.loc)
        console.log(
          `Lat & Long: ${response.latitude} & ${response.longitude}`
        )
      if (args.t || args.timezone)
        console.log(`Timezone: ${response.time_zone.name}`)
    }
  } catch (err) {
    spinner.stop()
    if (err.name) {
      console.log(`\x1b[31mError: \x1b[0m${err.name}`)
      return
    }
    console.log(err)
  }
}
