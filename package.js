Package.describe({
  summary: 'An easy-to-use interface for managing your Meteor app'
});

Package.on_use(function (api) {
  api.use(['accounts-base', 'accounts-password', 'standard-app-packages'], ['client','server']);
  // warning: you must install these in your main project for this to actually work
  // todo: check for alternative solutions
  api.use(['bootstrap-3', 'accounts-ui-bootstrap-3', 'iron-router'], 'client');
  api.add_files([
    'client/subscriptions.js'
    ,'client/routes.js'
    ,'client/views/admin/admin.html'
    ,'client/views/admin/admin.js'
    ,'client/views/admin/header.html'
    ,'client/views/admin/header.js'
    ,'client/views/admin/plans/plans.html'
    ,'client/views/admin/plans/plans.js'
    ,'client/views/admin/plans/plan.html'
    ,'client/views/admin/plans/plan.js'
    ,'client/views/admin/users/edit.html'
    ,'client/views/admin/users/users.html'
    ,'client/views/admin/users/users.js'
    ,'client/views/admin/users/user.html'
    ,'client/views/admin/users/user.js'
    ], 'client');
  api.add_files([
    'lib/models.js'
    ], ['client','server']);
  api.add_files([
    'server/admin.js'
    ,'server/publications.js'
    ,'server/security.js'
    ], 'server');
  api.export('_admin', 'server');
});