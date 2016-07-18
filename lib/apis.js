module.exports = {
	getUserList: { path: 'users', method: 'get' },
	getIssueList: { path: 'issues', method: 'get' },
	addIssue: { path: 'issues', method: 'post' },
	getPriorityList: { path: 'priorities', method: 'get' },
	getProjectList: { path: 'projects', method: 'get' },
	getProject: { path: 'projects/:projectIdOrKey', method: 'get' },
	getCategoryList: { path: 'projects/:projectIdOrKey/categories', method: 'get' },
	addCategory: { path: 'projects/:projectIdOrKey/categories', method: 'post' },
	getIssueTypeList: { path: 'projects/:projectIdOrKey/issueTypes', method: 'get' },
};
