Package.describe({
  summary: 'An easy-to-use interface for managing your Meteor app'
});

Package.on_use(function (api) {
  api.use(['standard-app-packages', 'accounts-base', 'accounts-password', 'accounts-ui-unstyled'], ['client','server']);
  api.use(['accounts-ui-unstyled', 'iron-router', 'font-awesome', 'less', 'bootstrap3-less'], 'client');
  // must use imply so that the parent app can use routes without explicitly adding it
  api.imply(['standard-app-packages', 'accounts-base', 'accounts-password', 'accounts-ui-unstyled', 'iron-router', 'font-awesome', 'less', 'bootstrap3-less']);
  api.add_files([
    'client/subscriptions.js'
    ,'client/routes.js'
    ,'client/views/admin/accounts/loginFullPage.html'
    ,'client/views/admin/accounts/loginFullPage.js'
    ,'client/views/admin/common/notAuthorized.html'
    ,'client/views/admin/common/notFound.html'
    ,'client/views/admin/common/loading.html'
    ,'client/views/admin/admin.html'
    ,'client/views/admin/admin.js'
    ,'client/views/admin/configs/configs.html'
    ,'client/views/admin/configs/configs.js'
    ,'client/views/admin/configs/config.html'
    ,'client/views/admin/configs/config.js'
    ,'client/views/admin/users/edit.html'
    ,'client/views/admin/users/users.html'
    ,'client/views/admin/users/users.js'
    ,'client/views/admin/users/user.html'
    ,'client/views/admin/users/user.js'
    ,'client/styles/admin.less'
    ], 'client');
  api.add_files([
    'lib/collections.js'
    ], ['client','server']);
  api.add_files([
    'server/server.js'
    ,'server/publications.js'
    ,'server/security.js'
    ], 'server');
  api.export([
    ,'AdminController'
  ], 'client');
  api.export([
    '_admin'
  ], 'server');
  api.export('Configs', ['server', 'client']);
});