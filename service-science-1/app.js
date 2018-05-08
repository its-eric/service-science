const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');
const memory = require('feathers-memory');

const app = express(feathers());

// Turn on JSON body parsing for REST services
app.use(express.json())
// Turn on URL-encoded body parsing for REST services
app.use(express.urlencoded({ extended: true }));
// Set up REST transport using Express
app.configure(express.rest());
app.configure(socketio());

// Initialize the people service by creating
// a new instance of our class
app.use('people', memory({
  paginate: {
    default: 10,
    max: 100
  }
}));

// Set up an error handler that gives us nicer errors
app.use(express.errorHandler());

// Start the server on port 3030
const server = app.listen(3030);

server.on('listening', () => console.log(
  'Feathers REST API started at http://localhost:3030. ' +
  'You can now use Postman to call this API. ' +
  'Use JSON raw data with the structured format you want to describe a person.'));