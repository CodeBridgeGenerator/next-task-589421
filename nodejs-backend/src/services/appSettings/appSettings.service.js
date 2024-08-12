const { AppSettings } = require('./appSettings.class');
const createModel = require('../../models/appSettings.model');
const hooks = require('./appSettings.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"],
    multi: ["create"],
  };

  // Initialize our service with any options it requires
  app.use('/appSettings', new AppSettings(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('appSettings');

  service.hooks(hooks);
};