// Initializes the `complaints` service on path `/complaints`
const createService = require('feathers-memory');
const hooks = require('./complaints.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/complaints', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('complaints');

  service.hooks(hooks);
};
