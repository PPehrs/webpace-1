require([
	'backbone',
	'application',
	'communicator',
	'./controllers/applicationStartController',
	'./routers/applicationStartRouter'
],
function ( Backbone, App, Communicator, AppStartController, AppStartRouter  ) {
    'use strict';

	var controller = new AppStartController({});

	/* Add initializers here */
	App.addInitializer( function () {
		// initialize the router
		var router = new AppStartRouter({
			controller: controller
		});

		Communicator.mediator.trigger("APP:START");
	});


	App.on("start", function(){
		// Start Backbone history a necessary step for bookmarkable URL's
		Backbone.history.start();
	});

	App.start();
});
