const request = require('superagent');


const _require = require('./config.js'),
    baseUrl = _require.baseUrl,
    calendarIds = _require.calendarIds,
    resource = _require.resource,
    apiKey = _require.apiKey;

module.exports = () => (
  Promise.all(
    calendarIds.map(cal => (
      request
        .get(`${baseUrl + cal.id + resource}`)
        .query({ key: apiKey })
        .then(res => {
          const items = res.body.items
            .filter(item => item.status === 'confirmed')
          const obj = {};
          obj[cal.description] = items;
          return obj;
        })
    ))
  )
  .then(res => (
    res.reduce((prev, next) =>
      Object.assign({}, prev, next)
    ))
  )
);
