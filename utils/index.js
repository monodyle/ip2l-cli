const axios = require('axios')
const API_KEY = 'b33cc08aa2cf41a3bad95e6abe8c564e'
const API_URL = `https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}&ip=`

module.exports = async address => {
  const response = await axios
    .get(`${API_URL}${address}`)
    .then(response => response.data)
  return response
}
