const baseUrl = 'https://www.googleapis.com/calendar/v3/calendars/'
 , calendarIds = [
   {
     id: 'joiceputhusseril@gmail.com',
     description: 'stgeorge'
   }
 ]
 , resource = '/events'
 , apiKey = 'AIzaSyAheMlIfOJvxE23CX7AtGMXIvjA_pn8cLg';

// baseUrl: 'http://httpbin.org/get'

module.exports = { baseUrl, calendarIds, resource, apiKey };
