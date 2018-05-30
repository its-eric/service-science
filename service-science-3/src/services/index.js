const heroes = require('./heroes/heroes.service.js');
const complaints = require('./complaints/complaints.service.js');
const customers = require('./customers/customers.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(heroes);
  app.configure(complaints);
  app.configure(customers);
};
