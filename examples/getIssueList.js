var Backloger = require('../');

var backloger = new Backloger(process.argv[2], process.argv[3]);

backloger
	.getIssueList().then(function(ret) {
		console.log(ret);
	});