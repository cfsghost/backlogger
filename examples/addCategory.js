var Backlogger = require('../');

var backlogger = new Backlogger(process.argv[2], process.argv[3]);

backlogger
	.addCategory({
		projectIdOrKey: process.argv[4],
		params: {
			name: process.argv[5]
		}
	})
	.then(function(ret) {
		console.log(ret);
	});
