var Backlogger = require('../');

var backlogger = new Backlogger(process.argv[2], process.argv[3]);

backlogger
	.getCategoryList({
		projectIdOrKey: process.argv[4]
	})
	.then(function(ret) {
		console.log(ret);
	});
