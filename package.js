Package.describe({
  summary: 'Stylus with Jeet, Autoprefixer, Rupture and Nib for Meteor.',
  version: '2.0.2',
  name: 'juliancwirko:s-jeet',
  git: 'https://github.com/juliancwirko/meteor-s-jeet.git'
});

Package._transitional_registerBuildPlugin({
  name: 'compileStylus',
  use: ['ecmascript@0.1.4', 'caching-compiler@1.0.0'],
  sources: [
    'plugin/compile-stylus.js'
  ],
  npmDependencies: {
    'stylus': '0.53.0',
    'nib': '1.1.0',
    'autoprefixer-stylus': '0.8.1',
    'jeet': '6.1.2',
    'rupture': '0.6.1'
  }
});

Package.onUse(function (api) {
  api.use('isobuild:compiler-plugin@1.0.0');
});