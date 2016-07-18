var Backlogger = require('../');

var backlogger = new Backlogger(process.argv[2], process.argv[3]);

backlogger
	.getProjectList().then(function(ret) {
		if (!ret.length)
			return;

		backlogger
			.getProject({
				projectIdOrKey: ret[0].id
			})
			.then(function(ret) {
				console.log(ret);
			});
	});
