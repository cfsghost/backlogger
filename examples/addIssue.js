var Backlogger = require('../');

var backlogger = new Backlogger(process.argv[2], process.argv[3]);

backlogger
	.addIssue({
		params: {
			projectId: process.argv[4],
			summary: process.argv[5],
			issueTypeId: process.argv[6],
			categoryId: [
				10891
			],
			priorityId: 3
		}
	})
	.then(function(ret) {
		console.log(ret);
	});
