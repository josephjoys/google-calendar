const baseUrl = 'https://www.googleapis.com/calendar/v3/calendars/'
 , calendarIds = [
   {
     id: 'calId',
     description: 'events'
   }
 ]
 , resource = '/events'
 , apiKey = '';

// baseUrl: 'http://httpbin.org/get'

module.exports = { baseUrl, calendarIds, resource, apiKey };
