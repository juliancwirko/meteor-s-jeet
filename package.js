Package.describe({
  summary: 'Jeet (Stylus) grid system for Meteor. Especially for Scotty boilerplate.',
  version: "0.1.0",
  name: 'juliancwirko:s-jeet',
  git: 'https://github.com/juliancwirko/meteor-s-jeet.git'
});

Package._transitional_registerBuildPlugin({
  name: "compileStylus",
  use: [],
  sources: [
    'plugin/compile-stylus.js'
  ],
  npmDependencies: { stylus: "0.48.1", nib: "1.0.3", jeet: "5.3.0", rupture: "0.3.1" }
});