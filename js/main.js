// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  paths: {
    jquery: 'libs/jquery/jquery-min',
    underscore: 'libs/underscore/underscore-min', // https://github.com/amdjs
    backbone: 'libs/backbone/backbone-min', // https://github.com/amdjs

    // Require.js plugins
    text: 'libs/require/text',

    // Just a short cut so we can put our html outside the js dir
    // When you have HTML/CSS designers this aids in keeping them out of the js directory
    templates: '../templates',
    // Shortcut to sample data
    sampledata: '../sampledata'
  }

});

// Let's kick off the application

require([
  'views/app',
  'vm',
  'router'
], function(AppView, Vm, Router){
  var appView = Vm.create('AppView', AppView);
  Router.initialize();
  appView.render(); // render() calls Backbone.history when its ready to start
});
