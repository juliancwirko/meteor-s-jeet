Package.describe({
  summary: 'Jeet (Stylus) grid system for Meteor. Especially for Scotty boilerplate.',
  version: "0.0.2",
  name: 'juliancwirko:s-jeet'
});

Npm.depends({
    'rupture': '0.3.1',
    'jeet': '5.3.0'
});

Package.onUse(function(api) {
    api.use('stylus@1.0.3', ['client']);
    api.addFiles('index.styl', ['client'], {isAsset: true});
});