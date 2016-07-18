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
```

Supported APIs
-
* getIssuesList
* getUserList
* getProjectList


License
-
Licensed under the MIT License

Authors
-
Copyright(c) 2016 Fred Chien <<cfsghost@gmail.com>>
