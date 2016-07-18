# backlogger
Backlog API in Node.js

Installation
-

Installing via NPM command:
```bash
npm install backlogger
```

Usage
-

```js
var Backlogger = require('backlogger');

// Initializing with your domain and api key
var backlogger = Backlogger('yourDomain', 'yourApiKey');

// Using all of APIs supported right now
backlogger.getUserList().then(function(users) {
    console.log(users);
});

// Using API with URL parameters (please read Backlog official API documentation)
// Documentation: http://developer.nulab-inc.com/docs/backlog/api/2/get-project
// Example: /api/v2/projects/:projectIdOrKey
// projectIdOrKey is the URL parameter supported by API
backlogger
	.getProject({
		projectIdOrKey: 123
	})
	.then(function(project) {
		console.log(project);
	});

```

Supported APIs
-
* getIssuesList
* getUserList
* getProjectList
* getProject
* getCategoryList
* addCategory
* getIssueTypeList

License
-
Licensed under the MIT License

Authors
-
Copyright(c) 2016 Fred Chien <<cfsghost@gmail.com>>
