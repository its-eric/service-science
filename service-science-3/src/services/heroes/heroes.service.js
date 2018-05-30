// Initializes the `heroes` service on path `/heroes`
const createService = require('feathers-memory');
const hooks = require('./heroes.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/heroes', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('heroes');

  service.hooks(hooks);
};
