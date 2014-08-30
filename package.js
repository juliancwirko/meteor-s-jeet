Package.describe({
  summary: 'Jeet (Stylus) grid system for Meteor. Especially for Scotty boilerplate.',
  version: "0.0.5",
  name: 'juliancwirko:s-jeet',
  git: 'https://github.com/juliancwirko/meteor-s-jeet.git'
});

Package.onUse(function(api) {
    api.use('stylus@1.0.3', ['client']);
    api.addFiles([
        'index.styl',
        'rupture/index.styl',
        'jeet/index.styl',
        'jeet/_settings.styl',
        'jeet/_functions.styl',
        'jeet/_grid.styl'
    ], 'client', {isAsset: true});
});