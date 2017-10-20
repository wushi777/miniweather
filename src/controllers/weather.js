const axios = require('axios')


module.exports = {
  async getWeather (ctx, next) {
    const query = ctx.query
    const weather = await axios.get('http://wis.qq.com/weather/common', {
      params: {
        source: 'pc',
        weather_type: query.weather_type,
        province: query.province,
        city: query.city,
        district: query.district
      }
    })

    ctx.body = weather.data
  }
}