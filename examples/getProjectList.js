var Backlogger = require('../');

var backlogger = new Backlogger(process.argv[2], process.argv[3]);

backlogger
	.getProjectList().then(function(ret) {
		console.log(ret);
	});
