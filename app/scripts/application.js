define([
	'backbone',
	'communicator'
],

function( Backbone, Communicator ) {
    'use strict';

	var App = new Backbone.Marionette.Application();

	/* Add application regions here */
	App.addRegions({
		mainRegion: "#webpace"
	});

	return App;
});
