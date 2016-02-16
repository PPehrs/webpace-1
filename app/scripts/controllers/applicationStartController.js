define([
	'backbone',
	'backbone.marionette',
	'application',
	'../views/layout/homeLayout'
],
function( Backbone, Marionette, App, HomeLayout ) {
    'use strict';

	return Backbone.Marionette.Controller.extend({

		initialize: function( options ) {

		},

        start: function() {
            console.log("start a Controller");
        },

        showHome: function() {
			console.log("home");
			App.mainRegion.show(new HomeLayout());
        },

		notFound: function() {
			console.log("home");
			App.mainRegion.show(new HomeLayout());
		}
	});

});
