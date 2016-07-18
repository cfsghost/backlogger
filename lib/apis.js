module.exports = {
	getIssueList: { path: 'issues', method: 'get' },
	getUserList: { path: 'users', method: 'get' },
	getProjectList: { path: 'projects', method: 'get' },
	getProject: { path: 'projects/:projectIdOrKey', method: 'get' },
	getCategoryList: { path: 'projects/:projectIdOrKey/categories', method: 'get' },
	addCategory: { path: 'projects/:projectIdOrKey/categories', method: 'post' },
	getIssueTypeList: { path: 'projects/:projectIdOrKey/issueTypes', method: 'get' },
};
