const getEvents = require('./functions/getEvents/src/service');

module.exports.handler = (event, context, cb) => (
  getEvents()
    .then(res =>
      cb(null, {
        statusCode: 200,
        body: JSON.stringify(res)
      })
    )
    .catch(err =>
      cb(null, {
        statusCode: 500,
        body: JSON.stringify(err)
      })
    )
);

