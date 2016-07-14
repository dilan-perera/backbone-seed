
'use strict';

require.config({
    baseUrl: '../app',
    paths: {
        'domReady': '../lib/requirejs-domready/domReady',
        'text': '../lib/requirejs-text/text',
        'i18n': '../lib/requirejs-i18n/i18n',
        'underscore': '../lib/underscore/underscore-min',
        'backbone': '../lib/backbone/backbone-min',
        'backbone.nested-model': '../lib/backbone-nested-model/backbone-nested',
        'backbone.brace': '../lib/backbone-brace-nytimes-cms/dist/backbone.brace.min',
        'backbone.babysitter': '../lib/backbone.babysitter/lib/backbone.babysitter.min',
        'backbone.localStorage': '../lib/backbone.localStorage/backbone.localStorage-min',
        'backbone.marionette': '../lib/backbone.marionette/lib/backbone.marionette.min',
        'backbone.radio': '../lib/backbone.radio/build/backbone.radio.min',
        'backbone.radio-shim': '../scripts/radio.shim',
        'backbone.stickit': '../lib/backbone.stickit/backbone.stickit',
        'localforage': '../lib/localforage/dist/localforage.min',
        'localforage-backbone': '../lib/localforage-backbone/dist/localforage.backbone.min',
        'backbone-validation': '../lib/backbone-validation/dist/backbone-validation-amd-min',
        'bootstrap': '../lib/bootstrap/dist/js/bootstrap.min',
        'bootstrap-material-design': '../lib/bootstrap-material-design/dist/js/material.min',
        'datatables.net': '../lib/datatables-net/js/jquery.dataTables.min',
        'datatables.net-bs': '../lib/datatables.net-bs/js/dataTables.bootstrap.min',
        'datatables.net-responsive': '../lib/datatables.net-responsive/js/dataTables.responsive.min',
        'datatables.net-responsive-bs': '../lib/datatables.net-responsive-bs/js/responsive.bootstrap',
        'toastr': '../lib/toastr/toastr.min',
        'jquery': '../lib/jquery/dist/jquery.min',
        'jquery-extensions': '../scripts/extensions-jquery'
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