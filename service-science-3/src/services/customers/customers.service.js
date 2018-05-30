// Initializes the `customers` service on path `/customers`
const createService = require('feathers-memory');
const hooks = require('./customers.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/customers', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('customers');

  service.hooks(hooks);
};
