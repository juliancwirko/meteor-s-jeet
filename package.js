Package.describe({
  summary: 'Stylus with Jeet, Autoprefixer, Rupture and Nib for Meteor.',
  version: "1.0.0",
  name: 'juliancwirko:s-jeet',
  git: 'https://github.com/juliancwirko/meteor-s-jeet.git'
});

Package._transitional_registerBuildPlugin({
  name: "compileStylus",
  use: [],
  sources: [
    'plugin/compile-stylus.js'
  ],
  npmDependencies: {
    'stylus': "0.52.0",
    'nib': "1.1.0",
    'autoprefixer-stylus': '0.7.1',
    'jeet': "6.1.2",
    'rupture': "0.6.1"
  }
});