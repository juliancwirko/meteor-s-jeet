Package.describe({
  summary: 'Jeet (Stylus) grid system for Meteor. Especially for Scotty boilerplate.',
  version: "0.2.1",
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
    'stylus': "0.48.1",
    'nib': "1.0.3",
    'autoprefixer-stylus': '0.3.0',
    'jeet': "6.0.0",
    'rupture': "0.4.0"
  }
});