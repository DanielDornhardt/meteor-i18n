Package.describe({
  name: 'leesangwon:i18n',
  summary: 'Internationalization package supporting date, time and translation',
  version: '0.8.2',
  git: 'https://github.com/miraten/meteor-i18n.git'
});


Package.onUse(function(api) {
  api.versionsFrom('1.0.1');
  api.addFiles([
    'i18n.js'
  ], ['client', 'server']);

  api.use([
    'tracker',
    'underscore',
    'momentjs:moment@2.8.4',
  ], ['client', 'server']);

  api.use([
    'spacebars',
    'templating'
  ], 'client');

  api.export('I18n');
});

Package.onTest(function(api) {
  api.use([
    'tinytest',
    'leesangwon:i18n'
  ]);

  api.use([
    'spacebars',
    'templating'
  ], 'client');

  api.addFiles([
    "test/i18n-tests.js",
    "test/lang/en.js",
    "test/lang/ko.js",
    "test/lang/en_accounts.js",
    "test/lang/ko_accounts.js",
    "test/lang/ko_moment.js"
  ], ['server', 'client']);
});
