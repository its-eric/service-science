const assert = require('assert');
const app = require('../../src/app');

describe('\'heroes\' service', () => {
  it('registered the service', () => {
    const service = app.service('heroes');

    assert.ok(service, 'Registered the service');
  });
});
