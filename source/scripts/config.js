'use strict';

require.config({
    baseUrl: '../app',
    paths: {
        'require-domReady': '../lib/requirejs-domready/domReady',
        'require-text': '../lib/requirejs-text/text.js',
        'underscore': '../lib/underscore/underscore-min',
        'backbone': '../lib/backbone/backbone-min',
        'backbone-nested-model': '../lib/backbone-nested-model/backbone-nested',
        'backbone-babysitter': '../lib/backbone.babysitter/lib/backbone.babysitter.min',
        'backbone-localStorage': '../lib/backbone.localStorage/backbone.localStorage-min',
        'backbone-marionette': '../lib/backbone.marionette/lib/backbone.marionette.min',
        'backbone-radio': '../lib/backbone.radio/build/backbone.radio.min',
        'backbone-stickit': '../lib/backbone.stickit/backbone.stickit',
        'backbone-wreqr': '../lib/backbone.wreqr/lib/backbone.wreqr.min',
        'bootstrap': '../lib/bootstrap/dist/js/bootstrap.min',
        'bootstrap-material-design': '../lib/bootstrap-material-design/dist/js/material.min',
        'datatables.net': '../lib/datatables-net/js/jquery.dataTables.min',
        'datatables.net-bs': '../lib/datatables.net-bs/js/dataTables.bootstrap.min',
        'datatables.net-responsive': '../lib/datatables.net-responsive/js/dataTables.responsive.min',
        'datatables.net-responsive-bs': '../lib/datatables.net-responsive-bs/js/responsive.bootstrap',
        'jquery': '../lib/jquery/dist/jquery.min'
    },

    shim: {
        underscore: {
            exports: '_'
        },

        backbone: {
            exports: 'Backbone',
            deps: ['jquery', 'underscore']
        },

        marionette: {
            exports: 'Backbone.Marionette',
            deps: ['backbone']
        },

        bootstrap: {
            deps: ['jquery']
        }

    },
    urlArgs: 'v=' + VERSION,
    waitSeconds: 60
});