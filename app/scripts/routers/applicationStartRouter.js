define([
	'backbone',
	'backbone.marionette',
	'application'
],
function(Backbone, Marionette, App){
    'use strict';

	return Backbone.Marionette.AppRouter.extend({
		/* Backbone routes hash */
		appRoutes: {
      		'': 'showHome',
			'*notFound': 'notFound',
			':notFound': 'notFound',
			'/*notFound': 'notFound',
			'!/*notFound': 'notFound'
    	},

		routes: {
		}
	});
});


